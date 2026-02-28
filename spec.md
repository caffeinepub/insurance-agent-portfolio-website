# Specification

## Summary
**Goal:** Fix responsive layout across the entire public-facing site and build a complete professional admin panel with authentication, dark-themed dashboard, and full navigation.

**Planned changes:**
- Fix responsive layout for all public-facing sections (hero, stat row, service cards, testimonials, quote form, footer) to display correctly on mobile (375px) and laptop (1280px) without horizontal overflow
- Add an "Agent Login" button in the header top-right that opens a modal with username/password fields; credentials `admin` / `conroe123` grant access to the admin area
- Build admin dashboard at `/admin/dashboard` with dark theme (`#1a1a2e`, `#16213e`, `#0f3460`), featuring four stat cards, a leads table with 8+ sample Conroe TX rows, status filter tabs (New/Called/Won), Export CSV button, a leads-per-week line chart, and a policy type pie chart
- Build admin layout shell with sidebar navigation for: Dashboard, Leads, Policy Management, Lead Assignment, Analytics, and PDF Invoices
- Implement stub pages for Policy Management (placeholder list), Lead Assignment (lead list with agent assignment dropdown), Analytics (chart placeholders), and PDF Invoices (invoice list with per-row "Generate PDF" button triggering browser print)
- Make admin panel mobile-responsive: hamburger menu with slide-out drawer on ≤768px, vertically stacked stat cards, and horizontally scrollable leads table
- Protect `/admin/*` routes by redirecting unauthenticated users to the public home page; persist admin session in `sessionStorage`; add a logout button that clears session and redirects home

**User-visible outcome:** The public site displays correctly on all screen sizes, and agents can log in via a header modal to access a fully functional dark-themed admin panel with leads management, charts, and navigation — protected by session-based authentication.
