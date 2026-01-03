import { Button } from "@/components/ui/button";
import { Gift, BookOpen, Star, Crown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CrowdfundingSection = () => {
  const { t } = useLanguage();

  const tiers = [
    {
      icon: BookOpen,
      name: t('reader'),
      price: "€15",
      description: t('readerDesc'),
      features: [t('readerFeature1'), t('readerFeature2'), t('readerFeature3')],
    },
    {
      icon: Star,
      name: t('supporter'),
      price: "€30",
      description: t('supporterDesc'),
      features: [t('supporterFeature1'), t('supporterFeature2'), t('supporterFeature3'), t('supporterFeature4')],
      popular: true,
    },
    {
      icon: Crown,
      name: t('patron'),
      price: "€75",
      description: t('patronDesc'),
      features: [t('patronFeature1'), t('patronFeature2'), t('patronFeature3'), t('patronFeature4')],
    },
  ];

  return (
    <section id="crowdfunding" className="py-24 bg-background relative">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-sm mb-6">
            <Gift className="w-4 h-4 text-primary" />
            <span className="text-primary font-display text-sm tracking-wider">{t('crowdfundingActive')}</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            {t('support')} <span className="text-gradient-fire">MAX DANGER</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            {t('crowdfundingDescription')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div 
              key={tier.name}
              className={`relative p-8 rounded-sm border transition-all duration-300 hover:scale-105 ${
                tier.popular 
                  ? "bg-gradient-to-b from-primary/10 to-background border-primary shadow-glow" 
                  : "bg-card border-border hover:border-primary/50"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-fire text-primary-foreground text-xs font-display tracking-wider rounded-sm">
                  {t('mostPopular')}
                </div>
              )}
              
              <div className={`w-12 h-12 rounded-sm flex items-center justify-center mb-6 ${
                tier.popular ? "bg-gradient-fire" : "bg-muted"
              }`}>
                <tier.icon className={`w-6 h-6 ${tier.popular ? "text-primary-foreground" : "text-primary"}`} />
              </div>
              
              <h3 className="text-xl font-display font-semibold mb-2">{tier.name}</h3>
              <p className="text-3xl font-display font-bold text-primary mb-2">{tier.price}</p>
              <p className="text-muted-foreground text-sm mb-6">{tier.description}</p>
              
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={tier.popular ? "hero" : "outline"} 
                className="w-full"
                size="lg"
              >
                {t('choose')} {tier.name}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground font-body mb-4">
            {t('crowdfundingQuestions')}
          </p>
          <a 
            href="mailto:contact@example.com" 
            className="text-primary hover:text-accent transition-colors font-display tracking-wider"
          >
            contact@example.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default CrowdfundingSection;
