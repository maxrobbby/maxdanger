import { Flame, Target, Users } from "lucide-react";
import parkourVideo from "@/assets/max-danger-parkour.mp4";

const features = [
  {
    icon: Flame,
    title: "Explosive Action",
    description: "Heart-pounding scenes that will leave you breathless, intense combat and thrilling escapes in a world of danger.",
  },
  {
    icon: Target,
    title: "Gripping Plot",
    description: "A story of survival, betrayal and redemption that will keep you glued to the pages until the very last line.",
  },
  {
    icon: Users,
    title: "Unforgettable Characters",
    description: "Max Danger and his companions: imperfect heroes fighting for what matters in a world that has lost everything.",
  },
];

const AboutSection = () => {
  return (
    <section id="book" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient-fire">The Novel</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            When what you must save has no price, everything is at stake. Faced with danger, many flee. Only a few stand their ground. Among them is a man at ease in danger. And he masters it.
          </p>
        </div>

        {/* TV Frame with Video */}
        <div className="flex justify-center mb-16">
          <div className="relative">
            {/* TV Frame */}
            <div className="relative bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 p-4 rounded-lg shadow-2xl">
              {/* TV Screen bezel */}
              <div className="relative bg-black p-2 rounded-sm">
                {/* Screen glow effect */}
                <div className="absolute inset-0 bg-primary/10 rounded-sm blur-xl" />
                
                {/* Video container */}
                <div className="relative w-[224px] sm:w-[336px] md:w-[448px] aspect-video bg-zinc-950 rounded-sm overflow-hidden">
                  <video 
                    src={parkourVideo}
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  {/* Scanline effect */}
                  <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.1)_2px,rgba(0,0,0,0.1)_4px)]" />
                  {/* Screen reflection */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/5 via-transparent to-transparent" />
                </div>
              </div>
              
              {/* TV Stand */}
              <div className="flex justify-center mt-3">
                <div className="w-24 h-2 bg-gradient-to-r from-zinc-800 via-zinc-600 to-zinc-800 rounded-full" />
              </div>
            </div>
            
            {/* TV Base/Foot */}
            <div className="flex justify-center">
              <div className="w-16 h-4 bg-gradient-to-b from-zinc-700 to-zinc-900 rounded-b-lg" />
            </div>
            <div className="flex justify-center">
              <div className="w-32 h-2 bg-gradient-to-b from-zinc-800 to-zinc-950 rounded-b-lg shadow-lg" />
            </div>
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
              "In a world reduced to ashes, Max Danger is the man everyone fears and many seek. 
              But the real danger isn't what's chasing him... it's what lies hidden inside him."
            </p>
            <footer className="text-primary font-display tracking-wider">
              — From the novel's introduction
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
