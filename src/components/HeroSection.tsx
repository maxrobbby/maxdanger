import { Button } from "@/components/ui/button";
import BookCover from "./BookCover";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-sunset opacity-50" />
      
      {/* Particle/smoke effect overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent" />
      
      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Text */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <p 
              className="text-primary font-display tracking-[0.3em] mb-4 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="text-lg md:text-xl">Massimiliano Roberto</span>
              <span className="text-sm md:text-base"> {t('presents')}</span>
            </p>
            
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-none mb-2 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <span className="text-gradient-fire">MAX</span>
            </h1>
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-none mb-6 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              <span className="text-gradient-fire">DANGER</span>
            </h1>
            
            <p 
              className="text-lg md:text-xl text-muted-foreground font-body italic mb-8 max-w-xl mx-auto lg:mx-0 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.7s" }}
            >
              {t('heroDescription')}
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-up"
              style={{ animationDelay: "0.9s" }}
            >
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => scrollToSection("crowdfunding")}
              >
                {t('supportCrowdfunding')}
              </Button>
              <Button 
                variant="heroOutline" 
                size="xl"
                onClick={() => scrollToSection("synopsis")}
              >
                {t('discoverMore')}
              </Button>
            </div>
            
            <div 
              className="mt-8 flex items-center gap-6 justify-center lg:justify-start text-muted-foreground opacity-0 animate-fade-up"
              style={{ animationDelay: "1.1s" }}
            >
              <div className="text-center">
                <p className="text-2xl font-display text-primary">2026</p>
                <p className="text-xs uppercase tracking-wider">{t('comingSoon')}</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-display text-primary">{t('thriller')}</p>
                <p className="text-xs uppercase tracking-wider">{t('action')}</p>
              </div>
            </div>
          </div>
          
          {/* Right side - Book */}
          <div 
            className="flex justify-center order-1 lg:order-2 opacity-0 animate-scale-in"
            style={{ animationDelay: "0.3s" }}
          >
            <BookCover />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button 
        onClick={() => scrollToSection("synopsis")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary animate-bounce cursor-pointer hover:text-accent transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;
