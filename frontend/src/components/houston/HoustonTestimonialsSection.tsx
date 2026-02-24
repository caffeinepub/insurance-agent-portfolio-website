import { Star } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export default function HoustonTestimonialsSection() {
  const testimonials = [
    {
      quote: "Saved $450/yr on auto + home bundle! True Houston agent.",
      author: 'John D.',
      location: 'Katy TX',
    },
    {
      quote: "Fastest quote in Houston. Bundled everything.",
      author: 'Sarah K.',
      location: 'Sugar Land',
    },
    {
      quote: "5 stars! Local knowledge saved my business coverage.",
      author: 'Mike R.',
      location: 'Heights',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#1e3a8a]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-12 leading-[1.6]" style={{ fontWeight: 600 }}>
          What Houston Residents Say
        </h2>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto mb-12">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-8 bg-white/10 backdrop-blur-sm rounded-lg text-center">
                    {/* 5 Stars */}
                    <div className="flex justify-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#f59e0b] text-[#f59e0b]" />
                      ))}
                    </div>

                    <p className="text-xl text-white mb-6 italic leading-[1.6]" style={{ fontWeight: 400 }}>"{testimonial.quote}"</p>

                    <p className="text-white font-semibold leading-[1.6]" style={{ fontWeight: 600 }}>
                      {testimonial.author}, {testimonial.location}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Fake Google Review Widget */}
        <div className="max-w-md mx-auto bg-white rounded-lg p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                G
              </div>
              <div>
                <p className="font-semibold text-[#1e293b] leading-[1.6]" style={{ fontWeight: 600 }}>Google Reviews</p>
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
                    ))}
                  </div>
                  <span className="text-[#334155] font-semibold leading-[1.6]" style={{ fontWeight: 600 }}>4.9</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-[#1e293b] leading-[1.6]" style={{ fontWeight: 600 }}>4.9</p>
              <p className="text-sm text-[#334155] leading-[1.6]" style={{ fontWeight: 400 }}>347 reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
