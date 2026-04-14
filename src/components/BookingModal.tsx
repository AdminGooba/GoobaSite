"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-booking", handleOpen);
    return () => window.removeEventListener("open-booking", handleOpen);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ type: "spring", duration: 0.45, bounce: 0.2 }}
            className="relative w-full max-w-4xl flex flex-col overflow-hidden"
            style={{
              height: "85vh",
              maxHeight: "820px",
              background: "#0a0a0a",
              border: "1px solid rgba(168,149,116,0.2)",
              borderRadius: "1.5rem",
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.04), 0 8px 40px rgba(0,0,0,0.7), 0 0 60px rgba(168,149,116,0.08)",
            }}
          >
            {/* Header */}
            <div
              className="flex justify-between items-center px-5 py-3.5 shrink-0"
              style={{
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              {/* Top gold accent */}
              <div className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-gold-500/35 to-transparent" />

              <div className="flex items-center gap-2.5">
                <div
                  className="w-5 h-5 rounded flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #8a7458, #d4c3a3)",
                    boxShadow: "0 2px 6px rgba(168,149,116,0.3)",
                  }}
                >
                  <span className="text-[#1a0f04] font-black text-[10px] leading-none">G</span>
                </div>
                <span className="text-[#bbb] text-sm font-medium">Réserver votre appel stratégique</span>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                aria-label="Fermer"
                className="w-7 h-7 flex items-center justify-center rounded-full transition-colors duration-200"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.05)";
                }}
              >
                <X className="w-3.5 h-3.5 text-[#777]" />
              </button>
            </div>

            {/* Calendly iframe */}
            <div className="flex-1 w-full bg-[#0a0a0a] relative">
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
        </div>
      )}
    </AnimatePresence>
  );
}
