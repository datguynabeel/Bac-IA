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
 * Parses a string containing mixed text and LaTeX ($...$ and $$...$$)
 * and returns an array of React elements.
 */
export default function KatexInline({ text }) {
  if (!text) return null;

  // Split on display math ($$...$$) first, then inline ($...$)
  const parts = [];
  let remaining = text;
  let key = 0;

  // Process display math blocks first: $$...$$
  const displayRegex = /\$\$([^$]+?)\$\$/g;
  let lastIndex = 0;
  let match;

  // Collect all display math positions
  const segments = [];
  while ((match = displayRegex.exec(remaining)) !== null) {
    if (match.index > lastIndex) {
      segments.push({
        type: "text",
        content: remaining.slice(lastIndex, match.index),
      });
    }
    segments.push({ type: "display", content: match[1].trim() });
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < remaining.length) {
    segments.push({ type: "text", content: remaining.slice(lastIndex) });
  }

  // Now process inline math within text segments
  for (const segment of segments) {
    if (segment.type === "display") {
      parts.push(
        <div key={key++} className="my-3 flex justify-center">
          <BlockMath math={segment.content} />
        </div>
      );
    } else {
      // Split on inline math: $...$
      const inlineRegex = /\$([^$]+?)\$/g;
      let inlineLastIndex = 0;
      let inlineMatch;
      const textContent = segment.content;

      while ((inlineMatch = inlineRegex.exec(textContent)) !== null) {
        if (inlineMatch.index > inlineLastIndex) {
          parts.push(
            <span key={key++}>
              {textContent.slice(inlineLastIndex, inlineMatch.index)}
            </span>
          );
        }
        parts.push(
          <InlineMath key={key++} math={inlineMatch[1].trim()} />
        );
        inlineLastIndex = inlineMatch.index + inlineMatch[0].length;
      }
      if (inlineLastIndex < textContent.length) {
        parts.push(
          <span key={key++}>{textContent.slice(inlineLastIndex)}</span>
        );
      }
    }
  }

  return <>{parts}</>;
}
