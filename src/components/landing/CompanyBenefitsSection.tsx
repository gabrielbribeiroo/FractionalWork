import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Zap, DollarSign, Shield, TrendingUp, Users, Clock } from "lucide-react";

export const CompanyBenefitsSection = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: Zap,
      title: t('company_benefit_1_title'),
      description: t('company_benefit_1_desc'),
    },
    {
      icon: DollarSign,
      title: t('company_benefit_2_title'),
      description: t('company_benefit_2_desc'),
    },
    {
      icon: Shield,
      title: t('company_benefit_3_title'),
      description: t('company_benefit_3_desc'),
    },
    {
      icon: TrendingUp,
      title: t('company_benefit_4_title'),
      description: t('company_benefit_4_desc'),
    },
    {
      icon: Users,
      title: t('company_benefit_5_title'),
      description: t('company_benefit_5_desc'),
    },
    {
      icon: Clock,
      title: t('company_benefit_6_title'),
      description: t('company_benefit_6_desc'),
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background via-accent/5 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
            {t('company_benefits_title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('company_benefits_subtitle')}
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
                className="p-8 rounded-3xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-lg border border-border hover:border-accent/60 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 hover:transform hover:scale-105 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mb-6 group-hover:from-accent/30 group-hover:to-primary/30 transition-all duration-500 group-hover:rotate-6">
                  <Icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
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
