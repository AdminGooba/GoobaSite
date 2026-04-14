import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Comparison from "@/components/Comparison";
import Booking from "@/components/Booking";
import Vision from "@/components/Vision";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  return (
    <>
      <BookingModal />
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Comparison />
      <Booking />
      <Vision />
      <FAQ />
      <Footer />
    </>
  );
}
