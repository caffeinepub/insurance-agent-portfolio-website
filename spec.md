# Specification

## Summary
**Goal:** Build the full Jenkins Insurance Agency public-facing demo site and a complete admin panel with content management, lead tracking, reviews, analytics, and settings — all connected via localStorage for live content editing.

**Planned changes:**

### Public Site (/)
- Compose `JenkinsPublicSite.tsx` with all 13 section components in sequence: sticky header, full-screen hero, gold trust bar with count-up stats, carrier badges grid, Why Choose Us cards, coverage types grid, About C. Jenkins, Google Reviews, Quote/Contact form, Spanish bilingual section, footer with Agent Login link, floating WhatsApp button, and mobile sticky bottom bar
- Document title: "Jenkins Insurance Agency | Greater Houston TX"
- Colors: Navy #1B3A6B, Gold #F4B942, White #FFFFFF; Fonts: Montserrat (headings), Open Sans (body)
- Scroll animations via IntersectionObserver; hero headline and agent photo animate on load
- Phone (281) 410-8934 in header and contact section
- All public site components (JenkinsHero, JenkinsAbout, JenkinsBilingual, JenkinsCoverageTypes, JenkinsReviews, JenkinsQuoteContact, JenkinsFooter) read content from localStorage with hardcoded fallback defaults

### Admin Authentication
- `/admin` route renders `AdminLoginPage` — centered navy/gold card with password input and "Login" button
- Demo password: `admin123`; on success stores `adminAuthenticated=true` in sessionStorage and redirects to `/admin/dashboard`
- Wrong password shows inline error; login page has no sidebar or top bar

### Admin Layout (`AdminJenkinsLayout`)
- Fixed left sidebar (260px, navy) with 9 menu items (emoji icons): Dashboard, Quote Requests, Reviews Manager, Edit Website Content, Contact Info Settings, Service Areas, Analytics, Settings, Logout
- Top bar: "Welcome, C. Jenkins", today's date, notification bell with red badge, gold "View My Website →" button linking to `/`
- Active sidebar item highlighted gold; sidebar collapses to hamburger drawer on mobile
- All `/admin/*` routes (except `/admin`) protected — redirect to `/admin` if not authenticated

### Admin Dashboard (`/admin/dashboard`)
- 4 stat cards: Quote Requests (navy), Google Rating (gold), Est. Revenue (green), Website Visitors (navy)
- Recent Quote Requests table with 5 sample rows, color-coded status badges, View (navy) and Mark as Contacted (gold) buttons per row
- Quick Actions card: Add New Review, Edit Phone Number, Update Business Hours, Download All Leads CSV

### Quote Requests (`/admin/quotes`)
- Filter bar: search, city dropdown, coverage type dropdown, status dropdown, date range, Export CSV button
- Sortable full table with 8+ sample leads; status badges color-coded
- View modal: full lead details, editable notes, status dropdown, Send WhatsApp (green), Send Email (navy), Mark Closed gold button
- Delete requires confirmation dialog; all lead data in localStorage

### Reviews Manager (`/admin/reviews`)
- Review cards with star rating, text, name, city, date; edit, delete (with confirmation), move up/down buttons
- Add New Review form: star selector, reviewer name, city dropdown, review text, date, Save button
- Auto-calculated overall rating updates live; 3+ sample reviews pre-populated; data in localStorage
- Public site JenkinsReviews reads from localStorage

### Edit Website Content (`/admin/content`)
- Accordion sections: Hero, About, Contact Info, Coverage Types (6 cards), Bilingual
- Each section: gold Save Changes + navy Preview Changes buttons; saves to localStorage
- Public components read matching localStorage keys and reflect changes immediately
- Success toast "✅ Saved successfully!" bottom-right after each save

### Analytics (`/admin/analytics`)
- 4 stat cards (visitors, form submissions, WhatsApp clicks, phone clicks)
- Monthly Quote Requests bar chart (Recharts or CSS, gold bars, 6 months of data)
- Leads by Coverage Type pie/donut chart (Recharts, 5 segments)
- Leads by City horizontal CSS progress bars with gold fill (6 cities)

### Settings (`/admin/settings`)
- 4 sections: Profile (name, license, agency, photo upload), Notifications (4 gold toggles, all default on, persisted to localStorage), Website (domain, Google Maps URL, social URLs), Change Password (validates new = confirm)
- Success toast on each section save

### Contact Info Settings (`/admin/contact`)
- Editable phone, email, address, business hours fields; saves to localStorage

### Service Areas (`/admin/service-areas`)
- 6 cities with checkboxes to enable/disable; Add City input; saves to localStorage

### Global Toast System
- Success toast bottom-right, auto-dismisses after 3 seconds, shared across all admin pages via context or shared component
- All save buttons show loading spinner while saving

### Routing (`App.tsx`)
- Register all routes: `/admin`, `/admin/dashboard`, `/admin/quotes`, `/admin/reviews`, `/admin/content`, `/admin/contact`, `/admin/service-areas`, `/admin/analytics`, `/admin/settings`
- All except `/admin` wrapped in `AdminJenkinsLayout` and protected by sessionStorage check
- Logout clears sessionStorage and redirects to `/admin`

### Backend (Motoko)
- Add `submitQuote` function accepting name, phone, email, city, coverageType, message, timestamp — stored in stable array
- Add `getQuotes` function returning all stored quotes
- Public site quote form calls `submitQuote` on submission

**User-visible outcome:** A fully functional Jenkins Insurance Agency demo site at `/` with live-editable content, plus a complete admin panel at `/admin` where the agent can manage leads, reviews, site content, analytics, and settings — all persisted in localStorage for demo purposes, with real quote submissions stored on-chain via the Motoko backend.
