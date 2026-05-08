"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, LayoutGroup, useScroll, useTransform } from 'framer-motion';
import { BookOpen, PlayCircle, CheckCircle2, Lock, Sparkles, ArrowRight, Clock, Target, Zap, Award, ChevronDown } from 'lucide-react';

// ============================================================================
// SIRAJ DESIGN SYSTEM v1.0 — Showcase
// ----------------------------------------------------------------------------
// Conformité Document de Référence SIRAJ v1.8.2 :
// - Section 2.5 : Vocabulaire produit (Chapitres/Séance/Exercices)
// - Section 13 : Identité Visuelle v1.0 (palette, glassmorphism iOS dark)
// - Section 4.1 : Programme officiel Maths 2Bac SM
// - Section 5.2.1 : Vocabulaire pédagogique ("Soit", "Montrer que", etc.)
// ============================================================================

// === TOKENS SIRAJ (source unique de vérité) ===
const tokens = {
  color: {
    gold: '#E8B860',
    goldSecondary: '#D4A574',
    darkDeep: '#0F1419',
    darkSurface: '#161C24',
    darkElevated: '#1F2630',
    cream: '#F5EDE0',
    creamDim: 'rgba(245, 237, 224, 0.7)',
    creamMute: 'rgba(245, 237, 224, 0.45)',
    glassBg: 'rgba(15, 20, 25, 0.7)',
    glassBorder: 'rgba(232, 184, 96, 0.3)',
    glowGold: '0 0 40px rgba(232, 184, 96, 0.4)',
  },
};

// === DONNÉES MOCKÉES — Programme officiel Maths 2Bac SM (CNDP) ===
const chapitres = [
  {
    id: 1,
    numero: '01',
    titre: 'Limites et continuité',
    description: 'Limites usuelles, théorèmes de continuité, prolongements',
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
    description: 'Dérivées usuelles, sens de variation, optimisation',
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
    description: 'Logarithme népérien, propriétés, équations',
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
    description: 'Forme algébrique, trigonométrique, exponentielle',
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
  { id: 6, titre: 'Exercices corrigés', duree: '45 min', type: 'Exercices', statut: 'à-faire' },
];

// ============================================================================
// COMPOSANT 1 — CARD CHAPITRE
// Glassmorphism + tilt 3D au hover + spring physics + progression animée
// ============================================================================
function ChapitreCard({ chapitre, onClick, isSelected }) {
  const Icon = chapitre.icon;
  const isLocked = chapitre.statut === 'verrouillé';
  const isDone = chapitre.statut === 'terminé';

  return (
    <motion.button
      layoutId={`chapitre-${chapitre.id}`}
      onClick={() => !isLocked && onClick(chapitre)}
      disabled={isLocked}
      whileHover={!isLocked ? { y: -6, transition: { type: 'spring', stiffness: 400, damping: 20 } } : {}}
      whileTap={!isLocked ? { scale: 0.98 } : {}}
      className={`group relative w-full text-left overflow-hidden rounded-3xl border transition-all duration-500
        ${isLocked
          ? 'border-white/5 bg-white/[0.02] cursor-not-allowed opacity-50'
          : 'border-[#E8B860]/20 bg-gradient-to-br from-[#161C24] to-[#0F1419] hover:border-[#E8B860]/50 cursor-pointer'
        }`}
      style={{
        boxShadow: isSelected
          ? '0 0 0 1px #E8B860, 0 20px 60px -10px rgba(232, 184, 96, 0.4), inset 0 1px 0 rgba(232, 184, 96, 0.1)'
          : '0 10px 40px -15px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)',
      }}
    >
      {/* Halo lumineux doré au hover */}
      {!isLocked && (
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 0%, rgba(232,184,96,0.15) 0%, transparent 60%)',
          }}
        />
      )}

      {/* Contenu */}
      <div className="relative p-7">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div
              className="flex items-center justify-center w-14 h-14 rounded-2xl border"
              style={{
                background: isLocked ? 'rgba(255,255,255,0.03)' : 'linear-gradient(135deg, rgba(232,184,96,0.15), rgba(232,184,96,0.05))',
                borderColor: isLocked ? 'rgba(255,255,255,0.05)' : 'rgba(232,184,96,0.25)',
              }}
            >
              {isLocked
                ? <Lock className="w-5 h-5" style={{ color: tokens.color.creamMute }} />
                : <Icon className="w-6 h-6" style={{ color: tokens.color.gold }} />
              }
            </div>
            <div>
              <div className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: tokens.color.creamMute }}>
                Chapitre {chapitre.numero}
              </div>
              <div className="text-[11px] mt-1" style={{ color: tokens.color.creamMute }}>
                {chapitre.seances} séances · {chapitre.duree}
              </div>
            </div>
          </div>

          {/* Badge statut */}
          {isDone && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
              style={{ background: 'rgba(232,184,96,0.15)', border: '1px solid rgba(232,184,96,0.3)' }}
            >
              <CheckCircle2 className="w-3.5 h-3.5" style={{ color: tokens.color.gold }} />
              <span className="text-[10px] font-semibold tracking-wider uppercase" style={{ color: tokens.color.gold }}>Terminé</span>
            </motion.div>
          )}
        </div>

        {/* Titre */}
        <h3
          className="text-2xl font-bold leading-tight mb-2 tracking-tight"
          style={{ color: isLocked ? tokens.color.creamMute : tokens.color.cream, fontFamily: 'Manrope, Inter, sans-serif' }}
        >
          {chapitre.titre}
        </h3>
        <p className="text-sm leading-relaxed mb-7" style={{ color: tokens.color.creamDim }}>
          {chapitre.description}
        </p>

        {/* Progression */}
        {!isLocked && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-medium tracking-wider uppercase" style={{ color: tokens.color.creamMute }}>
                Progression
              </span>
              <span className="text-sm font-bold tabular-nums" style={{ color: tokens.color.gold }}>
                {chapitre.progression}%
              </span>
            </div>
            <div className="relative h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(245,237,224,0.06)' }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${chapitre.progression}%` }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-y-0 left-0 rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${tokens.color.goldSecondary}, ${tokens.color.gold})`,
                  boxShadow: '0 0 12px rgba(232,184,96,0.6)',
                }}
              />
            </div>
          </div>
        )}
      </div>
    </motion.button>
  );
}

