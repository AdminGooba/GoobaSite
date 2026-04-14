"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: "Approche",    href: "#services" },
    { name: "Offres",      href: "#offres" },
    { name: "Comparaison", href: "#comparaison" },
    { name: "Vision",      href: "#vision" },
    { name: "FAQ",         href: "#faq" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ${
        isScrolled
          ? "py-3 bg-[#080808]/75 backdrop-blur-xl border-b border-white/[0.06]"
          : "py-5 bg-transparent"
      }`}
      style={
        isScrolled
          ? { boxShadow: "0 1px 0 rgba(168,149,116,0.06), 0 4px 20px rgba(0,0,0,0.4)" }
          : {}
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <Link 
          href="/" 
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center gap-3 z-50 group"
        >
          <Image 
            src="/logo.svg" 
            alt="Gooba Logo" 
            width={80} 
            height={80} 
            className="w-16 h-16 lg:w-20 lg:h-20 object-contain drop-shadow-[0_2px_8px_rgba(168,149,116,0.3)] group-hover:drop-shadow-[0_2px_16px_rgba(168,149,116,0.5)] transition-all duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-[#888] hover:text-gold-300 transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new Event("open-booking"));
            }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.04] text-sm font-medium text-[#aaa] hover:bg-gold-500/10 hover:border-gold-500/30 hover:text-gold-300 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shadow-[0_0_6px_rgba(192,168,130,0.7)] animate-pulse" />
            Disponible
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden z-50 text-[#888] hover:text-white transition-colors p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute top-full left-0 w-full bg-[#080808]/98 backdrop-blur-2xl border-b border-white/[0.06] py-6 px-6 flex flex-col gap-5 lg:hidden"
            style={{ boxShadow: "0 16px 48px rgba(0,0,0,0.6)" }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base text-[#888] hover:text-gold-300 transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <button
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                window.dispatchEvent(new Event("open-booking"));
              }}
              className="mt-2 w-full flex items-center justify-center gap-2 py-3 rounded-full border border-white/[0.08] bg-white/[0.04] text-[#888] hover:bg-gold-500/10 hover:border-gold-500/30 hover:text-gold-300 transition-all duration-300 cursor-pointer"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shadow-[0_0_6px_rgba(192,168,130,0.7)] animate-pulse" />
              Disponible
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
