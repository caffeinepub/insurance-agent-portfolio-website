import React from 'react';
import { CheckCircle, Award, Users, Star } from 'lucide-react';

const credentials = [
  'Licensed in TX, CA, NY and 12 other states',
  '15+ years serving Conroe families',
  'Independent agent — no carrier bias',
  'Certified Insurance Counselor (CIC)',
  'Member, Conroe Chamber of Commerce',
];

const valueProps = [
  {
    icon: Award,
    title: 'Independent Agent',
    description: 'We work for you, not the insurance companies. Access 50+ carriers for the best rates.',
  },
  {
    icon: Users,
    title: 'Local Conroe Expert',
    description: 'Deep knowledge of Conroe TX market, weather risks, and local regulations.',
  },
  {
    icon: Star,
    title: 'Personalized Service',
    description: 'Every client gets a custom coverage plan — no one-size-fits-all policies here.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-forest/10" />
              <img
                src="/assets/generated/johnathan-headshot.dim_400x500.png"
                alt="Johnathan Reeves"
                className="relative w-64 sm:w-72 md:w-80 max-w-full rounded-2xl object-cover shadow-forest-lg"
                style={{ aspectRatio: '4/5' }}
              />
              <div className="absolute -bottom-4 -right-4 bg-amber-400 rounded-xl p-3 shadow-lg">
                <p className="text-forest-dark font-bold text-lg leading-none">15+</p>
                <p className="text-forest-dark text-xs font-medium">Years</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-forest/10 text-forest text-xs font-semibold uppercase tracking-wide mb-4">
              About Johnathan
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-forest-dark mb-4 leading-tight">
              Your Trusted Conroe<br />Insurance Partner
            </h2>
            <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
              Johnathan Reeves has been protecting Conroe families and businesses for over 15 years. 
              As an independent agent, he has access to 50+ top carriers — ensuring you always get 
              the best coverage at the most competitive rates.
            </p>

            <ul className="space-y-2.5 mb-8">
              {credentials.map(c => (
                <li key={c} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-forest flex-shrink-0 mt-0.5" />
                  {c}
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {valueProps.map(({ icon: Icon, title, description }) => (
                <div key={title} className="p-4 rounded-xl bg-white border-l-4 border-amber-400 shadow-sm">
                  <Icon className="w-5 h-5 text-forest mb-2" />
                  <h4 className="text-forest-dark font-bold text-sm mb-1">{title}</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
