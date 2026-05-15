"use client";

import { motion } from "framer-motion";

export default function ProgressBarGlobal() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="flex flex-col gap-2 mb-8"
      style={{ minHeight: "60px" }}
    >
      <div 
        className="text-[13px]" 
        style={{ fontFamily: "var(--font-sans)", fontWeight: 500, color: "rgba(245, 237, 224, 0.6)" }}
      >
        Progression du programme
      </div>
      
      <div className="flex items-center gap-4">
        <div 
          className="flex-1 relative overflow-hidden" 
          style={{ height: 6, borderRadius: 3, backgroundColor: "rgba(245, 237, 224, 0.1)" }}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "8%" }}
            transition={{ 
              type: "spring",
              stiffness: 100, 
              damping: 20, 
              delay: 0.5,
              duration: 1.2
            }}
            className="absolute left-0 top-0 bottom-0"
            style={{ 
              borderRadius: 3,
              background: "linear-gradient(90deg, #E8B860 0%, #F0C97A 100%)",
              boxShadow: "0 0 12px rgba(232, 184, 96, 0.3)"
            }}
          />
        </div>
        <div 
          className="text-sm"
          style={{ fontFamily: "var(--font-manrope)", fontWeight: 600, color: "#E8B860" }}
        >
          8 %
        </div>
      </div>
    </motion.div>
  );
}
