import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';
import { toast } from 'sonner';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    tcpaConsent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.tcpaConsent) {
      toast.error('Please agree to the terms to continue');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success('Thank you! We\'ll contact you within 24 hours.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        tcpaConsent: false,
      });
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-gold-accent/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-800">
              Get Your <span className="text-gold-accent">Free Quote</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-700 font-sans">
              Start protecting your family's financial future today. No obligation, no pressure—just honest advice.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12 rounded-2xl space-y-6 bg-white/80 backdrop-blur-sm border border-slate-200">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-800 font-semibold">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Smith"
                  required
                  className="bg-white border-slate-300 text-slate-800"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-800 font-semibold">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  required
                  className="bg-white border-slate-300 text-slate-800"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-slate-800 font-semibold">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="(555) 123-4567"
                required
                className="bg-white border-slate-300 text-slate-800"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-slate-800 font-semibold">Tell me about your insurance needs</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="I'm interested in learning more about..."
                rows={4}
                className="bg-white border-slate-300 text-slate-800"
              />
            </div>

            <div className="flex items-start gap-3 p-4 bg-slate-100 rounded-lg border border-slate-200">
              <Checkbox
                id="tcpa"
                checked={formData.tcpaConsent}
                onCheckedChange={(checked) => setFormData({ ...formData, tcpaConsent: checked as boolean })}
                className="mt-1"
              />
              <Label htmlFor="tcpa" className="text-xs text-slate-700 leading-relaxed cursor-pointer">
                By submitting this form, I consent to receive calls, texts, and emails from [Business Name] at the number/email provided above, including through automated technology. Consent is not required to purchase services. Message and data rates may apply.
              </Label>
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-gold-accent hover:bg-gold-accent/90 text-white font-bold text-lg py-6 shadow-glow-gold transition-all duration-300"
            >
              {isSubmitting ? 'Submitting...' : 'Get My Free Quote'}
            </Button>

            <p className="text-center text-sm text-slate-700">
              🎁 <span className="font-semibold text-slate-800">Free Guide:</span> "5 Insurance Mistakes That Could Cost Your Family Thousands"
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
