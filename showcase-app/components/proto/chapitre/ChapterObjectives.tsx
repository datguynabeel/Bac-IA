"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target } from "lucide-react";

export default function ChapterObjectives() {
  const containerVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { delay: 0.15, duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } 
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-[#E8B860]/[0.05] border border-[#E8B860]/[0.15] rounded-2xl p-5 mb-8"
    >
      <div className="flex items-start">
        <Target className="w-5 h-5 text-[#E8B860] mt-0.5 mr-3 shrink-0" />
        <ul className="list-disc list-inside space-y-1.5 font-inter font-normal text-[14px] text-[#F5EDE0]/90">
          <li>Maîtriser le calcul de limites en un point et à l'infini</li>
          <li>Comprendre la continuité et le théorème des valeurs intermédiaires</li>
          <li>Appliquer aux formes indéterminées du Bac SM</li>
        </ul>
      </div>
    </motion.div>
  );
}
