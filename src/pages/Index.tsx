import PageLayout from '@/components/PageLayout';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import JourneySection from '@/components/JourneySection';
import RecommendationsSection from '@/components/RecommendationsSection';
import TrustSection from '@/components/TrustSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <PageLayout bare>
      <HeroSection />
      <AboutSection />
      <JourneySection />
      <RecommendationsSection />
      <TrustSection />
      <ContactSection />
    </PageLayout>
  );
};

export default Index;
