"use client";

// ============================================================================
// SIRAJ — KaTeX Wrapper Component
// ----------------------------------------------------------------------------
// Renders both inline ($...$) and display ($$...$$) math expressions.
// Uses react-katex with KaTeX CSS imported once.
// Conforme §14.6.5 : KaTeX rendu premium, couleur F5EDE0.
// ============================================================================

import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import React from "react";

/**
 * Parses a string containing mixed text and LaTeX and returns React elements.
 *
 * Supported delimiters (all four):
 *   Display math: $$...$$ or \[...\]
 *   Inline math:  $...$  or \(...\)
 *
 * The LLM uses \( \) and \[ \] (standard LaTeX), while the scripted mock data
 * uses $ and $$. Both are supported for backward compatibility.
 */
export default function KatexInline({ text }) {
  if (!text) return null;

  const parts = [];
  let key = 0;

  // Unified regex: match all 4 delimiter types in one pass.
  // Order matters — display delimiters ($$, \[) must come before inline ($, \()
  // to avoid partial matches.
  //
  // Groups:
  //   1: $$ ... $$   (display)
  //   2: \[ ... \]   (display)
  //   3: $ ... $     (inline)
  //   4: \( ... \)   (inline)
  const mathRegex = /\$\$([^$]+?)\$\$|\\\[([\s\S]+?)\\\]|\$([^$]+?)\$|\\\(([\s\S]+?)\\\)/g;

  let lastIndex = 0;
  let match;

  while ((match = mathRegex.exec(text)) !== null) {
    // Push any text before this match
    if (match.index > lastIndex) {
      parts.push(
        <span key={key++}>{text.slice(lastIndex, match.index)}</span>
      );
    }

    const displayContent = match[1] || match[2]; // $$ or \[ group
    const inlineContent = match[3] || match[4];  // $ or \( group

    if (displayContent) {
      parts.push(
        <div key={key++} className="my-3 flex justify-center">
          <BlockMath math={displayContent.trim()} />
        </div>
      );
    } else if (inlineContent) {
      parts.push(
        <InlineMath key={key++} math={inlineContent.trim()} />
      );
    }

    lastIndex = match.index + match[0].length;
  }

  // Push any remaining text after the last match
  if (lastIndex < text.length) {
    parts.push(
      <span key={key++}>{text.slice(lastIndex)}</span>
    );
  }

  return <>{parts}</>;
}
