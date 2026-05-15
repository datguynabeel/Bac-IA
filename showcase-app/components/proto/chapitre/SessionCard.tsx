"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import { Session } from "../../../lib/proto/mock-sessions-limites";

interface SessionCardProps {
  session: Session;
}

export default function SessionCard({ session }: SessionCardProps) {
  const router = useRouter();
  const isAvailable = session.statut === "disponible";

  const handlePress = () => {
    if (isAvailable) {
      router.push(`/proto/seance/${session.id}`);
    }
  };

  // State variations based on availability
  const cardVariants = {
    hidden: { opacity: 0, y: 16, scale: 0.96 },
    visible: {
      opacity: isAvailable ? 1 : 0.5,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={isAvailable ? { scale: 1.02, transition: { type: "spring", stiffness: 300 } } : {}}
      whileTap={isAvailable ? { scale: 0.98 } : {}}
      onClick={handlePress}
      className={`group relative flex items-center p-5 rounded-2xl border transition-colors duration-200 ${
        isAvailable
          ? "cursor-pointer bg-gradient-to-br from-[#E8B860]/[0.08] to-[#E8B860]/[0.02] border-[#E8B860]/25 hover:border-[#E8B860]/50"
          : "cursor-not-allowed bg-white/2 border-white/5"
      }`}
      title={!isAvailable ? "Termine la séance précédente pour débloquer" : undefined}
    >
      {/* Circle Number with Shared Layout ID stub */}
      <motion.div
        layoutId={isAvailable ? `seance-${session.numero}-cercle` : undefined}
        className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
          isAvailable ? "bg-[#E8B860]" : "bg-white/5 border border-white/10"
        }`}
      >
        <span
          className={`font-manrope font-bold text-[20px] ${
            isAvailable ? "text-[#0F1419]" : "text-[#6B7280]"
          }`}
        >
          {session.numero}
        </span>
      </motion.div>

      {/* Info Section */}
      <div className="flex-1 min-w-0">
        <h3
          className={`font-inter font-semibold text-[16px] mb-1 truncate ${
            isAvailable ? "text-[#F5EDE0]" : "text-[#F5EDE0]"
          }`}
        >
          {session.titre}
        </h3>
        <p className="font-inter font-normal text-[12px] text-[#E8B860]/70 truncate">
          {session.duree} · {session.exercices} exercices · {session.difficulte}
          {!isAvailable && (
            <span className="ml-1 text-gray-500">· Verrouillée</span>
          )}
        </p>
      </div>

      {/* Right Icon */}
      <div className="ml-4 flex-shrink-0">
        {isAvailable ? (
          <ChevronRight className="w-6 h-6 text-[#E8B860]" />
        ) : (
          <Lock className="w-5 h-5 text-gray-500" />
        )}
      </div>
    </motion.div>
  );
}
