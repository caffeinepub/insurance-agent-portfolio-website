import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import TrustBar from '../components/TrustBar';
import AboutSection from '../components/AboutSection';
import VideoSection from '../components/VideoSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseSection from '../components/WhyChooseSection';
import TestimonialsSection from '../components/TestimonialsSection';
import EmotionalCloseSection from '../components/EmotionalCloseSection';
import ContactSection from '../components/ContactSection';
import MapSection from '../components/MapSection';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function PublicSite() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <AboutSection />
        <VideoSection />
        <ServicesSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <EmotionalCloseSection />
        <ContactSection />
        <MapSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
