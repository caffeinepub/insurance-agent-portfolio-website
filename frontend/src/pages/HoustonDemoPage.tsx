import HoustonHeroSection from '@/components/houston/HoustonHeroSection';
import HoustonWhyUsSection from '@/components/houston/HoustonWhyUsSection';
import HoustonCoverageTypesSection from '@/components/houston/HoustonCoverageTypesSection';
import HoustonTestimonialsSection from '@/components/houston/HoustonTestimonialsSection';
import HoustonQuoteForm from '@/components/houston/HoustonQuoteForm';
import HoustonFooter from '@/components/houston/HoustonFooter';

export default function HoustonDemoPage() {
  return (
    <div className="min-h-screen bg-white">
      <HoustonHeroSection />
      <HoustonWhyUsSection />
      <HoustonCoverageTypesSection />
      <HoustonTestimonialsSection />
      <HoustonQuoteForm />
      <HoustonFooter />
    </div>
  );
}
