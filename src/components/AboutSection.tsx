import { Flame, Target, Users } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import trailerPart1 from "@/assets/trailer-part1.mp4";
import trailerPart2 from "@/assets/trailer-part2.mp4";
import trailerPart3 from "@/assets/trailer-part3.mp4";
import bookCover from "@/assets/max-danger-cover.png";

const trailerParts = [trailerPart1, trailerPart2, trailerPart3];

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentPart, setCurrentPart] = useState(0);
  const [showCover, setShowCover] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      if (currentPart < trailerParts.length - 1) {
        // Transition to next part
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentPart(prev => prev + 1);
          setIsTransitioning(false);
        }, 300);
      } else {
        // Show cover at the end, then loop
        setIsTransitioning(true);
        setTimeout(() => {
          setShowCover(true);
          setTimeout(() => {
            setShowCover(false);
            setCurrentPart(0);
            setIsTransitioning(false);
          }, 3000);
        }, 300);
      }
    };

    video.addEventListener('ended', handleEnded);
    return () => video.removeEventListener('ended', handleEnded);
  }, [currentPart]);

  useEffect(() => {
    const video = videoRef.current;
    if (video && !showCover) {
      video.load();
      video.play().catch(() => {});
    }
  }, [currentPart, showCover]);

  return (
    <section id="book" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient-fire">Official Trailer</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            When what you must save has no price, everything is at stake. Faced with danger, many flee. Only a few stand their ground. Among them is a man at ease in danger. And he masters it.
          </p>
        </div>

        {/* Cinematic Trailer Player */}
        <div className="flex justify-center mb-16">
          <div className="relative w-full max-w-4xl">
            {/* Cinematic frame */}
            <div className="relative bg-black rounded-lg overflow-hidden shadow-[0_0_60px_rgba(234,88,12,0.3)]">
              {/* Letterbox bars for cinematic feel */}
              <div className="absolute top-0 left-0 right-0 h-[8%] bg-black z-10" />
              <div className="absolute bottom-0 left-0 right-0 h-[8%] bg-black z-10" />
              
              {/* Video/Cover container */}
              <div className={`aspect-video transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                {showCover ? (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-zinc-900 to-black">
                    <img 
                      src={bookCover} 
                      alt="Max Danger - Book Cover" 
                      className="h-[80%] object-contain animate-scale-in shadow-2xl"
                    />
                  </div>
                ) : (
                  <video 
                    ref={videoRef}
                    src={trailerParts[currentPart]}
                    autoPlay 
                    muted 
                    playsInline
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Film grain overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4xIi8+PC9zdmc+')]" />
              
              {/* Vignette effect */}
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.5)_100%)]" />
            </div>

            {/* Progress indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {trailerParts.map((_, index) => (
                <div 
                  key={index}
                  className={`h-1 w-12 rounded-full transition-all duration-300 ${
                    index === currentPart && !showCover
                      ? 'bg-primary' 
                      : index < currentPart || showCover
                        ? 'bg-primary/50'
                        : 'bg-muted'
                  }`}
                />
              ))}
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
