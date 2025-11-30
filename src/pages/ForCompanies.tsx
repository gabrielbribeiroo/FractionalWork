import { useEffect } from "react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { CompanyHeroSection } from "@/components/landing/CompanyHeroSection";
import { CompanyBenefitsSection } from "@/components/landing/CompanyBenefitsSection";
import { CompanyWaitlistSection } from "@/components/landing/CompanyWaitlistSection";
import "@/lib/i18n";

const ForCompanies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CompanyHeroSection />
      <CompanyBenefitsSection />
      <CompanyWaitlistSection />
      <Footer />
    </div>
  );
};

export default ForCompanies;
