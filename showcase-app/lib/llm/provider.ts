// ============================================================================
// SIRAJ — LLM Provider Abstraction
// ----------------------------------------------------------------------------
// Single entry point: askTutor(systemPrompt, messages, opts) → ReadableStream
//
// CURRENT PROVIDER: OpenRouter (Free models)
//   Primary Model: google/gemini-2.0-flash-lite:free
//   Fallback Model: meta-llama/llama-3-8b-instruct:free
//   API: REST + SSE streaming (OpenAI compatible)
//
// Conforme §14.4.6 : free tier strict, aucun crédit IA acheté.
// ============================================================================

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** A single message in the conversation history. */
export interface TutorMessage {
  role: "user" | "model";
  content: string;
}

/** Options for the askTutor call. */
export interface AskTutorOptions {
  maxTokens?: number;
  temperature?: number;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

/** Primary free-tier model on OpenRouter */
const LLM_MODEL = "google/gemini-2.0-flash-lite:free";

/** Fallback free-tier model on OpenRouter if the primary is rate-limited */
const LLM_FALLBACK_MODEL = "meta-llama/llama-3-8b-instruct:free";

/** Base URL for OpenRouter API. */
const OPENROUTER_API_BASE = "https://openrouter.ai/api/v1";

// ---------------------------------------------------------------------------
// Provider Implementation
// ---------------------------------------------------------------------------

/**
 * Sends a conversation to the LLM and returns a ReadableStream of text chunks.
 *
 * The stream emits plain text strings (decoded from SSE). The caller is
 * responsible for forwarding these chunks to the client.
 *
 * If the primary model is rate-limited (429/503), retries once with
 * the fallback model before throwing RateLimitError.
 *
 * @throws {RateLimitError} if both primary and fallback models are rate-limited
 * @throws {Error} for any other API or network failure
 */
export async function askTutor(
  systemPrompt: string,
  messages: TutorMessage[],
  opts: AskTutorOptions = {}
): Promise<ReadableStream<string>> {
  const apiKey = process.env.OPENROUTER_API_KEY || process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error(
      "OPENROUTER_API_KEY or GEMINI_API_KEY is not set. Add it to your environment variables."
    );
  }

  // Try primary model first, then fallback
  const modelsToTry = [LLM_MODEL, LLM_FALLBACK_MODEL];

  for (const model of modelsToTry) {
    try {
      const stream = await callOpenRouter(model, apiKey, systemPrompt, messages, opts);
      return stream;
    } catch (err) {
      if (err instanceof RateLimitError && model === LLM_MODEL) {
        // Primary model rate-limited → try fallback
        console.warn(`[SIRAJ Provider] ${model} rate-limited, trying fallback ${LLM_FALLBACK_MODEL}...`);
        continue;
      }
      throw err; // Re-throw if fallback also fails or non-rate-limit error
    }
  }

  // Should never reach here, but TypeScript needs it
  throw new RateLimitError("All models rate-limited.");
}

/**
 * Makes the actual API call to a specific OpenRouter model.
 */
async function callOpenRouter(
  model: string,
  apiKey: string,
  systemPrompt: string,
  messages: TutorMessage[],
  opts: AskTutorOptions
): Promise<ReadableStream<string>> {
  const { maxTokens = 512, temperature = 0.7 } = opts;

  // Map messages to OpenAI / OpenRouter format
  const mappedMessages = [
    { role: "system", content: systemPrompt },
    ...messages.map((msg) => ({
      role: msg.role === "model" ? "assistant" : "user",
      content: msg.content,
    })),
  ];

  const body = {
    model,
    messages: mappedMessages,
    temperature,
    max_tokens: maxTokens,
    stream: true,
  };

  const url = `${OPENROUTER_API_BASE}/chat/completions`;

  console.log(`[SIRAJ Provider] Calling OpenRouter model=${model}, messages=${mappedMessages.length}`);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
      "HTTP-Referer": "https://siraj-three.vercel.app",
      "X-Title": "SIRAJ",
    },
    body: JSON.stringify(body),
  });

  // Handle rate-limit / quota errors
  if (response.status === 429 || response.status === 503) {
    const errorBody = await response.text().catch(() => "(no body)");
    console.warn(
      `[SIRAJ Provider] OpenRouter ${model} → ${response.status}: ${errorBody.slice(0, 300)}`
    );
    throw new RateLimitError(
      `OpenRouter API rate limited (${response.status}) on model ${model}. Body: ${errorBody.slice(0, 200)}`
    );
  }

  if (!response.ok) {
    const errorText = await response.text().catch(() => "Unknown error");
    console.error(
      `[SIRAJ Provider] OpenRouter ${model} → ${response.status}: ${errorText.slice(0, 300)}`
    );
    throw new Error(
      `OpenRouter API error ${response.status} on model ${model}: ${errorText.slice(0, 200)}`
    );
  }

  if (!response.body) {
    throw new Error("OpenRouter API returned no response body.");
  }

  return parseOpenRouterSSE(response.body);
}

// ---------------------------------------------------------------------------
// Custom Error
// ---------------------------------------------------------------------------

export class RateLimitError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "RateLimitError";
  }
}

// ---------------------------------------------------------------------------
// SSE Parser
// ---------------------------------------------------------------------------

/**
 * Parses an OpenRouter SSE stream (standard OpenAI delta stream) and emits text chunks.
 */
function parseOpenRouterSSE(
  body: ReadableStream<Uint8Array>
): ReadableStream<string> {
  const decoder = new TextDecoder();
  let buffer = "";

  return new ReadableStream<string>({
    async start(controller) {
      const reader = body.getReader();

      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });

          // Process lines
          const lines = buffer.split("\n");
          // Keep the last incomplete line in the buffer
          buffer = lines.pop() || "";

          for (const line of lines) {
            const cleanLine = line.trim();
            if (!cleanLine) continue;

            if (cleanLine.startsWith("data: ")) {
              const jsonStr = cleanLine.slice(6).trim();
              if (jsonStr === "[DONE]") {
                continue;
              }
              try {
                const parsed = JSON.parse(jsonStr);
                const text = parsed?.choices?.[0]?.delta?.content;
                if (typeof text === "string" && text) {
                  controller.enqueue(text);
                }
              } catch {
                // Malformed JSON — skip this event
              }
            }
          }
        }

        // Process any remaining buffer
        if (buffer.trim()) {
          const cleanLine = buffer.trim();
          if (cleanLine.startsWith("data: ")) {
            const jsonStr = cleanLine.slice(6).trim();
            if (jsonStr !== "[DONE]") {
              try {
                const parsed = JSON.parse(jsonStr);
                const text = parsed?.choices?.[0]?.delta?.content;
                if (typeof text === "string" && text) {
                  controller.enqueue(text);
                }
              } catch {
                // Ignore
              }
            }
          }
        }

        controller.close();
      } catch (err) {
        controller.error(err);
      }
    },
  });
}

