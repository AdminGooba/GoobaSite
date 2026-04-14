"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Qu'inclut exactement votre offre 'Go Beyond' ?",
    answer:
      "Notre approche couvre de A à Z votre canal de vente digital : la création de votre plateforme e-commerce optimisée, le shooting photo/vidéo premium de vos produits, le lancement de vos campagnes de publicité pour générer des commandes, et l'intégration des tableaux de suivi de ventes.",
  },
  {
    question: "Combien de temps faut-il pour voir des résultats concrets ?",
    answer:
      "Une fois le site e-commerce et le contenu en place (2 à 4 semaines), le lancement des campagnes d'acquisition génère immédiatement du trafic qualifié. De manière générale, les premières commandes en ligne tombent dans les jours qui suivent le lancement publicitaire.",
  },
  {
    question: "Comment suivez-vous l'impact sur mes ventes réelles ?",
    answer:
      "Nous intégrons des pixels et des tableaux de bord avancés pour lier chaque euro investi dans la publicité au volume exact de vos commandes web. Vous analysez la rentabilité de vos ventes en ligne en toute transparence.",
  },
  {
    question: "Travaillez-vous sur tout type de commerce ?",
    answer:
      "Nous ciblons les métiers physiques de passion ou artisanaux (fromageries, boucheries, charcuteries, cavistes...) qui veulent s'affranchir de la limite géographique de leur boutique. Nous sublimons votre savoir-faire en ligne pour vous permettre de vendre dans tout le pays.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto" id="faq">

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-14"
      >
        <span className="section-label mb-5 inline-flex">FAQ</span>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight mt-4">
          Questions <span className="text-gradient-gold">Fréquentes</span>
        </h2>
        <p className="text-[#555] text-sm md:text-base">
          Tout ce que vous devez savoir sur notre fonctionnement.
        </p>
      </motion.div>

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-xl transition-all duration-300"
              style={{
                background: isOpen
                  ? "rgba(168,149,116,0.04)"
                  : "rgba(255,255,255,0.025)",
                border: isOpen
                  ? "1px solid rgba(168,149,116,0.22)"
                  : "1px solid rgba(255,255,255,0.06)",
                boxShadow: isOpen
                  ? "0 0 0 1px rgba(168,149,116,0.06), 0 4px 16px rgba(0,0,0,0.3)"
                  : "0 2px 8px rgba(0,0,0,0.2)",
              }}
            >
              {/* Gold left accent bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[2.5px] rounded-full transition-opacity duration-300"
                style={{
                  background: "linear-gradient(to bottom, transparent, rgba(168,149,116,0.7), transparent)",
                  opacity: isOpen ? 1 : 0,
                }}
              />

              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex items-center justify-between w-full px-6 py-5 text-left"
              >
                <span
                  className={`text-base font-medium transition-colors duration-200 pr-4 leading-snug ${
                    isOpen ? "text-gold-300" : "text-[#ccc]"
                  }`}
                >
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  className="shrink-0"
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-colors duration-200 ${
                      isOpen ? "text-gold-400" : "text-[#555]"
                    }`}
                  />
                </motion.div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-[#777] text-sm leading-[1.8]">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
