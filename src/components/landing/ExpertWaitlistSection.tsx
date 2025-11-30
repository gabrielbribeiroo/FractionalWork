import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const expertSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email too long"),
  linkedin: z.string().trim().url("Must be a valid URL").max(500, "URL too long"),
  portfolio: z.string().trim().url("Must be a valid URL").max(500, "URL too long").optional().or(z.literal('')),
  role: z.string().trim().min(2, "Role is required").max(100, "Role too long"),
  expertise: z.string().trim().min(2, "Expertise is required").max(200, "Expertise too long"),
  hasFractionalExperience: z.enum(['yes', 'no', 'learning']),
  knowsModel: z.enum(['yes', 'no', 'somewhat']),
  availability: z.string().trim().min(2, "Availability is required").max(200, "Text too long"),
});

type ExpertFormData = z.infer<typeof expertSchema>;

export const ExpertWaitlistSection = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpertFormData>({
    resolver: zodResolver(expertSchema),
    defaultValues: {
      hasFractionalExperience: 'no',
      knowsModel: 'no',
    },
  });

  const onSubmit = async (data: ExpertFormData) => {
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: t('form_success'),
      duration: 5000,
    });
    
    reset();
    setIsSubmitting(false);
  };

  return (
    <section id="waitlist" className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('expert_waitlist_title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('expert_waitlist_subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="p-8 md:p-12 border-2 shadow-xl bg-card/50 backdrop-blur-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">{t('form_label_name')} *</Label>
                <Input
                  id="name"
                  placeholder="Jane Doe"
                  {...register('name')}
                  className="h-12"
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{t('form_label_email')} *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  {...register('email')}
                  className="h-12"
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="linkedin">{t('form_label_linkedin')} *</Label>
                <Input
                  id="linkedin"
                  type="url"
                  placeholder="https://linkedin.com/in/..."
                  {...register('linkedin')}
                  className="h-12"
                />
                {errors.linkedin && (
                  <p className="text-sm text-destructive">{errors.linkedin.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="portfolio">{t('form_label_portfolio')}</Label>
                <Input
                  id="portfolio"
                  type="url"
                  placeholder="https://..."
                  {...register('portfolio')}
                  className="h-12"
                />
                {errors.portfolio && (
                  <p className="text-sm text-destructive">{errors.portfolio.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">{t('form_label_role')} *</Label>
                <Input
                  id="role"
                  placeholder="e.g. Fractional CTO, CMO..."
                  {...register('role')}
                  className="h-12"
                />
                {errors.role && (
                  <p className="text-sm text-destructive">{errors.role.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="expertise">{t('form_label_expertise')} *</Label>
                <Input
                  id="expertise"
                  placeholder="e.g. Fintech, SaaS, Marketing..."
                  {...register('expertise')}
                  className="h-12"
                />
                {errors.expertise && (
                  <p className="text-sm text-destructive">{errors.expertise.message}</p>
                )}
              </div>

              <div className="space-y-3">
                <Label className="text-base font-semibold">{t('expert_form_has_experience')} *</Label>
                <RadioGroup defaultValue="no" className="flex flex-col space-y-2">
                  <label className="flex items-center space-x-3 cursor-pointer border-2 border-border rounded-lg p-4 hover:border-primary transition-all">
                    <RadioGroupItem value="yes" id="exp-yes" {...register('hasFractionalExperience')} />
                    <span>{t('expert_form_exp_yes')}</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer border-2 border-border rounded-lg p-4 hover:border-primary transition-all">
                    <RadioGroupItem value="no" id="exp-no" {...register('hasFractionalExperience')} />
                    <span>{t('expert_form_exp_no')}</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer border-2 border-border rounded-lg p-4 hover:border-primary transition-all">
                    <RadioGroupItem value="learning" id="exp-learning" {...register('hasFractionalExperience')} />
                    <span>{t('expert_form_exp_learning')}</span>
                  </label>
                </RadioGroup>
                {errors.hasFractionalExperience && (
                  <p className="text-sm text-destructive">{errors.hasFractionalExperience.message}</p>
                )}
              </div>

              <div className="space-y-3">
                <Label className="text-base font-semibold">{t('expert_form_knows_model')} *</Label>
                <RadioGroup defaultValue="no" className="flex flex-col space-y-2">
                  <label className="flex items-center space-x-3 cursor-pointer border-2 border-border rounded-lg p-4 hover:border-primary transition-all">
                    <RadioGroupItem value="yes" id="model-yes" {...register('knowsModel')} />
                    <span>{t('expert_form_model_yes')}</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer border-2 border-border rounded-lg p-4 hover:border-primary transition-all">
                    <RadioGroupItem value="somewhat" id="model-somewhat" {...register('knowsModel')} />
                    <span>{t('expert_form_model_somewhat')}</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer border-2 border-border rounded-lg p-4 hover:border-primary transition-all">
                    <RadioGroupItem value="no" id="model-no" {...register('knowsModel')} />
                    <span>{t('expert_form_model_no')}</span>
                  </label>
                </RadioGroup>
                {errors.knowsModel && (
                  <p className="text-sm text-destructive">{errors.knowsModel.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="availability">{t('expert_form_availability')} *</Label>
                <Textarea
                  id="availability"
                  placeholder={t('expert_form_availability_placeholder')}
                  {...register('availability')}
                  className="min-h-24"
                />
                {errors.availability && (
                  <p className="text-sm text-destructive">{errors.availability.message}</p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-semibold h-14 text-lg"
              >
                {isSubmitting ? t('form_submitting') : t('form_submit')}
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
