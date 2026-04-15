import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Starfield from "@/components/Starfield";
import TabTitle from "@/components/TabTitle";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Gooba | GoBeyond",
  description: "Gooba déploie des infrastructures e-commerce premium pour artisans. Boostez vos ventes grâce à des solutions sur mesure en acquisition et contenu.",
  openGraph: {
    title: "Gooba | GoBeyond",
    description: "Gooba déploie des infrastructures e-commerce premium pour artisans. Boostez vos ventes grâce à des solutions sur mesure en acquisition et contenu.",
    type: "website",
    locale: "fr_FR",
    siteName: "Gooba",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gooba - Premium E-Commerce Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gooba | GoBeyond",
    description: "Gooba déploie des infrastructures e-commerce premium pour artisans. Boostez vos ventes grâce à des solutions sur mesure en acquisition et contenu.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth overflow-x-hidden">
      <body className={`${inter.variable} ${inter.className} overflow-x-hidden`}>
        {/* Primary top glow — gold haze */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed top-0 inset-x-0 h-[500px] -z-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(168,149,116,0.12) 0%, transparent 70%)",
          }}
        />
        {/* Secondary ambient glow — right side */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed top-1/3 right-0 w-[600px] h-[600px] -z-10"
          style={{
            background:
              "radial-gradient(circle at 100% 50%, rgba(168,149,116,0.04) 0%, transparent 60%)",
          }}
        />
        
        <Starfield />
        <TabTitle />

        <main className="min-h-screen flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
