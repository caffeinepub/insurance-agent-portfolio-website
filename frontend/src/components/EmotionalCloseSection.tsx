import React from 'react';
import { ArrowRight, Shield, Clock, Award } from 'lucide-react';

export default function EmotionalCloseSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a2e1a 0%, #0d1f0d 100%)' }}>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Admin Panel Teaser */}
        <div className="mb-14 md:mb-20">
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-semibold uppercase tracking-wide mb-3">
              Admin Panel Included
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
              Live lead tracking + policy management included
            </h3>
            <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
              Every site comes with a full admin dashboard — track leads, manage policies, and monitor your pipeline in real time.
            </p>
          </div>
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="/assets/generated/admin-panel-concept.dim_1200x700.png"
              alt="Admin Panel Dashboard — Live lead tracking and policy management"
              className="w-full h-auto object-cover"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.style.background = 'linear-gradient(135deg, #0d1f0d 0%, #1a2e1a 100%)';
                  parent.style.minHeight = '300px';
                  parent.style.display = 'flex';
                  parent.style.alignItems = 'center';
                  parent.style.justifyContent = 'center';
                  parent.innerHTML = '<p style="color:rgba(245,158,11,0.7);font-size:1rem;font-weight:600;">Admin Dashboard Preview</p>';
                }
              }}
            />
          </div>
        </div>

        {/* CTA Block */}
        <div className="text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-semibold uppercase tracking-wide mb-6">
            Limited Availability
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
            <span className="italic text-amber-400">Only 3 spots left</span><br />
            for Conroe agents this week
          </h2>
          <p className="text-gray-300 text-sm md:text-lg max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
            Don't let your competitors get the leads that should be yours.
            Get your professional Conroe insurance website live in 5 days.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8 md:mb-10">
            {[
              { icon: Shield, title: 'No Setup Fees', desc: 'Zero upfront cost to get started' },
              { icon: Clock, title: 'Live in 5 Days', desc: 'From deposit to live site' },
              { icon: Award, title: '30-Day Guarantee', desc: 'Results or your money back' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-4 rounded-xl bg-white/5 border border-white/10">
                <Icon className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                <h4 className="text-white font-bold text-sm mb-1">{title}</h4>
                <p className="text-gray-400 text-xs">{desc}</p>
              </div>
            ))}
          </div>

          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-forest-dark bg-amber-400 hover:bg-amber-300 transition-all shadow-amber-glow min-h-[48px]"
          >
            Get Conroe Site – 3 Spots This Week
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
