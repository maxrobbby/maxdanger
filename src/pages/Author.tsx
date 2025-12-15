import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Author = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            {/* Hero section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                <span className="text-gradient-fire">The Author</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
            </div>

            {/* Author profile */}
            <div className="grid md:grid-cols-3 gap-12 items-start mb-16">
              {/* Author image */}
              <div className="flex justify-center">
                <div className="w-64 h-64 rounded-sm bg-gradient-to-br from-primary/30 to-secondary/30 border border-primary/30 flex items-center justify-center shadow-2xl">
                  <span className="text-7xl font-display text-primary/50">MR</span>
                </div>
              </div>
              
              {/* Author bio */}
              <div className="md:col-span-2">
                <h2 className="text-2xl md:text-3xl font-display text-foreground mb-6">
                  Massimiliano Roberto
                </h2>
                
                <div className="space-y-4 text-muted-foreground font-body text-lg leading-relaxed">
                  <p>
                    Passionate about thrillers and action since childhood, Massimiliano Roberto has always dreamed 
                    of creating stories that keep readers on the edge of their seats.
                  </p>
                  <p>
                    MAX DANGER is his debut novel, born from years of passion for action fiction and the desire 
                    to tell a story that combines adrenaline and emotion.
                  </p>
                  <p>
                    With a background that spans various experiences and a love for adventure, Massimiliano 
                    brings authenticity and intensity to his writing, crafting characters that feel real 
                    and situations that pulse with tension.
                  </p>
                </div>

                {/* Social links */}
                <div className="flex gap-6 mt-8">
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                    aria-label="Instagram"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span className="font-display text-sm">Instagram</span>
                  </a>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                    aria-label="Facebook"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span className="font-display text-sm">Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quote section */}
            <div className="bg-card border border-border rounded-sm p-8 md:p-12 text-center">
              <blockquote className="text-xl md:text-2xl font-display text-foreground/90 italic mb-4">
                "Every page I write is a door that opens onto a world of adventure. 
                My goal is to take you there and never let you go."
              </blockquote>
              <cite className="text-primary font-display">— Massimiliano Roberto</cite>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Author;
