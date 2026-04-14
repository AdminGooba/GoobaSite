"use client";

import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="vision">
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">

        {/* ── Photo placeholder ── */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Halo behind image */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 rounded-2xl pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 30% 50%, rgba(168,149,116,0.14) 0%, transparent 65%)",
              filter: "blur(40px)",
            }}
          />

          <div
            className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(160deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
              border: "1px solid rgba(255,255,255,0.07)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.5), 0 0 60px rgba(168,149,116,0.06)",
            }}
          >
            {/* Placeholder content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 text-center p-8">
              {/* Decorative icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{
                  background: "rgba(168,149,116,0.08)",
                  border: "1px solid rgba(168,149,116,0.15)",
                }}
              >
                <svg className="w-8 h-8 text-gold-500/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-[#444] text-xs leading-relaxed max-w-[200px]">
                Placez <code className="text-[#666]">founders.jpg</code> dans <code className="text-[#666]">/public</code> puis éditez ce composant
              </p>
            </div>

            {/* Corner marks */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-gold-500/40 rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-gold-500/40 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-gold-500/40 rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-gold-500/40 rounded-br-lg" />
          </div>
        </motion.div>

        {/* ── Text ── */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <span className="section-label mb-6 inline-flex">Notre Vision</span>

          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight leading-[1.1] mt-5">
            L&apos;excellence artisanale rencontre{" "}
            <span className="text-gradient-gold">l&apos;innovation digitale.</span>
          </h2>

          <div className="space-y-5 text-[#666] text-base md:text-[1.05rem] leading-[1.8] mb-10">
            <p>
              Tout a commencé par un constat évident : les métiers de passion
              (fromagers, bouchers, cavistes, chocolatiers) proposent des produits
              d&apos;exception, mais leurs ventes sont souvent limitées à ceux qui
              passent la porte de leur boutique.
            </p>
            <p>
              C&apos;est pour briser cette frontière que{" "}
              <strong className="text-white font-medium">GOOBA </strong> est née. Nous
              fusionnons la maîtrise technologique avec l&apos;art de la mise en valeur
              et l&apos;acquisition ciblée — de A à Z.
            </p>
            <p>
              Notre mission : vous construire un canal de vente numérique de bout en
              bout. Vous excellez dans votre métier, nous excellons pour le vendre sur
              internet avec un seul mot d&apos;ordre :{" "}
              <em className="text-gold-300 not-italic font-medium">Go Beyond.</em>
            </p>
          </div>

          <div className="pt-8 border-t border-white/[0.06]">
            <p className="text-white font-semibold text-lg tracking-tight mb-0.5">
              Evan VASSEUR{" "}
              <span className="text-gradient-gold">&amp;</span>{" "}
              Noah CARDOSO
            </p>
            <p className="text-gold-500/70 font-light tracking-[0.1em] uppercase text-xs">
              Fondateurs de GOOBA
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
