import { SiteData } from "@/types";

type TestimonialsProps = {
  data: SiteData['testimonials'];
};

// SVG for the decorative quote mark
const QuoteIcon = () => (
  <svg
    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 opacity-20 mb-3 sm:mb-4"
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 18 14"
    style={{ color: 'var(--primary-color)' }}
  >
    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a2 2 0 0 0 2 2h2v-2H8V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a2 2 0 0 0 2 2h2v-2h-2V2a2 2 0 0 0-2-2Z" />
  </svg>
);

// SVG for a single star
const StarIcon = () => (
  <svg
    className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400"
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 22 20"
  >
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 6.46a1.523 1.523 0 0 0-1.238 1.044l-5.051.734a1.534 1.534 0 0 0 .84 1.622l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.08 9.247a1.532 1.532 0 0 0 .844-1.622Z" />
  </svg>
);

export default function Testimonials({ data }: TestimonialsProps) {
  if (!data) {
    return null;
  }

  return (
    <section
      id="testimonials"
      className="py-12 sm:py-16 md:py-20 lg:py-24"
      style={{ backgroundColor: '#f8fafc' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
            style={{ color: 'var(--secondary-color)' }}
          >
            {data.title}
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {data.items.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-4 sm:p-6 lg:p-8 flex flex-col h-full transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Star Rating */}
              <div className="flex mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              {/* Quote Icon */}
              <QuoteIcon />

              {/* Quote Text */}
              <p
                className="text-sm sm:text-base lg:text-lg italic leading-relaxed flex-grow mb-4 sm:mb-6"
                style={{ color: 'var(--text-secondary-color)' }}
              >
                {`"${testimonial.quote}"`}
              </p>

              {/* Author Info */}
              <div className="mt-auto pt-4 border-t border-opacity-10" style={{ borderColor: 'var(--text-secondary-color)' }}>
                <p
                  className="font-bold text-base sm:text-lg mb-1"
                  style={{ color: 'var(--secondary-color)' }}
                >
                  {testimonial.authorName}
                </p>
                <p
                  className="text-xs sm:text-sm"
                  style={{ color: 'var(--text-secondary-color)' }}
                >
                  {testimonial.authorTitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}