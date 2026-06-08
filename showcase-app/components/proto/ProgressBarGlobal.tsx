"use client";

// ============================================================================
// SIRAJ — ProgressBarGlobal Component
// ----------------------------------------------------------------------------
// Animated progress bar for chapter/programme progression.
// Supports both default (programme-level) and data-driven (séance-level) modes.
// Conforme §14.6.5 : palette E8B860, Framer Motion 12 spring easing.
// ============================================================================

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface ProgressBarGlobalProps {
  /** Label text above the bar */
  label?: string;
  /** Number of completed séances (data-driven mode) */
  completedSeances?: number;
  /** Total séances in chapter (data-driven mode) */
  totalSeances?: number;
  /** Percentage to animate FROM (data-driven mode) */
  animateFrom?: number;
  /** Percentage to animate TO (data-driven mode) */
  animateTo?: number;
  /** Optional badge text, e.g. "Séance 1/7 ✓" */
  badgeText?: string;
}

export default function ProgressBarGlobal({
  label = "Progression du programme",
  completedSeances,
  totalSeances,
  animateFrom,
  animateTo,
  badgeText,
}: ProgressBarGlobalProps) {
  // Determine if we're in data-driven mode
  const isDataDriven =
    animateTo !== undefined && animateFrom !== undefined;

  const targetPercent = isDataDriven
    ? animateTo
    : completedSeances !== undefined && totalSeances
      ? Math.round((completedSeances / totalSeances) * 100)
      : 0;

  const startPercent = isDataDriven ? animateFrom : 0;

  // Count-up animation for the percentage number
  const [displayPercent, setDisplayPercent] = useState(startPercent);

  useEffect(() => {
    // Small delay to let the bar start animating first
    const timeout = setTimeout(() => {
      const duration = 1200; // ms
      const steps = 30;
      const increment = (targetPercent - startPercent) / steps;
      let current = startPercent;
      let step = 0;

      const interval = setInterval(() => {
        step++;
        current += increment;
        if (step >= steps) {
          current = targetPercent;
          clearInterval(interval);
        }
        setDisplayPercent(Math.round(current));
      }, duration / steps);

      return () => clearInterval(interval);
    }, 600);

    return () => clearTimeout(timeout);
  }, [targetPercent, startPercent]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="flex flex-col gap-2 mb-8"
      style={{ minHeight: "60px" }}
    >
      {/* Label row */}
      <div className="flex items-center justify-between">
        <div
          className="text-[13px]"
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            color: "rgba(245, 237, 224, 0.6)",
          }}
        >
          {label}
        </div>
        {badgeText && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.3 }}
            className="px-2.5 py-1 rounded-full text-xs font-semibold"
            style={{
              background: "rgba(34, 197, 94, 0.1)",
              color: "#22c55e",
              border: "1px solid rgba(34, 197, 94, 0.2)",
            }}
          >
            {badgeText}
          </motion.div>
        )}
      </div>

      {/* Bar + percentage */}
      <div className="flex items-center gap-4">
        <div
          className="flex-1 relative overflow-hidden"
          style={{
            height: 6,
            borderRadius: 3,
            backgroundColor: "rgba(245, 237, 224, 0.1)",
          }}
        >
          <motion.div
            initial={{ width: `${startPercent}%` }}
            animate={{ width: `${targetPercent}%` }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.5,
              duration: 1.2,
            }}
            className="absolute left-0 top-0 bottom-0"
            style={{
              borderRadius: 3,
              background:
                "linear-gradient(90deg, #E8B860 0%, #F0C97A 100%)",
              boxShadow: "0 0 12px rgba(232, 184, 96, 0.3)",
            }}
          />
        </div>
        <div
          className="text-sm tabular-nums min-w-[36px] text-right"
          style={{
            fontFamily: "var(--font-manrope)",
            fontWeight: 600,
            color: "#E8B860",
          }}
        >
          {displayPercent} %
        </div>
      </div>
    </motion.div>
  );
}
