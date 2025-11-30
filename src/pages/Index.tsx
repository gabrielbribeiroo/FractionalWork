import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { SolutionsSection } from "@/components/landing/SolutionsSection";
import { WaitlistSection } from "@/components/landing/WaitlistSection";
import { Footer } from "@/components/landing/Footer";
import "@/lib/i18n";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to for-companies by default
    navigate("/for-companies");
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <SolutionsSection />
      <WaitlistSection />
      <Footer />
    </div>
  );
};

export default Index;
