"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, LayoutGroup, useScroll, useTransform } from 'framer-motion';
import { 
  BookOpen, PlayCircle, CheckCircle2, Lock, Sparkles, 
  ArrowRight, Clock, Target, Zap, Award, ChevronDown, 
  Search, Menu, Globe, Shield, User, HelpCircle, PenLine
} from 'lucide-react';


// ============================================================================
// SIRAJ DESIGN SYSTEM v1.2 — Showcase Dark-Only
// ----------------------------------------------------------------------------
// Conformité SIRAJ v1.8.4 :
// - Section 2.5 : Vocabulaire officiel (Chapitre, Tuteur IA)
// - Section 13.1 : Identité Visuelle (Palette #E8B860, iOS Dark Glass)
// - Mode light abandonné — rendu showcase pur dark uniquement
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

// ============================================================================
// COMPOSANTS UI
// ============================================================================

function SirajButton({ children, variant = 'primary', size = 'md', onClick, disabled, className = "", icon: Icon, href }) {
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
  const Tag = href ? motion.a : motion.button;

  return (
    <Tag
      href={href}
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
        backdropBlur: variant !== 'primary' ? '20px' : 'none',
        textDecoration: 'none',
      }}
    >
      {children}
      {Icon && <Icon className="w-4 h-4" />}
    </Tag>
  );
}

// ============================================================================
// MAIN PAGE
// ============================================================================

