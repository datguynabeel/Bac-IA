"use client";

// ============================================================================
// SIRAJ — Écran 4 : Chat Tuteur Scripté
// ----------------------------------------------------------------------------
// Route : /proto/seance/[id]
// Conforme §14.6.2 : Écran 4 — "Voici comment elle apprend avec l'IA"
// Conforme §14.6.4 : réponses 100% scriptées hardcodées
// Conforme §14.6.5 v1.8.5 : Next.js 16 App Router
// ============================================================================

import React from "react";
import ChatTuteur from "@/components/proto/ChatTuteur";
import { seanceLimitesMock } from "@/data/proto/seance-limites-mock";

export default function SeancePage() {
  return (
    <div
      className="h-screen flex flex-col"
      style={{ backgroundColor: "#0F1419" }}
    >
      <ChatTuteur seanceData={seanceLimitesMock} />
    </div>
  );
}
