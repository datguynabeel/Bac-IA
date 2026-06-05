// ============================================================================
// SIRAJ — Tutor API Route (POST /api/tutor)
// ----------------------------------------------------------------------------
// Server-side route that bridges the client chat UI to the LLM provider.
// Receives conversation history, injects SYSTEM_PROMPT, streams the response.
//
// Node.js runtime (default) for reliable env var access on Vercel Hobby.
// Graceful rate-limit handling: returns a friendly tutor message instead of
// crashing the UI when the free-tier quota is hit.
//
// Conforme §14.4.6 : free tier strict, aucune facturation.
// ============================================================================

import { NextRequest } from "next/server";
import { askTutor, RateLimitError, type TutorMessage } from "@/lib/llm/provider";
import { SYSTEM_PROMPT } from "@/lib/llm/system-prompt";

// Using default Node.js runtime (not edge) for reliable process.env access.
// export const runtime = "edge";

// Rate-limit fallback message — displayed as a tutor bubble, not an error
const RATE_LIMIT_MESSAGE =
  "Laisse-moi une seconde, on reprend 😊 (Le tuteur est temporairement indisponible, réessaie dans quelques instants.)";

/**
 * POST /api/tutor
 *
 * Body: { messages: Array<{ role: "user" | "model"; content: string }> }
 * Response: text/event-stream with plain text chunks
 */
export async function POST(request: NextRequest) {
  // Diagnostic: confirm env var is loaded (log only first 8 chars)
  const keyPreview = process.env.GEMINI_API_KEY
    ? `${process.env.GEMINI_API_KEY.slice(0, 8)}...`
    : "NOT SET";
  console.log(`[SIRAJ Tutor] GEMINI_API_KEY: ${keyPreview}`);

  try {
    // ── Parse request ──────────────────────────────────────────────────
    const body = await request.json();
    const messages: TutorMessage[] = body?.messages;

    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(
        JSON.stringify({ error: "messages array is required and must not be empty." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Basic validation: ensure roles are valid
    for (const msg of messages) {
      if (msg.role !== "user" && msg.role !== "model") {
        return new Response(
          JSON.stringify({ error: `Invalid role "${msg.role}". Must be "user" or "model".` }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }
      if (typeof msg.content !== "string" || msg.content.trim().length === 0) {
        return new Response(
          JSON.stringify({ error: "Each message must have non-empty string content." }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }
    }

    // ── Call LLM provider ──────────────────────────────────────────────
    const stream = await askTutor(SYSTEM_PROMPT, messages, {
      maxTokens: 512,
      temperature: 0.7,
    });

    // ── Stream response to client ──────────────────────────────────────
    // Encode the text stream as UTF-8 bytes for the Response
    const encoder = new TextEncoder();
    const encodedStream = new ReadableStream({
      async start(controller) {
        const reader = stream.getReader();
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            controller.enqueue(encoder.encode(value));
          }
          controller.close();
        } catch (err) {
          controller.error(err);
        }
      },
    });

    return new Response(encodedStream, {
      status: 200,
      headers: {
        "Content-Type": "text/event-stream; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (err: unknown) {
    // ── Graceful rate-limit handling ────────────────────────────────────
    if (err instanceof RateLimitError) {
      console.warn("[SIRAJ Tutor] Rate limit hit:", err.message);
      // Return a friendly tutor message with 200 so the UI doesn't break
      return new Response(RATE_LIMIT_MESSAGE, {
        status: 200,
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      });
    }

    // ── Generic error handling ──────────────────────────────────────────
    console.error("[SIRAJ Tutor] Error:", err);
    const message =
      err instanceof Error ? err.message : "Une erreur interne est survenue.";
    return new Response(
      JSON.stringify({ error: message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
