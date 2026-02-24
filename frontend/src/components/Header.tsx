import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useBusinessInfo } from '../hooks/useBusinessInfo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { businessName, phone } = useBusinessInfo();

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'bg-houstonNavy/95 backdrop-blur-lg shadow-lg'
          : 'bg-houstonNavy'
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Business Name */}
        <div className="flex items-center">
          <span className="text-xl font-bold text-houstonGold tracking-wide">
            {businessName}
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className="text-white/90 hover:text-houstonGold transition-colors duration-300 font-medium text-sm"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${phone}`}
            className="flex items-center gap-1.5 bg-orange-500 hover:bg-orange-400 text-white font-bold text-sm px-3 py-1.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Phone size={14} className="text-white" />
            <span>{phone}</span>
          </a>
          <Button
            onClick={() => scrollToSection('contact')}
            className="bg-houstonGold hover:bg-houstonGold/90 text-white font-semibold shadow-glow transition-all duration-300 text-sm px-4 py-2"
          >
            Book Consultation
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white transition-transform duration-300 hover:scale-110"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-houstonNavy border-t border-houstonGold/30 animate-fade-in">
          <ul className="container mx-auto px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left text-white/90 hover:text-houstonGold transition-colors duration-300 py-2 font-medium"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="pt-2 border-t border-houstonGold/20">
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 text-sm w-fit"
              >
                <Phone size={14} className="text-white" />
                <span>{phone}</span>
              </a>
            </li>
            <li>
              <Button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-houstonGold hover:bg-houstonGold/90 text-white font-semibold shadow-glow transition-all duration-300"
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
