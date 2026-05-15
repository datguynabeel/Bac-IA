"use client";

import React from "react";
import { motion } from "framer-motion";
import ChapterHeader from "../../../../components/proto/chapitre/ChapterHeader";
import ChapterObjectives from "../../../../components/proto/chapitre/ChapterObjectives";
import SessionsList from "../../../../components/proto/chapitre/SessionsList";
import { mockSessions } from "../../../../lib/proto/mock-sessions-limites";

export default function ChapitreLimitesContinuitePage() {
  return (
    <div className="min-h-screen bg-[#0F1419] text-[#F5EDE0] font-inter">
      {/* Centered responsive container */}
      <main className="max-w-[720px] mx-auto px-4 pb-20 relative">
        <ChapterHeader />
        
        <ChapterObjectives />
        
        <SessionsList sessions={mockSessions} />

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="font-inter font-normal text-[13px] text-[#E8B860]/60">
            Termine la Séance 1 pour débloquer la suivante.<br className="hidden sm:block" /> Ton tuteur t'accompagne à chaque étape.
          </p>
        </motion.div>
      </main>
    </div>
  );
}
