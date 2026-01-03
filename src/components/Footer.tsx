import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const [visitCount, setVisitCount] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const storedCount = localStorage.getItem("visitCount");
    const newCount = storedCount ? parseInt(storedCount) + 1 : 1;
    localStorage.setItem("visitCount", newCount.toString());
    setVisitCount(newCount);
  }, []);

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-display font-bold text-gradient-fire mb-2">
              MAX DANGER
            </h3>
            <p className="text-muted-foreground text-sm">
              © 2025 Massimiliano Roberto. {t('allRightsReserved')}
            </p>
          </div>
          
          <nav className="flex gap-8">
            <a href="#book" className="text-muted-foreground hover:text-primary transition-colors font-display text-sm tracking-wider">
              {t('theBook')}
            </a>
            <a href="#crowdfunding" className="text-muted-foreground hover:text-primary transition-colors font-display text-sm tracking-wider">
              {t('crowdfunding')}
            </a>
            <a href="mailto:contact@example.com" className="text-muted-foreground hover:text-primary transition-colors font-display text-sm tracking-wider">
              {t('contact')}
            </a>
          </nav>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <Eye className="w-4 h-4" />
            <span className="text-sm font-display tracking-wider">
              {visitCount.toLocaleString()} {t('visits')}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
