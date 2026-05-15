"use client";

// ============================================================================
// SIRAJ — MessageBubble Component
// ----------------------------------------------------------------------------
// Renders a single chat message (tuteur or élève) with glassmorphism styling,
// KaTeX math rendering, Framer Motion stagger animation, and SIRAJ branding.
// Conforme §13.3 Design System + §2.5 Vocabulaire officiel.
// ============================================================================

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import KatexInline from "./KatexInline";

// SIRAJ Lamp Avatar (App Icon 6a)
function SirajAvatar() {
  return (
    <div className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden ring-1 ring-[#E8B860]/30 shadow-lg shadow-[#E8B860]/10">
      <Image
        src="/brand/siraj-app-icon-6a.png"
        alt="Tuteur SIRAJ"
        width={40}
        height={40}
        className="object-cover"
        priority={false}
      />
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
