import React from 'react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    icon: '/assets/generated/icon-auto-insurance.dim_64x64.png',
    title: 'Auto Insurance',
    description: 'Comprehensive coverage for your vehicle with competitive rates from top carriers.',
    benefits: ['Liability & collision', 'Uninsured motorist', 'Roadside assistance'],
    tag: 'Most Popular',
  },
  {
    icon: '/assets/generated/icon-home-insurance.dim_64x64.png',
    title: 'Home Insurance',
    description: 'Protect your biggest investment with tailored homeowners coverage.',
    benefits: ['Dwelling protection', 'Personal property', 'Liability coverage'],
    tag: 'Best Value',
  },
  {
    icon: '/assets/generated/icon-life-insurance.dim_64x64.png',
    title: 'Life Insurance',
    description: 'Secure your family\'s financial future with the right life insurance plan.',
    benefits: ['Term & whole life', 'IUL policies', 'Annuities'],
    tag: 'Family First',
  },
  {
    icon: '/assets/generated/icon-business-insurance.dim_64x64.png',
    title: 'Business Insurance',
    description: 'Comprehensive commercial coverage to protect your Conroe business.',
    benefits: ['General liability', 'Commercial property', 'Workers comp'],
    tag: 'Commercial',
  },
  {
    icon: '/assets/generated/icon-health.dim_64x64.png',
    title: 'Health Insurance',
    description: 'Individual and group health plans for you and your employees.',
    benefits: ['Individual plans', 'Group coverage', 'Medicare supplement'],
    tag: 'Health',
  },
  {
    icon: '/assets/generated/icon-retirement.dim_64x64.png',
    title: 'Retirement Planning',
    description: 'Build a secure retirement with annuities and investment-linked policies.',
    benefits: ['Fixed annuities', 'IUL strategies', 'Retirement income'],
    tag: 'Future',
  },
];

export default function ServicesSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-forest/10 text-forest text-xs font-semibold uppercase tracking-wide mb-3">
            Our Services
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-forest-dark mb-3">
            Complete Insurance Solutions
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            From auto to commercial, we offer comprehensive coverage options tailored for Conroe, TX families and businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map(({ icon, title, description, benefits, tag }) => (
            <div
              key={title}
              className="group relative bg-cream rounded-2xl p-5 md:p-6 border border-gray-100 hover:shadow-forest-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute top-4 right-4">
                <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-xs font-medium">{tag}</span>
              </div>
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-forest flex items-center justify-center mb-4 group-hover:bg-forest-dark transition-colors">
                <img src={icon} alt={title} className="w-7 h-7 md:w-8 md:h-8 object-contain filter brightness-0 invert" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-forest-dark mb-2">{title}</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{description}</p>
              <ul className="space-y-1.5 mb-4">
                {benefits.map(b => (
                  <li key={b} className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-forest flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <button
                onClick={scrollToContact}
                className="flex items-center gap-1.5 text-forest text-sm font-semibold hover:text-forest-dark transition-colors group/btn"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
