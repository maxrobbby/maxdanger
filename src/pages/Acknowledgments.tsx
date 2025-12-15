import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, Heart } from "lucide-react";

// Placeholder data - replace with actual donors
const majorDonors = [
  { name: "Coming Soon", amount: "Major Supporter" },
];

const supporters = [
  { name: "Coming Soon", tier: "Supporter" },
];

const Acknowledgments = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            {/* Hero section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                <span className="text-gradient-fire">Acknowledgments</span>
              </h1>
              <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
                A heartfelt thank you to all those who believed in this project and made it possible. 
                Your support means the world.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6" />
            </div>

            {/* Major donors section */}
            <section className="mb-16">
              <div className="flex items-center justify-center gap-3 mb-8">
                <Star className="w-6 h-6 text-primary fill-primary" />
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                  Major Supporters
                </h2>
                <Star className="w-6 h-6 text-primary fill-primary" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {majorDonors.map((donor, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/50 rounded-sm p-6 text-center transform hover:scale-105 transition-transform"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/30 flex items-center justify-center">
                      <Star className="w-8 h-8 text-primary fill-primary" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-2">
                      {donor.name}
                    </h3>
                    <p className="text-primary font-display text-sm">
                      {donor.amount}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Regular supporters section */}
            <section className="mb-16">
              <div className="flex items-center justify-center gap-3 mb-8">
                <Heart className="w-5 h-5 text-accent" />
                <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">
                  Supporters
                </h2>
                <Heart className="w-5 h-5 text-accent" />
              </div>
              
              <div className="bg-card border border-border rounded-sm p-8">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {supporters.map((supporter, index) => (
                    <div 
                      key={index}
                      className="text-center p-4 bg-background/50 rounded-sm border border-border/50 hover:border-primary/50 transition-colors"
                    >
                      <p className="font-display text-foreground">{supporter.name}</p>
                      <p className="text-muted-foreground text-sm">{supporter.tier}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Thank you message */}
            <div className="text-center bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/30 rounded-sm p-8 md:p-12">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                Thank You!
              </h3>
              <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto">
                This book exists because of you. Every contribution, no matter the size, 
                has helped bring MAX DANGER to life. You are part of this story.
              </p>
            </div>

            {/* CTA to support */}
            <div className="text-center mt-12">
              <p className="text-muted-foreground font-body mb-4">
                Want to see your name here?
              </p>
              <a 
                href="/#crowdfunding" 
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-sm font-display transition-colors"
              >
                Support the Project
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Acknowledgments;
