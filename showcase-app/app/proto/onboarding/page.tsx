"use client";

import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useOnboarding } from "../onboarding-context";
import {
  selectNextItem,
  getNewTarget,
  calculateMastery,
  getRecommendations,
  THEME_ORDER,
  DiagnosticTheme
} from "../../../lib/proto/diagnostic-engine";
import { chaptersData } from "../../../lib/mock-data";
import KatexInline from "../../../components/proto/KatexInline";
import SirajButton from "../../../components/proto/SirajButton";
import { ChevronRight, Sparkles, Check, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";

// ---------------------------------------------------------------------------
// Animated Mastery Meter
// ---------------------------------------------------------------------------

function MasteryMeter({ label, value, index }: { label: string; value: number; index: number }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    // Stagger count-up animation
    const timer = setTimeout(() => {
      let current = 0;
      const step = Math.ceil(value / 30);
      const interval = setInterval(() => {
        current += step;
        if (current >= value) {
          current = value;
          clearInterval(interval);
        }
        setDisplayValue(current);
      }, 25);
      return () => clearInterval(interval);
    }, index * 200);

    return () => clearTimeout(timer);
  }, [value, index]);

  const getStatusColor = (v: number) => {
    if (v >= 75) return "#22c55e"; // Green
    if (v >= 50) return "#E8B860"; // Gold
    return "#ef4444"; // Red
  };

  const getStatusText = (v: number) => {
    if (v >= 75) return "Déjà solide";
    if (v >= 50) return "À consolider";
    return "À renforcer";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.1 }}
      className="p-4 rounded-2xl border backdrop-blur-xl flex flex-col gap-2"
      style={{
        background: "rgba(245, 237, 224, 0.02)",
        borderColor: "rgba(245, 237, 224, 0.06)"
      }}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold" style={{ color: "#F5EDE0" }}>
          {label}
        </span>
        <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{
          backgroundColor: `${getStatusColor(value)}15`,
          color: getStatusColor(value),
          border: `1px solid ${getStatusColor(value)}30`
        }}>
          {getStatusText(value)}
        </span>
      </div>

      <div className="flex items-center gap-4">
        {/* Track bar */}
        <div className="flex-1 h-2 rounded-full overflow-hidden relative" style={{ backgroundColor: "rgba(245, 237, 224, 0.05)" }}>
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: `${value}%` }}
            transition={{ duration: 1.2, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-y-0 left-0 rounded-full"
            style={{
              background: `linear-gradient(90deg, ${getStatusColor(value)}dd, ${getStatusColor(value)})`,
              boxShadow: `0 0 10px ${getStatusColor(value)}60`
            }}
          />
        </div>
        <span className="text-sm font-bold tabular-nums min-w-[32px] text-right" style={{ color: getStatusColor(value) }}>
          {displayValue}%
        </span>
      </div>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Onboarding Wizard
// ---------------------------------------------------------------------------

export default function OnboardingPage() {
  const router = useRouter();
  const { setResult } = useOnboarding();

  // Wizard state
  const [step, setStep] = useState(0);
  const [prenom, setPrenom] = useState("Yasmine");
  const [langue, setLangue] = useState<"fr" | "darija" | "ar" | "mix">("mix");

  // Diagnostic engine state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [targetDifficulty, setTargetDifficulty] = useState(2);
  const [answers, setAnswers] = useState<
    Array<{
      itemId: string;
      correct: boolean;
      difficulty: number;
      theme: DiagnosticTheme;
    }>
  >([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  // Compute results states (cached locally for Step 4)
  const [diagnosticMastery, setDiagnosticMastery] = useState<Record<DiagnosticTheme, number> | null>(null);
  const [diagnosticRecs, setDiagnosticRecs] = useState<string[]>([]);

  // Direction of Framer Motion slide animation
  const [dir, setDir] = useState(1);

  // Auto-scroll layout to top on step change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step, currentQuestionIndex]);

  // Current active question
  const activeTheme = THEME_ORDER[currentQuestionIndex];
  const activeQuestion = activeTheme ? selectNextItem(activeTheme, targetDifficulty) : null;

  // Wizard Navigation Actions
  const handleNextStep = () => {
    setDir(1);
    setStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    if (step > 0) {
      setDir(-1);
      setStep((prev) => prev - 1);
    }
  };

  // Submit diagnosis question
  const handleAnswerSubmit = () => {
    if (selectedOption === null || !activeQuestion) return;

    const isCorrect = selectedOption === activeQuestion.correctIndex;
    const newAnswers = [
      ...answers,
      {
        itemId: activeQuestion.id,
        correct: isCorrect,
        difficulty: activeQuestion.difficulty,
        theme: activeQuestion.theme
      }
    ];

    setAnswers(newAnswers);

    // If there are more questions, advance the index and adjust target difficulty
    if (currentQuestionIndex < 4) {
      const nextTarget = getNewTarget(isCorrect, activeQuestion.difficulty);
      setTargetDifficulty(nextTarget);
      setSelectedOption(null);
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // End of questions, calculate final scores
      const mastery: Record<DiagnosticTheme, number> = {
        Limites: 0,
        Dérivation: 0,
        "Log/Exp": 0,
        Suites: 0,
        Complexes: 0
      };

      newAnswers.forEach((ans) => {
        mastery[ans.theme] = calculateMastery(ans.correct, ans.difficulty);
      });

      const recs = getRecommendations(mastery);

      setDiagnosticMastery(mastery);
      setDiagnosticRecs(recs);

      // Save Context State immediately
      setResult({
        prenom: prenom.trim() || "Élève",
        langue,
        mastery,
        recommendedChapterSlugs: recs
      });

      // Transition to results step
      setStep(4);
    }
  };

  // Final Action -> Chapter Selection
  const handleFinalRedirect = () => {
    router.push("/proto/chapitres");
  };

  // Page Header Logo
  const renderLogoHeader = () => (
    <div className="flex items-center justify-center gap-3 mb-8">
      <div className="relative overflow-hidden shrink-0" style={{ width: 32, height: 32, borderRadius: 8 }}>
        <Image
          src="/brand/siraj-app-icon-6a.png"
          alt="SIRAJ"
          width={32}
          height={32}
          className="object-cover"
        />
      </div>
      <span className="text-xl font-bold tracking-wider" style={{ fontFamily: "var(--font-manrope)", color: "#F5EDE0" }}>
        SIRAJ
      </span>
    </div>
  );

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 120 : -120,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 350,
        damping: 30
      }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -120 : 120,
      opacity: 0,
      transition: {
        duration: 0.2
      }
    })
  };

  return (
    <div className="w-full max-w-[640px] mx-auto px-5 py-8 min-h-screen flex flex-col justify-center">
      {renderLogoHeader()}

      <div className="flex-1 flex flex-col justify-center py-4 relative overflow-hidden">
        <AnimatePresence mode="wait" custom={dir}>
          {step === 0 && (
            <motion.div
              key="step0"
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex flex-col gap-6"
            >
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold tracking-tight" style={{ fontFamily: "var(--font-manrope)", color: "#F5EDE0" }}>
                  Salut ! Avant de commencer, comment tu t'appelles ?
                </h2>
                <p className="text-sm opacity-60">Saisis ton prénom pour personnaliser ton parcours.</p>
              </div>

              {/* Form Input */}
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                  placeholder="Ton prénom..."
                  className="w-full px-5 py-4 rounded-xl outline-none text-base transition-all duration-300 text-center"
                  style={{
                    backgroundColor: "rgba(245, 237, 224, 0.03)",
                    border: "1px solid rgba(245, 237, 224, 0.08)",
                    color: "#F5EDE0",
                    caretColor: "#E8B860",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#E8B860";
                    e.target.style.boxShadow = "0 0 15px rgba(232, 184, 96, 0.15)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(245, 237, 224, 0.08)";
                    e.target.style.boxShadow = "none";
                  }}
                  id="onboarding-name-input"
                />

                {/* Locked Filière Badge */}
                <div
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border w-full text-sm"
                  style={{
                    backgroundColor: "rgba(232, 184, 96, 0.02)",
                    borderColor: "rgba(232, 184, 96, 0.15)",
                    color: "rgba(245, 237, 224, 0.6)"
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#E8B860" }} />
                  Filière : <strong style={{ color: "#E8B860" }}>2e Bac · Sciences Mathématiques</strong>
                </div>
              </div>

              <SirajButton
                variant="primary"
                size="lg"
                onClick={handleNextStep}
                disabled={!prenom.trim()}
                className="w-full mt-2"
              >
                Continuer
                <ArrowRight size={16} />
              </SirajButton>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step1"
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex flex-col gap-6"
            >
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold tracking-tight" style={{ fontFamily: "var(--font-manrope)", color: "#F5EDE0" }}>
                  Tu préfères qu'on te parle en :
                </h2>
                <p className="text-sm opacity-60">Tu pourras changer de langue à tout moment avec ton tuteur.</p>
              </div>

              {/* Language Selection Grid */}
              <div className="grid grid-cols-2 gap-4">
                {(
                  [
                    { id: "fr", label: "Français", isArabic: false },
                    { id: "darija", label: "Darija", isArabic: false },
                    { id: "ar", label: "العربية الفصحى", isArabic: true },
                    { id: "mix", label: "Mix darija-français", isArabic: false }
                  ] as const
                ).map((option) => {
                  const isSelected = langue === option.id;
                  return (
                    <button
                      key={option.id}
                      onClick={() => setLangue(option.id)}
                      className="p-5 rounded-2xl border text-center transition-all duration-300 flex items-center justify-center min-h-[90px] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#E8B860]"
                      style={{
                        backgroundColor: isSelected ? "rgba(232, 184, 96, 0.08)" : "rgba(245, 237, 224, 0.02)",
                        borderColor: isSelected ? "#E8B860" : "rgba(245, 237, 224, 0.08)",
                        boxShadow: isSelected ? "0 0 15px rgba(232, 184, 96, 0.12)" : "none",
                        color: isSelected ? "#E8B860" : "#F5EDE0"
                      }}
                    >
                      <span
                        className="text-base font-semibold leading-tight"
                        style={{
                          fontFamily: option.isArabic ? "var(--font-ibm-plex-sans-arabic)" : "inherit",
                          direction: option.isArabic ? "rtl" : "ltr"
                        }}
                      >
                        {option.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="flex gap-3 mt-4">
                <SirajButton variant="ghost" size="lg" onClick={handlePrevStep} className="flex-1">
                  Retour
                </SirajButton>
                <SirajButton variant="primary" size="lg" onClick={handleNextStep} className="flex-[2]">
                  Continuer
                  <ArrowRight size={16} />
                </SirajButton>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex flex-col gap-6"
            >
              <div className="p-8 rounded-3xl border text-center flex flex-col gap-6 relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(232,184,96,0.06), rgba(232,184,96,0.01))",
                  borderColor: "rgba(232, 184, 96, 0.2)"
                }}
              >
                <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "rgba(232,184,96,0.12)" }}>
                  <Sparkles size={28} className="text-[#E8B860]" />
                </div>

                <div className="space-y-3">
                  <h2 className="text-3xl font-bold tracking-tight" style={{ fontFamily: "var(--font-manrope)", color: "#F5EDE0" }}>
                    Diagnostic Adaptatif
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(245, 237, 224, 0.8)" }}>
                    <strong>5 questions rapides</strong> pour situer précisément ton niveau.
                  </p>
                  <p className="text-xs" style={{ color: "rgba(245, 237, 224, 0.5)" }}>
                    Pas de chronomètre, pas de stress — réponds juste au mieux de tes connaissances. La difficulté s'adapte à tes réponses !
                  </p>
                </div>
              </div>

              <div className="flex gap-3 mt-2">
                <SirajButton variant="ghost" size="lg" onClick={handlePrevStep} className="flex-1">
                  Retour
                </SirajButton>
                <SirajButton variant="primary" size="lg" onClick={handleNextStep} className="flex-[2]">
                  C'est parti !
                  <ArrowRight size={16} />
                </SirajButton>
              </div>
            </motion.div>
          )}

          {step === 3 && activeQuestion && (
            <motion.div
              key={`q-${currentQuestionIndex}`}
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex flex-col gap-5"
            >
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold opacity-60">
                  <span>Question {currentQuestionIndex + 1} sur 5</span>
                  <span>Thème : {activeTheme}</span>
                </div>
                {/* Track */}
                <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: "rgba(245, 237, 224, 0.08)" }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: "#E8B860" }}
                    animate={{ width: `${((currentQuestionIndex + 1) / 5) * 100}%` }}
                    transition={{ type: "spring", stiffness: 120, damping: 20 }}
                  />
                </div>
              </div>

              {/* Question Statement Box */}
              <div className="p-8 rounded-2xl border text-center flex flex-col justify-center min-h-[140px]"
                style={{
                  backgroundColor: "rgba(245, 237, 224, 0.02)",
                  borderColor: "rgba(245, 237, 224, 0.08)"
                }}
              >
                <div className="text-xl font-medium tracking-wide">
                  <KatexInline text={activeQuestion.enonce} />
                </div>
              </div>

              {/* Options */}
              <div className="flex flex-col gap-3">
                {activeQuestion.options.map((option, optIdx) => {
                  const isSelected = selectedOption === optIdx;
                  return (
                    <button
                      key={optIdx}
                      onClick={() => setSelectedOption(optIdx)}
                      className="p-4 rounded-xl border text-left transition-all duration-200 flex items-center justify-between focus:outline-none focus-visible:ring-1 focus-visible:ring-[#E8B860]"
                      style={{
                        backgroundColor: isSelected ? "rgba(232, 184, 96, 0.08)" : "rgba(245, 237, 224, 0.02)",
                        borderColor: isSelected ? "#E8B860" : "rgba(245, 237, 224, 0.08)",
                        color: isSelected ? "#E8B860" : "#F5EDE0"
                      }}
                    >
                      <span className="text-sm font-medium">
                        <KatexInline text={option} />
                      </span>
                      {isSelected && <Check size={16} className="text-[#E8B860] shrink-0 ml-2" />}
                    </button>
                  );
                })}
              </div>

              <SirajButton
                variant="primary"
                size="lg"
                onClick={handleAnswerSubmit}
                disabled={selectedOption === null}
                className="w-full mt-2"
              >
                {currentQuestionIndex === 4 ? "Terminer le diagnostic" : "Question suivante"}
                <ArrowRight size={16} />
              </SirajButton>
            </motion.div>
          )}

          {step === 4 && diagnosticMastery && (
            <motion.div
              key="step4"
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex flex-col gap-6"
            >
              <div className="text-center space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-1" style={{
                  backgroundColor: "rgba(34, 197, 94, 0.1)",
                  border: "1px solid rgba(34, 197, 94, 0.2)",
                  color: "#22c55e"
                }}>
                  <CheckCircle2 size={14} />
                  <span className="text-xs font-semibold uppercase tracking-wider">Diagnostic complété</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tight" style={{ fontFamily: "var(--font-manrope)", color: "#F5EDE0" }}>
                  Voici où tu en es, {prenom}
                </h2>
                <p className="text-sm opacity-60">Ton profil de maîtrise a été analysé avec succès.</p>
              </div>

              {/* Mastery Meters List */}
              <div className="flex flex-col gap-3">
                {THEME_ORDER.map((theme, index) => (
                  <MasteryMeter
                    key={theme}
                    label={theme}
                    value={diagnosticMastery[theme] ?? 0}
                    index={index}
                  />
                ))}
              </div>

              {/* Recommended Chapters */}
              <div className="mt-4 p-6 rounded-2xl border flex flex-col gap-4"
                style={{
                  backgroundColor: "rgba(232, 184, 96, 0.03)",
                  borderColor: "rgba(232, 184, 96, 0.15)"
                }}
              >
                <div className="flex items-center gap-2">
                  <Sparkles size={18} className="text-[#E8B860]" />
                  <h3 className="text-base font-bold" style={{ color: "#E8B860" }}>
                    Chapitres recommandés pour toi
                  </h3>
                </div>

                <div className="flex flex-col gap-2">
                  {diagnosticRecs.map((slug) => {
                    const ch = chaptersData.find((c) => c.slug === slug);
                    if (!ch) return null;
                    return (
                      <div
                        key={slug}
                        className="p-3.5 rounded-xl border flex items-center justify-between"
                        style={{
                          backgroundColor: "rgba(245, 237, 224, 0.02)",
                          borderColor: "rgba(245, 237, 224, 0.06)"
                        }}
                      >
                        <div>
                          <span className="text-xs font-semibold opacity-40 uppercase tracking-widest block mb-0.5">
                            Chapitre {ch.id}
                          </span>
                          <span className="text-sm font-semibold" style={{ color: "#F5EDE0" }}>
                            {ch.title}
                          </span>
                        </div>
                        <span className="text-xs opacity-50">
                          {ch.totalSeances} séances
                        </span>
                      </div>
                    );
                  })}
                </div>

                {diagnosticRecs.length === 2 && (
                  <p className="text-xs text-center italic opacity-60 mt-1">
                    Bonne base, on consolide !
                  </p>
                )}
              </div>

              <SirajButton
                variant="primary"
                size="lg"
                onClick={handleFinalRedirect}
                className="w-full mt-4"
              >
                Découvrir mon programme
                <ArrowRight size={16} />
              </SirajButton>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
