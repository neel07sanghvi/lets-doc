import React from 'react';

const whyUdetiFeatures = [
  {
    bgColor: "blue",
    description: 'My clinic lacks visibility on the internet, my Google Business profile is incomplete.'
  },
  {
    bgColor: "green",
    description: 'Access your clinic data anywhere, anytime with our mobile-responsive platform.'
  },
  {
    bgColor: "orange",
    description: 'Affordable pricing plans that grow with your practice without breaking the bank.'
  },
  {
    bgColor: "violet",
    description: 'Quick setup process with minimal disruption to your current operations.'
  },
  {
    bgColor: "tomato",
    description: 'Bank-level security with full compliance to healthcare data regulations.'
  },
  {
    bgColor: "turquoise",
    description: 'Detailed reports and analytics to help you make informed business decisions.'
  }
];

export default function WhyUdeti() {
  return (
    <section
      id="why-udeti"
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
            {"Why Udeti?"}
          </h2>
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl lg:max-w-4xl mx-auto leading-relaxed"
            style={{ color: 'var(--text-secondary-color)' }}
          >
            {"Growing a practice in today's digital world comes with unique challenges"}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {whyUdetiFeatures.map((feature, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 lg:p-8 min-h-[200px] sm:min-h-[220px] lg:min-h-[240px] rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
              style={{
                backgroundColor: feature.bgColor,
              }}
            >
              <p
                className="text-sm sm:text-base lg:text-lg text-center leading-relaxed font-medium"
                style={{ color: "white" }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}