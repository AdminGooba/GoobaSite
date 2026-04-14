import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-500 via-gold-300 to-gold-100 mb-6">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-medium text-white mb-8">
        Cette page a disparu dans les abysses.
      </h2>
      <p className="text-gray-400 mb-12 max-w-md mx-auto">
        L&apos;URL que vous avez demandée n&apos;existe pas ou a été déplacée.
      </p>
      
      <Link href="/" className="btn-premium inline-flex items-center gap-2 text-white">
        <ArrowLeft className="w-4 h-4" />
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
