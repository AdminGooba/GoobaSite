"use client";

import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Target } from "lucide-react";

export default function Results() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>
      
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Obsédés par les <span className="text-gradient-gold">résultats</span>.
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Nous ne construisons pas juste de belles interfaces. Chaque action est traquée, mesurée et optimisée en temps réel pour maximiser votre ROI. L&apos;analyse de données est au cœur de notre processus décisionnel.
          </p>
          
          <ul className="space-y-6">
            {[
              { icon: Target, text: "Objectifs de conversion précis" },
              { icon: BarChart3, text: "Dashboards d'analyse en temps réel" },
              { icon: TrendingUp, text: "Optimisation continue des performances" }
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-white">
                <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-gold-300" />
                </div>
                <span className="font-medium text-lg">{item.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Abstract representation of tracking/data */}
          <div className="glass-card aspect-square md:aspect-video relative overflow-hidden flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent"></div>
            
            <div className="w-full h-full border-b border-l border-white/10 relative">
              {/* Animated chart bars */}
              <div className="absolute bottom-0 left-[10%] w-[15%] rounded-t-sm bg-gradient-to-t from-gold-500/20 to-gold-300/40 h-[40%]" />
              <div className="absolute bottom-0 left-[35%] w-[15%] rounded-t-sm bg-gradient-to-t from-gold-500/20 to-gold-300/60 h-[60%]" />
              <div className="absolute bottom-0 left-[60%] w-[15%] rounded-t-sm bg-gradient-to-t from-gold-500/20 to-gold-300/80 h-[45%]" />
              <div className="absolute bottom-0 left-[85%] w-[15%] rounded-t-sm bg-gradient-to-t from-gold-500/40 to-gold-100/90 h-[85%]" />
              
              {/* Tracking dot */}
              <motion.div 
                animate={{ 
                  x: [0, 50, 100, 200, 300],
                  y: [0, -30, 20, -50, -100]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                className="absolute bottom-[40%] left-[10%] w-3 h-3 bg-gold-100 rounded-full shadow-[0_0_15px_#e8e1d1]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
