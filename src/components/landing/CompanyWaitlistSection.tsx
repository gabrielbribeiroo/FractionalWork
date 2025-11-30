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
import { supabase } from "@/lib/supabase";

const companySchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email too long"),
  linkedin: z.string().trim().url("Must be a valid URL").max(500, "URL too long"),
  companyName: z.string().trim().min(2, "Company name is required").max(100, "Name too long"),
  website: z.string().trim().url("Must be a valid URL").max(500, "URL too long"),
  industry: z.string().trim().min(2, "Industry is required").max(200, "Industry too long"),
  companySize: z.enum(['startup', 'small', 'medium', 'enterprise']),
  problemToSolve: z.string().trim().min(10, "Please describe the problem in more detail").max(500, "Text too long"),
  expectedDeliverable: z.string().trim().min(10, "Please describe the expected deliverable").max(500, "Text too long"),
});

type CompanyFormData = z.infer<typeof companySchema>;

export const CompanyWaitlistSection = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CompanyFormData>({
    resolver: zodResolver(companySchema),
    defaultValues: {
      companySize: 'startup',
    },
  });

  const onSubmit = async (data: CompanyFormData) => {
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([
          {
            type: 'company',
            name: data.name,
            email: data.email,
            linkedin: data.linkedin,
            company_name: data.companyName,
            website: data.website,
            industry: data.industry,
            company_size: data.companySize,
            problem_to_solve: data.problemToSolve,
            expected_deliverable: data.expectedDeliverable,
            created_at: new Date().toISOString(),
          }
        ]);

      if (error) throw error;

      toast({
        title: t('form_success'),
        duration: 5000,
      });

      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error submitting form",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
            {t('company_waitlist_title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('company_waitlist_subtitle')}
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
                <Label htmlFor="name">{t('form_label_contact_name')} *</Label>
                <Input
                  id="name"
                  placeholder="John Smith"
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
                  placeholder="you@company.com"
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
                <Label htmlFor="companyName">{t('form_label_company_name')} *</Label>
                <Input
                  id="companyName"
                  placeholder="Acme Inc."
                  {...register('companyName')}
                  className="h-12"
                />
                {errors.companyName && (
                  <p className="text-sm text-destructive">{errors.companyName.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">{t('form_label_website')} *</Label>
                <Input
                  id="website"
                  type="url"
                  placeholder="https://acme.com"
                  {...register('website')}
                  className="h-12"
                />
                {errors.website && (
                  <p className="text-sm text-destructive">{errors.website.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="industry">{t('form_label_industry')} *</Label>
                <Input
                  id="industry"
                  placeholder="e.g. Healthtech, E-commerce..."
                  {...register('industry')}
                  className="h-12"
                />
                {errors.industry && (
                  <p className="text-sm text-destructive">{errors.industry.message}</p>
                )}
              </div>

              <div className="space-y-3">
                <Label className="text-base font-semibold">{t('company_form_size')} *</Label>
                <RadioGroup defaultValue="startup" className="flex flex-col space-y-2">
                  <label className="flex items-center space-x-3 cursor-pointer border-2 border-border rounded-lg p-4 hover:border-primary transition-all">
                    <RadioGroupItem value="startup" id="size-startup" {...register('companySize')} />
                    <span>{t('company_form_size_startup')}</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer border-2 border-border rounded-lg p-4 hover:border-primary transition-all">
                    <RadioGroupItem value="small" id="size-small" {...register('companySize')} />
                    <span>{t('company_form_size_small')}</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer border-2 border-border rounded-lg p-4 hover:border-primary transition-all">
                    <RadioGroupItem value="medium" id="size-medium" {...register('companySize')} />
                    <span>{t('company_form_size_medium')}</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer border-2 border-border rounded-lg p-4 hover:border-primary transition-all">
                    <RadioGroupItem value="enterprise" id="size-enterprise" {...register('companySize')} />
                    <span>{t('company_form_size_enterprise')}</span>
                  </label>
                </RadioGroup>
                {errors.companySize && (
                  <p className="text-sm text-destructive">{errors.companySize.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="problemToSolve">{t('company_form_problem')} *</Label>
                <Textarea
                  id="problemToSolve"
                  placeholder={t('company_form_problem_placeholder')}
                  {...register('problemToSolve')}
                  className="min-h-24"
                />
                {errors.problemToSolve && (
                  <p className="text-sm text-destructive">{errors.problemToSolve.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="expectedDeliverable">{t('company_form_deliverable')} *</Label>
                <Textarea
                  id="expectedDeliverable"
                  placeholder={t('company_form_deliverable_placeholder')}
                  {...register('expectedDeliverable')}
                  className="min-h-24"
                />
                {errors.expectedDeliverable && (
                  <p className="text-sm text-destructive">{errors.expectedDeliverable.message}</p>
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
