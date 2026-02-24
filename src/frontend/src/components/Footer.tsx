import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' ? window.location.hostname : 'insurance-portfolio';

  return (
    <footer className="bg-luxury-dark border-t border-accent-gold/20 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-foreground/70 font-body">
            <span>© {currentYear} SecureWealth Insurance Advisory. All rights reserved.</span>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-foreground/60 font-body text-sm">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-accent-gold fill-accent-gold" />
            <span>using</span>
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(appIdentifier)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-gold hover:text-accent-gold/80 transition-colors"
            >
              caffeine.ai
            </a>
          </div>

          <div className="text-xs text-foreground/50 font-body max-w-2xl mx-auto">
            <p>
              Insurance products are subject to terms and conditions. This website is for informational purposes only
              and does not constitute financial advice. Please consult with a licensed advisor for personalized
              recommendations.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
