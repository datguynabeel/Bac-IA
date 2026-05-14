"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, LayoutGroup, useScroll, useTransform } from 'framer-motion';
import { 
  BookOpen, PlayCircle, CheckCircle2, Lock, Sparkles, 
  ArrowRight, Clock, Target, Zap, Award, ChevronDown, 
  Search, Menu, Globe, Shield, User
} from 'lucide-react';
import { ThemeToggle } from "@/components/ui/curtain-theme-toggle";

// ============================================================================
// SIRAJ DESIGN SYSTEM v1.1 — Showcase Immersif
// ----------------------------------------------------------------------------
// Conformité SIRAJ v1.8.2 :
// - Section 2.5 : Souveraineté culturelle (Phénotypes, Vocabulaire)
// - Section 13.1 : Identité Visuelle (Palette #E8B860, iOS Dark Glass)
// - Esthétique "Behind the Mac" : Flous profonds, bordures 0.5px, grilles
// ============================================================================

const tokens = {
  color: {
    gold: '#E8B860',
    goldSecondary: '#F2D399',
    dark: '#080C10',
    darkDeep: '#05070A',
    surface: 'rgba(255, 255, 255, 0.02)',
    surfaceHover: 'rgba(255, 255, 255, 0.05)',
    border: 'rgba(232, 184, 96, 0.1)',
    borderHover: 'rgba(232, 184, 96, 0.25)',
    borderWhite: 'rgba(255, 255, 255, 0.04)',
    cream: '#F5EDE0',
    creamMute: 'rgba(245, 237, 224, 0.5)',
    creamDim: 'rgba(245, 237, 224, 0.3)',
    glassBg: 'rgba(10, 15, 22, 0.7)',
    glassBorder: 'rgba(255, 255, 255, 0.08)',
  },
  blur: {
    sm: 'blur(10px)',
    md: 'blur(20px)',
    lg: 'blur(40px)',
    xl: 'blur(100px)',
  },
  radius: {
    full: '9999px',
    xl: '2.5rem',
    lg: '1.5rem',
    md: '1rem',
  }
};

// === ASSETS OFFICIELS (Public/Brand) ===
const assets = {
  logo: '/brand/siraj-logo-color.png',
  icon: '/brand/siraj-icon-only.png',
  medium: '/brand/siraj-medium.png',
  favicon: '/brand/siraj-favicon.png',
  hero: '/brand/siraj-hero-student.jpg',
  group: '/brand/siraj-students-group.jpg',
};

// === DONNÉES — Programme Maths 2Bac SM ===
const chapitres = [
  {
    id: 1,
    numero: '01',
    titre: 'Limites et continuité',
    description: 'Fondamentaux de l\'analyse : limites usuelles et théorèmes de continuité.',
    seances: 8,
    progression: 87,
    statut: 'en-cours',
    duree: '4h 30min',
    icon: Target,
  },
  {
    id: 2,
    numero: '02',
    titre: 'Dérivation et étude de fonctions',
    description: 'Analyse des variations, points critiques et optimisation fonctionnelle.',
    seances: 10,
    progression: 100,
    statut: 'terminé',
    duree: '5h 45min',
    icon: Zap,
  },
  {
    id: 3,
    numero: '03',
    titre: 'Fonctions logarithmes',
    description: 'Étude exhaustive du logarithme népérien et ses applications.',
    seances: 7,
    progression: 42,
    statut: 'en-cours',
    duree: '4h 00min',
    icon: BookOpen,
  },
  {
    id: 4,
    numero: '04',
    titre: 'Nombres complexes',
    description: 'Algèbre complexe, géométrie du plan et transformations.',
    seances: 9,
    progression: 0,
    statut: 'verrouillé',
    duree: '5h 15min',
    icon: Sparkles,
  },
];

