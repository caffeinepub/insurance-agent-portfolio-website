import HeroSection from './components/HeroSection';
import TrustBar from './components/TrustBar';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseSection from './components/WhyChooseSection';
import TestimonialsSection from './components/TestimonialsSection';
import EmotionalCloseSection from './components/EmotionalCloseSection';
import ContactSection from './components/ContactSection';
import Header from './components/Header';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <TrustBar />
        <AboutSection />
        <ServicesSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <EmotionalCloseSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Toaster />
    </>
  );
}

export default App;
