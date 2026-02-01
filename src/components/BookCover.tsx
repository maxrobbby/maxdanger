import bookCover from "@/assets/max-danger-cover.png";

const BookCover = () => {
  const spineWidth = 90; // pixels - spine thickness (very thick book!)
  const pagesThickness = 40; // pixels - visible pages on right
  
  return (
    <div className="book-container" style={{ perspective: '1800px' }}>
      <div 
        className="book-3d animate-float relative"
        style={{ 
          transformStyle: 'preserve-3d', 
          transform: 'rotateY(25deg) rotateX(8deg)',
        }}
      >
        {/* Book spine - left side */}
        <div 
          className="absolute top-0 h-full origin-right"
          style={{ 
            width: `${spineWidth}px`,
            left: 0,
            transform: `translateX(-${spineWidth}px) rotateY(-90deg)`,
            transformOrigin: 'right center',
            background: 'linear-gradient(to right, hsl(20 70% 18%), hsl(25 75% 28%), hsl(20 70% 22%))',
            boxShadow: 'inset -3px 0 8px rgba(0,0,0,0.4)',
          }}
        >
          {/* Spine decorative elements */}
          <div className="absolute top-3 left-2 right-2 h-[2px] bg-primary/40 rounded" />
          <div className="absolute top-6 left-3 right-3 h-px bg-primary/25" />
          <div className="absolute bottom-6 left-3 right-3 h-px bg-primary/25" />
          <div className="absolute bottom-3 left-2 right-2 h-[2px] bg-primary/40 rounded" />
          
          {/* Spine title */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span 
              className="font-display font-bold text-xl tracking-[0.2em] whitespace-nowrap"
              style={{ 
                writingMode: 'vertical-rl', 
                textOrientation: 'mixed', 
                transform: 'rotate(180deg)',
                color: '#FFD700',
                textShadow: '0 0 20px rgba(255, 215, 0, 0.9), 0 0 40px rgba(255, 215, 0, 0.6), 0 2px 4px rgba(0,0,0,0.5)'
              }}
            >
              MAX DANGER
            </span>
          </div>
          
          {/* Spine edge highlights */}
          <div className="absolute inset-y-0 left-0 w-[2px] bg-black/50" />
          <div className="absolute inset-y-0 right-0 w-px bg-primary/15" />
        </div>
        
        {/* Book pages - right side */}
        <div 
          className="absolute top-[3px] h-[calc(100%-6px)] origin-left"
          style={{ 
            width: `${pagesThickness}px`,
            right: `-${pagesThickness}px`,
            transform: 'rotateY(90deg)',
            transformOrigin: 'left center',
            background: 'linear-gradient(to right, #f0f0ea, #fafaf5, #f5f5f0, #fafaf8)',
            borderRadius: '0 3px 3px 0',
          }}
        >
          {/* Page lines */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(80)].map((_, i) => (
              <div 
                key={i} 
                className="absolute left-0 right-1 h-px"
                style={{ 
                  top: `${(i + 0.3) * 1.2}%`,
                  background: i % 5 === 0 
                    ? 'rgba(60, 50, 40, 0.3)' 
                    : 'rgba(80, 70, 60, 0.15)'
                }}
              />
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-[4px] bg-gradient-to-r from-stone-400/50 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-[3px] bg-gradient-to-l from-stone-300 via-stone-200 to-stone-100" />
        </div>
        
        {/* Book bottom - pages visible from below */}
        <div 
          className="absolute bottom-0 w-64 md:w-80 lg:w-96 origin-top"
          style={{ 
            height: `${pagesThickness}px`,
            left: 0,
            transform: `translateY(${pagesThickness}px) rotateX(-90deg)`,
            transformOrigin: 'top center',
            background: '#ffffff',
          }}
        >
          {/* Vertical page lines for bottom */}
          {[...Array(100)].map((_, i) => (
            <div 
              key={i} 
              className="absolute top-0 bottom-0 w-px"
              style={{ 
                left: `${i * 1}%`,
                background: i % 6 === 0 
                  ? 'rgba(180, 175, 170, 0.4)' 
                  : 'rgba(200, 195, 190, 0.25)'
              }}
            />
          ))}
          {/* Subtle shadow at edge */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100" />
          {/* Spine shadow on bottom */}
          <div className="absolute top-0 bottom-0 left-0 w-4 bg-gradient-to-r from-gray-300/60 to-transparent" />
        </div>
        
        {/* Book back cover */}
        <div 
          className="absolute top-0 left-0 w-64 md:w-80 lg:w-96 h-full"
          style={{ 
            transform: `translateZ(-${spineWidth}px)`,
            background: 'linear-gradient(135deg, hsl(20 60% 15%), hsl(25 70% 20%))',
          }}
        />
        
        {/* Book cover - front */}
        <div className="relative">
          <img
            src={bookCover}
            alt="MAX DANGER - Book cover of the action thriller by Massimiliano Roberto"
            className="w-64 md:w-80 lg:w-96 h-auto"
            style={{
              boxShadow: `
                35px 45px 80px rgba(0, 0, 0, 0.7),
                15px 20px 40px rgba(0, 0, 0, 0.5),
                5px 8px 20px rgba(0, 0, 0, 0.4),
                0 0 120px hsl(32 95% 50% / 0.25)
              `,
            }}
          />
          
          {/* Cover gloss */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(130deg, rgba(255,255,255,0.15) 0%, transparent 40%, transparent 60%, rgba(0,0,0,0.08) 100%)',
            }}
          />
          
          {/* Coming Soon Starburst Badge */}
          <div 
            className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 z-10"
            style={{
              transform: 'rotate(-15deg)',
              width: '100px',
              height: '100px',
            }}
          >
            {/* Starburst SVG Background */}
            <svg 
              viewBox="0 0 100 100" 
              className="absolute inset-0 w-full h-full drop-shadow-lg"
              style={{
                filter: 'drop-shadow(0 4px 12px rgba(220, 38, 38, 0.7))',
              }}
            >
              <defs>
                <linearGradient id="starburstGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fbbf24" />
                  <stop offset="30%" stopColor="#f59e0b" />
                  <stop offset="70%" stopColor="#ea580c" />
                  <stop offset="100%" stopColor="#dc2626" />
                </linearGradient>
                <linearGradient id="innerGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#fef3c7" />
                  <stop offset="100%" stopColor="#fbbf24" />
                </linearGradient>
              </defs>
              {/* Outer starburst */}
              <polygon 
                points="50,0 58,35 95,20 68,45 100,50 68,55 95,80 58,65 50,100 42,65 5,80 32,55 0,50 32,45 5,20 42,35"
                fill="url(#starburstGradient)"
                stroke="#b91c1c"
                strokeWidth="1"
              />
              {/* Inner circle */}
              <circle 
                cx="50" 
                cy="50" 
                r="28" 
                fill="url(#innerGlow)"
                stroke="#dc2626"
                strokeWidth="2"
              />
            </svg>
            
            {/* Text content */}
            <div 
              className="absolute inset-0 flex flex-col items-center justify-center font-display text-center"
              style={{ paddingTop: '2px' }}
            >
              <span 
                className="text-[9px] md:text-[10px] font-black tracking-tight leading-none"
                style={{ 
                  color: '#991b1b',
                  textShadow: '0 1px 0 rgba(255,255,255,0.3)',
                }}
              >
                COMING SOON
              </span>
              <span 
                className="text-[11px] md:text-xs font-black tracking-tight leading-tight mt-0.5"
                style={{ 
                  color: '#7f1d1d',
                  textShadow: '0 1px 0 rgba(255,255,255,0.4)',
                }}
              >
                Free Preview
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCover;
