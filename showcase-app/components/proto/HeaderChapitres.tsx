"use client";

import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeaderChapitres() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col pt-6 pb-4"
      style={{ minHeight: "140px" }}
    >
      <div className="flex items-center justify-between mb-6">
        <Link 
          href="/proto/onboarding" 
          className="p-1 -ml-1 transition-opacity hover:opacity-100"
          style={{ opacity: 0.6 }}
        >
          <ChevronLeft size={24} color="#F5EDE0" />
        </Link>
        <div className="relative overflow-hidden" style={{ width: 32, height: 32, borderRadius: 8 }}>
          <Image
            src="/brand/siraj-app-icon-6a.png"
            alt="SIRAJ"
            width={32}
            height={32}
            className="object-cover"
          />
        </div>
      </div>
      
      <div className="flex flex-col gap-1">
        <h1 
          className="text-2xl m-0 p-0" 
          style={{ fontFamily: "var(--font-manrope)", fontWeight: 600, color: "#F5EDE0" }}
        >
          Bonjour Yasmine
        </h1>
        <div 
          className="text-base"
          style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "rgba(245, 237, 224, 0.7)" }}
        >
          Maths · 2 Bac SM
        </div>
        <div 
          className="text-sm mt-1"
          style={{ fontFamily: "var(--font-sans)", fontWeight: 400, color: "rgba(245, 237, 224, 0.5)" }}
        >
          Tu en es au Chapitre 1 sur 12
        </div>
      </div>
    </motion.header>
  );
}
