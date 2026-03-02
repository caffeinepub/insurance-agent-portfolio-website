# Specification

## Summary
**Goal:** Build a complete single-page demo site for Jenkins Insurance Agency located in The Woodlands, TX, replacing the current default route with a fully branded, mobile-optimized insurance agent landing page.

**Planned changes:**
- Create `JenkinsPublicSite.tsx` as the new index route with document title `Independent Insurance Agent | The Woodlands TX | Jenkins Insurance`
- Sticky responsive navbar with navy background, Jenkins logo, nav links, phone `(281) 410-8934`, gold "Get Free Quote" CTA, and mobile hamburger drawer
- Full-screen hero section with two-column layout: headline targeting The Woodlands TX, two CTAs, trust badges, agent photo, and floating Google review card on a navy gradient background
- Gold trust bar with 4 animated count-up stats (500+ Families, 4.9★, 20+ Carriers, 100% Local)
- Carrier partner badge row with 6 carriers (Progressive, Travelers, Nationwide, Liberty Mutual, Safeco, Foremost) with hover colorization
- "Why Choose Jenkins Insurance" section with 3 feature cards (Independent Agent, Local Expert, Personalized Service)
- 3×2 coverage grid: Home, Auto, Business, Flood, RV, Life Insurance — each linking to the quote form
- Navy "About C. Jenkins" section with agent photo, credentials, personal story, and inline stats
- Google Reviews section with 4.9★ aggregate and 3 testimonial cards with staggered scroll animations
- Quote request and contact section (`id="quote"`) with form fields, gold submit button, address `33018 Tamina Rd, The Woodlands TX 77354`, phone, hours, and WhatsApp link
- Bilingual Spanish/English section with CTA linking to `tel:(281)410-8934`
- 3-column footer with logo, quick links, Texas service areas, copyright, and license disclaimer
- Fixed floating WhatsApp button (bottom-right, all screen sizes) linking to `https://wa.me/12814108934` with pulsing green animation
- Mobile sticky bottom action bar (≤768px) with "Call Now" and "Get Quote" buttons
- Global design system: Montserrat headings, Open Sans body, navy `#1B3A6B`, gold `#F4B942`, green `#27AE60`, scroll-in animations via IntersectionObserver
- Performance optimizations: lazy-loaded images, SVG icons, no blocking render resources

**User-visible outcome:** Visitors see a fully branded Jenkins Insurance Agency demo site for The Woodlands, TX — with agent info for C. Jenkins, all correct contact details, mobile-optimized layout, WhatsApp and call CTAs, and a working quote request form.
