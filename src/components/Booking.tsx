"use client";

import { motion } from "framer-motion";

export default function Booking() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-3xl overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.025)",
          border: "1px solid rgba(255,255,255,0.07)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.4), 0 0 80px rgba(168,149,116,0.05)",
        }}
      >
        {/* Top accent line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold-500/35 to-transparent" />

        {/* Background ambient */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: "600px",
            height: "300px",
            background: "radial-gradient(ellipse at 50% 0%, rgba(168,149,116,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative text-center py-12 px-6">
          <span className="section-label mb-5 inline-flex">Prise de contact</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight mt-5">
            Passez à la <span className="text-gradient-gold">vitesse supérieure.</span>
          </h2>
          <p className="text-[#666] max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Réservez votre appel stratégique de 30 minutes. Nous analyserons votre
            situation et déterminerons le meilleur plan d&apos;action — sans engagement.
          </p>
        </div>

        {/* Calendly iframe */}
        <div
          className="mx-4 md:mx-8 mb-6 md:mb-8 rounded-2xl overflow-hidden relative"
          style={{
            height: "680px",
            background: "#0a0a0a",
            border: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <iframe
            src="https://calendly.com/contact-gooba/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=0a0a0a&text_color=ffffff&primary_color=d4c3a3"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Prendre rendez-vous avec Gooba"
            className="absolute inset-0"
          />
        </div>
      </motion.div>
    </section>
  );
}
