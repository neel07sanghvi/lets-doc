import { SiteData } from "@/types";
import Image from "next/image";

type ServicesProps = {
  data: SiteData['services'];
};

// A simple checkmark SVG to use for features
const CheckmarkIcon = () => (
  <svg
    className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 mt-0.5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    style={{ color: 'var(--primary-color)' }}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

export default function Services({ data }: ServicesProps) {
  if (!data) {
    return null;
  }

  return (
    <section
      id="services"
      className="py-12 sm:py-16 md:py-20 lg:py-24"
      style={{ backgroundColor: 'var(--background-color)' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
            style={{ color: 'var(--secondary-color)' }}
          >
            {data.title}
          </h2>
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl lg:max-w-4xl mx-auto leading-relaxed"
            style={{ color: 'var(--text-secondary-color)' }}
          >
            {data.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {data.items.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="relative w-full h-40 sm:h-48 md:h-56">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-6 flex-grow flex flex-col">
                <h3
                  className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3"
                  style={{ color: 'var(--secondary-color)' }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm sm:text-base mb-4 sm:mb-6 flex-grow leading-relaxed"
                  style={{ color: 'var(--text-secondary-color)' }}
                >
                  {service.description}
                </p>
                <ul className="space-y-2 sm:space-y-3 mt-auto">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start text-sm sm:text-base"
                      style={{ color: 'var(--text-secondary-color)' }}
                    >
                      <CheckmarkIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}