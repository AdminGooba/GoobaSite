"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, Megaphone, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.18, ease: EASE },
  }),
};

export default function Services() {
  const [saleAmount, setSaleAmount] = useState<string>("+145,00 €");
  const [viewsPercent, setViewsPercent] = useState<number>(240);

  useEffect(() => {
    const saleInterval = setInterval(() => {
      const amounts = ["+189,50 €", "+345,00 €", "+245,00 €", "+670,90 €", "+1 320,00 €", "+545,00 €", "+2 190,00 €", "+5 540,20 €", "+8 120,00 €"];
      setSaleAmount(amounts[Math.floor(Math.random() * amounts.length)]);
    }, 5000);

    const viewsInterval = setInterval(() => {
      setViewsPercent(prev => prev + Math.floor(Math.random() * 4) + 1);
    }, 2000);

    return () => {
      clearInterval(saleInterval);
      clearInterval(viewsInterval);
    };
  }, []);

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="services">

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-20 text-center"
      >
        <span className="section-label mb-5 inline-flex">Notre approche</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-5 tracking-tight">
          Un écosystème{" "}
          <span className="text-gradient-gold">clé en main</span>
        </h2>
        <p className="text-[#666] max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          De la création de votre plateforme architecturée pour vendre jusqu&apos;à
          l&apos;explosion de vos commandes en ligne.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* ── Card 1 : Marketing ── */}
        <motion.div
          custom={0}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="glass-card group overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold-500/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl" />

          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 shrink-0 rounded-xl bg-gold-500/10 border border-gold-500/15 flex items-center justify-center group-hover:bg-gold-500/18 transition-colors duration-300">
              <Megaphone className="w-5 h-5 text-gold-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white tracking-tight">Marketing Acquisition</h3>
              <p className="text-[#666] text-sm leading-relaxed">
                Stratégies de trafic orientées conversion (Ads, SEO). Clientèle qualifiée
                à l'échelle nationale pour saturer votre boutique de commandes.
              </p>
            </div>
          </div>

          {/* Animated bar chart */}
          <div className="h-40 bg-black/50 rounded-xl border border-white/[0.05] p-4 flex items-end justify-between gap-2 overflow-hidden relative">
            <div className="absolute inset-x-0 bottom-0 top-0 opacity-[0.07] flex flex-col justify-between p-4 pointer-events-none">
              <div className="h-px bg-white w-full" />
              <div className="h-px bg-white w-full" />
              <div className="h-px bg-white w-full" />
            </div>
            {[15, 25, 20, 40, 35, 55, 70].map((height, i) => (
              <motion.div
                key={i}
                initial={{ height: "0%" }}
                whileInView={{ height: `${height}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: i * 0.08, ease: "easeOut" }}
                className={`w-full rounded-t-sm ${
                  i === 6 ? "bg-gold-300" : "bg-gold-500/25"
                }`}
              />
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.4, type: "spring" }}
              className="absolute top-3 right-3 bg-green-500/20 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.5)] z-10 text-green-400 text-[11px] font-bold px-2.5 py-1.5 rounded-md border border-green-500/30 tracking-wide"
            >
              +{viewsPercent}% Vues
            </motion.div>
          </div>
        </motion.div>

        {/* ── Card 2 : Sites Web ── */}
        <motion.div
          custom={1}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="glass-card group overflow-hidden relative"
        >
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 shrink-0 rounded-xl bg-gold-500/10 border border-gold-500/15 flex items-center justify-center group-hover:bg-gold-500/18 transition-colors duration-300">
              <MonitorSmartphone className="w-5 h-5 text-gold-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white tracking-tight">Sites Web & E-Commerce</h3>
              <p className="text-[#666] text-sm leading-relaxed">
                Design immersif et performances optimales. Une vitrine digitale
                sur-mesure pour sublimer vos produits et générer des commandes.
              </p>
            </div>
          </div>

          {/* Browser mockup */}
          <div className="h-40 bg-black/50 rounded-xl border border-white/[0.05] overflow-hidden flex flex-col relative">
            <div className="h-6 bg-white/[0.04] border-b border-white/[0.06] flex items-center px-3 gap-1.5 shrink-0">
              <div className="w-2 h-2 rounded-full bg-red-500/40" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
              <div className="w-2 h-2 rounded-full bg-green-500/40" />
              <div className="ml-2 flex-1 h-3 bg-white/[0.05] rounded-sm" />
            </div>
            <div className="p-4 flex-1 flex flex-col gap-3">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-2/5 h-3 bg-white/[0.08] rounded-sm"
              />
              <div className="flex gap-3 flex-1">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex-1 h-full bg-gold-500/15 border border-gold-500/25 rounded-lg"
                />
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="w-1/4 h-full flex flex-col gap-2"
                >
                  <div className="flex-1 bg-white/[0.04] rounded-md" />
                  <div className="h-6 bg-gold-500/20 rounded-md border border-gold-500/20" />
                </motion.div>
              </div>
            </div>

            {/* Sales Overlay Animation */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10], scale: [0.9, 1, 1, 0.9] }}
              transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 1.5 }}
              className="absolute bottom-10 right-4 bg-[#0a0a0a]/80 border border-green-500/30 rounded-lg p-2.5 flex flex-col gap-1 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.5)] z-10"
            >
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_6px_#4ade80] animate-pulse" />
                <span className="text-green-400 text-[9px] font-bold tracking-wide uppercase">Nouvelle Vente</span>
              </div>
              <motion.span 
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-white text-[10px] font-mono font-medium ml-3"
              >
                {saleAmount}
              </motion.span>
            </motion.div>
          </div>
        </motion.div>

        {/* ── Card 3 : Production & Data ── */}
        <motion.div
          custom={2}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="glass-card group overflow-hidden relative"
        >
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 shrink-0 rounded-xl bg-gold-500/10 border border-gold-500/15 flex items-center justify-center group-hover:bg-gold-500/18 transition-colors duration-300">
              <Zap className="w-5 h-5 text-gold-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white tracking-tight">Production & Suivi Data</h3>
              <p className="text-[#666] text-sm leading-relaxed">
                Shooting photo/vidéo de votre savoir-faire et mise en place d&apos;outils
                d&apos;analyse pour suivre avec précision le ROI de chaque action.
              </p>
            </div>
          </div>

          {/* Data pipeline animation */}
          <div className="h-[170px] bg-black/60 rounded-xl border border-white/[0.08] flex flex-col justify-between relative p-5 overflow-hidden">
            {/* LIVE Badge */}
            <div className="absolute top-3 right-3 flex items-center gap-1.5 opacity-60">
              <motion.div
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]"
              />
              <span className="text-red-500 text-[9px] font-bold tracking-[0.2em]">LIVE DA</span>
            </div>

            {/* Floating metric */}
            <motion.div 
              animate={{ y: [0, -5, 0], opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 left-12 text-[10px] text-white/70 font-mono font-medium tracking-wider"
            >
              +34.2% ROI
            </motion.div>

            <div className="flex items-center gap-4 w-full mt-6">
              {/* Server/Database Box */}
              <div className="w-10 h-10 rounded-lg border border-white/[0.1] flex items-center justify-center bg-white/[0.04] shrink-0 shadow-[0_0_15px_rgba(255,255,255,0.03)] z-10">
                <div className="flex flex-col gap-1 w-5">
                  {[0, 200, 400].map((delay) => (
                    <motion.div
                      key={delay}
                      animate={{ opacity: [0.2, 1, 0.2], backgroundColor: ["#555", "#a89574", "#555"] }}
                      transition={{ duration: 1.2, repeat: Infinity, delay: delay / 1000 }}
                      className="h-0.5 rounded-full"
                    />
                  ))}
                </div>
              </div>

              {/* Data Pipeline with pulses */}
              <div className="flex-1 h-px bg-white/[0.06] relative overflow-hidden">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ x: ["-100%", "300%"] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.5,
                    }}
                    className="absolute top-1/2 -translate-y-1/2 w-8 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent shadow-[0_0_8px_#a89574]"
                  />
                ))}
              </div>

              {/* Analytics Box */}
              <div
                className="w-10 h-10 rounded-lg border border-gold-500/50 flex items-center justify-center bg-gold-500/10 shrink-0 z-10"
                style={{ boxShadow: "0 0 20px rgba(168, 149, 116, 0.25)" }}
              >
                <motion.div
                  animate={{ scale: [1, 1.25, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-3 h-3 bg-gold-300 rounded-[3px] shadow-[0_0_10px_#d4c3a3]"
                />
              </div>
            </div>

            {/* Real-time fluctuating chart */}
            <div className="mt-4 flex items-end gap-1.5 h-10 w-full opacity-70 px-1">
              {[25, 45, 30, 55, 40, 70, 55, 85, 75, 95].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: "0%" }}
                  animate={{ 
                    height: [`${h}%`, `${Math.max(15, h - 25)}%`, `${Math.min(100, h + 20)}%`, `${h}%`] 
                  }}
                  transition={{ 
                    duration: 3 + Math.random() * 2, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: i * 0.1
                  }}
                  className={`flex-1 rounded-t-sm ${i >= 7 ? 'bg-gold-400/80 shadow-[0_0_8px_rgba(168,149,116,0.5)]' : 'bg-white/20'}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
