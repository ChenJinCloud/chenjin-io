import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturedProjectsSection from '@/components/FeaturedProjectsSection';
import AboutSection from '@/components/AboutSection';
import JourneySection from '@/components/JourneySection';
import RecommendationsSection from '@/components/RecommendationsSection';
import TrustSection from '@/components/TrustSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedProjectsSection />
        <AboutSection />
        <JourneySection />
        <RecommendationsSection />
        <TrustSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
