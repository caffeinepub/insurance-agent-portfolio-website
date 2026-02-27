export default function ReevesCalendarSection() {
  return (
    <section
      id="calendar-section"
      className="py-20"
      style={{ backgroundColor: '#ffffff' }}
      aria-label="Schedule a call with Johnathan Reeves"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: '#c9a227' }}>
            Book a Meeting
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0f2557' }}>
            Schedule a Call
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: '#374151' }}>
            Pick a time that works for you. Johnathan will walk you through your options and answer
            any questions — no obligation, no pressure.
          </p>
          <div className="w-16 h-1 mx-auto rounded-full mt-4" style={{ backgroundColor: '#c9a227' }} />
        </div>

        {/* Calendly Embed Placeholder */}
        <div
          className="rounded-2xl border-2 border-dashed flex flex-col items-center justify-center text-center p-12"
          style={{
            minHeight: '600px',
            borderColor: 'rgba(201,162,39,0.4)',
            backgroundColor: 'rgba(201,162,39,0.04)',
          }}
          role="region"
          aria-label="Calendly scheduling embed placeholder"
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
            style={{ backgroundColor: 'rgba(201,162,39,0.15)' }}
            aria-hidden="true"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#c9a227" strokeWidth={1.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
          </div>
          <h3 className="text-lg font-bold mb-2" style={{ color: '#0f2557' }}>
            Calendly Embed Placeholder
          </h3>
          <p className="text-sm mb-4 max-w-sm" style={{ color: '#374151' }}>
            Replace this section with your Calendly embed code. Example:
          </p>
          <code
            className="text-xs px-4 py-2 rounded-lg block mb-6 text-left max-w-md w-full"
            style={{ backgroundColor: '#f1f5f9', color: '#374151', fontFamily: 'monospace' }}
          >
            {`<!-- Calendly inline widget -->\n<div class="calendly-inline-widget"\n  data-url="https://calendly.com/YOUR_USERNAME"\n  style="min-width:320px;height:630px;">\n</div>\n<script src="https://assets.calendly.com/assets/external/widget.js"></script>`}
          </code>
          <p className="text-xs" style={{ color: '#9ca3af' }}>
            Contact your developer to add your Calendly booking URL.
          </p>

          {/* Fallback CTA */}
          <div className="mt-8 pt-8 border-t w-full" style={{ borderColor: 'rgba(201,162,39,0.2)' }}>
            <p className="text-sm font-semibold mb-3" style={{ color: '#0f2557' }}>
              Prefer to call directly?
            </p>
            <a
              href="tel:+12135550123"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              style={{ backgroundColor: '#0f2557', color: '#ffffff' }}
              aria-label="Call Johnathan Reeves at (213) 555-0123"
            >
              📞 Call (213) 555-0123
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
