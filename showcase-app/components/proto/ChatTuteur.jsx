"use client";

// ============================================================================
// SIRAJ — ChatTuteur Orchestrator Component
// ----------------------------------------------------------------------------
// Manages the scripted dialogue flow: typing indicators, message reveals,
// student response buttons, MCQ insertion, and final CTA.
// Conforme §14.6.4 : aucun appel API, tout scripté.
// Conforme §14.6.5 v1.8.5 : composant atomique réutilisable.
// ============================================================================

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import MessageBubble, { TypingIndicator } from "./MessageBubble";
import MiniExerciceMCQ from "./MiniExerciceMCQ";
import KatexInline from "./KatexInline";

export default function ChatTuteur({ seanceData }) {
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [mcqAnswered, setMcqAnswered] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackType, setFeedbackType] = useState(null); // "correct" | "incorrect"
  const [showCTA, setShowCTA] = useState(false);
  const scrollRef = useRef(null);

  const messages = seanceData.messages;

  // Auto-scroll to bottom
  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      setTimeout(() => {
        scrollRef.current?.scrollTo({
          top: scrollRef.current.scrollHeight,
          behavior: "smooth",
        });
      }, 100);
    }
  }, []);

  const processedRef = useRef(new Set());

  // Unified dialogue driver: processes one step at a time
  useEffect(() => {
    if (currentStep >= messages.length) return;
    if (processedRef.current.has(currentStep)) return;

    const msg = messages[currentStep];

    // Tuteur messages (text or MCQ) auto-reveal with typing delay
    if (msg.role === "tuteur") {
      processedRef.current.add(currentStep);
      setIsTyping(true);

      const delay = currentStep === 0 ? msg.delayMs + 400 : msg.delayMs + 800;
      const timer = setTimeout(() => {
        setIsTyping(false);
        if (currentStep === 0) {
          setVisibleMessages([msg]);
        } else {
          setVisibleMessages((prev) => [...prev, msg]);
        }
        setCurrentStep((s) => s + 1);
        scrollToBottom();
      }, delay);

      return () => clearTimeout(timer);
    }
    // Eleve messages wait for button click — handled by handleStudentResponse
  }, [currentStep]);

  // Handle student response button click
  const handleStudentResponse = () => {
    const currentMsg = messages[currentStep];
    if (!currentMsg || currentMsg.role !== "eleve") return;

    // Show student message
    setVisibleMessages((prev) => [...prev, currentMsg]);
    setCurrentStep((s) => s + 1);
    scrollToBottom();
  };

  // Handle MCQ correct answer
  const handleMCQCorrect = () => {
    setMcqAnswered(true);
    setFeedbackType("correct");

    setTimeout(() => {
      setShowFeedback(true);
      scrollToBottom();

      setTimeout(() => {
        setShowCTA(true);
        scrollToBottom();
      }, 800);
    }, 600);
  };

  // Handle MCQ incorrect answer
  const handleMCQIncorrect = () => {
    setMcqAnswered(true);
    setFeedbackType("incorrect");

    setTimeout(() => {
      setShowFeedback(true);
      scrollToBottom();
    }, 600);
  };

  // Check if current step is a student response
  const currentMsg = messages[currentStep];
  const isStudentTurn =
    currentMsg && currentMsg.role === "eleve" && !isTyping;
  const isMCQStep = currentMsg && currentMsg.type === "mcq" && !isTyping;

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
        {/* Back button placeholder */}
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
            {seanceData.chapitreTitle}
          </h1>
          <p
            className="text-xs truncate"
            style={{ color: "rgba(245, 237, 224, 0.5)" }}
          >
            Séance {seanceData.seanceNumber}/{seanceData.totalSeances} —{" "}
            {seanceData.seanceTitle}
          </p>
        </div>

        {/* Progress badge */}
        <div
          className="shrink-0 px-2.5 py-1 rounded-full text-xs font-medium"
          style={{
            background: "rgba(232, 184, 96, 0.1)",
            color: "#E8B860",
            border: "1px solid rgba(232, 184, 96, 0.15)",
          }}
        >
          <Sparkles size={12} className="inline mr-1" />
          En cours
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
        {/* Visible messages */}
        <AnimatePresence mode="popLayout">
          {visibleMessages.map((msg, index) => {
            // MCQ message renders differently
            if (msg.type === "mcq" && msg.mcq) {
              return (
                <MiniExerciceMCQ
                  key={msg.id}
                  question={msg.mcq.question}
                  choices={msg.mcq.choices}
                  onCorrect={handleMCQCorrect}
                  onIncorrect={handleMCQIncorrect}
                />
              );
            }

            return (
              <MessageBubble key={msg.id} message={msg} index={index} />
            );
          })}
        </AnimatePresence>

        {/* Typing indicator */}
        <AnimatePresence>
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
            >
              <TypingIndicator />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Feedback message after MCQ */}
        <AnimatePresence>
          {showFeedback && (
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="flex items-end gap-2 mb-4"
            >
              {/* Avatar */}
              <div
                className="shrink-0 flex items-center justify-center rounded-full"
                style={{
                  width: 36,
                  height: 36,
                  background:
                    "linear-gradient(135deg, #E8B860 0%, #D4A24A 100%)",
                  boxShadow: "0 0 16px rgba(232, 184, 96, 0.3)",
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2C12 2 8 6 8 10C8 12.21 9.79 14 12 14C14.21 14 16 12.21 16 10C16 6 12 2 12 2Z"
                    fill="#0F1419"
                    stroke="#0F1419"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M10 14V17H14V14"
                    stroke="#0F1419"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M9 17H15"
                    stroke="#0F1419"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10 20H14"
                    stroke="#0F1419"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Feedback bubble */}
              <div
                className="max-w-[85%] sm:max-w-[75%] px-4 py-3 rounded-2xl rounded-bl-sm"
                style={{
                  background:
                    feedbackType === "correct"
                      ? "rgba(34, 197, 94, 0.08)"
                      : "rgba(239, 68, 68, 0.08)",
                  border: `1px solid ${
                    feedbackType === "correct"
                      ? "rgba(34, 197, 94, 0.2)"
                      : "rgba(239, 68, 68, 0.2)"
                  }`,
                  backdropFilter: "blur(20px)",
                }}
              >
                <span
                  className="block text-xs font-medium mb-1"
                  style={{
                    color:
                      feedbackType === "correct" ? "#22c55e" : "#ef4444",
                    opacity: 0.7,
                  }}
                >
                  {feedbackType === "correct"
                    ? "✨ Tuteur SIRAJ"
                    : "Tuteur SIRAJ"}
                </span>
                <div
                  className="text-sm sm:text-[15px] leading-relaxed"
                  style={{ color: "#F5EDE0" }}
                >
                  <KatexInline
                    text={
                      feedbackType === "correct"
                        ? seanceData.feedbackCorrect
                        : seanceData.feedbackIncorrect
                    }
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Button */}
        <AnimatePresence>
          {showCTA && feedbackType === "correct" && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className="flex justify-center mt-6 mb-8"
            >
              <a
                href={`/proto/seance/${seanceData.slug}/fin`}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all"
                style={{
                  background:
                    "linear-gradient(135deg, #E8B860 0%, #D4A24A 100%)",
                  color: "#0F1419",
                  boxShadow:
                    "0 4px 20px rgba(232, 184, 96, 0.3), 0 0 40px rgba(232, 184, 96, 0.1)",
                }}
              >
                Continuer ma séance
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Action Bar — Student response buttons */}
      <AnimatePresence>
        {isStudentTurn && !isMCQStep && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className="shrink-0 px-4 py-3"
            style={{
              background: "rgba(15, 20, 25, 0.95)",
              borderTop: "1px solid rgba(232, 184, 96, 0.08)",
              backdropFilter: "blur(20px)",
            }}
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleStudentResponse}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[#E8B860]/40"
              style={{
                background: "rgba(232, 184, 96, 0.12)",
                border: "1px solid rgba(232, 184, 96, 0.2)",
                color: "#F5EDE0",
              }}
              aria-label="Envoyer la réponse de Yasmine"
            >
              <Check size={16} style={{ color: "#E8B860" }} />
              <span className="truncate">
                <KatexInline text={currentMsg.content} />
              </span>
              <ArrowRight size={16} style={{ color: "#E8B860" }} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
