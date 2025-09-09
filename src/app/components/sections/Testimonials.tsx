// src/components/sections/Testimonials.tsx

import { SiteData } from "@/types";

type TestimonialsProps = {
  data: SiteData['testimonials'];
};

// SVG for the decorative quote mark
const QuoteIcon = () => (
  <svg className="w-12 h-12 text-primary opacity-20" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a2 2 0 0 0 2 2h2v-2H8V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a2 2 0 0 0 2 2h2v-2h-2V2a2 2 0 0 0-2-2Z" />
  </svg>
);

// SVG for a single star
const StarIcon = () => (
  <svg className="w-5 h-5 text-amber-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 6.46a1.523 1.523 0 0 0-1.238 1.044l-5.051.734a1.534 1.534 0 0 0 .84 1.622l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.08 9.247a1.532 1.532 0 0 0 .844-1.622Z" />
  </svg>
);


export default function Testimonials({ data }: TestimonialsProps) {
  if (!data) {
    return null;
  }

  return (
    <section id="testimonials" className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">
            {data.title}
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {data.items.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8 flex flex-col">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <QuoteIcon />
              <p className="text-text-secondary my-4 flex-grow italic">
                "{testimonial.quote}"
              </p>
              <div className="mt-auto pt-4 border-t border-slate-200">
                <p className="font-bold text-secondary">{testimonial.authorName}</p>
                <p className="text-sm text-text-secondary">{testimonial.authorTitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}