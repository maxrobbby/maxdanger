import { Flame, Target, Users } from "lucide-react";
import ModernTVPlayer from "./ModernTVPlayer";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Flame,
      title: t('explosiveAction'),
      description: t('explosiveActionDesc'),
    },
    {
      icon: Target,
      title: t('grippingPlot'),
      description: t('grippingPlotDesc'),
    },
    {
      icon: Users,
      title: t('unforgettableCharacters'),
      description: t('unforgettableCharactersDesc'),
    },
  ];

  return (
    <section id="book" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient-fire">{t('officialTrailer')}</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            {t('trailerDescription')}
          </p>
        </div>

        {/* Modern TV Player */}
        <div className="flex justify-center mb-16">
          <div className="w-full max-w-4xl">
            <ModernTVPlayer />
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group p-8 bg-card/50 border border-border hover:border-primary/50 rounded-sm transition-all duration-300 hover:shadow-glow"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-14 h-14 rounded-sm bg-gradient-fire flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto">
          <blockquote className="text-center">
            <p className="text-xl md:text-2xl font-body italic text-foreground/90 mb-6">
              {t('bookQuote')}
            </p>
            <footer className="text-primary font-display tracking-wider">
              {t('fromIntroduction')}
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
