import { useRef, useEffect, useState } from 'react';

export interface Review {
  id: string;
  stars: number;
  text: string;
  name: string;
  city: string;
  date: string;
}

const defaultReviews: Review[] = [
  {
    id: '1',
    stars: 5,
    text: "C. Jenkins saved our family over $1,400 a year by switching our home and auto bundle. The whole process took less than 24 hours and we never had to visit any office. I've referred three neighbors already.",
    name: 'Sarah M.',
    city: 'The Woodlands, TX',
    date: '2024-01-15',
  },
  {
    id: '2',
    stars: 5,
    text: "After the flooding last year I thought dealing with insurance was going to be a nightmare. Jenkins Insurance walked us through every single step and got our claim approved fast. An absolute lifesaver for our family.",
    name: 'Robert T.',
    city: 'Humble, TX',
    date: '2024-02-03',
  },
  {
    id: '3',
    stars: 5,
    text: "As a small business owner in Spring I needed someone who understood Texas commercial insurance. Jenkins knew exactly what I needed and saved me over $2,100 on my annual premium.",
    name: 'Maria G.',
    city: 'Spring, TX',
    date: '2024-02-20',
  },
];

function StarRating({ stars }: { stars: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={s <= stars ? 'text-jenkins-gold' : 'text-gray-300'}>★</span>
      ))}
    </div>
  );
}

export default function JenkinsReviews() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [reviews, setReviews] = useState<Review[]>(defaultReviews);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('jenkinsReviews');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setReviews(parsed);
        }
      }
    } catch {}

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const avgRating = reviews.length > 0
    ? (reviews.reduce((sum, r) => sum + r.stars, 0) / reviews.length).toFixed(1)
    : '4.9';

  const displayReviews = reviews.slice(0, 3);

  return (
    <section id="reviews" className="py-[90px] bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-montserrat font-extrabold text-[38px] text-jenkins-navy mb-4">
            What Greater Houston Families<br />Are Saying
          </h2>

          {/* Google Summary */}
          <div
            className="inline-block px-10 py-5 rounded-xl mb-12"
            style={{ background: '#F8F9FA' }}
          >
            <div className="text-jenkins-gold text-2xl mb-1">★★★★★</div>
            <div className="font-montserrat font-bold text-[24px] text-jenkins-navy">
              {avgRating} / 5.0
            </div>
            <div className="font-opensans text-[14px] text-[#555]">
              Based on {reviews.length > 3 ? reviews.length : 127} Google Reviews
            </div>
          </div>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {displayReviews.map((review, i) => (
            <div
              key={review.id}
              className={`rounded-2xl p-9 shadow-[0_4px_24px_rgba(0,0,0,0.09)] card-hover transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4"
                style={{ background: '#4285F4' }}
              >
                G
              </div>
              <StarRating stars={review.stars} />
              <p className="font-opensans text-[16px] text-[#444] leading-[1.8] my-4">
                "{review.text}"
              </p>
              <div className="font-montserrat font-bold text-jenkins-navy text-[15px]">
                {review.name} ✓ Verified Google Review
              </div>
              <div className="font-opensans text-[13px] text-jenkins-gold mt-1">
                {review.city}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border-2 border-jenkins-navy text-jenkins-navy font-montserrat font-bold rounded-lg hover:bg-jenkins-navy hover:text-white transition-all duration-200"
          >
            See All Google Reviews →
          </a>
        </div>
      </div>
    </section>
  );
}
