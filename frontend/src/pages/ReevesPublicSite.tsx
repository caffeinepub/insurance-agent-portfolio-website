import ReevesHeader from '../components/ReevesHeader';
import ReevesHeroSection from '../components/ReevesHeroSection';
import ReevesAboutSection from '../components/ReevesAboutSection';
import ReevesServicesSection from '../components/ReevesServicesSection';
import ReevesWhyChooseSection from '../components/ReevesWhyChooseSection';
import ReevesCarrierBadges from '../components/ReevesCarrierBadges';
import ReevesContactSection from '../components/ReevesContactSection';
import ReevesCalendarSection from '../components/ReevesCalendarSection';
import ReevesFooter from '../components/ReevesFooter';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import FloatingCallButton from '../components/FloatingCallButton';
import StickyQuoteBar from '../components/StickyQuoteBar';

/**
 * Reeves Insurance Solutions — Public Portfolio Site
 *
 * Heading hierarchy:
 * - H1: Hero section main headline (ReevesHeroSection)
 * - H2: All section headings (About, Services, Why Choose, Testimonials, Contact, Calendar, Carriers)
 * - H3: Sub-headings within sections
 *
 * Do NOT add additional H1 elements when editing sections.
 */
export default function ReevesPublicSite() {
  return (
    <div className="min-h-screen">
      {/* Sticky quote bar appears on scroll */}
      <StickyQuoteBar />

      <ReevesHeader />

      <main id="main-content">
        {/* H1 lives inside ReevesHeroSection */}
        <ReevesHeroSection />

        {/* H2: About Johnathan Reeves + Testimonials carousel */}
        <ReevesAboutSection />

        {/* H2: Our Insurance Services */}
        <ReevesServicesSection />

        {/* H2: Why Choose Reeves Insurance Solutions */}
        <ReevesWhyChooseSection />

        {/* H2: Partnered with Top-Rated Carriers */}
        <ReevesCarrierBadges />

        {/* H2: Get Your Free Insurance Quote */}
        <ReevesContactSection />

        {/* H2: Schedule a Call */}
        <ReevesCalendarSection />
      </main>

      <ReevesFooter />

      {/* Floating action buttons */}
      <FloatingWhatsApp />
      <FloatingCallButton />
    </div>
  );
}
