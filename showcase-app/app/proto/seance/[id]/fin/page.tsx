"use client";

// ============================================================================
// SIRAJ — Écran 5 : Fin de séance (Payoff métacognitif)
// ----------------------------------------------------------------------------
// Route : /proto/seance/[id]/fin
// Conforme §14.2.9.g : l'élève reformule AVANT toute validation.
// Conforme §14.6.6 : production-grade, piloté par les données seancesData.
//
// Séquence imposée :
//   (a) Question de reformulation (MessageBubble tuteur)
//   (b) L'élève choisit parmi 3 options
//   (c) Si correct → affirmation courte + progression déverrouillée
//       Si incorrect → relance bienveillante, re-choix autorisé
//   (d) Progression animée + CTA
//
// INTERDIT : toute liste-résumé distribuant la méthode avant la réponse.
// ============================================================================

import React, { useState, useMemo, use } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";

import MessageBubble from "@/components/proto/MessageBubble";
import ProgressBarGlobal from "@/components/proto/ProgressBarGlobal";
import SirajButton from "@/components/proto/SirajButton";
import { seancesData, chaptersData } from "@/lib/mock-data";

// ---------------------------------------------------------------------------
// Relance messages (bienveillantes, anti-distributeur)
// ---------------------------------------------------------------------------