// ============================================================================
// COMPOSANT 2 — VUE SÉANCES (apparaît après clic sur chapitre)
// Shared layout animation Framer Motion — LE moment "wow" de la démo
// ============================================================================
function SeancesView({ chapitre, onBack }) {
  const Icon = chapitre.icon;

  return (
    <motion.div
      layoutId={`chapitre-${chapitre.id}`}
      className="relative overflow-hidden rounded-3xl border"
      style={{
        borderColor: 'rgba(232,184,96,0.3)',
        background: 'linear-gradient(135deg, #161C24 0%, #0F1419 100%)',
        boxShadow: '0 30px 80px -20px rgba(0,0,0,0.7), 0 0 60px -20px rgba(232,184,96,0.3), inset 0 1px 0 rgba(232,184,96,0.1)',
      }}
    >
      {/* Halo lumineux */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(232,184,96,0.12) 0%, transparent 50%)' }}
      />

      <div className="relative p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center gap-5">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18, delay: 0.2 }}
              className="flex items-center justify-center w-16 h-16 rounded-2xl border"
              style={{
                background: 'linear-gradient(135deg, rgba(232,184,96,0.2), rgba(232,184,96,0.05))',
                borderColor: 'rgba(232,184,96,0.35)',
              }}
            >
              <Icon className="w-7 h-7" style={{ color: tokens.color.gold }} />
            </motion.div>
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-[11px] font-semibold tracking-[0.18em] uppercase"
                style={{ color: tokens.color.gold }}
              >
                Chapitre {chapitre.numero}
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl font-bold tracking-tight mt-1"
                style={{ color: tokens.color.cream, fontFamily: 'Manrope, Inter, sans-serif' }}
              >
                {chapitre.titre}
              </motion.h2>
            </div>
          </div>

          <SirajButton variant="ghost" onClick={onBack} size="sm">← Retour</SirajButton>
        </div>

        {/* Liste des séances avec stagger */}
        <div className="space-y-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase" style={{ color: tokens.color.creamMute }}>
              Séances ({seancesChapitre1.length})
            </h3>
            <span className="text-xs" style={{ color: tokens.color.creamMute }}>
              {seancesChapitre1.filter(s => s.statut === 'terminé').length} / {seancesChapitre1.length} complétées
            </span>
          </div>

          {seancesChapitre1.map((seance, index) => (
            <SeanceItem key={seance.id} seance={seance} index={index} />
          ))}
        </div>

        {/* Exercice featured (KaTeX-style render) */}
        <ExerciceFeatured />
      </div>
    </motion.div>
  );
}

