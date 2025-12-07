import { Flame, Target, Users } from "lucide-react";

const features = [
  {
    icon: Flame,
    title: "Azione Esplosiva",
    description: "Scene adrenaliniche che ti lasceranno senza fiato, combattimenti serrati e fughe mozzafiato in un mondo post-apocalittico.",
  },
  {
    icon: Target,
    title: "Trama Avvincente",
    description: "Una storia di sopravvivenza, tradimenti e redenzione che ti terrà incollato alle pagine fino all'ultima riga.",
  },
  {
    icon: Users,
    title: "Personaggi Indimenticabili",
    description: "Max Danger e i suoi compagni: eroi imperfetti che lottano per ciò che conta in un mondo che ha perso tutto.",
  },
];

const AboutSection = () => {
  return (
    <section id="libro" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient-fire">Il Romanzo</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Quando il mondo crolla, alcuni uomini si alzano. Max Danger è uno di loro.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group p-8 bg-background/50 border border-border hover:border-primary/50 rounded-sm transition-all duration-300 hover:shadow-glow"
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
              "In un mondo ridotto in cenere, Max Danger è l'uomo che tutti temono e che molti cercano. 
              Ma il vero pericolo non è ciò che lo insegue... è ciò che si nasconde dentro di lui."
            </p>
            <footer className="text-primary font-display tracking-wider">
              — Dall'introduzione del romanzo
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
