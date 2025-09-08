// src/components/sections/Services.tsx

import { SiteData } from "@/types";
import Image from "next/image";

type ServicesProps = {
  data: SiteData['services'];
};

// A simple checkmark SVG to use for features
const CheckmarkIcon = () => (
  <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

export default function Services({ data }: ServicesProps) {
  if (!data) {
    return null;
  }

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">
            {data.title}
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            {data.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.items.map((service) => (
            <div key={service.title} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
              <div className="relative w-full h-56">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {service.title}
                </h3>
                <p className="text-text-secondary mb-4 flex-grow">
                  {service.description}
                </p>
                <ul className="space-y-2 mt-auto">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-text-secondary">
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