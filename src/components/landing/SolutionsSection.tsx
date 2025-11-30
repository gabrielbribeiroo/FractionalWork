import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Check, Building2, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const SolutionsSection = () => {
  const { t } = useTranslation();

  const companyBenefits = [
    t('companies_benefit_1'),
    t('companies_benefit_2'),
    t('companies_benefit_3'),
    t('companies_benefit_4'),
  ];

  const expertBenefits = [
    t('experts_benefit_1'),
    t('experts_benefit_2'),
    t('experts_benefit_3'),
    t('experts_benefit_4'),
  ];

  return (
    <>
      {/* For Companies */}
      <section id="solutions" className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                <Building2 className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">{t('companies_title')}</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {t('companies_title')}
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                {t('companies_subtitle')}
              </p>

              <ul className="space-y-4 mb-8">
                {companyBenefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 bg-primary/10 rounded-full p-1">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-lg">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <Button
                size="lg"
                className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold"
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('companies_cta')}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-6 flex items-center justify-center">
                  <Building2 className="w-24 h-24 text-primary opacity-50" />
                </div>
                <h4 className="text-2xl font-bold mb-3">{t('companies_box_title')}</h4>
                <p className="text-muted-foreground text-lg">{t('companies_box_desc')}</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* For Experts */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <Card className="p-8 bg-gradient-to-br from-accent/5 to-primary/5 border-2 border-accent/20 hover:border-accent/40 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg mb-6 flex items-center justify-center">
                  <UserCircle className="w-24 h-24 text-accent opacity-50" />
                </div>
                <h4 className="text-2xl font-bold mb-3">{t('experts_box_title')}</h4>
                <p className="text-muted-foreground text-lg">{t('experts_box_desc')}</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
                <UserCircle className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium text-accent">{t('experts_title')}</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {t('experts_title')}
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                {t('experts_subtitle')}
              </p>

              <ul className="space-y-4 mb-8">
                {expertBenefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 bg-accent/10 rounded-full p-1">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-lg">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('experts_cta')}
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