// ============================================================================
// COMPOSANT 3 — ITEM SÉANCE
// ============================================================================
function SeanceItem({ seance, index }) {
  const isDone = seance.statut === 'terminé';
  const isCurrent = seance.statut === 'en-cours';

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 + index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ x: 4, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
      className="group flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-colors duration-300"
      style={{
        background: isCurrent ? 'rgba(232,184,96,0.06)' : 'rgba(245,237,224,0.02)',
        border: isCurrent ? '1px solid rgba(232,184,96,0.25)' : '1px solid rgba(245,237,224,0.04)',
      }}
    >
      {/* Icône statut */}
      <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
        style={{
          background: isDone ? 'rgba(232,184,96,0.15)' : isCurrent ? 'rgba(232,184,96,0.1)' : 'rgba(245,237,224,0.04)',
          border: isDone || isCurrent ? '1px solid rgba(232,184,96,0.3)' : '1px solid rgba(245,237,224,0.06)',
        }}
      >
        {isDone
          ? <CheckCircle2 className="w-5 h-5" style={{ color: tokens.color.gold }} />
          : isCurrent
            ? <PlayCircle className="w-5 h-5" style={{ color: tokens.color.gold }} />
            : <span className="text-xs font-semibold tabular-nums" style={{ color: tokens.color.creamMute }}>{String(seance.id).padStart(2, '0')}</span>
        }
      </div>

      {/* Titre + meta */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 mb-1">
          <h4 className="text-[15px] font-semibold tracking-tight" style={{ color: tokens.color.cream }}>
            {seance.titre}
          </h4>
          <span
            className="px-2 py-0.5 rounded-full text-[10px] font-medium tracking-wider uppercase"
            style={{
              background: 'rgba(232,184,96,0.1)',
              color: tokens.color.gold,
              border: '1px solid rgba(232,184,96,0.2)',
            }}
          >
            {seance.type}
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-xs" style={{ color: tokens.color.creamMute }}>
          <Clock className="w-3 h-3" />
          {seance.duree}
        </div>
      </div>

      {/* Arrow */}
      <ArrowRight
        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
        style={{ color: tokens.color.creamMute }}
      />
    </motion.div>
  );
}

