"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ChapterHeader() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } 
    },
  };

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="sticky top-0 z-10 bg-[#0F1419]/90 backdrop-blur-md pb-6 pt-4 mb-6 border-b border-white/5"
    >
      <div className="flex items-center justify-between mb-4">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="p-2 -ml-2 rounded-full hover:bg-white/5 transition-colors focus:outline-none"
          aria-label="Retour"
        >
          <ChevronLeft className="w-6 h-6 text-[#F5EDE0]" />
        </button>

        {/* Tuteur Avatar - Using App Icon 6a officially added in previous commits */}
        <div className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden ring-1 ring-[#E8B860]/30 shadow-lg shadow-[#E8B860]/10 bg-[#E8B860]">
          <Image
            src="/brand/siraj-app-icon-6a.png"
            alt="Tuteur SIRAJ"
            width={40}
            height={40}
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="mb-4">
        <h2 className="font-inter font-normal text-[14px] text-[#E8B860]/70 mb-1">
          Chapitre 1 · Maths 2Bac SM
        </h2>
        <h1 className="font-manrope font-bold text-2xl md:text-[32px] text-[#F5EDE0] leading-tight">
          Limites & Continuité
        </h1>
      </div>

      {/* Progress Bar */}
      <div>
        <div className="flex justify-between items-center mb-1.5">
          <span className="font-inter font-normal text-[12px] text-[#F5EDE0]/60">
            0/7 séances complétées
          </span>
          <span className="font-inter font-semibold text-[12px] text-[#E8B860]">
            0%
          </span>
        </div>
        <div className="h-1 w-full bg-[#1A1F26] rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "0%" }} // 0% initial completion
            className="h-full bg-[#E8B860]"
          />
        </div>
      </div>
    </motion.div>
  );
}
