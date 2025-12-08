import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SynopsisSection from "@/components/SynopsisSection";
import AboutSection from "@/components/AboutSection";
import CrowdfundingSection from "@/components/CrowdfundingSection";
import AuthorSection from "@/components/AuthorSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SynopsisSection />
        <AboutSection />
        <CrowdfundingSection />
        <AuthorSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
