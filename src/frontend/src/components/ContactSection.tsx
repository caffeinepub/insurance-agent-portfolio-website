import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useSubmitContactForm, useHasSubmittedForm } from '../hooks/useQueries';
import { toast } from 'sonner';
import { Loader2, Send, Calendar, MessageCircle } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const submitMutation = useSubmitContactForm();
  const { data: hasSubmitted } = useHasSubmittedForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      await submitMutation.mutateAsync(formData);
      toast.success('Thank you! Your consultation request has been received. We\'ll contact you within 24 hours.');
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (error) {
      if (error instanceof Error && error.message.includes('already submitted')) {
        toast.error('You have already submitted a consultation request. We\'ll be in touch soon!');
      } else {
        toast.error('Failed to submit form. Please try again or contact us directly.');
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-luxury-dark to-luxury-dark/95 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-accent-blue/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
              Let's <span className="text-accent-gold glow-text">Secure Your Future</span> Together
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 font-body">
              Schedule your free consultation today and take the first step toward complete financial protection.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Request a Consultation</h3>
              
              {hasSubmitted ? (
                <div className="p-6 rounded-lg bg-accent-gold/10 border border-accent-gold/30 text-center space-y-4">
                  <p className="text-accent-gold font-body text-lg">
                    Thank you for your interest! We've already received your consultation request and will be in touch soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground font-body mb-2 block">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="bg-luxury-dark/50 border-accent-gold/30 text-foreground focus:border-accent-gold"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-foreground font-body mb-2 block">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="bg-luxury-dark/50 border-accent-gold/30 text-foreground focus:border-accent-gold"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground font-body mb-2 block">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="bg-luxury-dark/50 border-accent-gold/30 text-foreground focus:border-accent-gold"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground font-body mb-2 block">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your insurance needs and financial goals..."
                      rows={5}
                      className="bg-luxury-dark/50 border-accent-gold/30 text-foreground focus:border-accent-gold resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={submitMutation.isPending}
                    className="w-full bg-cta-bright hover:bg-cta-bright/90 text-luxury-dark font-bold text-lg py-6 shadow-glow-gold"
                  >
                    {submitMutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Submit Consultation Request
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Quick Contact Options */}
            <div className="space-y-6">
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Quick Connect</h3>
                
                <div className="space-y-4">
                  <a
                    href="https://wa.me/919876543210?text=Hi,%20I%20would%20like%20to%20schedule%20a%20consultation%20for%20insurance%20planning."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-accent-gold/10 border border-accent-gold/30 hover:bg-accent-gold/20 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent-gold/20 flex items-center justify-center group-hover:bg-accent-gold/30 transition-colors">
                      <MessageCircle className="w-6 h-6 text-accent-gold" />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-foreground">WhatsApp</div>
                      <div className="text-sm text-foreground/70 font-body">Instant response via WhatsApp</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-accent-blue/10 border border-accent-blue/30">
                    <div className="w-12 h-12 rounded-full bg-accent-blue/20 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-accent-blue" />
                    </div>
                    <div>
                      <div className="font-heading font-bold text-foreground">Calendar Booking</div>
                      <div className="text-sm text-foreground/70 font-body">Schedule at your convenience</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">What to Expect</h3>
                <ul className="space-y-3 text-foreground/70 font-body">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-gold mt-1">✓</span>
                    <span>Free 30-minute consultation with no obligations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-gold mt-1">✓</span>
                    <span>Comprehensive financial risk assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-gold mt-1">✓</span>
                    <span>Personalized protection strategy recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-gold mt-1">✓</span>
                    <span>Clear explanations with complete transparency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-gold mt-1">✓</span>
                    <span>Response within 24 hours guaranteed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
