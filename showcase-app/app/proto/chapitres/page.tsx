"use client";

import { motion } from "framer-motion";
import { chaptersData } from "../../../lib/mock-data";
import HeaderChapitres from "../../../components/proto/HeaderChapitres";
import ProgressBarGlobal from "../../../components/proto/ProgressBarGlobal";
import CardChapitre from "../../../components/proto/CardChapitre";

export default function ChapitresPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.06
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0F1419] text-[#F5EDE0]">
      <div className="w-full max-w-[640px] mx-auto px-5 pb-[80px]">
        {/* Header Zone */}
        <HeaderChapitres />

        {/* Progress Bar Global */}
        <ProgressBarGlobal />

        {/* Chapters List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-4"
        >
          {chaptersData.map((chapter) => (
            <CardChapitre key={chapter.id} chapter={chapter} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
