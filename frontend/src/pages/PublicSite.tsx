import React, { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import TrustBar from '../components/TrustBar';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseSection from '../components/WhyChooseSection';
import TestimonialsSection from '../components/TestimonialsSection';
import EmotionalCloseSection from '../components/EmotionalCloseSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import VideoSection from '../components/VideoSection';
import AdminLoginModal from '../components/admin/AdminLoginModal';
import StickyQuoteBar from '../components/StickyQuoteBar';

export default function PublicSite() {
  const [adminModalOpen, setAdminModalOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header onAgentLogin={() => setAdminModalOpen(true)} />
      <main>
        <HeroSection />
        <TrustBar />
        <AboutSection />
        <ServicesSection />
        <WhyChooseSection />
        <VideoSection />
        <TestimonialsSection />
        <EmotionalCloseSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <StickyQuoteBar />
      <AdminLoginModal isOpen={adminModalOpen} onClose={() => setAdminModalOpen(false)} />
    </div>
  );
}
