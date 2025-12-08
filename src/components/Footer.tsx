const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-display font-bold text-gradient-fire mb-2">
              MAX DANGER
            </h3>
            <p className="text-muted-foreground text-sm">
              © 2025 Massimiliano Roberto. All rights reserved.
            </p>
          </div>
          
          <nav className="flex gap-8">
            <a href="#book" className="text-muted-foreground hover:text-primary transition-colors font-display text-sm tracking-wider">
              The Book
            </a>
            <a href="#crowdfunding" className="text-muted-foreground hover:text-primary transition-colors font-display text-sm tracking-wider">
              Crowdfunding
            </a>
            <a href="mailto:contact@example.com" className="text-muted-foreground hover:text-primary transition-colors font-display text-sm tracking-wider">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
