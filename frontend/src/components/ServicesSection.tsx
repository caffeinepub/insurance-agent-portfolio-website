import React, { useEffect, useRef } from 'react';
import { Car, Home, Heart, Briefcase, TrendingUp, Umbrella, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Car,
    title: 'Auto Insurance',
    desc: 'Comprehensive coverage for your vehicles with competitive rates from top carriers. We find the right balance of protection and affordability.',
    benefits: ['Liability & collision', 'Uninsured motorist', 'Roadside assistance'],
    tag: 'Most Popular',
  },
  {
    icon: Home,
    title: 'Home Insurance',
    desc: 'Protect your most valuable asset with tailored homeowners coverage. From structure to personal property and liability.',
    benefits: ['Dwelling protection', 'Personal property', 'Loss of use coverage'],
    tag: null,
  },
  {
    icon: Heart,
    title: 'Life Insurance',
    desc: 'Secure your family\'s financial future with term, whole, or universal life policies designed around your goals and budget.',
    benefits: ['Term & whole life', 'IUL strategies', 'Estate planning'],
    tag: 'High Demand',
  },
  {
    icon: Briefcase,
    title: 'Business Insurance',
    desc: 'Comprehensive commercial coverage to protect your business, employees, and assets from unexpected risks.',
    benefits: ['General liability', 'Workers\' comp', 'Commercial property'],
    tag: null,
  },
  {
    icon: TrendingUp,
    title: 'Retirement Planning',
    desc: 'Build a tax-advantaged retirement strategy using annuities and indexed products that grow with market upside and protect against downside.',
    benefits: ['Fixed & indexed annuities', 'Tax-deferred growth', 'Income guarantees'],
    tag: null,
  },
  {
    icon: Umbrella,
    title: 'Umbrella Coverage',
    desc: 'An extra layer of liability protection that goes beyond your standard policies — essential for high-net-worth families.',
    benefits: ['Excess liability', 'Legal defense costs', 'Worldwide coverage'],
    tag: null,
  },
];

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.scroll-fade').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={ref} className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="scroll-fade flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-amber" />
            <span className="font-body text-amber text-sm font-semibold tracking-widest uppercase">
              What We Cover
            </span>
          </div>
          <h2 className="scroll-fade delay-100 font-display text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-4">
            Coverage for Every
            <br />
            <span className="italic text-forest">Stage of Life</span>
          </h2>
          <p className="scroll-fade delay-200 font-body text-charcoal-muted text-lg leading-relaxed">
            From your first car to your retirement nest egg — we have the expertise and carrier
            relationships to protect everything that matters.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, benefits, tag }, index) => (
            <div
              key={title}
              className={`scroll-fade group relative bg-cream rounded-xl border border-forest/8 p-7 hover:border-amber/40 hover:shadow-card-hover transition-all duration-300 cursor-pointer`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Tag */}
              {tag && (
                <div className="absolute top-4 right-4 bg-amber text-forest-dark font-body font-bold text-xs px-2.5 py-1 rounded-full">
                  {tag}
                </div>
              )}

              {/* Icon */}
              <div className="w-12 h-12 bg-forest/8 rounded-sm flex items-center justify-center mb-5 border border-forest/15 group-hover:bg-forest group-hover:border-forest transition-colors duration-300">
                <Icon className="w-6 h-6 text-forest group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-charcoal text-xl mb-3">{title}</h3>
              <p className="font-body text-charcoal-muted text-sm leading-relaxed mb-5">{desc}</p>

              {/* Benefits */}
              <ul className="space-y-1.5 mb-6">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 font-body text-charcoal text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-forest font-body font-semibold text-sm group-hover:text-amber transition-colors"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