export default function TestPremiumPage() {
  // Parallax Hero
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Chapter data
  const chapitres = [
    {
      numero: '01', titre: 'Limites et continuité',
      sousTitre: 'Limites usuelles, théorèmes de continuité, prolongements',
      seances: 8, duree: '4h 30min', progression: 87,
      icon: Target, statut: 'en-cours',
    },
    {
      numero: '02', titre: 'Dérivation et étude de fonctions',
      sousTitre: 'Dérivées usuelles, sens de variation, optimisation',
      seances: 10, duree: '5h 45min', progression: 100,
      icon: Zap, statut: 'terminé',
    },
    {
      numero: '03', titre: 'Fonctions logarithmes',
      sousTitre: 'Logarithme népérien, propriétés, équations',
      seances: 7, duree: '4h 00min', progression: 42,
      icon: BookOpen, statut: 'en-cours',
    },
    {
      numero: '04', titre: 'Nombres complexes',
      sousTitre: 'Forme algébrique, trigonométrique, exponentielle',
      seances: 9, duree: '5h 15min', progression: 0,
      icon: Lock, statut: 'verrouillé',
    },
  ];

  // Method cards data
  const methodeCards = [
    {
      eyebrow: 'MOMENT 01', icon: HelpCircle,
      titre: 'Quand tu bloques.',
      body: "Tu bloques sur une limite en 0 indéterminée. SIRAJ ne te donne pas la réponse — il te propose trois angles de relecture du théorème pour que tu trouves toi-même.",
    },
    {
      eyebrow: 'MOMENT 02', icon: PenLine,
      titre: 'Quand tu pratiques.',
      body: "Tu travailles un exercice de dérivation. SIRAJ vérifie chaque ligne, signale l'erreur de calcul à la 3ème étape, et te demande de la corriger seul avant de continuer.",
    },
    {
      eyebrow: 'MOMENT 03', icon: Target,
      titre: 'Quand tu révises.',
      body: "À 15 jours du Bac National, SIRAJ identifie tes chapitres faibles à partir de ta progression et te propose un plan de révision ciblé, séance par séance.",
    },
  ];

  return (
    <div id="top" className="min-h-screen w-full bg-[#080C10] text-[#F5EDE0] selection:bg-[#E8B860]/30 overflow-x-hidden" style={{ fontFamily: 'Inter, sans-serif', scrollBehavior: 'smooth' }}>
      

      {/* 1. ELEMENTS DE FOND */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[50vw] h-[50vw] rounded-full mix-blend-screen filter blur-[120px] opacity-10" 
             style={{ background: `radial-gradient(circle, ${tokens.color.gold} 0%, transparent 70%)` }} />
        <div className="absolute bottom-[-15%] right-[-5%] w-[60vw] h-[60vw] rounded-full mix-blend-screen filter blur-[150px] opacity-10" 
             style={{ background: `radial-gradient(circle, ${tokens.color.goldSecondary} 0%, transparent 70%)` }} />
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: `radial-gradient(${tokens.color.gold} 0.5px, transparent 0.5px)`, backgroundSize: '40px 40px' }} />
        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
      </div>

      {/* 2. NAVIGATION FLOTTANTE */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-[92%] max-w-6xl px-8 py-3.5 rounded-full backdrop-blur-3xl border border-white/5 transition-all duration-500 shadow-2xl"
           style={{ background: 'rgba(10, 15, 22, 0.7)' }}>
        <div className="flex items-center gap-4">
          <a href="#top" className="cursor-pointer hover:opacity-80 transition-opacity">
            <img src={assets.logo} alt="SIRAJ" className="h-9 w-auto object-contain" />
          </a>
          <div className="hidden sm:block h-5 w-[0.5px] bg-white/10 mx-2" />
          <span className="hidden sm:block font-bold tracking-[0.2em] text-[10px] uppercase opacity-40" style={{ fontFamily: 'Manrope, sans-serif' }}>Excellence SM</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-10 text-[11px] font-bold tracking-[0.1em] uppercase opacity-60">
          <a href="#programme" className="hover:text-[#E8B860] transition-colors">Programme</a>
          <a href="#methode" className="hover:text-[#E8B860] transition-colors">Tuteur IA</a>
          <a href="#vision" className="hover:text-[#E8B860] transition-colors">Méthode</a>
        </div>

        <div className="flex items-center gap-3">
          <SirajButton variant="ghost" size="sm" className="hidden md:flex">Connexion</SirajButton>
          <SirajButton variant="primary" size="sm">Démarrer</SirajButton>
        </div>
      </nav>

      {/* 3. HERO SECTION — Full-bleed photo, texte aligné gauche */}
      <section className="relative h-screen w-full flex items-end overflow-hidden">
        <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <img src={assets.hero} alt="Student" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080C10] via-[#080C10]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080C10] via-transparent to-transparent opacity-80" />
        </motion.div>

        <div className="relative z-10 px-6 md:pl-16 pb-24 md:pb-32 max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-10 border border-[#E8B860]/20 bg-[#0A0F16]/40 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-[#E8B860] animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#E8B860]">L'IA PÉDAGOGIQUE DU BAC MAROCAIN</span>
            </div>
            
            <h1 className="text-[40px] md:text-[64px] font-bold tracking-tight mb-8" style={{ fontFamily: 'Manrope, sans-serif', lineHeight: '1.05' }}>
              <span className="text-[#F5EDE0] whitespace-nowrap">Maîtrise ton programme,</span><br />
              <span style={{ 
                background: 'linear-gradient(135deg, #E8B860 0%, #F5EDE0 50%, #E8B860 100%)', 
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' 
              }}>chapitre par chapitre.</span>
            </h1>

            <p className="text-base text-[#F5EDE0]/70 mb-10 max-w-xl leading-relaxed">
              Le programme officiel 2ème Bac Sciences Mathématiques, structuré en 12 chapitres, avec un Tuteur IA qui t'accompagne sur chaque démonstration.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="#programme" className="inline-flex items-center justify-center gap-3 bg-[#E8B860] text-[#0A0F16] px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-[#F0C570] transition-colors">
                Démarrer mon Bac
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#vision" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-[#E8B860] border border-[#E8B860]/40 hover:border-[#E8B860] hover:bg-[#E8B860]/5 transition-all">
                Découvrir la vision
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 text-white/40"
          animate={{ y: [0, 8, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* 4. SECTION GRILLE PROGRAMME */}
      <section id="programme" className="relative z-10 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-end justify-between mb-16"
          >
            <div>
              <div className="text-[11px] font-bold tracking-[0.4em] uppercase text-[#E8B860] mb-4">CHAPITRES</div>
              <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight" style={{ fontFamily: 'Manrope, sans-serif', lineHeight: '1.15' }}>Programme officiel — Maths 2Bac SM</h2>
            </div>
            <div className="text-sm text-[#F5EDE0]/40">4 sur 12</div>
          </motion.div>

          {/* Grille 2 colonnes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {chapitres.map((c, idx) => {
              const isLocked = c.statut === 'verrouillé';
              const isTermine = c.statut === 'terminé';
              const IconComp = c.icon;

              return (
                <motion.div
                  key={c.numero}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="relative bg-[#0A0F16]/80 backdrop-blur-md border border-[#E8B860]/10 rounded-2xl p-8 hover:border-[#E8B860]/30 transition-colors duration-500"
                >
                  {/* Badge TERMINÉ */}
                  {isTermine && (
                    <div className="absolute top-6 right-6 border border-[#E8B860]/30 bg-[#E8B860]/5 text-[#E8B860] rounded-full px-3 py-1 text-[10px] tracking-[0.2em] uppercase font-bold">
                      ✓ TERMINÉ
                    </div>
                  )}

                  {/* Header carte */}
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isLocked ? 'bg-[#E8B860]/5' : 'bg-[#E8B860]/10'}`}>
                      <IconComp className={`w-6 h-6 ${isLocked ? 'text-[#F5EDE0]/30' : 'text-[#E8B860]'}`} />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#F5EDE0]/60">CHAPITRE {c.numero}</div>
                      <div className="text-xs text-[#F5EDE0]/40">{c.seances} séances · {c.duree}</div>
                    </div>
                  </div>

                  {/* Body carte */}
                  <div className="mt-6">
                    <h3 className={`text-2xl font-bold tracking-tight ${isLocked ? 'opacity-50' : ''}`} style={{ fontFamily: 'Manrope, sans-serif' }}>{c.titre}</h3>
                    <p className={`text-sm mt-2 ${isLocked ? 'text-[#F5EDE0]/40' : 'text-[#F5EDE0]/60'}`}>{c.sousTitre}</p>
                  </div>

                  {/* Footer carte — progression */}
                  {!isLocked && (
                    <div className="mt-8">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#F5EDE0]/40">PROGRESSION</span>
                        <span className="font-bold text-[#E8B860]">{c.progression}%</span>
                      </div>
                      <div className="h-1 rounded-full bg-[#F5EDE0]/10 overflow-hidden mt-2">
                        <div className="h-full bg-gradient-to-r from-[#E8B860] to-[#F0C570]" style={{ width: `${c.progression}%` }} />
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. SECTION TRUST */}
      <section id="vision" className="py-32 px-6 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1">
             <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#E8B860] mb-8">MÉTHODE PÉDAGOGIQUE</div>
             <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight mb-8" style={{ fontFamily: 'Manrope, sans-serif', lineHeight: '1.15' }}>
               L'IA pédagogique, au service<br />du programme officiel.
             </h2>
             <p className="text-lg font-light leading-relaxed opacity-60 mb-10 max-w-xl">
               SIRAJ n'est pas un simple outil générique. Chaque grain de donnée est audité pour correspondre aux exigences du Baccalauréat marocain.
             </p>
             <div className="flex items-stretch gap-6">
               <div className="flex-1 border border-[#E8B860]/20 rounded-2xl p-6 bg-[#E8B860]/5">
                 <div className="text-[36px] md:text-[44px] font-bold mb-1 text-[#E8B860]" style={{ fontFamily: 'Manrope, sans-serif' }}>12</div>
                 <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#F5EDE0]/40">Chapitres — Programme officiel</div>
               </div>
               <div className="flex-1 border border-[#E8B860]/20 rounded-2xl p-6 bg-[#E8B860]/5">
                 <div className="text-2xl font-bold mb-1 text-[#E8B860]">SM/PC/SVT</div>
                 <div className="text-[10px] font-bold tracking-widest uppercase text-[#F5EDE0]/40">Filières Couvertes</div>
               </div>
             </div>
          </div>
          <div className="flex-1 relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl relative group">
              <img src={assets.group} alt="Students" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080C10] via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION COMMENT ÇA MARCHE */}
      <section id="methode" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#E8B860] mb-4">MÉTHODE</div>
            <h2 className="text-[28px] md:text-[36px] font-bold tracking-tight mb-4" style={{ fontFamily: 'Manrope, sans-serif', lineHeight: '1.15' }}>Comment SIRAJ t'accompagne.</h2>
            <p className="text-base text-[#F5EDE0]/70 max-w-2xl">Trois moments où le Tuteur IA fait la différence dans ta préparation Bac.</p>
          </motion.div>

          {/* Grille 3 colonnes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {methodeCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <motion.div
                  key={card.eyebrow}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: idx * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-[#0A0F16]/80 backdrop-blur-md border border-[#E8B860]/10 rounded-2xl p-8 hover:border-[#E8B860]/30 transition-colors duration-500"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#E8B860]/10 flex items-center justify-center">
                      <IconComp className="w-6 h-6 text-[#E8B860]" />
                    </div>
                    <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#F5EDE0]/60 pt-3">{card.eyebrow}</div>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>{card.titre}</h3>
                  <p className="text-sm text-[#F5EDE0]/60 leading-relaxed">{card.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. CTA FINAL */}
      <section className="py-32 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto"
        >
          <img src={assets.icon} alt="SIRAJ" className="w-20 h-20 mx-auto mb-8 rounded-2xl" />
          <h2 className="text-[32px] md:text-[44px] font-bold tracking-tight mb-10 text-[#F5EDE0]" style={{ fontFamily: 'Manrope, sans-serif', lineHeight: '1.1' }}>
            Maîtrise ton Bac, chapitre par chapitre.
          </h2>
          <a href="#programme" className="inline-flex items-center gap-3 bg-[#E8B860] text-[#0A0F16] px-8 py-4 rounded-full font-semibold hover:bg-[#F0C570] transition-colors text-lg">
            Démarrer mon Bac
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </section>

      {/* 8. FOOTER */}
      <footer className="py-20 px-6 text-center border-t border-white/5">
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-10 text-[10px] font-bold tracking-[0.2em] uppercase opacity-30">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-[#F5EDE0]/40 tracking-wide">
            <Shield className="w-3.5 h-3.5 text-[#E8B860]/60" />
            <span>Données hébergées au Maroc</span>
          </div>
          <div className="text-[9px] font-medium tracking-[0.4em] uppercase opacity-20">
            © 2026 SIRAJ TECHNOLOGY · ROYAUME DU MAROC
          </div>
        </div>
      </footer>

    </div>
  );
}
