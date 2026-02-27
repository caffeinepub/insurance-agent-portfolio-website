# Specification

## Summary
**Goal:** Apply five demo polish changes to the Conroe Agent Demo frontend: update testimonials, hero headline, process proof section, phone number, and CTA button text.

**Planned changes:**
- Replace all instances of 'Karen' in testimonial components (TestimonialsSection, HoustonTestimonialsSection, ReevesAboutSection, etc.) with attribution 'TX Agent J.D. - 12 quotes first month'
- Update the hero headline to 'Conroe Agents: Get 12+ Quotes/Month' across all hero components (HeroSection, HoustonHeroSection, ReevesHeroSection)
- Add a 'Process Proof' section above or integrated into the footer showing three steps — 'Figma Design → Live Preview → Conroe #1' — with screenshot placeholders and arrow connectors between steps; responsive (horizontal on desktop, vertical stack on mobile)
- Replace every phone number in the UI with (832) 555-1234, including Header, FloatingCallButton tel: href, ContactSection, ReevesContactSection, Footer, ReevesFooter, HoustonFooter, StickyQuoteBar, and the useBusinessInfo hook default fallback
- Update all primary CTA/quote buttons (hero, header, HoustonHeroSection, ReevesHeroSection, EmotionalCloseSection) to read 'Get Conroe Site - 3 Spots Left Week'; form submit buttons may retain functional labels

**User-visible outcome:** Demo visitors see a polished, urgency-driven landing page with consistent phone number, updated testimonial attribution, a prominent new headline, a process proof section, and urgency-focused CTA buttons throughout.
