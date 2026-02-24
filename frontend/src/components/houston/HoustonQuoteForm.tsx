import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useHoustonQuoteSubmission } from '@/hooks/useHoustonQuoteSubmission';
import { toast } from 'sonner';
import { BestTimeToCall, CoverageType } from '@/backend';

export default function HoustonQuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    zipCode: '',
    coverageType: '' as CoverageType | '',
    bestTimeToCall: '' as BestTimeToCall | '',
  });

  const submitQuoteMutation = useHoustonQuoteSubmission();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.phone || !formData.email || !formData.zipCode || !formData.coverageType || !formData.bestTimeToCall) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      await submitQuoteMutation.mutateAsync({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        zipCode: formData.zipCode,
        coverageType: formData.coverageType as CoverageType,
        bestTimeToCall: formData.bestTimeToCall as BestTimeToCall,
      });

      toast.success('Quote request submitted! We\'ll contact you within 24 hours.');

      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        zipCode: '',
        coverageType: '',
        bestTimeToCall: '',
      });
    } catch (error) {
      toast.error('Failed to submit quote request. Please try again.');
      console.error('Quote submission error:', error);
    }
  };

  return (
    <section id="quote-form" className="sticky bottom-0 z-40 bg-[#1e3a8a] border-t-4 border-[#f59e0b] shadow-2xl">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-6 leading-[1.6]" style={{ fontWeight: 600 }}>
          Get Your Free Houston Quote
        </h2>

        <form onSubmit={handleSubmit} className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {/* Name */}
            <div>
              <Label htmlFor="name" className="text-white mb-2 block leading-[1.6]" style={{ fontWeight: 400 }}>
                Name *
              </Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your full name"
                className="bg-white border-white h-12 text-[#1e293b]"
                style={{ fontWeight: 400 }}
                required
              />
            </div>

            {/* Phone */}
            <div>
              <Label htmlFor="phone" className="text-white mb-2 block leading-[1.6]" style={{ fontWeight: 400 }}>
                Phone *
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="(713) 555-0123"
                className="bg-white border-white h-12 text-[#1e293b]"
                style={{ fontWeight: 400 }}
                required
              />
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email" className="text-white mb-2 block leading-[1.6]" style={{ fontWeight: 400 }}>
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                className="bg-white border-white h-12 text-[#1e293b]"
                style={{ fontWeight: 400 }}
                required
              />
            </div>

            {/* ZIP Code */}
            <div>
              <Label htmlFor="zipCode" className="text-white mb-2 block leading-[1.6]" style={{ fontWeight: 400 }}>
                ZIP Code *
              </Label>
              <Input
                id="zipCode"
                type="text"
                value={formData.zipCode}
                onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                placeholder="77001"
                className="bg-white border-white h-12 text-[#1e293b]"
                style={{ fontWeight: 400 }}
                required
              />
            </div>

            {/* Coverage Type */}
            <div>
              <Label htmlFor="coverageType" className="text-white mb-2 block leading-[1.6]" style={{ fontWeight: 400 }}>
                Coverage Type *
              </Label>
              <Select
                value={formData.coverageType}
                onValueChange={(value) => setFormData({ ...formData, coverageType: value as CoverageType })}
              >
                <SelectTrigger className="bg-white border-white h-12 text-[#1e293b]" style={{ fontWeight: 400 }}>
                  <SelectValue placeholder="Select coverage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={CoverageType.auto}>Auto Insurance</SelectItem>
                  <SelectItem value={CoverageType.home}>Home Insurance</SelectItem>
                  <SelectItem value={CoverageType.life}>Life Insurance</SelectItem>
                  <SelectItem value={CoverageType.business}>Business Insurance</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Best Time to Call */}
            <div>
              <Label htmlFor="bestTimeToCall" className="text-white mb-2 block leading-[1.6]" style={{ fontWeight: 400 }}>
                Best time to call *
              </Label>
              <Select
                value={formData.bestTimeToCall}
                onValueChange={(value) => setFormData({ ...formData, bestTimeToCall: value as BestTimeToCall })}
              >
                <SelectTrigger className="bg-white border-white h-12 text-[#1e293b]" style={{ fontWeight: 400 }}>
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={BestTimeToCall.morning}>Morning (8am-12pm)</SelectItem>
                  <SelectItem value={BestTimeToCall.afternoon}>Afternoon (12pm-5pm)</SelectItem>
                  <SelectItem value={BestTimeToCall.evening}>Evening (5pm-8pm)</SelectItem>
                  <SelectItem value={BestTimeToCall.anyTime}>Any Time</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={submitQuoteMutation.isPending}
            className="w-full bg-[#f59e0b] hover:bg-[#f59e0b]/90 text-white font-semibold text-lg py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
            style={{ fontWeight: 600 }}
          >
            {submitQuoteMutation.isPending ? 'Submitting...' : 'Get Free Houston Quote in 60 Seconds'}
          </Button>
        </form>
      </div>
    </section>
  );
}
