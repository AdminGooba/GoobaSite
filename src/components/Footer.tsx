import Link from "next/link";
import Image from "next/image";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({ subsets: ["latin"], weight: ["700", "900"] });

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto">
      {/* Thin gold top line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1.5">
            <div className="flex items-center gap-2.5">
              <div className="w-20 h-20 flex items-center justify-center">
                <Image 
                  src="/logo.svg" 
                  alt="Gooba Logo" 
                  width={80} 
                  height={80} 
                  className="w-full h-full object-contain drop-shadow-[0_2px_8px_rgba(168,149,116,0.3)]"
                />
              </div>
              <span className={`${merriweather.className} text-lg font-bold tracking-[0.12em] text-white`}>GOOBA</span>
            </div>
            <p className="text-[#3a3a3a] text-xs tracking-wide mt-1">
              © {year} Gooba. Tous droits réservés.
            </p>
          </div>

          {/* Tagline — hidden on small screens */}
          <p className="hidden md:block text-[#2e2e2e] text-xs tracking-[0.1em] uppercase">
            L&apos;excellence artisanale × le digital
          </p>

          {/* Legal links */}
          <nav className="flex items-center gap-6 text-xs text-[#444]">
            <Link
              href="/mentions-legales"
              className="hover:text-gold-400 transition-colors duration-200"
            >
              Mentions Légales
            </Link>
            <div className="w-px h-3 bg-white/10" />
            <Link
              href="/confidentialite"
              className="hover:text-gold-400 transition-colors duration-200"
            >
              Confidentialité
            </Link>
          </nav>

        </div>
      </div>
    </footer>
  );
}
