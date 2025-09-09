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
    <section id="why-udeti" className="py-16 md:py-24" style={{ backgroundColor: 'var(--background-color)' }}>
      <div className="container mx-auto flex flex-col items-center content-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--secondary-color)' }}>
            Why Udeti?
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary-color)' }}>
            Growing a practice in today's digital world comes with unique challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-210">
          {whyUdetiFeatures.map((feature, index) => (
            <div
              key={index}
              className="p-6 h-60 w-70 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center content-center"
              style={{
                backgroundColor: feature.bgColor,
              }}
            >
              <p style={{ color: "white" }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}