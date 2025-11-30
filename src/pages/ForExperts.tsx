import { useEffect } from "react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ExpertHeroSection } from "@/components/landing/ExpertHeroSection";
import { ExpertBenefitsSection } from "@/components/landing/ExpertBenefitsSection";
import { ExpertWaitlistSection } from "@/components/landing/ExpertWaitlistSection";
import "@/lib/i18n";

const ForExperts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ExpertHeroSection />
      <ExpertBenefitsSection />
      <ExpertWaitlistSection />
      <Footer />
    </div>
  );
};

export default ForExperts;
