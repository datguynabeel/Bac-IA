"use client";

// ============================================================================
// SIRAJ — MessageBubble Component
// ----------------------------------------------------------------------------
// Renders a single chat message (tuteur or élève) with glassmorphism styling,
// KaTeX math rendering, Framer Motion stagger animation, and SIRAJ branding.
// Conforme §13.3 Design System + §2.5 Vocabulaire officiel.
// ============================================================================

import React from "react";
import { motion } from "framer-motion";
import KatexInline from "./KatexInline";

// SIRAJ Lamp Avatar (SVG inline — no external images per §14.6.5)
function SirajAvatar() {
  return (
    <div
      className="shrink-0 flex items-center justify-center rounded-full"
      style={{
        width: 36,
        height: 36,
        background: "linear-gradient(135deg, #E8B860 0%, #D4A24A 100%)",
        boxShadow: "0 0 16px rgba(232, 184, 96, 0.3)",
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Lamp / Lantern icon inspired by SIRAJ (سراج = lamp) */}
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
        <path
          d="M11 17V20"
          stroke="#0F1419"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M13 17V20"
          stroke="#0F1419"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Light rays */}
        <path
          d="M12 0V1M5 5L5.7 5.7M19 5L18.3 5.7"
          stroke="#0F1419"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}

// Typing indicator (3 bouncing dots)
export function TypingIndicator() {
  return (
    <div className="flex items-end gap-2 mb-4">
      <SirajAvatar />
      <div
        className="px-4 py-3 rounded-2xl rounded-bl-sm flex items-center gap-1"
        style={{
          background: "rgba(232, 184, 96, 0.08)",
          border: "1px solid rgba(232, 184, 96, 0.12)",
          backdropFilter: "blur(20px)",
        }}
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="block rounded-full"
            style={{
              width: 7,
              height: 7,
              backgroundColor: "rgba(232, 184, 96, 0.5)",
            }}
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}

// Animation variant for stagger reveal
const bubbleVariant = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
};

export default function MessageBubble({ message, index }) {
  const isTuteur = message.role === "tuteur";

  return (
    <motion.div
      variants={bubbleVariant}
      initial="hidden"
      animate="visible"
      className={`flex items-end gap-2 mb-4 ${
        isTuteur ? "justify-start" : "justify-end"
      }`}
    >
      {/* Avatar — tuteur only, left side */}
      {isTuteur && <SirajAvatar />}

      {/* Bubble */}
      <div
        className={`max-w-[85%] sm:max-w-[75%] px-4 py-3 ${
          isTuteur
            ? "rounded-2xl rounded-bl-sm"
            : "rounded-2xl rounded-br-sm"
        }`}
        style={
          isTuteur
            ? {
                background: "rgba(232, 184, 96, 0.08)",
                border: "1px solid rgba(232, 184, 96, 0.12)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }
            : {
                background: "rgba(232, 184, 96, 0.15)",
                border: "1px solid rgba(232, 184, 96, 0.2)",
              }
        }
      >
        {/* Role label */}
        <span
          className="block text-xs font-medium mb-1 opacity-60"
          style={{ color: isTuteur ? "#E8B860" : "#F5EDE0" }}
        >
          {isTuteur ? "Tuteur SIRAJ" : "Yasmine"}
        </span>

        {/* Content with KaTeX */}
        <div
          className="text-sm sm:text-[15px] leading-relaxed"
          style={{ color: "#F5EDE0" }}
        >
          {message.content.split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {i > 0 && <br />}
              <KatexInline text={line} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
