"use client";

import { motion } from "framer-motion";
import { Check, Target, PenTool, BarChart, Zap, Database, Video } from "lucide-react";

const features = [
  "Création d'une plateforme e-commerce d'excellence",
  "Mise en valeur visuelle absolue de votre savoir-faire",
  "Acquisition en ligne (Ads & SEO) pour scaler vos ventes",
  "Production de contenu premium (photo/vidéo)",
  "Mise en place du tracking et analyse des conversions",
  "Accompagnement continu orienté croissance web",
];

const pillars = [
  {
    icon: <Target className="w-5 h-5 text-gold-400" />,
    title: "Audit & Stratégie",
    description: "Immersion dans votre commerce, analyse du marché web et définition de votre plan de croissance en ligne.",
  },
  {
    icon: <PenTool className="w-5 h-5 text-gold-400" />,
    title: "Design & E-commerce",
    description: "Création d'un site marchand ultra-performant qui retranscrit l'excellence de vos produits.",
  },
  {
    icon: <Zap className="w-5 h-5 text-gold-400" />,
    title: "Acquisition de Trafic",
    description: "Stratégies de visibilité pour drainer une clientèle qualifiée directement sur votre boutique.",
  },
  {
    icon: <Video className="w-5 h-5 text-gold-400" />,
    title: "Contenu & Production",
    description: "Captation photo et vidéo premium pour sublimer vos créations et déclencher l'achat immédiat.",
  },
  {
    icon: <Database className="w-5 h-5 text-gold-400" />,
    title: "Tracking & Analyse",
    description: "Installation des outils de suivi pour mesurer concrètement l'impact sur votre chiffre d'affaires.",
  },
  {
    icon: <BarChart className="w-5 h-5 text-gold-400" />,
    title: "Go Beyond & Scaling",
    description: "Monitoring en temps réel et itérations stratégiques pour aller toujours plus loin dans vos ventes.",
  },
];

export default function Pricing() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative" id="offres">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10"
        style={{
          width: "700px",
          height: "700px",
          background: "radial-gradient(circle, rgba(168,149,116,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-20 relative z-10"
      >
        <span className="section-label mb-5 inline-flex">Offre</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight mt-4">
          L&apos;Excellence du{" "}
          <br className="hidden sm:block" />
          <span className="text-gradient-gold">Sur-Mesure</span>
        </h2>
        <p className="text-[#666] max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Chaque métier de passion a ses codes. Nous créons une infrastructure digitale
          GOOBA unique, pensée spécifiquement pour développer votre commerce.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start relative z-10">

        {/* Left: Pillars grid */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-3 grid sm:grid-cols-2 gap-4"
        >
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + idx * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card p-6 relative group overflow-hidden"
              style={{ borderRadius: "1rem" }}
            >
              {/* Hover gold left accent */}
              <div className="absolute left-0 top-4 bottom-4 w-[2px] bg-gradient-to-b from-transparent via-gold-500/0 to-transparent group-hover:via-gold-500/50 transition-all duration-500 rounded-full" />

              <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/4 rounded-full blur-2xl group-hover:bg-gold-500/8 transition-colors duration-500 pointer-events-none" />

              <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/15 flex items-center justify-center mb-4 group-hover:bg-gold-500/16 transition-colors duration-300">
                {pillar.icon}
              </div>
              <h3 className="text-base font-semibold text-white mb-2 tracking-tight">{pillar.title}</h3>
              <p className="text-[#666] text-sm leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Right: CTA card */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-2 relative lg:sticky lg:top-28"
        >
          {/* Outer glow halo */}
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-[2rem] pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 50% 0%, rgba(168,149,116,0.18) 0%, transparent 70%)",
            }}
          />

          <div
            className="relative flex flex-col rounded-3xl overflow-hidden"
            style={{
              background: "linear-gradient(160deg, rgba(255,255,255,0.055) 0%, rgba(10,10,10,0.95) 100%)",
              border: "1px solid rgba(168,149,116,0.25)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 2px 12px rgba(0,0,0,0.5), 0 16px 48px rgba(0,0,0,0.4), 0 0 60px rgba(168,149,116,0.1)",
            }}
          >
            {/* Top gradient bar */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

            <div className="p-8 sm:p-10">
              <div className="mb-8">
                <span className="section-label mb-5 inline-flex">100% personnalisé</span>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight tracking-tight mt-5">
                  Un engagement total envers vos résultats.
                </h3>
              </div>

              <ul className="space-y-4 mb-10">
                {features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.07, duration: 0.45 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-gold-500/15 border border-gold-500/25 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-gold-400" strokeWidth={2.5} />
                    </div>
                    <span className="text-[#bbb] text-sm leading-relaxed">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="space-y-3 pt-6 border-t border-white/[0.06]">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    window.dispatchEvent(new Event("open-booking"));
                  }}
                  className="w-full bg-gradient-gold text-[#1a0f04] font-bold text-base py-4 rounded-2xl transition-all duration-300 hover:brightness-110 hover:scale-[1.02] active:scale-[0.99]"
                  style={{ boxShadow: "0 4px 20px rgba(168,149,116,0.25), 0 1px 4px rgba(0,0,0,0.4)" }}
                >
                  Discuter de votre projet
                </button>
                <p className="text-center text-[#444] text-xs tracking-wide">
                  Sans engagement · Analyse offerte
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
