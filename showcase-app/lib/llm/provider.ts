// ============================================================================
// SIRAJ — LLM Provider Abstraction
// ----------------------------------------------------------------------------
// Single entry point: askTutor(systemPrompt, messages, opts) → ReadableStream
//
// CURRENT PROVIDER: Google Gemini free tier (Google AI Studio)
//   Model: gemini-2.0-flash (free, rate-limited)
//   API: REST + SSE streaming (no SDK dependency)
//
// ▸ GO/NO-GO SWAP (Anthropic Sonnet 4.6):
//   Replace ONLY the body of askTutor() with Anthropic's streaming API.
//   The route (app/api/tutor/route.ts) and the client (ChatTuteurLive.tsx)
//   do NOT change — they consume the same ReadableStream interface.
//   Environment variable to change: GEMINI_API_KEY → ANTHROPIC_API_KEY
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

/**
 * The Gemini model to use. Must be a free-tier eligible model.
 * Check https://ai.google.dev/pricing for current free models.
 */
const LLM_MODEL = "gemini-2.0-flash";

/** Base URL for Google AI Studio REST API. */
const GEMINI_API_BASE = "https://generativelanguage.googleapis.com/v1beta";

// ---------------------------------------------------------------------------
// Provider Implementation
// ---------------------------------------------------------------------------

/**
 * Sends a conversation to the LLM and returns a ReadableStream of text chunks.
 *
 * The stream emits plain text strings (decoded from SSE). The caller is
 * responsible for forwarding these chunks to the client.
 *
 * @throws {RateLimitError} if the API returns 429 or 503 (quota exceeded)
 * @throws {Error} for any other API or network failure
 */
export async function askTutor(
  systemPrompt: string,
  messages: TutorMessage[],
  opts: AskTutorOptions = {}
): Promise<ReadableStream<string>> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error(
      "GEMINI_API_KEY is not set. Add it to your environment variables."
    );
  }

  const { maxTokens = 512, temperature = 0.7 } = opts;

  // Build the Gemini request body
  // Gemini uses "contents" array with role "user" / "model"
  // and "systemInstruction" for the system prompt.
  const body = {
    systemInstruction: {
      parts: [{ text: systemPrompt }],
    },
    contents: messages.map((msg) => ({
      role: msg.role,
      parts: [{ text: msg.content }],
    })),
    generationConfig: {
      maxOutputTokens: maxTokens,
      temperature,
    },
  };

  const url = `${GEMINI_API_BASE}/models/${LLM_MODEL}:streamGenerateContent?alt=sse&key=${apiKey}`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  // Handle rate-limit / quota errors gracefully
  if (response.status === 429 || response.status === 503) {
    throw new RateLimitError(
      `Gemini API rate limited (${response.status}). Free tier quota exceeded.`
    );
  }

  if (!response.ok) {
    const errorText = await response.text().catch(() => "Unknown error");
    throw new Error(
      `Gemini API error ${response.status}: ${errorText.slice(0, 200)}`
    );
  }

  if (!response.body) {
    throw new Error("Gemini API returned no response body.");
  }

  // Transform the SSE stream into a stream of plain text chunks.
  // Gemini SSE format: each event is `data: { ... JSON ... }\n\n`
  // We extract candidates[0].content.parts[0].text from each event.
  return parseGeminiSSE(response.body);
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
 * Parses a Gemini SSE stream and emits plain text chunks.
 * Each SSE event looks like:
 *   data: {"candidates":[{"content":{"parts":[{"text":"..."}]}}]}
 */
function parseGeminiSSE(
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

          // Process complete SSE events (separated by double newlines)
          const events = buffer.split("\n\n");
          // Keep the last incomplete chunk in the buffer
          buffer = events.pop() || "";

          for (const event of events) {
            const textChunk = extractTextFromSSEEvent(event);
            if (textChunk) {
              controller.enqueue(textChunk);
            }
          }
        }

        // Process any remaining buffer
        if (buffer.trim()) {
          const textChunk = extractTextFromSSEEvent(buffer);
          if (textChunk) {
            controller.enqueue(textChunk);
          }
        }

        controller.close();
      } catch (err) {
        controller.error(err);
      }
    },
  });
}

/**
 * Extracts the text content from a single SSE event string.
 * Returns null if no text could be extracted.
 */
function extractTextFromSSEEvent(event: string): string | null {
  // Find the "data: " prefix
  const lines = event.split("\n");
  for (const line of lines) {
    if (line.startsWith("data: ")) {
      const jsonStr = line.slice(6); // Remove "data: " prefix
      try {
        const parsed = JSON.parse(jsonStr);
        const text = parsed?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (typeof text === "string") {
          return text;
        }
      } catch {
        // Malformed JSON — skip this event
      }
    }
  }
  return null;
}
