import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

export default function MentionsLegales() {
  return (
    <>
      <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-gold-300 hover:text-gold-100 transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" />
          Retour
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-12">Mentions <span className="text-gradient-gold">Légales</span></h1>
        
        <div className="prose prose-invert prose-gold max-w-none text-gray-400 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Éditeur du site</h2>
            <p>Raison sociale : Gooba<br/>
            Forme juridique : [Statut juridique]<br/>
            Capital social : [Montant] €<br/>
            Siège social : [Adresse complète]<br/>
            RCS : [Ville] [Numéro RCS]</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Directeur de la publication</h2>
            <p>Directeur de la publication : CARDOSO Noah<br/>
            Contact : contact@gooba.com</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Hébergement</h2>
            <p>Le site est hébergé par :<br/>
            Netlify, Inc.<br/>
            512 2nd Street, Suite 200<br/>
            San Francisco, CA 94107, USA</p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
