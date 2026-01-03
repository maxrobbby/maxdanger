import { BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SynopsisSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="synopsis" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-sm mb-8">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-primary font-display text-sm tracking-wider">{t('theStory')}</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
            <span className="text-gradient-fire">{t('synopsisTitle')}</span>
          </h2>
          
          <div className="relative">
            {/* Decorative quotes */}
            <span className="absolute -top-4 -left-2 md:-left-8 text-6xl md:text-8xl text-primary/20 font-serif">"</span>
            <span className="absolute -bottom-8 -right-2 md:-right-8 text-6xl md:text-8xl text-primary/20 font-serif">"</span>
            
            <p className="text-lg md:text-xl lg:text-2xl font-body text-foreground/90 leading-relaxed px-4 md:px-12">
              {t('synopsisText')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SynopsisSection;
