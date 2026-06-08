"use client";

// ============================================================================
// SIRAJ — SirajButton Shared Component
// ----------------------------------------------------------------------------
// Primary, secondary, and ghost button variants for the SIRAJ design system.
// Extracted from onboarding/page.tsx for reuse across all screens.
// Conforme §14.6.5 : composant atomique, palette E8B860/0F1419/F5EDE0.
// ============================================================================

import React from "react";
import { motion } from "framer-motion";

export interface SirajButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit";
}

export default function SirajButton({
  children,
  variant = "primary",
  size = "md",
  onClick,
  disabled,
  className = "",
  type = "button",
}: SirajButtonProps) {
  const sizeClasses: Record<string, string> = {
    sm: "px-4 py-2 text-xs gap-1.5 rounded-lg",
    md: "px-6 py-3 text-sm gap-2 rounded-xl",
    lg: "px-8 py-4 text-base gap-2.5 rounded-xl",
  };

  const variantStyles = {
    primary: {
      base: "text-[#0F1419] font-bold shadow-lg shadow-[#E8B860]/10",
      style: {
        background: "linear-gradient(135deg, #E8B860 0%, #C09540 100%)",
        border: "1px solid rgba(232, 184, 96, 0.4)",
      },
    },
    secondary: {
      base: "font-semibold backdrop-blur-md",
      style: {
        background: "rgba(232, 184, 96, 0.08)",
        color: "#E8B860",
        border: "1px solid rgba(232, 184, 96, 0.25)",
      },
    },
    ghost: {
      base: "font-medium backdrop-blur-md",
      style: {
        background: "transparent",
        color: "rgba(245, 237, 224, 0.7)",
        border: "1px solid rgba(245, 237, 224, 0.08)",
      },
    },
  };

  const v = variantStyles[variant];

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={
        !disabled
          ? { y: -2, transition: { type: "spring", stiffness: 400, damping: 17 } }
          : {}
      }
      whileTap={!disabled ? { scale: 0.97, y: 0 } : {}}
      className={`inline-flex items-center justify-center tracking-tight transition-all duration-300 ${sizeClasses[size]} ${v.base} ${disabled ? "opacity-45 cursor-not-allowed" : ""} ${className}`}
      style={v.style}
    >
      {children}
    </motion.button>
  );
}