const seancesChapitre1 = [
  { id: 1, titre: 'Limite finie en un réel', duree: '32 min', type: 'Cours', statut: 'terminé' },
  { id: 2, titre: 'Limite infinie en un réel', duree: '28 min', type: 'Cours', statut: 'terminé' },
  { id: 3, titre: 'Limites usuelles à connaître', duree: '24 min', type: 'Méthode', statut: 'terminé' },
  { id: 4, titre: "Continuité d'une fonction", duree: '35 min', type: 'Cours', statut: 'en-cours' },
  { id: 5, titre: 'Théorème des valeurs intermédiaires', duree: '30 min', type: 'Théorème', statut: 'à-faire' },
  { id: 6, titre: 'Exercices corrigés (Type Bac)', duree: '45 min', type: 'Exercices', statut: 'à-faire' },
];

// ============================================================================
// COMPOSANTS UI
// ============================================================================

function SirajButton({ children, variant = 'primary', size = 'md', onClick, disabled, className = "", icon: Icon }) {
  const styles = {
    primary: {
      bg: `linear-gradient(135deg, ${tokens.color.gold} 0%, ${tokens.color.goldSecondary} 100%)`,
      color: '#000',
      border: 'none',
      shadow: '0 8px 30px -5px rgba(232,184,96,0.3)',
    },
    secondary: {
      bg: 'rgba(255,255,255,0.03)',
      color: tokens.color.cream,
      border: '0.5px solid rgba(255,255,255,0.1)',
      shadow: 'none',
    },
    ghost: {
      bg: 'transparent',
      color: tokens.color.cream,
      border: '0.5px solid transparent',
      shadow: 'none',
    }
  };

  const s = styles[variant];

  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-3 rounded-full font-bold tracking-tight transition-all duration-300 ${size === 'lg' ? 'px-10 py-4 text-sm' : size === 'sm' ? 'px-5 py-2 text-xs' : 'px-8 py-3.5 text-xs'} ${className}`}
      style={{
        background: s.bg,
        color: s.color,
        border: s.border,
        boxShadow: s.shadow,
        backdropBlur: variant !== 'primary' ? '20px' : 'none'
      }}
    >
      {children}
      {Icon && <Icon className="w-4 h-4" />}
    </motion.button>
  );
}

function SectionHeader({ eyebrow, title, count }) {
  return (
    <div className="flex flex-col items-center text-center mb-16">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border border-white/5 bg-white/2 backdrop-blur-md">
        <Sparkles className="w-3 h-3 text-[#E8B860]" />
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-70">{eyebrow}</span>
      </div>
      <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>{title}</h2>
      {count && (
        <div className="text-xs font-medium tracking-[0.2em] uppercase opacity-30">{count}</div>
      )}
    </div>
  );
}

// ============================================================================
// MAIN PAGE
// ============================================================================

export default function TestPremiumPage() {
  const [selectedChapitre, setSelectedChapitre] = useState(null);
  
  // Parallax Hero
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-screen w-full bg-[#F5EDE0] dark:bg-[#080C10] text-[#0F1419] dark:text-[#F5EDE0] selection:bg-[#E8B860]/30 overflow-x-hidden transition-colors duration-500" style={{ fontFamily: 'Inter, sans-serif' }}>
      
      {/* THEME TOGGLE */}
      <div style={{
        position: "fixed",
        top: "20px",
        left: "20px",
        zIndex: 9999,
      }}>
        <ThemeToggle 
          variant="icon" 
          defaultTheme="dark"
          buttonSize={44}
          duration={600}
          onThemeChange={(theme) => console.log("SIRAJ theme:", theme)}
        />
      </div>

      {/* 1. ELEMENTS DE FOND - Behind the Mac */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[50vw] h-[50vw] rounded-full mix-blend-screen filter blur-[120px] opacity-10" 
             style={{ background: `radial-gradient(circle, ${tokens.color.gold} 0%, transparent 70%)` }} />
        <div className="absolute bottom-[-15%] right-[-5%] w-[60vw] h-[60vw] rounded-full mix-blend-screen filter blur-[150px] opacity-10" 
             style={{ background: `radial-gradient(circle, ${tokens.color.goldSecondary} 0%, transparent 70%)` }} />
        
        {/* Grid Pattern 0.5px */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: `radial-gradient(${tokens.color.gold} 0.5px, transparent 0.5px)`, backgroundSize: '40px 40px' }} />
        
        {/* Film Grain */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
      </div>

      {/* 2. NAVIGATION FLOTTANTE */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-[92%] max-w-6xl px-8 py-3.5 rounded-full backdrop-blur-3xl border border-white/5 transition-all duration-500 shadow-2xl"
           style={{ background: 'rgba(10, 15, 22, 0.7)' }}>
        <div className="flex items-center gap-4">
          <img src={assets.logo} alt="SIRAJ" className="h-9 w-auto object-contain" />
          <div className="hidden sm:block h-5 w-[0.5px] bg-white/10 mx-2" />
          <span className="hidden sm:block font-bold tracking-[0.2em] text-[10px] uppercase opacity-40" style={{ fontFamily: 'Manrope, sans-serif' }}>Excellence SM</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-10 text-[11px] font-bold tracking-[0.1em] uppercase opacity-60">
          <a href="#" className="hover:text-[#E8B860] transition-colors">Programme</a>
          <a href="#" className="hover:text-[#E8B860] transition-colors">Intelligence</a>
          <a href="#" className="hover:text-[#E8B860] transition-colors">Souveraineté</a>
        </div>

        <div className="flex items-center gap-3">
          <SirajButton variant="ghost" size="sm" className="hidden md:flex">Connexion</SirajButton>
          <SirajButton variant="primary" size="sm">Démarrer</SirajButton>
        </div>
      </nav>

      {/* 3. HERO SECTION - Immersive Cinematic */}
      <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
        <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <img src={assets.hero} alt="Student" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080C10]/80 via-transparent to-[#080C10]" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full mb-10 border border-[#E8B860]/20 bg-[#E8B860]/5 backdrop-blur-xl">
              <Sparkles className="w-4 h-4 text-[#E8B860] animate-pulse" />
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#E8B860]">Le futur du Bac commence ici</span>
            </div>
            
            <h1 className="text-6xl md:text-9xl font-bold tracking-tight mb-8 leading-[0.95]" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Maîtrise ton Bac,<br />
              <span className="relative">
                <span style={{ 
                  background: `linear-gradient(135deg, ${tokens.color.gold} 0%, #FFF 50%, ${tokens.color.goldSecondary} 100%)`, 
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' 
                }}>éclaire ta voie.</span>
              </span>
            </h1>

            <p className="text-lg md:text-2xl font-light mb-14 max-w-3xl mx-auto leading-relaxed" style={{ color: tokens.color.creamMute }}>
              Une architecture pédagogique de précision, conçue exclusivement pour les Sciences Mathématiques du Maroc.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <SirajButton variant="primary" size="lg" icon={ArrowRight}>Accès Pilote</SirajButton>
              <SirajButton variant="secondary" size="lg">Découvrir la vision</SirajButton>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase">Scrollez</span>
          <div className="w-[0.5px] h-12 bg-gradient-to-b from-[#E8B860] to-transparent" />
        </motion.div>
      </section>

      {/* 4. SHOWCASE BENTO GRID */}
      <section className="relative z-10 py-32 px-6 max-w-7xl mx-auto">
        <SectionHeader 
          eyebrow="L'Expérience" 
          title="Le Programme National" 
          count="Filière : Sciences Mathématiques (SM)" 
        />

        <LayoutGroup>
          <AnimatePresence mode="wait">
            {selectedChapitre ? (
              <motion.div
                key="detail"
                layoutId={`card-${selectedChapitre.id}`}
                className="relative bg-[#0A0F16]/80 rounded-[3rem] p-12 border border-[#E8B860]/20 backdrop-blur-3xl overflow-hidden min-h-[600px]"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Detail View Content */}
                <div className="absolute top-10 right-10">
                  <SirajButton variant="ghost" size="sm" onClick={() => setSelectedChapitre(null)}>Fermer</SirajButton>
                </div>

                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-8 mb-16">
                    <div className="w-20 h-20 rounded-3xl flex items-center justify-center border border-[#E8B860]/30" style={{ background: 'rgba(232, 184, 96, 0.05)' }}>
                      <selectedChapitre.icon className="w-10 h-10 text-[#E8B860]" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold tracking-[0.4em] uppercase text-[#E8B860] mb-2">Unité {selectedChapitre.numero}</div>
                      <h3 className="text-4xl md:text-5xl font-bold tracking-tight">{selectedChapitre.titre}</h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 flex-1">
                    {/* Séances List */}
                    <div className="space-y-4">
                      <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-30 mb-6">Contenu de l'unité</h4>
                      {seancesChapitre1.map((s, idx) => (
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + idx * 0.05 }}
                          key={s.id} 
                          className="group flex items-center justify-between p-5 rounded-2xl border border-white/5 bg-white/1 hover:bg-white/3 hover:border-[#E8B860]/30 transition-all duration-300 cursor-pointer"
                        >
                          <div className="flex items-center gap-5">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${s.statut === 'terminé' ? 'bg-[#E8B860]/10 border-[#E8B860]/30' : 'bg-white/5 border-white/10'}`}>
                              {s.statut === 'terminé' ? <CheckCircle2 className="w-5 h-5 text-[#E8B860]" /> : <PlayCircle className="w-5 h-5 opacity-40" />}
                            </div>
                            <div>
                              <div className="text-sm font-bold tracking-tight mb-1">{s.titre}</div>
                              <div className="text-[10px] opacity-40 font-medium">{s.type} · {s.duree}</div>
                            </div>
                          </div>
                          <ChevronDown className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -rotate-90 text-[#E8B860]" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Exercise Highlight */}
                    <div className="relative rounded-[2rem] border border-[#E8B860]/10 bg-[#E8B860]/2 p-10 overflow-hidden">
                       <div className="absolute top-0 right-0 p-8 opacity-5">
                         <Award className="w-32 h-32" />
                       </div>
                       <div className="relative z-10">
                         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8B860]/10 border border-[#E8B860]/20 mb-8">
                           <Award className="w-3.5 h-3.5 text-[#E8B860]" />
                           <span className="text-[9px] font-bold tracking-widest uppercase text-[#E8B860]">Type Bac National</span>
                         </div>
                         <h5 className="text-xl font-bold mb-6">Prolongement par continuité</h5>
                         <p className="text-base font-light leading-relaxed mb-8 opacity-70">
                           Soit <em className="font-serif">f</em> définie sur ℝ* par :
                         </p>
                         <div className="flex justify-center my-10 text-3xl font-serif italic border-y border-white/5 py-8">
                           f(x) = (eˣ - 1) / x
                         </div>
                         <p className="text-sm font-light leading-relaxed opacity-70">
                           Montrez que <em className="font-serif">f</em> admet un prolongement par continuité en 0.
                         </p>
                         <div className="mt-10 flex gap-4">
                           <SirajButton variant="primary" size="sm">Indices IA</SirajButton>
                           <SirajButton variant="secondary" size="sm">Correction</SirajButton>
                         </div>
                       </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="grid"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {chapitres.map((c) => (
                  <motion.div
                    layoutId={`card-${c.id}`}
                    key={c.id}
                    onClick={() => c.statut !== 'verrouillé' && setSelectedChapitre(c)}
                    className={`group relative h-[420px] rounded-[2.5rem] p-8 border transition-all duration-700 cursor-pointer overflow-hidden ${c.statut === 'verrouillé' ? 'opacity-40 grayscale pointer-events-none' : 'hover:border-[#E8B860]/40'}`}
                    style={{ background: tokens.color.surface, borderColor: 'rgba(255,255,255,0.04)' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#E8B860]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <div className="relative z-10 flex flex-col justify-between h-full">
                      <div className="flex items-start justify-between">
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center border border-white/5" style={{ background: 'rgba(255,255,255,0.02)' }}>
                          {c.statut === 'verrouillé' ? <Lock className="w-6 h-6 opacity-40" /> : <c.icon className="w-7 h-7 text-[#E8B860]" />}
                        </div>
                        <div className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-30">U{c.numero}</div>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold mb-3 tracking-tight leading-tight">{c.titre}</h3>
                        <p className="text-sm font-light opacity-50 mb-8 leading-relaxed">{c.description}</p>
                        
                        <div className="space-y-4">
                          <div className="flex items-center justify-between text-[10px] font-bold tracking-widest uppercase">
                            <span className="opacity-30">Progression</span>
                            <span className="text-[#E8B860]">{c.progression}%</span>
                          </div>
                          <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${c.progression}%` }}
                              transition={{ duration: 1.5, delay: 0.5 }}
                              className="h-full bg-gradient-to-r from-[#E8B860]/40 to-[#E8B860]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </LayoutGroup>
      </section>

      {/* 5. CULTURAL TRUST SECTION */}
      <section className="py-32 px-6 bg-[#05070A]/50 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 border border-emerald-500/10 bg-emerald-500/5">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-emerald-400">Conformité Institutionnelle</span>
             </div>
             <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8" style={{ fontFamily: 'Manrope, sans-serif' }}>
               L'IA au service du<br />Programme National.
             </h2>
             <p className="text-lg font-light leading-relaxed opacity-60 mb-10 max-w-xl">
               SIRAJ n'est pas un simple outil générique. Chaque grain de donnée est audité pour correspondre aux exigences du Baccalauréat marocain.
             </p>
             <div className="grid grid-cols-2 gap-8">
               <div>
                 <div className="text-2xl font-bold mb-1 text-[#E8B860]">100%</div>
                 <div className="text-[10px] font-bold tracking-widest uppercase opacity-40">Alignement MEN</div>
               </div>
               <div>
                 <div className="text-2xl font-bold mb-1 text-[#E8B860]">SM/PC/SVT</div>
                 <div className="text-[10px] font-bold tracking-widest uppercase opacity-40">Filières Couvertes</div>
               </div>
             </div>
          </div>
          <div className="flex-1 relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl relative group">
              <img src={assets.group} alt="Students" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080C10] via-transparent to-transparent opacity-60" />
            </div>
            {/* Overlay UI Badge */}
            <div className="absolute -bottom-10 -left-10 p-8 rounded-3xl bg-[#0A0F16]/90 border border-[#E8B860]/20 backdrop-blur-2xl shadow-2xl hidden md:block max-w-[280px]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="font-bold text-sm">Souveraineté</div>
              </div>
              <p className="text-xs font-light opacity-50 leading-relaxed">
                Cartographie et contenus respectant l'intégrité territoriale et culturelle du Royaume.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FOOTER FINALE */}
      <footer className="py-40 px-6 text-center relative overflow-hidden">
        <div className="relative z-10">
          <img src={assets.medium} alt="SIRAJ" className="h-20 mx-auto mb-10 opacity-40 hover:opacity-100 transition-opacity duration-700" />
          <h2 className="text-3xl font-bold mb-12 tracking-tight">Prêt pour l'excellence ?</h2>
          <SirajButton variant="primary" size="lg">Demander un accès précoce</SirajButton>
          
          <div className="mt-32 flex flex-col items-center gap-8">
            <div className="flex items-center gap-10 text-[10px] font-bold tracking-[0.2em] uppercase opacity-30">
              <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
              <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
            <div className="text-[9px] font-medium tracking-[0.4em] uppercase opacity-20">
              © 2026 SIRAJ TECHNOLOGY · ROYAUME DU MAROC
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
