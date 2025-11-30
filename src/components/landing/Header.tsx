import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { LanguageSelector } from "@/components/LanguageSelector";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold cursor-pointer"
            >
              Fractional<span className="text-primary">Work</span>
            </motion.div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/for-experts" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {t('nav_for_experts')}
            </Link>
            <Link to="/for-companies" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {t('nav_for_companies')}
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </motion.header>
  );
};