// ============================================================================
// COMPOSANT 4 — EXERCICE FEATURED (KaTeX render animé)
// Différenciation ULTIME — formule mathématique avec stagger
// ============================================================================
function ExerciceFeatured() {
  // Énoncé en pseudo-LaTeX (pas de KaTeX runtime ici, on simule visuellement)
  const formula = "f(x) = \\frac{e^x - 1}{x}";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="mt-8 p-6 rounded-2xl border relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(232,184,96,0.08), rgba(232,184,96,0.02))',
        borderColor: 'rgba(232,184,96,0.25)',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 100% 0%, rgba(232,184,96,0.1) 0%, transparent 50%)' }}
      />

      <div className="relative">
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-4 h-4" style={{ color: tokens.color.gold }} />
          <span className="text-[11px] font-semibold tracking-[0.15em] uppercase" style={{ color: tokens.color.gold }}>
            Exercice type Bac National
          </span>
        </div>

        <p className="text-sm mb-4" style={{ color: tokens.color.creamDim, fontFamily: 'Inter, sans-serif' }}>
          <span className="font-semibold" style={{ color: tokens.color.cream }}>Soit </span>
          <span style={{ color: tokens.color.cream }}>la fonction </span>
          <em>f</em>
          <span> définie sur ℝ* par :</span>
        </p>

        {/* Formule animée caractère par caractère */}
        <div className="flex justify-center my-6 py-4">
          <motion.div
            className="text-3xl font-serif italic flex items-center gap-1"
            style={{ color: tokens.color.cream, fontFamily: 'Times New Roman, serif' }}
          >
            {['f', '(', 'x', ')', '=', ''].map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: 1.1 + i * 0.05 }}
              >
                {char}
              </motion.span>
            ))}

            {/* Fraction stylisée */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
              className="inline-flex flex-col items-center"
            >
              <span className="text-2xl px-3 pb-1" style={{ borderBottom: `1.5px solid ${tokens.color.gold}` }}>
                e<sup className="text-base">x</sup> − 1
              </span>
              <span className="text-2xl pt-1">x</span>
            </motion.div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
          className="text-sm" style={{ color: tokens.color.creamDim }}
        >
          <span className="font-semibold" style={{ color: tokens.color.cream }}>Montrer que </span>
          <em>f</em> admet un prolongement par continuité en 0, puis
          <span className="font-semibold" style={{ color: tokens.color.cream }}> en déduire </span>
          la valeur de ce prolongement.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9 }}
          className="mt-5 flex gap-3"
        >
          <SirajButton variant="primary" size="sm">
            <Sparkles className="w-3.5 h-3.5" />
            Je veux un indice
          </SirajButton>
          <SirajButton variant="ghost" size="sm">
            Voir la correction
          </SirajButton>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ============================================================================
