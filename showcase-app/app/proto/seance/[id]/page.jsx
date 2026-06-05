"use client";

// ============================================================================
// SIRAJ — Écran 4 : Chat Tuteur LIVE
// ----------------------------------------------------------------------------
// Route : /proto/seance/[id]
// Conforme §14.6.2 : Écran 4 — "Voici comment elle apprend avec l'IA"
// Brique A : tuteur live branché sur LLM free-tier (remplace le scripté)
// ============================================================================

import React from "react";
import ChatTuteurLive from "@/components/proto/ChatTuteurLive";

export default function SeancePage() {
  return (
    <div
      className="h-screen flex flex-col"
      style={{ backgroundColor: "#0F1419" }}
    >
      <ChatTuteurLive
        seanceInfo={{
          chapitreTitle: "Limites & Continuité",
          seanceTitle: "Formes indéterminées 0/0",
          seanceNumber: 1,
          totalSeances: 7,
        }}
      />
    </div>
  );
}

