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
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

// Validation schemas
const baseSchema = z.object({
  userType: z.enum(['expert', 'company']),
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email too long"),
  linkedin: z.string().trim().url("Must be a valid URL").max(500, "URL too long"),
});

const expertSchema = baseSchema.extend({
  portfolio: z.string().trim().url("Must be a valid URL").max(500, "URL too long").optional().or(z.literal('')),
  role: z.string().trim().min(2, "Role is required").max(100, "Role too long"),
  expertise: z.string().trim().min(2, "Expertise is required").max(200, "Expertise too long"),
});

const companySchema = baseSchema.extend({
  website: z.string().trim().url("Must be a valid URL").max(500, "URL too long"),
  industry: z.string().trim().min(2, "Industry is required").max(200, "Industry too long"),
});

type ExpertFormData = z.infer<typeof expertSchema>;
type CompanyFormData = z.infer<typeof companySchema>;
type FormData = ExpertFormData | CompanyFormData;

export const WaitlistSection = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [userType, setUserType] = useState<'expert' | 'company'>('expert');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const schema = userType === 'expert' ? expertSchema : companySchema;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      userType: 'expert',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: t('form_success'),
      duration: 5000,
    });
    
    reset();
    setUserType('expert');
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
            {t('waitlist_title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('waitlist_subtitle')}
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
              {/* User Type Selection */}
              <div className="space-y-3">
                <Label className="text-base font-semibold">{t('form_label_type')}</Label>
                <RadioGroup
                  defaultValue="expert"
                  onValueChange={(value) => {
                    setUserType(value as 'expert' | 'company');
                  }}
                  className="flex gap-4"
                >
                  <label className="flex items-center space-x-3 cursor-pointer border-2 border-border rounded-lg p-4 hover:border-primary transition-all flex-1">
                    <RadioGroupItem value="expert" id="expert" {...register('userType')} />
                    <span className="font-medium">{t('form_type_expert')}</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer border-2 border-border rounded-lg p-4 hover:border-primary transition-all flex-1">
                    <RadioGroupItem value="company" id="company" {...register('userType')} />
                    <span className="font-medium">{t('form_type_company')}</span>
                  </label>
                </RadioGroup>
              </div>

              {/* Common Fields */}
              <div className="space-y-2">
                <Label htmlFor="name">{t('form_label_name')} *</Label>
                <Input
                  id="name"
                  placeholder="Jane Doe"
                  {...register('name')}
                  className="h-12"
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name.message as string}</p>
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
                  <p className="text-sm text-destructive">{errors.email.message as string}</p>
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
                  <p className="text-sm text-destructive">{errors.linkedin.message as string}</p>
                )}
              </div>

              {/* Expert-specific Fields */}
              {userType === 'expert' && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="portfolio">{t('form_label_portfolio')}</Label>
                    <Input
                      id="portfolio"
                      type="url"
                      placeholder="https://..."
                      {...register('portfolio' as keyof FormData)}
                      className="h-12"
                    />
                    {'portfolio' in errors && errors.portfolio && (
                      <p className="text-sm text-destructive">{String(errors.portfolio.message)}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role">{t('form_label_role')} *</Label>
                    <Input
                      id="role"
                      placeholder="e.g. Fractional CTO, CMO..."
                      {...register('role' as keyof FormData)}
                      className="h-12"
                    />
                    {'role' in errors && errors.role && (
                      <p className="text-sm text-destructive">{String(errors.role.message)}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="expertise">{t('form_label_expertise')} *</Label>
                    <Input
                      id="expertise"
                      placeholder="e.g. Fintech, SaaS, Marketing..."
                      {...register('expertise' as keyof FormData)}
                      className="h-12"
                    />
                    {'expertise' in errors && errors.expertise && (
                      <p className="text-sm text-destructive">{String(errors.expertise.message)}</p>
                    )}
                  </div>
                </>
              )}

              {/* Company-specific Fields */}
              {userType === 'company' && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="website">{t('form_label_website')} *</Label>
                    <Input
                      id="website"
                      type="url"
                      placeholder="https://acme.com"
                      {...register('website' as keyof FormData)}
                      className="h-12"
                    />
                    {'website' in errors && errors.website && (
                      <p className="text-sm text-destructive">{String(errors.website.message)}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="industry">{t('form_label_industry')} *</Label>
                    <Input
                      id="industry"
                      placeholder="e.g. Healthtech, E-commerce..."
                      {...register('industry' as keyof FormData)}
                      className="h-12"
                    />
                    {'industry' in errors && errors.industry && (
                      <p className="text-sm text-destructive">{String(errors.industry.message)}</p>
                    )}
                  </div>
                </>
              )}

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
