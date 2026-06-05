"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Chapter } from "../../lib/mock-data";
import { useOnboarding } from "../../app/proto/onboarding-context";

interface CardChapitreProps {
  chapter: Chapter;
}

export default function CardChapitre({ chapter }: CardChapitreProps) {
  const router = useRouter();
  const { result } = useOnboarding();
  const isRecommended = !!result?.recommendedChapterSlugs?.includes(chapter.slug);
  const isLocked = chapter.status === "locked";
  const isInProgress = chapter.status === "in_progress";
  const isNextUnlocked = chapter.status === "next_unlocked";
  const isUnlockedFar = chapter.status === "unlocked_far";

  const getAriaLabel = () => {
    if (isLocked) {
      return `Chapitre ${chapter.id} : ${chapter.title}, verrouillé, à débloquer après ${chapter.prerequisiteChapterTitle}`;
    }
    return `Chapitre ${chapter.id} : ${chapter.title}, ${chapter.completedSeances} séances sur ${chapter.totalSeances} terminées, accéder au chapitre`;
  };

  const handleClick = () => {
    if (isLocked) return;
    router.push(`/proto/chapitre/${chapter.slug}`);
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: isLocked ? 0.4 : 1, y: 0 }
      }}
      transition={{ type: "spring", stiffness: 80, damping: 18 }}
      whileHover={!isLocked ? { 
        rotateY: 2, 
        rotateX: -1, 
        scale: 1.01,
        boxShadow: "inset 0 0 0 1px rgba(232, 184, 96, 0.2)",
        transition: { type: "spring", stiffness: 200, damping: 20 }
      } : {}}
      whileTap={!isLocked ? { scale: 0.98, transition: { duration: 0.15 } } : {}}
      onClick={handleClick}
      role={isLocked ? "presentation" : "button"}
      aria-label={getAriaLabel()}
      aria-disabled={isLocked}
      tabIndex={isLocked ? -1 : 0}
      className={`
        flex items-center px-5 py-[18px] relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8B860] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1419]
        ${isLocked ? "cursor-default" : "cursor-pointer"}
      `}
      style={{
        height: "120px",
        borderRadius: "16px",
        backgroundColor: "rgba(245, 237, 224, 0.03)",
        border: "1px solid rgba(245, 237, 224, 0.08)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
      }}
    >
      {/* Number Circle */}
      <div 
        className="flex-shrink-0 flex items-center justify-center rounded-full"
        style={{
          width: 48,
          height: 48,
          backgroundColor: isLocked ? "rgba(245, 237, 224, 0.08)" : "#E8B860",
          color: isLocked ? "rgba(245, 237, 224, 0.3)" : "#0F1419",
          fontFamily: "var(--font-manrope)",
          fontWeight: 700,
          fontSize: "22px"
        }}
      >
        {chapter.id}
      </div>

      {/* Content Center */}
      <div className="flex-1 flex flex-col justify-center pl-4 pr-2">
        {isRecommended && (
          <div
            className="inline-flex items-center px-2 py-0.5 rounded-md mb-1 w-max"
            style={{
              background: "rgba(232, 184, 96, 0.12)",
              border: "1px solid rgba(232, 184, 96, 0.25)",
              color: "#E8B860",
              fontSize: "10px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              fontFamily: "var(--font-sans)",
            }}
          >
            Recommandé pour toi
          </div>
        )}
        <h2 
          className="m-0 p-0 mb-1"
          style={{
            fontFamily: "var(--font-manrope)",
            fontWeight: 600,
            fontSize: "17px",
            color: isLocked ? "rgba(245, 237, 224, 0.4)" : "#F5EDE0",
            lineHeight: 1.2
          }}
        >
          {chapter.title}
        </h2>
        
        {/* Subtitle logic */}
        {isLocked && (
          <div 
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: "12px",
              color: "rgba(245, 237, 224, 0.3)",
              fontStyle: "italic"
            }}
          >
            À débloquer après {chapter.prerequisiteChapterTitle}
          </div>
        )}
        
        {isInProgress && (
          <div 
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: "13px",
              color: "rgba(245, 237, 224, 0.65)"
            }}
          >
            {chapter.completedSeances} séances sur {chapter.totalSeances}
          </div>
        )}

        {isNextUnlocked && (
          <div 
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: "13px",
              color: "rgba(232, 184, 96, 0.9)"
            }}
          >
            Prochain chapitre
          </div>
        )}

        {isUnlockedFar && (
          <div 
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              fontSize: "13px",
              color: "rgba(245, 237, 224, 0.65)"
            }}
          >
            {chapter.totalSeances} séances · {Math.floor(chapter.estimatedDurationMin / 60)} h {chapter.estimatedDurationMin % 60 || "00"} estimées
          </div>
        )}
      </div>

      {/* Right Zone */}
      <div className="w-[80px] flex-shrink-0 flex items-center justify-end">
        {isInProgress && (
          <div className="relative w10 h10" style={{ width: 40, height: 40 }}>
            {/* Background track */}
            <svg viewBox="0 0 40 40" className="absolute inset-0 transform -rotate-90">
              <circle
                cx="20"
                cy="20"
                r="16"
                fill="none"
                stroke="rgba(245, 237, 224, 0.1)"
                strokeWidth="4"
              />
              {/* Progress */}
              <motion.circle
                cx="20"
                cy="20"
                r="16"
                fill="none"
                stroke="#E8B860"
                strokeWidth="4"
                strokeDasharray={2 * Math.PI * 16}
                initial={{ strokeDashoffset: 2 * Math.PI * 16 }}
                animate={{ strokeDashoffset: (2 * Math.PI * 16) * (1 - (chapter.completedSeances / chapter.totalSeances)) }}
                transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                strokeLinecap="round"
              />
            </svg>
          </div>
        )}
        
        {(isNextUnlocked || isUnlockedFar) && (
          <ChevronRight size={24} color="rgba(245, 237, 224, 0.5)" />
        )}
      </div>
    </motion.div>
  );
}
