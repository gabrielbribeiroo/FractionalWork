import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight, Building2, User, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import "@/lib/i18n";

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-12">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Background Gradients */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight font-display">
                  The <span className="text-primary">New Way</span> to Work
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  We connect world-class fractional executives with forward-thinking companies. 
                  Scale faster, smarter, and with proven expertise.
                </p>
              </motion.div>
            </div>

            {/* Split Navigation Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* For Companies Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Card className="h-full p-8 md:p-12 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border-2 hover:border-primary/50 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-primary/10 transition-colors" />
                  
                  <div className="relative z-10 flex flex-col h-full items-start">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                      <Building2 className="w-8 h-8 text-primary" />
                    </div>
                    
                    <h2 className="text-3xl font-bold mb-4">I am a Company</h2>
                    <p className="text-lg text-muted-foreground mb-8 flex-grow">
                      Access elite C-level talent on demand. Scale your leadership team without the overhead.
                    </p>

                    <ul className="space-y-3 mb-8 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <span>Hire in 48 hours</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <span>No recruitment fees</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <span>Flexible contracts</span>
                      </li>
                    </ul>

                    <Link to="/for-companies" className="w-full">
                      <Button className="w-full text-lg h-14 bg-primary hover:bg-primary-dark group-hover:translate-x-1 transition-all">
                        Find Talent
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>

              {/* For Experts Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <Card className="h-full p-8 md:p-12 hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-300 border-2 hover:border-secondary/50 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-secondary/10 transition-colors" />
                  
                  <div className="relative z-10 flex flex-col h-full items-start">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                      <User className="w-8 h-8 text-secondary" />
                    </div>
                    
                    <h2 className="text-3xl font-bold mb-4">I am an Expert</h2>
                    <p className="text-lg text-muted-foreground mb-8 flex-grow">
                      Monetize your expertise. Build a portfolio career with high-value fractional roles.
                    </p>

                    <ul className="space-y-3 mb-8 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-secondary" />
                        <span>Multiple income streams</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-secondary" />
                        <span>Work on your terms</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-secondary" />
                        <span>Curated opportunities</span>
                      </li>
                    </ul>

                    <Link to="/for-experts" className="w-full">
                      <Button className="w-full text-lg h-14 bg-secondary hover:bg-secondary-dark text-white group-hover:translate-x-1 transition-all">
                        Join as Expert
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
