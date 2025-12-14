import bookCover from "@/assets/max-danger-cover.png";

const BookCover = () => {
  const pagesThickness = 35; // pixels - thickness of pages
  
  return (
    <div className="book-container" style={{ perspective: '1500px' }}>
      <div 
        className="book-3d animate-float relative"
        style={{ 
          transformStyle: 'preserve-3d', 
          transform: 'rotateY(15deg) rotateX(3deg)',
        }}
      >
        {/* Book pages - right side (visible) */}
        <div 
          className="absolute top-[2px] h-[calc(100%-4px)] origin-left"
          style={{ 
            width: `${pagesThickness}px`,
            right: `-${pagesThickness}px`,
            transform: 'rotateY(90deg)',
            transformOrigin: 'left center',
            background: 'linear-gradient(to right, #f8f8f3, #ffffff, #f5f5f0)',
            borderRadius: '0 2px 2px 0',
          }}
        >
          {/* Individual page lines */}
          <div className="absolute inset-0 overflow-hidden rounded-r-sm">
            {[...Array(60)].map((_, i) => (
              <div 
                key={i} 
                className="absolute left-0 right-1 h-px"
                style={{ 
                  top: `${(i + 0.5) * 1.6}%`,
                  background: i % 4 === 0 
                    ? 'rgba(80, 70, 60, 0.25)' 
                    : 'rgba(100, 90, 80, 0.12)'
                }}
              />
            ))}
          </div>
          {/* Page edge gradient for depth */}
          <div className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-r from-stone-300/60 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-l from-stone-200 to-stone-100" />
          {/* Top/bottom page edge shadows */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-b from-stone-300/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-t from-stone-300/40 to-transparent" />
        </div>
        
        {/* Book bottom - pages */}
        <div 
          className="absolute bottom-0 left-0 w-64 md:w-80 lg:w-96 origin-top"
          style={{ 
            height: `${pagesThickness}px`,
            transform: `translateY(${pagesThickness}px) rotateX(-90deg)`,
            transformOrigin: 'top center',
            background: 'linear-gradient(to top, #e5e5e0, #f0f0eb, #f5f5f0)',
          }}
        >
          {/* Page texture lines */}
          {[...Array(50)].map((_, i) => (
            <div 
              key={i} 
              className="absolute top-0 bottom-0 w-px"
              style={{ 
                left: `${(i + 1) * 2}%`,
                background: 'rgba(100, 90, 80, 0.1)'
              }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-400/20 to-transparent" />
        </div>
        
        {/* Book cover - front */}
        <div className="relative">
          <img
            src={bookCover}
            alt="MAX DANGER - Book cover of the action thriller by Massimiliano Roberto"
            className="w-64 md:w-80 lg:w-96 h-auto"
            style={{
              boxShadow: `
                20px 25px 60px rgba(0, 0, 0, 0.5),
                8px 10px 25px rgba(0, 0, 0, 0.3),
                0 0 80px hsl(32 95% 50% / 0.12)
              `,
            }}
          />
          
          {/* Cover gloss effect */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(120deg, rgba(255,255,255,0.12) 0%, transparent 35%, transparent 65%, rgba(0,0,0,0.05) 100%)',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BookCover;
