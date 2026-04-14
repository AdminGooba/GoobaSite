"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X as XIcon } from "lucide-react";

const withGooba = [
  "Une plateforme e-commerce vitrine qui sublime vos produits",
  "Acquisition ciblée (Google, Ads) pour vendre sur tout le territoire",
  "Image de marque forte qui justifie vos prix et la qualité",
  "Un canal de vente en ligne performant qui tourne 24h/24",
  "Mesure exacte des ventes et du retour sur investissement",
];

const withoutGooba = [
  "Un commerce invisible en ligne malgré des produits d'exception",
  "Dépendance exclusive au trafic physique de votre boutique",
  "Une identité web datée qui freine les commandes",
  "Ventes plafonnées à votre bassin géographique immédiat",
  "Peu d'outils pour fidéliser et relancer numériquement vos clients",
];

export default function Comparison() {
  const [isGoobaActive, setIsGoobaActive] = useState(true);

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto" id="comparaison">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-14"
      >
        <span className="section-label mb-5 inline-flex">Comparaison</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-4 tracking-tight">
          <span className="text-gradient-gold">La différence</span> entre survivre et dominer.
        </h2>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-5 mt-10">
          <span className={`text-sm font-medium transition-colors duration-300 ${!isGoobaActive ? "text-red-400" : "text-[#555]"}`}>
            Sans Gooba
          </span>

          <button
            onClick={() => setIsGoobaActive(!isGoobaActive)}
            aria-label="Basculer"
            className={`relative w-16 h-8 rounded-full p-1 transition-colors duration-500 ${
              isGoobaActive
                ? "bg-gold-500/20 border border-gold-500/40"
                : "bg-red-500/15 border border-red-500/25"
            }`}
          >
            <motion.div
              animate={{ x: isGoobaActive ? 32 : 0 }}
              transition={{ type: "spring", stiffness: 420, damping: 28 }}
              className={`w-6 h-6 rounded-full shadow-lg ${
                isGoobaActive
                  ? "bg-gold-300 shadow-gold-500/40"
                  : "bg-red-400 shadow-red-500/40"
              }`}
            />
          </button>

          <span className={`text-sm font-medium transition-colors duration-300 ${isGoobaActive ? "text-gold-300" : "text-[#555]"}`}>
            Avec Gooba
          </span>
        </div>
      </motion.div>

      {/* Panel */}
      <div className="relative min-h-[360px]">
        <AnimatePresence mode="wait">
          {isGoobaActive ? (
            <motion.div
              key="with-gooba"
              initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -16, filter: "blur(8px)" }}
              transition={{ duration: 0.38, ease: "easeOut" }}
              className="glass-card relative overflow-hidden p-8 md:p-12"
              style={{
                borderColor: "rgba(168,149,116,0.25)",
                boxShadow: "0 0 0 1px rgba(168,149,116,0.08), 0 8px 32px rgba(0,0,0,0.4), 0 0 50px rgba(168,149,116,0.08)",
              }}
            >
              {/* Top accent */}
              <div className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

              <h3 className="text-xl md:text-2xl font-bold text-white mb-8 tracking-tight">
                Votre écosystème s&apos;emballe.
              </h3>
              <ul className="space-y-5">
                {withGooba.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.07 }}
                    className="flex items-center gap-4 text-[#ccc] text-base"
                  >
                    <div className="w-7 h-7 rounded-full bg-green-500/15 border border-green-500/20 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-green-400" strokeWidth={2.5} />
                    </div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ) : (
            <motion.div
              key="without-gooba"
              initial={{ opacity: 0, y: -16, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: 16, filter: "blur(8px)" }}
              transition={{ duration: 0.38, ease: "easeOut" }}
              className="glass-card relative overflow-hidden p-8 md:p-12"
              style={{
                background: "rgba(30,8,8,0.6)",
                borderColor: "rgba(239,68,68,0.15)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4), 0 0 40px rgba(220,38,38,0.04)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/8 to-transparent pointer-events-none" />

              <h3 className="text-xl md:text-2xl font-bold text-[#888] mb-8 tracking-tight">
                La lutte quotidienne.
              </h3>
              <ul className="space-y-5">
                {withoutGooba.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.07 }}
                    className="flex items-center gap-4 text-[#666] text-base"
                  >
                    <div className="w-7 h-7 rounded-full bg-red-500/8 border border-red-500/15 flex items-center justify-center shrink-0">
                      <XIcon className="w-3.5 h-3.5 text-red-500/60" />
                    </div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
