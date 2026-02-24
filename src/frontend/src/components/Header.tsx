import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Why Choose Me', id: 'why-choose' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-luxury-dark/95 backdrop-blur-lg shadow-glow' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-heading font-bold text-accent-gold">
          <span className="glow-text">SecureWealth</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className="text-foreground/80 hover:text-accent-gold transition-colors duration-300 font-body"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <Button
          onClick={() => scrollToSection('contact')}
          className="hidden md:inline-flex bg-cta-bright hover:bg-cta-bright/90 text-luxury-dark font-semibold shadow-glow-gold"
        >
          Book Consultation
        </Button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-luxury-dark/98 backdrop-blur-lg border-t border-accent-gold/20">
          <ul className="container mx-auto px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left text-foreground/80 hover:text-accent-gold transition-colors duration-300 font-body py-2"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <Button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-cta-bright hover:bg-cta-bright/90 text-luxury-dark font-semibold shadow-glow-gold"
              >
                Book Consultation
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
