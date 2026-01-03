import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (isHomePage) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="text-xl md:text-2xl font-display font-bold text-gradient-fire">
            MAX DANGER
          </Link>
          
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection("synopsis")}
              className="text-foreground/80 hover:text-primary transition-colors font-display text-sm tracking-wider"
            >
              {t('synopsis')}
            </button>
            <button 
              onClick={() => scrollToSection("book")}
              className="text-foreground/80 hover:text-primary transition-colors font-display text-sm tracking-wider"
            >
              {t('theBook')}
            </button>
            <button 
              onClick={() => scrollToSection("crowdfunding")}
              className="text-foreground/80 hover:text-primary transition-colors font-display text-sm tracking-wider"
            >
              {t('crowdfunding')}
            </button>
            <Link 
              to="/author"
              className="text-foreground/80 hover:text-primary transition-colors font-display text-sm tracking-wider"
            >
              {t('theAuthor')}
            </Link>
            <Link 
              to="/acknowledgments"
              className="text-foreground/80 hover:text-primary transition-colors font-display text-sm tracking-wider"
            >
              {t('acknowledgments')}
            </Link>
            <LanguageSelector />
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => scrollToSection("crowdfunding")}
            >
              {t('supportNow')}
            </Button>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile nav */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection("synopsis")}
                className="text-foreground/80 hover:text-primary transition-colors font-display text-sm tracking-wider text-left py-2"
              >
                {t('synopsis')}
              </button>
              <button 
                onClick={() => scrollToSection("book")}
                className="text-foreground/80 hover:text-primary transition-colors font-display text-sm tracking-wider text-left py-2"
              >
                {t('theBook')}
              </button>
              <button 
                onClick={() => scrollToSection("crowdfunding")}
                className="text-foreground/80 hover:text-primary transition-colors font-display text-sm tracking-wider text-left py-2"
              >
                {t('crowdfunding')}
              </button>
              <Link 
                to="/author"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground/80 hover:text-primary transition-colors font-display text-sm tracking-wider text-left py-2"
              >
                {t('theAuthor')}
              </Link>
              <Link 
                to="/acknowledgments"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground/80 hover:text-primary transition-colors font-display text-sm tracking-wider text-left py-2"
              >
                {t('acknowledgments')}
              </Link>
              <div className="py-2">
                <LanguageSelector />
              </div>
              <Button 
                variant="hero" 
                onClick={() => scrollToSection("crowdfunding")}
              >
                {t('supportNow')}
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
