import bookCover from "@/assets/max-danger-cover.png";

const BookCover = () => {
  return (
    <div className="book-container perspective-1000">
      <div className="book-3d animate-float relative" style={{ transformStyle: 'preserve-3d', transform: 'rotateY(-15deg)' }}>
        {/* Book spine */}
        <div 
          className="absolute top-0 h-full w-8 bg-gradient-to-r from-secondary via-card to-secondary origin-right"
          style={{ 
            transform: 'translateX(-100%) rotateY(90deg)',
            left: '0'
          }}
        >
          {/* Spine text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span 
              className="text-primary/80 font-display font-bold text-xs tracking-widest whitespace-nowrap"
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
            >
              MAX DANGER
            </span>
          </div>
          {/* Spine highlight */}
          <div className="absolute inset-y-0 left-0 w-px bg-primary/20" />
          <div className="absolute inset-y-0 right-0 w-px bg-foreground/10" />
        </div>
        
        {/* Book pages (side) */}
        <div 
          className="absolute top-1 right-0 h-[calc(100%-8px)] w-6 bg-gradient-to-r from-stone-200 via-stone-100 to-stone-50 origin-left"
          style={{ 
            transform: 'translateX(100%) rotateY(90deg)',
          }}
        >
          {/* Page lines effect */}
          <div className="absolute inset-0 flex flex-col justify-evenly">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="h-px bg-stone-300/50" />
            ))}
          </div>
        </div>
        
        {/* Book bottom (pages) */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-b from-stone-100 to-stone-200 origin-top"
          style={{ 
            transform: 'translateY(100%) rotateX(90deg)',
          }}
        />
        
        {/* Book cover */}
        <div className="relative">
          <img
            src={bookCover}
            alt="MAX DANGER - Book cover of the action thriller by Massimiliano Roberto"
            className="book-shadow w-64 md:w-80 lg:w-96 h-auto rounded-sm"
          />
          
          {/* Gloss effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/10 via-transparent to-transparent pointer-events-none rounded-sm" />
        </div>
      </div>
    </div>
  );
};

export default BookCover;
