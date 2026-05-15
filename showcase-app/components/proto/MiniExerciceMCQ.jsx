"use client";

// ============================================================================
// SIRAJ — MiniExerciceMCQ Component
// ----------------------------------------------------------------------------
// 4 vertical choice cards with hover/click states. Correct → green feedback,
// incorrect → red feedback with explanation. Reusable for any MCQ.
// Conforme §14.6.4 : réponses 100% scriptées, aucun appel API.
// ============================================================================

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import KatexInline from "./KatexInline";

const cardVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: i * 0.08,
    },
  }),
};

export default function MiniExerciceMCQ({
  question,
  choices,
  onCorrect,
  onIncorrect,
}) {
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);

  const handleSelect = (choice, index) => {
    if (answered) return;
    setSelected(index);
    setAnswered(true);

    if (choice.isCorrect) {
      onCorrect?.();
    } else {
      onIncorrect?.();
    }
  };

  const getCardStyle = (index, choice) => {
    if (!answered) {
      return {
        background: "rgba(232, 184, 96, 0.05)",
        border: "1px solid rgba(232, 184, 96, 0.12)",
      };
    }
    if (index === selected) {
      return choice.isCorrect
        ? {
            background: "rgba(34, 197, 94, 0.12)",
            border: "1px solid rgba(34, 197, 94, 0.4)",
          }
        : {
            background: "rgba(239, 68, 68, 0.12)",
            border: "1px solid rgba(239, 68, 68, 0.4)",
          };
    }
    if (choice.isCorrect && answered) {
      return {
        background: "rgba(34, 197, 94, 0.08)",
        border: "1px solid rgba(34, 197, 94, 0.25)",
      };
    }
    return {
      background: "rgba(232, 184, 96, 0.03)",
      border: "1px solid rgba(232, 184, 96, 0.06)",
      opacity: 0.5,
    };
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="mb-4 ml-[44px]"
    >
      {/* Question */}
      <div
        className="px-4 py-3 rounded-2xl rounded-bl-sm mb-3"
        style={{
          background: "rgba(232, 184, 96, 0.08)",
          border: "1px solid rgba(232, 184, 96, 0.12)",
          backdropFilter: "blur(20px)",
        }}
      >
        <span
          className="block text-xs font-medium mb-2"
          style={{ color: "#E8B860", opacity: 0.7 }}
        >
          Mini-exercice
        </span>
        <div
          className="text-sm sm:text-[15px] leading-relaxed"
          style={{ color: "#F5EDE0" }}
        >
          <KatexInline text={question} />
        </div>
      </div>

      {/* Choices */}
      <div className="flex flex-col gap-2">
        {choices.map((choice, i) => (
          <motion.button
            key={choice.label}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={!answered ? { scale: 1.02 } : {}}
            whileTap={!answered ? { scale: 0.98 } : {}}
            onClick={() => handleSelect(choice, i)}
            disabled={answered}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
              answered ? "cursor-default" : "cursor-pointer"
            }`}
            style={getCardStyle(i, choice)}
            aria-label={`Choix ${choice.label}: ${choice.text}`}
          >
            {/* Label badge */}
            <span
              className="shrink-0 flex items-center justify-center rounded-lg text-xs font-bold"
              style={{
                width: 28,
                height: 28,
                backgroundColor:
                  answered && i === selected
                    ? choice.isCorrect
                      ? "rgba(34, 197, 94, 0.2)"
                      : "rgba(239, 68, 68, 0.2)"
                    : "rgba(232, 184, 96, 0.1)",
                color:
                  answered && i === selected
                    ? choice.isCorrect
                      ? "#22c55e"
                      : "#ef4444"
                    : "#E8B860",
              }}
            >
              {answered && i === selected ? (
                choice.isCorrect ? (
                  <Check size={14} />
                ) : (
                  <X size={14} />
                )
              ) : (
                choice.label
              )}
            </span>

            {/* Choice text */}
            <span
              className="text-sm sm:text-[15px]"
              style={{ color: "#F5EDE0" }}
            >
              <KatexInline text={choice.text} />
            </span>

            {/* Show correct indicator on wrong answer */}
            {answered && !choice.isCorrect && i !== selected && choice.isCorrect && (
              <Check
                size={14}
                className="ml-auto"
                style={{ color: "#22c55e" }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
