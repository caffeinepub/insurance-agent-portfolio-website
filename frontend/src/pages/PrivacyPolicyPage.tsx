import { ArrowLeft, Shield } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8f9fc' }}>
      {/* Header */}
      <header className="sticky top-0 z-50 shadow-md" style={{ backgroundColor: '#0f2557' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6" style={{ color: '#c9a227' }} aria-hidden="true" />
            <span className="font-bold text-base" style={{ color: '#ffffff' }}>
              Reeves Insurance Solutions
            </span>
          </div>
          <a
            href="/"
            className="flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded px-2 py-1"
            style={{ color: '#c9a227' }}
            aria-label="Back to home page"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Back to Home
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Title */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#0f2557' }}>
            Privacy Policy
          </h1>
          <p className="text-sm" style={{ color: '#6b7280' }}>
            Last Updated: January 1, 2026 | Effective Date: January 1, 2026
          </p>
          <div className="w-16 h-1 rounded-full mt-4" style={{ backgroundColor: '#c9a227' }} />
        </div>

        <div className="prose max-w-none space-y-8">
          {/* Introduction */}
          <section aria-labelledby="intro-heading">
            <h2 id="intro-heading" className="text-xl font-bold mb-3" style={{ color: '#0f2557' }}>
              1. Introduction
            </h2>
            <p className="text-base leading-relaxed" style={{ color: '#374151' }}>
              Reeves Insurance Solutions ("we," "our," or "us"), operated by Johnathan Reeves CLU, ChFC,
              is committed to protecting your privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website or submit a quote request.
              Please read this policy carefully. If you disagree with its terms, please discontinue use of
              our site.
            </p>
          </section>

          {/* Information Collection */}
          <section aria-labelledby="collection-heading">
            <h2 id="collection-heading" className="text-xl font-bold mb-3" style={{ color: '#0f2557' }}>
              2. Information We Collect
            </h2>
            <p className="text-base leading-relaxed mb-3" style={{ color: '#374151' }}>
              We may collect the following categories of personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base" style={{ color: '#374151' }}>
              <li><strong>Contact Information:</strong> Name, email address, phone number, and ZIP code</li>
              <li><strong>Insurance Information:</strong> Coverage type preferences and insurance needs</li>
              <li><strong>Communications:</strong> Messages you send us through our contact form</li>
              <li><strong>Technical Data:</strong> IP address, browser type, and pages visited (via analytics)</li>
              <li><strong>Cookies:</strong> Session and preference cookies for site functionality</li>
            </ul>
          </section>

          {/* Use of Information */}
          <section aria-labelledby="use-heading">
            <h2 id="use-heading" className="text-xl font-bold mb-3" style={{ color: '#0f2557' }}>
              3. How We Use Your Information
            </h2>
            <p className="text-base leading-relaxed mb-3" style={{ color: '#374151' }}>
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base" style={{ color: '#374151' }}>
              <li>Respond to your insurance quote requests and inquiries</li>
              <li>Contact you via phone, email, or text regarding insurance products and services</li>
              <li>Provide personalized insurance recommendations</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations and regulatory requirements</li>
              <li>Send you relevant insurance information (with your consent)</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section aria-labelledby="sharing-heading">
            <h2 id="sharing-heading" className="text-xl font-bold mb-3" style={{ color: '#0f2557' }}>
              4. Data Sharing and Disclosure
            </h2>
            <p className="text-base leading-relaxed mb-3" style={{ color: '#374151' }}>
              <strong>We do not sell your personal information.</strong> We may share your information with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base" style={{ color: '#374151' }}>
              <li><strong>Insurance Carriers:</strong> To obtain quotes and process applications (with your consent)</li>
              <li><strong>Service Providers:</strong> Third-party vendors who assist in operating our website</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or government authority</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          {/* CCPA/GDPR Rights */}
          <section aria-labelledby="rights-heading">
            <h2 id="rights-heading" className="text-xl font-bold mb-3" style={{ color: '#0f2557' }}>
              5. Your Rights (CCPA / GDPR)
            </h2>
            <p className="text-base leading-relaxed mb-3" style={{ color: '#374151' }}>
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base" style={{ color: '#374151' }}>
              <li><strong>Right to Know:</strong> Request information about the personal data we collect and how it's used</li>
              <li><strong>Right to Delete:</strong> Request deletion of your personal information</li>
              <li><strong>Right to Opt-Out:</strong> Opt out of the sale of personal information (we do not sell data)</li>
              <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your rights</li>
              <li><strong>Right to Rectification (GDPR):</strong> Request correction of inaccurate personal data</li>
              <li><strong>Right to Portability (GDPR):</strong> Request a copy of your data in a portable format</li>
            </ul>
            <p className="text-base leading-relaxed mt-3" style={{ color: '#374151' }}>
              To exercise any of these rights, contact us at{' '}
              <a href="mailto:john@reevesinsurance.com" className="underline hover:opacity-80" style={{ color: '#0f2557' }}>
                john@reevesinsurance.com
              </a>{' '}
              or call{' '}
              <a href="tel:+12135550123" className="underline hover:opacity-80" style={{ color: '#0f2557' }}>
                (213) 555-0123
              </a>.
            </p>
          </section>

          {/* Cookies */}
          <section aria-labelledby="cookies-heading">
            <h2 id="cookies-heading" className="text-xl font-bold mb-3" style={{ color: '#0f2557' }}>
              6. Cookies and Tracking Technologies
            </h2>
            <p className="text-base leading-relaxed" style={{ color: '#374151' }}>
              We use cookies and similar tracking technologies to enhance your browsing experience,
              analyze site traffic, and understand where our visitors are coming from. You can control
              cookie settings through your browser preferences. Disabling cookies may affect some
              functionality of our website.
            </p>
          </section>

          {/* Security */}
          <section aria-labelledby="security-heading">
            <h2 id="security-heading" className="text-xl font-bold mb-3" style={{ color: '#0f2557' }}>
              7. Security Measures
            </h2>
            <p className="text-base leading-relaxed" style={{ color: '#374151' }}>
              We implement industry-standard security measures to protect your personal information,
              including SSL encryption, secure data storage on the Internet Computer blockchain, and
              access controls. However, no method of transmission over the Internet is 100% secure,
              and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Contact */}
          <section aria-labelledby="contact-heading">
            <h2 id="contact-heading" className="text-xl font-bold mb-3" style={{ color: '#0f2557' }}>
              8. Contact Information
            </h2>
            <p className="text-base leading-relaxed mb-3" style={{ color: '#374151' }}>
              If you have questions about this Privacy Policy or wish to exercise your rights, contact us:
            </p>
            <address className="not-italic p-4 rounded-xl border text-base" style={{ borderColor: 'rgba(201,162,39,0.3)', backgroundColor: 'rgba(201,162,39,0.05)', color: '#374151' }}>
              <strong style={{ color: '#0f2557' }}>Reeves Insurance Solutions</strong><br />
              Johnathan Reeves, CLU, ChFC<br />
              Los Angeles, CA<br />
              Email:{' '}
              <a href="mailto:john@reevesinsurance.com" className="underline hover:opacity-80" style={{ color: '#0f2557' }}>
                john@reevesinsurance.com
              </a><br />
              Phone:{' '}
              <a href="tel:+12135550123" className="underline hover:opacity-80" style={{ color: '#0f2557' }}>
                (213) 555-0123
              </a><br />
              Licensed in CA, NY, TX
            </address>
          </section>

          {/* Updates */}
          <section aria-labelledby="updates-heading">
            <h2 id="updates-heading" className="text-xl font-bold mb-3" style={{ color: '#0f2557' }}>
              9. Changes to This Policy
            </h2>
            <p className="text-base leading-relaxed" style={{ color: '#374151' }}>
              We may update this Privacy Policy from time to time. We will notify you of any changes
              by posting the new policy on this page with an updated "Last Updated" date. Your continued
              use of our website after any changes constitutes your acceptance of the new policy.
            </p>
          </section>
        </div>

        {/* Back to Home */}
        <div className="mt-12 pt-8 border-t text-center" style={{ borderColor: 'rgba(201,162,39,0.2)' }}>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            style={{ backgroundColor: '#0f2557', color: '#ffffff' }}
            aria-label="Return to Reeves Insurance Solutions home page"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Back to Home
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-xs" style={{ backgroundColor: '#0f2557', color: '#94a3b8' }}>
        <p>
          © {new Date().getFullYear()} Reeves Insurance Solutions. All rights reserved. |
          Licensed in CA, NY, TX | Not affiliated with any carrier
        </p>
      </footer>
    </div>
  );
}
