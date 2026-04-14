import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

export default function Confidentialite() {
  return (
    <>
      <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-gold-300 hover:text-gold-100 transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" />
          Retour
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-12">Politique de <span className="text-gradient-gold">Confidentialité</span></h1>
        
        <div className="prose prose-invert prose-gold max-w-none text-gray-400 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Collecte des données personnelles</h2>
            <p>Nous collectons les informations suivantes lors de l'utilisation de nos formulaires de contact :
            - Nom et prénom
            - Adresse email
            - Numéro de téléphone (optionnel)</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Utilisation des données</h2>
            <p>Les données collectées sont utilisées exclusivement dans le cadre de la prise de contact et du suivi commercial. Elles ne sont en aucun cas vendues ou cédées à des tiers.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Durée de conservation</h2>
            <p>Vos données sont conservées pour une durée maximale de 3 ans à compter du dernier contact.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Vos droits</h2>
            <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour l'exercer, contactez-nous à : contact@gooba.fr</p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
