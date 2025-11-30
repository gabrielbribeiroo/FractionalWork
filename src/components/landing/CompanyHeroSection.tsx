import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Target, Rocket } from "lucide-react";

export const CompanyHeroSection = () => {
  const { t } = useTranslation();

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 pt-24 pb-12">
      {/* Animated background blobs - Reduced opacity for cleaner look */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/5 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-secondary/10 to-primary/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-gradient-to-br from-accent/5 to-secondary/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-gradient-to-br from-primary/5 to-accent/10 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block"
            >
              <span className="px-6 py-3 bg-primary/10 border border-primary/20 rounded-full text-sm font-semibold text-primary backdrop-blur-sm">
                {t('company_hero_badge')}
              </span>
            </motion.div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight font-display">
              {t('company_hero_title_prefix')}{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-pulse-glow">
                {t('company_hero_title_highlight')}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('company_hero_subtitle')}
            </p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="pt-4"
            >
              <Button 
                onClick={scrollToWaitlist}
                size="lg" 
                className="text-lg px-10 py-7 h-auto bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-primary text-primary-foreground font-bold shadow-2xl hover:shadow-accent/50 transition-all duration-500 transform hover:scale-105 group rounded-full"
              >
                {t('company_hero_cta')}
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16"
            >
              <div className="flex flex-col items-center space-y-2 p-8 rounded-3xl bg-card/60 backdrop-blur-lg border border-primary/30 hover:border-primary/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 group">
                <Zap className="w-10 h-10 text-primary mb-3 group-hover:animate-pulse" />
                <div className="text-5xl font-black text-foreground bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">48h</div>
                <div className="text-sm text-muted-foreground font-semibold">{t('company_stat_matching')}</div>
              </div>
              <div className="flex flex-col items-center space-y-2 p-8 rounded-3xl bg-card/60 backdrop-blur-lg border border-accent/30 hover:border-accent/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 group" style={{ animationDelay: '0.2s' }}>
                <Target className="w-10 h-10 text-accent mb-3 group-hover:animate-pulse" />
                <div className="text-5xl font-black text-foreground bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">95%</div>
                <div className="text-sm text-muted-foreground font-semibold">{t('company_stat_success')}</div>
              </div>
              <div className="flex flex-col items-center space-y-2 p-8 rounded-3xl bg-card/60 backdrop-blur-lg border border-secondary/30 hover:border-secondary/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-secondary/20 group" style={{ animationDelay: '0.4s' }}>
                <Rocket className="w-10 h-10 text-secondary mb-3 group-hover:animate-pulse" />
                <div className="text-5xl font-black text-foreground bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">70%</div>
                <div className="text-sm text-muted-foreground font-semibold">{t('company_stat_cost_reduction')}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