// COMPOSANT 5 — BOUTON SIRAJ (Primary / Secondary / Ghost)
// Spring physics + glow doré + gradient
// ============================================================================
function SirajButton({ children, variant = 'primary', size = 'md', onClick, disabled }) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-8 py-4 text-base gap-2.5',
  };

  const variantStyles = {
    primary: {
      base: 'text-[#0F1419] font-bold',
      style: {
        background: `linear-gradient(135deg, ${tokens.color.gold} 0%, ${tokens.color.goldSecondary} 100%)`,
        boxShadow: '0 4px 20px -2px rgba(232,184,96,0.4), inset 0 1px 0 rgba(255,255,255,0.3)',
      },
      hoverStyle: {
        boxShadow: '0 8px 30px -2px rgba(232,184,96,0.6), inset 0 1px 0 rgba(255,255,255,0.4), 0 0 0 1px rgba(232,184,96,0.5)',
      },
    },
    secondary: {
      base: 'font-semibold',
      style: {
        background: 'rgba(232,184,96,0.1)',
        color: tokens.color.gold,
        border: '1px solid rgba(232,184,96,0.3)',
        boxShadow: '0 2px 10px -2px rgba(0,0,0,0.3)',
      },
      hoverStyle: {
        background: 'rgba(232,184,96,0.18)',
        boxShadow: '0 4px 20px -2px rgba(232,184,96,0.3)',
      },
    },
    ghost: {
      base: 'font-medium',
      style: {
        background: 'transparent',
        color: tokens.color.creamDim,
        border: '1px solid rgba(245,237,224,0.1)',
      },
      hoverStyle: {
        background: 'rgba(245,237,224,0.05)',
        color: tokens.color.cream,
      },
    },
  };

  const v = variantStyles[variant];

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { y: -2, transition: { type: 'spring', stiffness: 400, damping: 17 } } : {}}
      whileTap={!disabled ? { scale: 0.97, y: 0 } : {}}
      className={`inline-flex items-center justify-center rounded-xl tracking-tight transition-all duration-300
        ${sizeClasses[size]} ${v.base} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      style={v.style}
      onHoverStart={(e) => {
        if (!disabled) Object.assign(e.target.style, v.hoverStyle);
      }}
    >
      {children}
    </motion.button>
  );
}

// ============================================================================
// COMPOSANT 6 — SKELETON LOADER (shimmer animé)
// ============================================================================
function SkeletonShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {[1, 2].map((i) => (
        <div
          key={i}
          className="relative overflow-hidden rounded-3xl border p-7"
          style={{ borderColor: 'rgba(232,184,96,0.1)', background: '#161C24', minHeight: '280px' }}
        >
          {/* Shimmer wave */}
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-y-0 w-1/2 pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(232,184,96,0.08), transparent)',
            }}
          />

          {/* Placeholder shapes */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl" style={{ background: 'rgba(232,184,96,0.05)' }} />
            <div className="space-y-2">
              <div className="h-2 w-20 rounded-full" style={{ background: 'rgba(245,237,224,0.06)' }} />
              <div className="h-2 w-32 rounded-full" style={{ background: 'rgba(245,237,224,0.04)' }} />
            </div>
          </div>
          <div className="space-y-3 mb-7">
            <div className="h-4 w-3/4 rounded-full" style={{ background: 'rgba(245,237,224,0.08)' }} />
            <div className="h-3 w-full rounded-full" style={{ background: 'rgba(245,237,224,0.05)' }} />
            <div className="h-3 w-5/6 rounded-full" style={{ background: 'rgba(245,237,224,0.05)' }} />
          </div>
          <div className="h-1.5 w-full rounded-full" style={{ background: 'rgba(245,237,224,0.04)' }} />
        </div>
      ))}
    </div>
  );
}

// ============================================================================
// LOGO SIRAJ — Assets officiels (Brand Book v1.0)
// Variantes : icon (lampe seule), full (Version A), marketing (Version B)
// ============================================================================
const logoSources = {
  icon: '/brand/siraj-icon-only.png',
  full: '/brand/siraj-logo-color.png',
  marketing: '/brand/siraj-logo-marketing.png',
  app: '/brand/siraj-app-icon-6b.png',
  medium: '/brand/siraj-medium.png',
  favicon: '/brand/siraj-favicon.png',
};

function SirajLogo({ size = 36, variant = 'icon' }) {
  // We apply rounded corners for variants that have the dark square background
  const isSquareIcon = variant === 'app' || variant === 'medium' || variant === 'favicon';
  
  if (isSquareIcon) {
    const r = Math.round(size * 0.22);
    return (
      <div style={{
        width: size,
        height: size,
        borderRadius: r,
        overflow: 'hidden',
        boxShadow: '0 0 10px rgba(232,184,96,0.12)',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <img
          src={logoSources[variant]}
          alt="SIRAJ"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
    );
  }

  return (
    <img
      src={logoSources[variant]}
      alt="SIRAJ"
      height={size}
      style={{ height: size, width: 'auto', display: 'block' }}
    />
  );
}

// ============================================================================
// PAGE PRINCIPALE — SHOWCASE
// ============================================================================
export default function SirajShowcase() {
  const [selectedChapitre, setSelectedChapitre] = useState(null);
  const [showSkeleton, setShowSkeleton] = useState(false);
  const [activeSection, setActiveSection] = useState('chapitres');

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ 
    target: sectionRef, 
    offset: ["start end", "end start"] 
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div
      className="h-screen w-full snap-y snap-proximity overflow-y-auto overflow-x-hidden text-white relative scroll-smooth"
      style={{
        background: '#0A0E13',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      {/* Background mesh gradient subtil */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% -10%, rgba(232,184,96,0.12) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 100% 60%, rgba(232,184,96,0.06) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 0% 80%, rgba(232,184,96,0.04) 0%, transparent 50%)
          `,
        }}
      />

      {/* Grain overlay (texture premium) */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 1. SECTION HERO IMMERSIVE */}
      <section className="snap-start relative h-screen w-screen overflow-hidden flex flex-col justify-end z-10">
        <motion.div
          animate={{ scale: [1, 1.08] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="/brand/siraj-hero-student.jpg" 
            alt="Élève marocain en pleine révision avec SIRAJ"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </motion.div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0F1419]/70 via-transparent to-[#0F1419]/95" />

        <header className="absolute top-0 left-0 w-full z-20 flex items-center justify-between p-6 md:px-12 md:py-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <SirajLogo variant="medium" size={42} />
            <div>
              <h1 className="text-2xl font-bold tracking-tight" style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '0.02em' }}>
                SIRAJ
              </h1>
              <p className="text-[11px] tracking-[0.18em] uppercase" style={{ color: tokens.color.creamMute }}>
                Design System v1.0
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm"
            style={{ background: 'rgba(232,184,96,0.08)', border: '1px solid rgba(232,184,96,0.2)' }}
          >
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: tokens.color.gold }} />
            <span className="text-xs font-medium tracking-wide" style={{ color: tokens.color.gold }}>
              Maths · 2Bac SM
            </span>
          </motion.div>
        </header>

        <div className="relative z-20 flex items-end pb-20 pl-6 pr-6 md:pl-12 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 backdrop-blur-sm"
              style={{ background: 'rgba(232,184,96,0.15)', border: '1px solid rgba(232,184,96,0.3)' }}
            >
              <Sparkles className="w-3 h-3" style={{ color: tokens.color.gold }} />
              <span className="text-[11px] font-semibold tracking-[0.15em] uppercase" style={{ color: tokens.color.gold }}>
                L'IA pédagogique du Bac marocain
              </span>
            </div>

            <h2
              className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-4"
              style={{ fontFamily: 'Manrope, sans-serif', color: tokens.color.cream }}
            >
              Maîtrise ton programme,
              <br />
              <span style={{
                background: `linear-gradient(135deg, ${tokens.color.gold}, ${tokens.color.goldSecondary})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                chapitre par chapitre.
              </span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: tokens.color.creamDim, maxWidth: '500px' }}>
              Le programme officiel 2ème Bac Sciences Mathématiques, structuré en 12 chapitres,
              avec un Tuteur IA qui t'accompagne sur chaque démonstration.
            </p>
            <SirajButton variant="primary" size="lg">
              Démarrer mon Bac SM
              <ArrowRight className="w-4 h-4" />
            </SirajButton>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white/40"
          animate={{ y: [0, 8, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* NORMAL LAYOUT WRAPPER */}
      <section className="snap-start relative z-10 w-full bg-transparent">
        <div className="relative max-w-6xl mx-auto px-6 py-20">
        {/* SECTION CHAPITRES */}
        <LayoutGroup>
          <section className="mb-20">
            <SectionHeader
              eyebrow="Chapitres"
              title="Programme officiel — Maths 2Bac SM"
              count={`${chapitres.length} sur 12`}
            />

            <AnimatePresence mode="wait">
              {selectedChapitre ? (
                <motion.div key="seances" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <SeancesView chapitre={selectedChapitre} onBack={() => setSelectedChapitre(null)} />
                </motion.div>
              ) : (
                <motion.div
                  key="grid"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-5"
                >
                  {chapitres.map((chapitre, i) => (
                    <motion.div
                      key={chapitre.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <ChapitreCard
                        chapitre={chapitre}
                        onClick={setSelectedChapitre}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        </LayoutGroup>

        {/* 2. SECTION GROUPE FULL-BLEED */}
        </div>
      </section>

      <section ref={sectionRef} className="snap-start relative h-screen w-screen overflow-hidden flex flex-col justify-center z-10">
        <motion.div
          style={{ y: yParallax }}
          className="absolute inset-0 z-0 h-[130%]"
        >
          <img 
            src="/brand/siraj-students-group.jpg" 
            alt="Groupe de lycéens marocains utilisant SIRAJ"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0F1419]/95 via-[#0F1419]/40 to-transparent" />

        <div className="relative z-20 max-w-md pl-6 md:pl-12 pt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-semibold tracking-[0.15em] uppercase mb-4" style={{ color: tokens.color.gold }}>
              Témoignages
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8" style={{ fontFamily: 'Manrope, sans-serif', color: tokens.color.cream }}>
              Ils maîtrisent leur Bac avec SIRAJ
            </h2>
            
            <div className="mb-10 relative">
              <div className="absolute -top-4 -left-3 text-5xl leading-none opacity-50" style={{ color: tokens.color.gold, fontFamily: 'Manrope, sans-serif' }}>
                "
              </div>
              <p className="text-lg italic leading-relaxed mb-4 relative z-10" style={{ color: tokens.color.cream, fontFamily: 'Inter, sans-serif' }}>
                Le Tuteur IA m'aide quand je bloque à minuit avant un contrôle. La méthode socratique me fait vraiment progresser.
              </p>
              <p className="text-xs tracking-wider uppercase font-medium" style={{ color: 'rgba(245,237,224,0.6)' }}>
                — Yasmine, 2Bac SM
              </p>
            </div>

            <SirajButton variant="secondary" size="lg">
              Voir tous les témoignages
            </SirajButton>
          </motion.div>
        </div>
      </section>

      <section className="snap-start relative z-10 w-full bg-transparent">
        <div className="relative max-w-6xl mx-auto px-6 py-20">
        {/* SECTION BOUTONS */}
        <section className="mb-20">
          <SectionHeader eyebrow="Composants" title="Boutons" count="3 variantes" />

          <div className="rounded-3xl border p-10"
            style={{ borderColor: 'rgba(232,184,96,0.15)', background: 'rgba(15,20,25,0.5)' }}
          >
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <SirajButton variant="primary">
                <Sparkles className="w-4 h-4" />
                Commencer une Séance
              </SirajButton>
              <SirajButton variant="secondary">
                Voir le programme
              </SirajButton>
              <SirajButton variant="ghost">
                Plus tard
              </SirajButton>
            </div>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <SirajButton variant="primary" size="lg">
                Démarrer mon Bac SM
                <ArrowRight className="w-4 h-4" />
              </SirajButton>
              <SirajButton variant="secondary" size="lg">
                Tester gratuitement
              </SirajButton>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <SirajButton variant="primary" size="sm">Petit format</SirajButton>
              <SirajButton variant="secondary" size="sm">Petit format</SirajButton>
              <SirajButton variant="ghost" size="sm">Petit format</SirajButton>
            </div>
          </div>
        </section>

        {/* SECTION SKELETON */}
        <section className="mb-20">
          <SectionHeader
            eyebrow="État de chargement"
            title="Skeleton loader"
            count="Shimmer doré"
            action={
              <SirajButton variant="ghost" size="sm" onClick={() => setShowSkeleton(!showSkeleton)}>
                {showSkeleton ? 'Cacher' : 'Afficher'}
              </SirajButton>
            }
          />
          <AnimatePresence>
            {showSkeleton && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <SkeletonShowcase />
              </motion.div>
            )}
          </AnimatePresence>
          {!showSkeleton && (
            <div
              className="rounded-3xl border p-12 flex items-center justify-center"
              style={{ borderColor: 'rgba(232,184,96,0.1)', background: 'rgba(15,20,25,0.3)' }}
            >
              <p className="text-sm" style={{ color: tokens.color.creamMute }}>
                Clique sur "Afficher" pour voir le shimmer animé
              </p>
            </div>
          )}
        </section>

        {/* FOOTER */}
        <footer
          className="mt-32 pt-10 border-t flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          style={{ borderColor: 'rgba(232,184,96,0.1)' }}
        >
          <div className="flex items-center gap-3">
            <SirajLogo variant="favicon" size={28} />
            <div>
              <p className="text-sm font-semibold" style={{ color: tokens.color.cream }}>
                SIRAJ Design System v1.0
              </p>
              <p className="text-xs" style={{ color: tokens.color.creamMute }}>
                Conforme Document de Référence v1.8.2 — Section 2.5 + Section 13
              </p>
            </div>
          </div>
          <div className="text-xs tracking-wide" style={{ color: tokens.color.creamMute }}>
            <em style={{ color: tokens.color.gold }}>سراج</em> — éclaire ton parcours
          </div>
        </footer>
      </div>
      </section>
    </div>
  );
}

// === Helper : Section Header ===
function SectionHeader({ eyebrow, title, count, action }) {
  return (
    <div className="flex items-end justify-between mb-8">
      <div>
        <div className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-2" style={{ color: tokens.color.gold }}>
          {eyebrow}
        </div>
        <h3
          className="text-3xl md:text-4xl font-bold tracking-tight"
          style={{ fontFamily: 'Manrope, sans-serif', color: tokens.color.cream }}
        >
          {title}
        </h3>
      </div>
      <div className="flex items-center gap-3">
        {count && (
          <span className="text-xs tracking-wide" style={{ color: tokens.color.creamMute }}>
            {count}
          </span>
        )}
        {action}
      </div>
    </div>
  );
}
