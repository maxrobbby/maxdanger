import bookCover from "@/assets/max-danger-cover.png";

const BookCover = () => {
  const bookWidth = "w-64 md:w-80 lg:w-96";
  const spineWidth = 28; // pixels
  const pagesWidth = 20; // pixels
  
  return (
    <div className="book-container" style={{ perspective: '1200px' }}>
      <div 
        className="book-3d animate-float relative"
        style={{ 
          transformStyle: 'preserve-3d', 
          transform: 'rotateY(-20deg) rotateX(5deg)',
        }}
      >
        {/* Book spine - left side */}
        <div 
          className="absolute top-0 h-full origin-right"
          style={{ 
            width: `${spineWidth}px`,
            transform: `translateX(-${spineWidth}px) rotateY(90deg)`,
            transformOrigin: 'right center',
            background: 'linear-gradient(to right, hsl(25 80% 25%), hsl(25 80% 35%), hsl(25 80% 30%))',
          }}
        >
          {/* Spine ridges */}
          <div className="absolute inset-0">
            <div className="absolute top-4 left-0 right-0 h-1 bg-primary/30" />
            <div className="absolute top-8 left-0 right-0 h-px bg-primary/20" />
            <div className="absolute bottom-8 left-0 right-0 h-px bg-primary/20" />
            <div className="absolute bottom-4 left-0 right-0 h-1 bg-primary/30" />
          </div>
          {/* Spine text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span 
              className="text-primary font-display font-bold text-[10px] tracking-[0.2em] whitespace-nowrap drop-shadow-sm"
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
            >
              MAX DANGER
            </span>
          </div>
          {/* Spine edge highlights */}
          <div className="absolute inset-y-0 left-0 w-px bg-black/40" />
          <div className="absolute inset-y-0 right-0 w-px bg-primary/10" />
        </div>
        
        {/* Book pages - right side */}
        <div 
          className="absolute top-[3px] h-[calc(100%-6px)] origin-left"
          style={{ 
            width: `${pagesWidth}px`,
            right: `-${pagesWidth}px`,
            transform: 'rotateY(90deg)',
            transformOrigin: 'left center',
            background: 'linear-gradient(to right, #f5f5f0, #fafaf5, #f0f0e8)',
          }}
        >
          {/* Page lines effect */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(40)].map((_, i) => (
              <div 
                key={i} 
                className="absolute left-0 right-0 h-px"
                style={{ 
                  top: `${(i + 1) * 2.4}%`,
                  background: i % 5 === 0 ? 'rgba(120, 100, 80, 0.3)' : 'rgba(120, 100, 80, 0.15)'
                }}
              />
            ))}
          </div>
          {/* Page edge shadow */}
          <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-r from-stone-400/50 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-px bg-stone-300" />
        </div>
        
        {/* Book top - pages */}
        <div 
          className={`absolute top-0 left-0 ${bookWidth} origin-bottom`}
          style={{ 
            height: `${pagesWidth}px`,
            transform: `translateY(-${pagesWidth}px) rotateX(90deg)`,
            transformOrigin: 'bottom center',
            background: 'linear-gradient(to bottom, #e8e8e0, #f5f5f0)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-stone-300/30 to-transparent" />
        </div>
        
        {/* Book bottom - pages */}
        <div 
          className={`absolute bottom-0 left-0 ${bookWidth} origin-top`}
          style={{ 
            height: `${pagesWidth}px`,
            transform: `translateY(${pagesWidth}px) rotateX(-90deg)`,
            transformOrigin: 'top center',
            background: 'linear-gradient(to top, #d8d8d0, #eeeeea)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-stone-400/20 to-transparent" />
        </div>
        
        {/* Book cover - front */}
        <div className="relative">
          <img
            src={bookCover}
            alt="MAX DANGER - Book cover of the action thriller by Massimiliano Roberto"
            className={`${bookWidth} h-auto`}
            style={{
              boxShadow: `
                -25px 25px 50px rgba(0, 0, 0, 0.5),
                -10px 10px 30px rgba(0, 0, 0, 0.3),
                0 0 100px hsl(32 95% 50% / 0.15)
              `,
            }}
          />
          
          {/* Cover gloss effect */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 40%, transparent 60%, rgba(0,0,0,0.1) 100%)',
            }}
          />
          
          {/* Subtle edge on the right (where pages meet cover) */}
          <div className="absolute top-0 right-0 bottom-0 w-px bg-stone-400/30" />
        </div>
        
        {/* Back cover - behind */}
        <div 
          className={`absolute top-0 left-0 ${bookWidth} h-full bg-gradient-to-br from-secondary to-secondary/80`}
          style={{
            transform: `translateZ(-${spineWidth}px)`,
            boxShadow: 'inset 2px 0 10px rgba(0,0,0,0.3)',
          }}
        />
      </div>
    </div>
  );
};

export default BookCover;
