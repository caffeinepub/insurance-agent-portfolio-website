import { useState, useEffect, useRef } from 'react';
import { Star, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { useBusinessInfo } from '../hooks/useBusinessInfo';

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Los Angeles, CA',
    rating: 5,
    text: 'Johnathan saved me over $800 a year on my auto and home bundle. He took the time to explain every option and never pressured me. Highly recommend!',
    coverage: 'Auto & Home',
  },
  {
    name: 'David & Lisa T.',
    location: 'New York, NY',
    rating: 5,
    text: 'After our second child was born, we needed life insurance fast. Johnathan had us covered within a week with a policy that fit our budget perfectly.',
    coverage: 'Life Insurance',
  },
  {
    name: 'Marcus J.',
    location: 'Dallas, TX',
    rating: 5,
    text: 'As a small business owner, I was overwhelmed by insurance options. Johnathan simplified everything and got me comprehensive business coverage at a great rate.',
    coverage: 'Business Insurance',
  },
  {
    name: 'Priya K.',
    location: 'San Francisco, CA',
    rating: 5,
    text: 'I\'ve worked with several insurance agents over the years, but Johnathan is by far the most knowledgeable and responsive. He answers calls even on weekends!',
    coverage: 'Health Insurance',
  },
  {
    name: 'Robert & Angela W.',
    location: 'Los Angeles, CA',
    rating: 5,
    text: 'Johnathan helped us navigate a complex home insurance claim after a water damage incident. His support was invaluable — we got a full settlement.',
    coverage: 'Home Insurance',
  },
];

export default function ReevesAboutSection() {
  const { businessName } = useBusinessInfo();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 400);
  };

  const next = () => goTo((activeIndex + 1) % testimonials.length);
  const prev = () => goTo((activeIndex - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    intervalRef.current = setInterval(next, 5000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [activeIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20" style={{ backgroundColor: '#f8f9fc' }} aria-label="About Johnathan Reeves">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: '#c9a227' }}>
            About Your Agent
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0f2557' }}>
            Meet Johnathan Reeves, CLU, ChFC
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ backgroundColor: '#c9a227' }} />
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start mb-20">
          {/* Agent Photo & Credentials */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative mb-6">
              <img
                src="/assets/generated/agent-headshot.dim_400x500.png"
                alt="Professional male insurance agent in a navy suit shaking hands with a client in a bright office, diverse USA setting, warm and trustworthy expression"
                className="rounded-2xl shadow-navy-shadow w-full max-w-xs object-cover border-4"
                style={{ borderColor: '#c9a227', maxHeight: '400px' }}
                loading="lazy"
              />
              <div
                className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl shadow-lg"
                style={{ backgroundColor: '#0f2557' }}
              >
                <p className="text-xs font-bold" style={{ color: '#c9a227' }}>CLU · ChFC</p>
                <p className="text-xs" style={{ color: '#e2e8f0' }}>Certified Professional</p>
              </div>
            </div>

            {/* Credential Badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mt-6">
              {['CLU', 'ChFC', 'Licensed CA', 'Licensed NY', 'Licensed TX'].map((cred) => (
                <span
                  key={cred}
                  className="px-3 py-1.5 rounded-full text-xs font-bold border"
                  style={{ borderColor: '#c9a227', color: '#0f2557', backgroundColor: 'rgba(201,162,39,0.1)' }}
                >
                  {cred}
                </span>
              ))}
            </div>
          </div>

          {/* Bio */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#0f2557' }}>
              Your Trusted Insurance Partner in Los Angeles
            </h3>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: '#374151' }}>
              <p>
                With over 10 years of experience in the insurance industry, Johnathan Reeves has helped
                hundreds of families and businesses across California, New York, and Texas secure the
                coverage they need at rates they can afford.
              </p>
              <p>
                As a <strong>Chartered Life Underwriter (CLU)</strong> and <strong>Chartered Financial
                Consultant (ChFC)</strong>, Johnathan brings a depth of expertise that goes beyond
                standard insurance sales. He takes the time to understand your unique situation and
                crafts personalized solutions from top-rated carriers including State Farm, Allstate,
                Geico, and Progressive.
              </p>
              <p>
                Based in Los Angeles, Johnathan is deeply committed to his community and believes
                everyone deserves honest, transparent insurance advice — no pressure, no jargon,
                just real protection for what matters most.
              </p>
            </div>

            {/* Carrier Partnerships */}
            <div className="mt-6 p-4 rounded-xl border" style={{ borderColor: 'rgba(201,162,39,0.3)', backgroundColor: 'rgba(201,162,39,0.05)' }}>
              <p className="text-sm font-semibold mb-2" style={{ color: '#0f2557' }}>
                <Award className="w-4 h-4 inline mr-1" style={{ color: '#c9a227' }} />
                Partnered with Top-Rated Carriers
              </p>
              <p className="text-sm" style={{ color: '#374151' }}>
                State Farm · Allstate · Geico · Progressive · and more
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div id="testimonials" aria-label="Client testimonials">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2" style={{ color: '#0f2557' }}>
              What Our Clients Say
            </h2>
            <p className="text-base" style={{ color: '#374151' }}>
              Real stories from real clients across the USA
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div
              className="rounded-2xl p-8 shadow-card-hover border transition-all duration-400"
              style={{ backgroundColor: '#ffffff', borderColor: 'rgba(201,162,39,0.2)' }}
              role="region"
              aria-live="polite"
              aria-label="Testimonial carousel"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4" aria-label={`${testimonials[activeIndex].rating} out of 5 stars`}>
                {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" style={{ color: '#c9a227' }} aria-hidden="true" />
                ))}
              </div>

              <blockquote
                className={`text-lg leading-relaxed mb-6 italic transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
                style={{ color: '#374151' }}
              >
                "{testimonials[activeIndex].text}"
              </blockquote>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold" style={{ color: '#0f2557' }}>{testimonials[activeIndex].name}</p>
                  <p className="text-sm" style={{ color: '#6b7280' }}>
                    {testimonials[activeIndex].location} · {testimonials[activeIndex].coverage}
                  </p>
                </div>
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ backgroundColor: 'rgba(201,162,39,0.15)', color: '#0f2557' }}
                >
                  Verified Client
                </span>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={prev}
                className="p-2 rounded-full border transition-all hover:shadow-gold-glow focus:outline-none focus:ring-2 focus:ring-yellow-400"
                style={{ borderColor: '#c9a227', color: '#0f2557' }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className="w-2.5 h-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    style={{
                      backgroundColor: i === activeIndex ? '#c9a227' : '#d1d5db',
                      transform: i === activeIndex ? 'scale(1.3)' : 'scale(1)',
                    }}
                    role="tab"
                    aria-selected={i === activeIndex}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-2 rounded-full border transition-all hover:shadow-gold-glow focus:outline-none focus:ring-2 focus:ring-yellow-400"
                style={{ borderColor: '#c9a227', color: '#0f2557' }}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
