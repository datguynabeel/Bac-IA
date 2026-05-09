"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, BrainCircuit, LineChart, Shield, ChevronRight, Zap } from 'lucide-react';

const tokens = {
  color: {
    gold: '#E8B860',
    goldSecondary: '#F2D399',
    dark: '#0A0F16',
    surface: 'rgba(255, 255, 255, 0.02)',
    surfaceHover: 'rgba(255, 255, 255, 0.05)',
    border: 'rgba(232, 184, 96, 0.1)',
    borderHover: 'rgba(232, 184, 96, 0.25)',
    cream: '#F5EDE0',
    creamMute: 'rgba(245, 237, 224, 0.5)'
  }
};

export default function PremiumTestPage() {
  return (
    <div 
      className="min-h-screen w-full relative overflow-x-hidden selection:bg-[#E8B860]/30"
      style={{ background: tokens.color.dark, color: tokens.color.cream, fontFamily: 'Inter, sans-serif' }}
    >
      {/* Background Ambient Glow - Apple "Behind the Mac" Aesthetic */}
      <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full mix-blend-screen filter blur-[100px] opacity-15 pointer-events-none" 
           style={{ background: `radial-gradient(circle, ${tokens.color.gold} 0%, transparent 70%)` }} />
      <div className="absolute bottom-[-15%] right-[-5%] w-[50vw] h-[50vw] rounded-full mix-blend-screen filter blur-[140px] opacity-10 pointer-events-none" 
           style={{ background: `radial-gradient(circle, ${tokens.color.goldSecondary} 0%, transparent 70%)` }} />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(${tokens.color.gold} 0.5px, transparent 0.5px)`, backgroundSize: '32px 32px' }} />

      {/* Floating Navbar */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-[90%] max-w-5xl px-8 py-3 rounded-full backdrop-blur-2xl border transition-all duration-500"
           style={{ background: 'rgba(10, 15, 22, 0.7)', borderColor: tokens.color.border }}>
        <div className="flex items-center gap-3">
          <img src="/brand/siraj-logo-gold.png" alt="SIRAJ Logo" className="h-8 w-auto object-contain" />
          <div className="h-4 w-[1px] bg-white/10 mx-2" />
          <span className="font-semibold tracking-[0.2em] text-[10px] uppercase opacity-50" style={{ fontFamily: 'Manrope, sans-serif' }}>Showcase</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-[13px] font-medium tracking-wide" style={{ color: tokens.color.creamMute }}>
          <span className="hover:text-[#E8B860] cursor-pointer transition-all duration-300">Expérience</span>
          <span className="hover:text-[#E8B860] cursor-pointer transition-all duration-300">Technologie</span>
          <span className="hover:text-[#E8B860] cursor-pointer transition-all duration-300">Maroc</span>
        </div>

        <button className="px-6 py-2 rounded-full text-xs font-bold cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(232,184,96,0.2)] active:scale-95"
                style={{ background: tokens.color.cream, color: tokens.color.dark }}>
          S'inscrire
        </button>
      </nav>

      {/* Hero Section */}
      <main className="pt-56 pb-32 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full mb-10 backdrop-blur-md border shadow-2xl"
            style={{ background: 'rgba(255, 255, 255, 0.03)', borderColor: 'rgba(255,255,255,0.08)' }}
          >
            <Sparkles className="w-3 h-3 text-[#E8B860]" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-80">Phase 0 : Excellence Validée</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-bold tracking-tight mb-10 leading-[1.05]"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Le futur du Bac,<br />
            <span className="relative">
              <span style={{ 
                background: `linear-gradient(135deg, ${tokens.color.gold} 0%, #FFF 50%, ${tokens.color.goldSecondary} 100%)`, 
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' 
              }}>maintenant.</span>
              <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#E8B860]/40 to-transparent" />
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl mb-14 max-w-2xl leading-relaxed font-light"
            style={{ color: tokens.color.creamMute }}
          >
            SIRAJ fusionne l'intelligence artificielle de pointe avec le programme national marocain pour créer une expérience d'apprentissage sans précédent.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
            className="flex items-center gap-6"
          >
             <button className="group flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:border-[#E8B860]/40 transition-all duration-500">
               <span className="text-sm font-semibold tracking-wide">Découvrir la vision</span>
               <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </button>
          </motion.div>
        </div>

        {/* Bento Grid - Refined with 0.5px borders and deep blur */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-5"
        >
          {/* Card 1: Adaptive Learning */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-[2.5rem] p-10 cursor-pointer border transition-all duration-700"
               style={{ background: tokens.color.surface, borderColor: 'rgba(255,255,255,0.04)' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#E8B860]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10 flex flex-col justify-between h-full min-h-[320px]">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#E8B860]/10 border border-[#E8B860]/20">
                <BrainCircuit className="w-7 h-7 text-[#E8B860]" />
              </div>
              <div className="max-w-md">
                <h3 className="text-3xl font-bold mb-4 tracking-tight" style={{ fontFamily: 'Manrope, sans-serif' }}>Parcours Adaptatif</h3>
                <p className="text-lg leading-relaxed font-light" style={{ color: tokens.color.creamMute }}>
                  Une architecture cognitive qui s'ajuste à vos forces et faiblesses en temps réel.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Precision Analytics */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-[2.5rem] p-10 cursor-pointer border transition-all duration-700"
               style={{ background: tokens.color.surface, borderColor: 'rgba(255,255,255,0.04)' }}>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10 flex flex-col justify-between h-full min-h-[320px]">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-blue-500/10 border border-blue-500/20">
                <LineChart className="w-7 h-7 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight" style={{ fontFamily: 'Manrope, sans-serif' }}>Data-Driven</h3>
                <p className="text-sm leading-relaxed font-light" style={{ color: tokens.color.creamMute }}>
                  Des métriques de performance chirurgicales pour chaque chapitre du programme.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Cultural Compliance */}
          <div className="md:col-span-5 group relative overflow-hidden rounded-[2.5rem] p-10 cursor-pointer border transition-all duration-700"
               style={{ background: tokens.color.surface, borderColor: 'rgba(255,255,255,0.04)' }}>
            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-emerald-500/10 border border-emerald-500/20">
                  <Shield className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold tracking-tight" style={{ fontFamily: 'Manrope, sans-serif' }}>Conformité Totale</h3>
              </div>
              <p className="text-base font-light leading-relaxed" style={{ color: tokens.color.creamMute }}>
                Contenu 100% aligné sur les exigences du Ministère de l'Éducation Nationale.
              </p>
            </div>
          </div>

          {/* Card 4: Action */}
          <div className="md:col-span-7 group relative overflow-hidden rounded-[2.5rem] p-10 cursor-pointer border transition-all duration-700 flex items-center justify-between"
               style={{ background: 'linear-gradient(135deg, rgba(232,184,96,0.05) 0%, rgba(10,15,22,0) 100%)', borderColor: tokens.color.border }}>
            <div className="relative z-10 flex items-center gap-8">
              <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-500 group-hover:scale-110" 
                   style={{ background: tokens.color.cream }}>
                <Zap className="w-8 h-8 text-black" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1 tracking-tight" style={{ fontFamily: 'Manrope, sans-serif' }}>Prêt pour l'excellence ?</h3>
                <p className="text-sm font-light" style={{ color: tokens.color.creamMute }}>Rejoignez le programme pilote dès aujourd'hui.</p>
              </div>
            </div>
            <div className="w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-500 group-hover:bg-[#E8B860] group-hover:border-[#E8B860]"
                 style={{ borderColor: tokens.color.border }}>
              <ChevronRight className="w-6 h-6 transition-colors duration-500 group-hover:text-black" style={{ color: tokens.color.gold }} />
            </div>
          </div>
        </motion.div>
      </main>

      {/* Subtle Footer Logo */}
      <footer className="py-20 border-t border-white/5 relative z-10 text-center">
        <img src="/brand/siraj-logo-gold.png" alt="SIRAJ" className="h-10 mx-auto opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-pointer" />
        <p className="mt-6 text-[10px] tracking-[0.4em] uppercase opacity-30">L'Excellence comme Standard</p>
      </footer>
    </div>
  );
}
