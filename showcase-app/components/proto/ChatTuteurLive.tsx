"use client";

// ============================================================================
// SIRAJ — ChatTuteurLive Component
// ----------------------------------------------------------------------------
// Live chat interface connected to the SIRAJ tutor LLM via /api/tutor.
// Replaces the scripted dialogue with real-time AI tutoring.
//
// Reuses existing atomic components: MessageBubble, TypingIndicator, KatexInline.
// Conversation state is in-memory only (useState) — no persistence.
//
// Conforme §14.2.9.g : anti-distributeur (enforced by SYSTEM_PROMPT server-side)
// Conforme §14.6.5 : composant atomique réutilisable, design system intact.
// ============================================================================

import React, { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Send, Sparkles } from "lucide-react";
import MessageBubble, { TypingIndicator } from "./MessageBubble";
import KatexInline from "./KatexInline";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** Metadata about the current session, passed from the page. */
interface SeanceInfo {
  chapitreTitle: string;
  seanceTitle: string;
  seanceNumber: number;
  totalSeances: number;
}

/** A chat message displayed in the UI. */
interface ChatMessage {
  id: string;
  role: "tuteur" | "eleve";
  type: "text";
  content: string;
}

/** Shape expected by MessageBubble (matches existing SeanceMessage interface). */
type BubbleMessage = {
  id: string;
  role: "tuteur" | "eleve";
  type: "text";
  content: string;
};

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

