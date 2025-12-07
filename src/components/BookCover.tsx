import bookCover from "@/assets/max-danger-cover.jpg";

const BookCover = () => {
  return (
    <div className="book-container">
      <div className="book-3d animate-float">
        <div className="relative">
          {/* Book spine effect */}
          <div className="absolute -left-3 top-0 h-full w-3 bg-gradient-to-r from-secondary to-card transform skew-y-12 origin-right" />
          
          {/* Book cover */}
          <img
            src={bookCover}
            alt="MAX DANGER - Copertina del libro thriller action di Massimiliano Roberto"
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
