"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Montserrat, Poppins, Merriweather } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "900"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"], style: ["italic"] });
const merriweather = Merriweather({ subsets: ["latin"], weight: ["700", "900"] });

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const stats = [
  { value: "100%", label: "Sur-mesure" },
  { value: "0€",   label: "Premier appel" },
  { value: "B2B",  label: "Exclusif" },
];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden">

      {/* Dot grid — fades towards edges */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(168,149,116,0.18) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse 70% 65% at 50% 50%, black 20%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 65% at 50% 50%, black 20%, transparent 100%)",
        }}
      />

      {/* Central ambient orb */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none"
        style={{
          width: "700px",
          height: "500px",
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(168,149,116,0.07) 0%, transparent 70%)",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-7 max-w-4xl"
      >
        {/* GOOBA Title */}
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-5">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#a89574]" />
            <h2
              className={`${merriweather.className} text-5xl md:text-6xl lg:text-7xl font-black tracking-[0.3em]`}
              style={{
                background: "linear-gradient(135deg, #a89574, #d4c3a3, #e8e1d1, #d4c3a3, #a89574)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 24px rgba(168,149,116,0.35))",
              }}
            >
              GOOBA
            </h2>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#a89574]" />
          </div>
          <p className={`${poppins.className} text-[10px] tracking-[0.45em] text-[#a89574] uppercase`}>
            Agence Digitale Premium
          </p>
        </motion.div>


        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className={`${montserrat.className} text-[clamp(0.95rem,3.2vw,2.6rem)] font-black tracking-[-0.03em] uppercase leading-[1.15] text-white md:whitespace-nowrap`}
        >
          L&apos;ACCOMPAGNEMENT SUR-MESURE DÉDIÉ
          <br />
          AUX{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #a89574, #d4c3a3, #e8e1d1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            MÉTIERS DE PASSION
          </span>
        </motion.h1>

        {/* Sub-tagline */}
        <motion.div
          variants={itemVariants}
          className={`${poppins.className} flex flex-col gap-1.5 max-w-2xl mx-auto italic uppercase`}
        >
          <p className="text-sm md:text-base font-bold tracking-[0.14em] text-[#888]">
            VOTRE SAVOIR-FAIRE, NOTRE STRATÉGIE
          </p>
          <p className="text-xs md:text-sm font-normal tracking-[0.1em] text-[#555]">
            INSCRIRE VOTRE EXCELLENCE DANS L&apos;ÈRE DU DIGITAL
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div variants={itemVariants} className="pt-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new Event("open-booking"));
            }}
            className="btn-premium inline-flex items-center gap-3 text-white group"
          >
            Réserver un appel stratégique
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-6 pt-2"
        >
          {stats.map((stat, i) => (
            <Fragment key={i}>
              {i > 0 && (
                <div className="w-px h-8 bg-white/10 shrink-0" />
              )}
              <div className="flex flex-col items-center gap-0.5 min-w-[60px]">
                <span className="text-lg md:text-xl font-bold text-white tracking-tight leading-none">
                  {stat.value}
                </span>
                <span className="text-[10px] text-[#555] uppercase tracking-[0.12em] leading-none">
                  {stat.label}
                </span>
              </div>
            </Fragment>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