const RELANCE_MESSAGES: Record<number, string> = {
  1: "Pas tout à fait — repense à ce qui se passe quand tu remplaces directement : tu retombes sur 0/0, donc… ?",
  2: "Hmm, pas exactement. Si tu conclus trop vite, tu passes à côté de quelque chose. Qu'est-ce que tu pourrais faire AVANT de conclure ?",
};

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default function FinSeancePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();

  // ── Data lookup ──────────────────────────────────────────────────────
  const seance = useMemo(
    () => seancesData.find((s) => s.id === id),
    [id]
  );

  const chapter = useMemo(
    () =>
      seance
        ? chaptersData.find((c) => c.slug === seance.chapterSlug)
        : undefined,
    [seance]
  );

  const nextSeance = useMemo(
    () =>
      seance
        ? seancesData.find(
            (s) =>
              s.chapterSlug === seance.chapterSlug &&
              s.number === seance.number + 1
          )
        : undefined,
    [seance]
  );

  // ── State ────────────────────────────────────────────────────────────
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showRelance, setShowRelance] = useState(false);
  const [relanceText, setRelanceText] = useState("");
  const [attempts, setAttempts] = useState(0);

  // ── Guard: unknown séance ────────────────────────────────────────────
  if (!seance || !chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center px-5">
        <p
          className="text-center text-sm"
          style={{ color: "rgba(245, 237, 224, 0.6)" }}
        >
          Séance introuvable.
        </p>
      </div>
    );
  }

  const { payoff } = seance;

  // ── Progression computation (derived, in-memory) ─────────────────────
  const completedBefore = chapter.completedSeances;
  const completedAfter = completedBefore + 1;
  const percentBefore = Math.round(
    (completedBefore / chapter.totalSeances) * 100
  );
  const percentAfter = Math.round(
    (completedAfter / chapter.totalSeances) * 100
  );

  // ── Handlers ─────────────────────────────────────────────────────────
  const handleOptionSelect = (index: number) => {
    if (isCorrect) return; // already answered correctly

    setSelectedIndex(index);
    setAttempts((prev) => prev + 1);

    if (index === payoff.correctIndex) {
      setIsCorrect(true);
      setShowRelance(false);
    } else {
      // Show relance — bienveillante, no answer revealed
      const relance =
        RELANCE_MESSAGES[index] ||
        "Pas tout à fait — réfléchis encore à la première étape que tu tenterais.";
      setRelanceText(relance);
      setShowRelance(true);

      // Allow re-selection after a short beat
      setTimeout(() => {
        setSelectedIndex(null);
      }, 200);
    }
  };

  // ── Option card styling ──────────────────────────────────────────────
  const getOptionStyle = (index: number) => {
    if (isCorrect && index === payoff.correctIndex) {
      return {
        background: "rgba(34, 197, 94, 0.12)",
        border: "1px solid rgba(34, 197, 94, 0.4)",
      };
    }
    if (selectedIndex === index && !isCorrect) {
      return {
        background: "rgba(239, 68, 68, 0.12)",
        border: "1px solid rgba(239, 68, 68, 0.4)",
      };
    }
    return {
      background: "rgba(232, 184, 96, 0.05)",
      border: "1px solid rgba(232, 184, 96, 0.12)",
    };
  };

  const getOptionLabelStyle = (index: number) => {
    if (isCorrect && index === payoff.correctIndex) {
      return {
        backgroundColor: "rgba(34, 197, 94, 0.2)",
        color: "#22c55e",
      };
    }
    return {
      backgroundColor: "rgba(232, 184, 96, 0.1)",
      color: "#E8B860",
    };
  };

  // ── Render ───────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-full max-w-[640px] mx-auto px-5 py-8 flex-1 flex flex-col">
        {/* ─── BLOC 1 : Header léger ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div
            className="relative overflow-hidden shrink-0"
            style={{ width: 32, height: 32, borderRadius: 8 }}
          >
            <Image
              src="/brand/siraj-app-icon-6a.png"
              alt="SIRAJ"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <div className="flex items-center gap-2">
            <span
              className="text-xl font-bold tracking-wider"
              style={{
                fontFamily: "var(--font-manrope)",
                color: "#F5EDE0",
              }}
            >
              SIRAJ
            </span>
            <span
              className="text-sm font-medium"
              style={{ color: "rgba(245, 237, 224, 0.4)" }}
            >
              ·
            </span>
            <span
              className="text-sm font-medium"
              style={{ color: "rgba(245, 237, 224, 0.5)" }}
            >
              Séance terminée
            </span>
          </div>
        </motion.div>

        {/* ─── BLOC 2 : Payoff métacognitif ───────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 280,
            damping: 22,
            delay: 0.15,
          }}
          className="mb-6"
        >
          {/* Question de reformulation — voix tuteur */}
          <MessageBubble
            message={{
              id: "payoff-question",
              role: "tuteur",
              type: "text",
              content: payoff.reflectiveQuestion,
            }}
            index={0}
          />

          {/* 3 options — style MCQ cohérent */}
          <div className="flex flex-col gap-2 ml-[44px] mt-3">
            {payoff.options.map((option, i) => {
              const labels = ["A", "B", "C"];
              const disabled = isCorrect;

              return (
                <motion.button
                  key={i}
                  custom={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.3 + i * 0.08,
                  }}
                  whileHover={!disabled ? { scale: 1.02 } : {}}
                  whileTap={!disabled ? { scale: 0.98 } : {}}
                  onClick={() => handleOptionSelect(i)}
                  disabled={disabled}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                    disabled ? "cursor-default" : "cursor-pointer"
                  }`}
                  style={getOptionStyle(i)}
                  aria-label={`Choix ${labels[i]}: ${option}`}
                  id={`payoff-option-${i}`}
                >
                  {/* Label badge */}
                  <span
                    className="shrink-0 flex items-center justify-center rounded-lg text-xs font-bold"
                    style={{
                      width: 28,
                      height: 28,
                      ...getOptionLabelStyle(i),
                    }}
                  >
                    {isCorrect && i === payoff.correctIndex ? (
                      <CheckCircle2 size={14} />
                    ) : (
                      labels[i]
                    )}
                  </span>

                  {/* Option text */}
                  <span
                    className="text-sm sm:text-[15px]"
                    style={{ color: "#F5EDE0" }}
                  >
                    {option}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* ─── BLOC 3 : Réaction ──────────────────────────────────── */}
        <AnimatePresence mode="wait">
          {/* Relance bienveillante (mauvaise réponse) */}
          {showRelance && !isCorrect && (
            <motion.div
              key="relance"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="mb-6"
            >
              <MessageBubble
                message={{
                  id: `relance-${attempts}`,
                  role: "tuteur",
                  type: "text",
                  content: relanceText,
                }}
                index={1}
              />
            </motion.div>
          )}

          {/* Affirmation (bonne réponse) */}
          {isCorrect && (
            <motion.div
              key="affirmation"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 24,
                delay: 0.2,
              }}
              className="mb-8"
            >
              <MessageBubble
                message={{
                  id: "payoff-affirmation",
                  role: "tuteur",
                  type: "text",
                  content: payoff.affirmation,
                }}
                index={1}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ─── BLOC 4 & 5 : Progression + CTA (hidden until correct) ─ */}
        <AnimatePresence>
          {isCorrect && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 22,
                delay: 0.6,
              }}
              className="mt-auto"
            >
              {/* ── BLOC 4 : Progression chapitre ──────────────────── */}
              <div
                className="p-5 rounded-2xl border mb-6"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(232, 184, 96, 0.04) 0%, rgba(232, 184, 96, 0.01) 100%)",
                  borderColor: "rgba(232, 184, 96, 0.12)",
                }}
              >
                <div
                  className="text-xs font-semibold uppercase tracking-widest mb-1"
                  style={{ color: "rgba(245, 237, 224, 0.4)" }}
                >
                  {chapter.title}
                </div>

                <ProgressBarGlobal
                  label={`Progression du chapitre`}
                  completedSeances={completedAfter}
                  totalSeances={chapter.totalSeances}
                  animateFrom={percentBefore}
                  animateTo={percentAfter}
                  badgeText={`Séance ${seance.number}/${chapter.totalSeances} ✓`}
                />
              </div>

              {/* ── BLOC 5 : CTA ───────────────────────────────────── */}
              <div className="flex flex-col gap-3 pb-8">
                <SirajButton
                  variant="primary"
                  size="lg"
                  onClick={() => {
                    if (nextSeance) {
                      router.push(`/proto/seance/${nextSeance.id}`);
                    } else {
                      // No next séance defined yet — go to chapter
                      router.push(`/proto/chapitre/${seance.chapterSlug}`);
                    }
                  }}
                  className="w-full"
                >
                  {nextSeance ? "Séance suivante" : "Revenir au chapitre"}
                  <ArrowRight size={16} />
                </SirajButton>

                <SirajButton
                  variant="ghost"
                  size="md"
                  onClick={() => router.push("/proto/chapitres")}
                  className="w-full"
                >
                  <BookOpen size={16} />
                  Retour aux chapitres
                </SirajButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
