import UtilityBar from "@/components/UtilityBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CredentialBar from "@/components/CredentialBar";
import TrustStrip from "@/components/TrustStrip";
import ProcessSection from "@/components/ProcessSection";
import AudienceSection from "@/components/AudienceSection";
import ApproachSection from "@/components/ApproachSection";
import ProgramsSection from "@/components/ProgramsSection";
import GallerySection from "@/components/GallerySection";
import InsightsSection from "@/components/InsightsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ReserveSection from "@/components/ReserveSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50">
        <UtilityBar />
        <Header />
      </div>
      <main className="flex-1">
        <Hero />
        <CredentialBar />
        <TrustStrip />
        <ProcessSection />
        <AudienceSection />
        <ApproachSection />
        <ProgramsSection />
        <GallerySection />
        <InsightsSection />
        <TestimonialsSection />
        <ReserveSection />
      </main>
      <Footer />
    </>
  );
}