/** Opening message from the tutor — starts the Limites & Continuité session. */
const WELCOME_MESSAGE: ChatMessage = {
  id: "welcome",
  role: "tuteur",
  type: "text",
  content:
    "Salam ! 👋 Bienvenue dans ta séance sur les Limites & Continuité. On va travailler ensemble, étape par étape.\n\nDis-moi, est-ce que tu as déjà vu la notion de limite d'une fonction en un point, ou c'est tout nouveau pour toi ?",
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function ChatTuteurLive({ seanceInfo }: { seanceInfo: SeanceInfo }) {
  // ── State ──────────────────────────────────────────────────────────────
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [streamingContent, setStreamingContent] = useState("");

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const messageIdCounter = useRef(1);

  // ── Auto-scroll ────────────────────────────────────────────────────────
  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      setTimeout(() => {
        scrollRef.current?.scrollTo({
          top: scrollRef.current.scrollHeight,
          behavior: "smooth",
        });
      }, 50);
    }
  }, []);

  // Scroll on new messages or streaming updates
  useEffect(() => {
    scrollToBottom();
  }, [messages, streamingContent, scrollToBottom]);

  // ── Send message ───────────────────────────────────────────────────────
  const handleSend = useCallback(async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    // Add student message
    const studentMsg: ChatMessage = {
      id: `msg-${messageIdCounter.current++}`,
      role: "eleve",
      type: "text",
      content: trimmed,
    };

    const updatedMessages = [...messages, studentMsg];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);
    setStreamingContent("");

    // Build the API payload — convert to user/model roles
    const apiMessages = updatedMessages.map((msg) => ({
      role: msg.role === "eleve" ? "user" as const : "model" as const,
      content: msg.content,
    }));

    try {
      const response = await fetch("/api/tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      // Read the streaming response
      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error("No response body");
      }

      const decoder = new TextDecoder();
      let accumulated = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        accumulated += chunk;
        setStreamingContent(accumulated);
      }

      // Finalize: add the complete tutor message
      const tutorMsg: ChatMessage = {
        id: `msg-${messageIdCounter.current++}`,
        role: "tuteur",
        type: "text",
        content: accumulated || "Je suis là, repose ta question 😊",
      };

      setMessages((prev) => [...prev, tutorMsg]);
      setStreamingContent("");
    } catch (err) {
      console.error("[ChatTuteurLive] Error:", err);

      // Graceful fallback — show a friendly error as a tutor message
      const errorMsg: ChatMessage = {
        id: `msg-${messageIdCounter.current++}`,
        role: "tuteur",
        type: "text",
        content:
          "Laisse-moi une seconde, on reprend 😊 Réessaie dans quelques instants.",
      };
      setMessages((prev) => [...prev, errorMsg]);
      setStreamingContent("");
    } finally {
      setIsLoading(false);
      // Refocus input
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [input, isLoading, messages]);

  // Handle Enter key
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend]
  );

  // ── Render ─────────────────────────────────────────────────────────────
  return (
    <div className="flex flex-col h-full">
      {/* Header Bar */}
      <div
        className="shrink-0 px-4 py-3 flex items-center gap-3"
        style={{
          background: "rgba(15, 20, 25, 0.95)",
          borderBottom: "1px solid rgba(232, 184, 96, 0.1)",
          backdropFilter: "blur(20px)",
        }}
      >
        {/* Back button */}
        <button
          className="p-1.5 rounded-lg transition-colors"
          style={{ color: "#E8B860" }}
          aria-label="Retour"
        >
          <ArrowRight size={18} className="rotate-180" />
        </button>

        {/* Session info */}
        <div className="flex-1 min-w-0">
          <h1
            className="text-sm font-semibold truncate"
            style={{ color: "#F5EDE0" }}
          >
            {seanceInfo.chapitreTitle}
          </h1>
          <p
            className="text-xs truncate"
            style={{ color: "rgba(245, 237, 224, 0.5)" }}
          >
            Séance {seanceInfo.seanceNumber}/{seanceInfo.totalSeances} —{" "}
            {seanceInfo.seanceTitle}
          </p>
        </div>

        {/* Live badge */}
        <div
          className="shrink-0 px-2.5 py-1 rounded-full text-xs font-medium flex items-center gap-1.5"
          style={{
            background: "rgba(34, 197, 94, 0.1)",
            color: "#22c55e",
            border: "1px solid rgba(34, 197, 94, 0.2)",
          }}
        >
          <span
            className="block w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: "#22c55e" }}
          />
          Tuteur Live
        </div>
      </div>

      {/* Chat Messages Area */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-4 py-4"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(232, 184, 96, 0.15) transparent",
        }}
      >
        {/* Rendered messages */}
        <AnimatePresence mode="popLayout">
          {messages.map((msg, index) => (
            <MessageBubble
              key={msg.id}
              message={msg as BubbleMessage}
              index={index}
            />
          ))}
        </AnimatePresence>

        {/* Streaming response (in-progress tutor message) */}
        <AnimatePresence>
          {isLoading && streamingContent && (
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="flex items-end gap-2 mb-4"
            >
              {/* Avatar */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden ring-1 ring-[#E8B860]/30 shadow-lg shadow-[#E8B860]/10">
                <img
                  src="/brand/siraj-app-icon-6a.png"
                  alt="Tuteur SIRAJ"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Streaming bubble */}
              <div
                className="max-w-[85%] sm:max-w-[75%] px-4 py-3 rounded-2xl rounded-bl-sm"
                style={{
                  background: "rgba(232, 184, 96, 0.08)",
                  border: "1px solid rgba(232, 184, 96, 0.12)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                }}
              >
                <span
                  className="block text-xs font-medium mb-1 opacity-60"
                  style={{ color: "#E8B860" }}
                >
                  Tuteur SIRAJ
                </span>
                <div
                  className="text-sm sm:text-[15px] leading-relaxed"
                  style={{ color: "#F5EDE0" }}
                >
                  {streamingContent.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {i > 0 && <br />}
                      <KatexInline text={line} />
                    </React.Fragment>
                  ))}
                  {/* Blinking cursor */}
                  <span
                    className="inline-block w-0.5 h-4 ml-0.5 animate-pulse"
                    style={{ backgroundColor: "#E8B860", verticalAlign: "text-bottom" }}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Typing indicator (before first chunk arrives) */}
        <AnimatePresence>
          {isLoading && !streamingContent && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
            >
              <TypingIndicator />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input Bar */}
      <div
        className="shrink-0 px-4 py-3"
        style={{
          background: "rgba(15, 20, 25, 0.95)",
          borderTop: "1px solid rgba(232, 184, 96, 0.08)",
          backdropFilter: "blur(20px)",
        }}
      >
        <div
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl"
          style={{
            background: "rgba(232, 184, 96, 0.06)",
            border: "1px solid rgba(232, 184, 96, 0.12)",
          }}
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Écris ta réponse…"
            disabled={isLoading}
            className="flex-1 bg-transparent outline-none text-sm sm:text-[15px] placeholder:opacity-40"
            style={{
              color: "#F5EDE0",
              caretColor: "#E8B860",
            }}
            aria-label="Écrire un message au tuteur"
            id="tutor-chat-input"
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="p-2 rounded-lg transition-all disabled:opacity-30"
            style={{
              background: input.trim()
                ? "rgba(232, 184, 96, 0.2)"
                : "transparent",
              color: "#E8B860",
            }}
            aria-label="Envoyer le message"
            id="tutor-send-button"
          >
            <Send size={18} />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
