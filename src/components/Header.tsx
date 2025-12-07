import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
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
          <a href="/" className="text-xl md:text-2xl font-display font-bold text-gradient-fire">
            MAX DANGER
          </a>
          
          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("libro")}
              className="text-foreground/80 hover:text-primary transition-colors font-display text-sm tracking-wider"
            >
              Il Libro
            </button>
            <button 
              onClick={() => scrollToSection("crowdfunding")}
              className="text-foreground/80 hover:text-primary transition-colors font-display text-sm tracking-wider"
            >
              Crowdfunding
            </button>
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => scrollToSection("crowdfunding")}
            >
              Sostieni Ora
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
                onClick={() => scrollToSection("libro")}
                className="text-foreground/80 hover:text-primary transition-colors font-display text-sm tracking-wider text-left py-2"
              >
                Il Libro
              </button>
              <button 
                onClick={() => scrollToSection("crowdfunding")}
                className="text-foreground/80 hover:text-primary transition-colors font-display text-sm tracking-wider text-left py-2"
              >
                Crowdfunding
              </button>
              <Button 
                variant="hero" 
                onClick={() => scrollToSection("crowdfunding")}
              >
                Sostieni Ora
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
