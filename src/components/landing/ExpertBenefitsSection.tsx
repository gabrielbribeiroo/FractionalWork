import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Sparkles, Target, Wallet, Users, Award, BarChart } from "lucide-react";

export const ExpertBenefitsSection = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: Target,
      title: t('expert_benefit_1_title'),
      description: t('expert_benefit_1_desc'),
    },
    {
      icon: Wallet,
      title: t('expert_benefit_2_title'),
      description: t('expert_benefit_2_desc'),
    },
    {
      icon: Users,
      title: t('expert_benefit_3_title'),
      description: t('expert_benefit_3_desc'),
    },
    {
      icon: Award,
      title: t('expert_benefit_4_title'),
      description: t('expert_benefit_4_desc'),
    },
    {
      icon: BarChart,
      title: t('expert_benefit_5_title'),
      description: t('expert_benefit_5_desc'),
    },
    {
      icon: Sparkles,
      title: t('expert_benefit_6_title'),
      description: t('expert_benefit_6_desc'),
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            {t('expert_benefits_title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('expert_benefits_subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-lg border border-border hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:transform hover:scale-105 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-500 group-hover:rotate-6">
                  <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
