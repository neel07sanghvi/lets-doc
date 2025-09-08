import React from 'react';

const whyUdetiFeatures = [
  {
    icon: '🏥',
    title: 'Complete Digital Solution',
    description: 'End-to-end digitization of your clinic operations from appointment booking to patient records.'
  },
  {
    icon: '📱',
    title: 'Mobile-First Approach',
    description: 'Access your clinic data anywhere, anytime with our mobile-responsive platform.'
  },
  {
    icon: '💰',
    title: 'Cost Effective',
    description: 'Affordable pricing plans that grow with your practice without breaking the bank.'
  },
  {
    icon: '⚡',
    title: 'Easy Implementation',
    description: 'Quick setup process with minimal disruption to your current operations.'
  },
  {
    icon: '🔒',
    title: 'Secure & Compliant',
    description: 'Bank-level security with full compliance to healthcare data regulations.'
  },
  {
    icon: '📊',
    title: 'Analytics & Insights',
    description: 'Detailed reports and analytics to help you make informed business decisions.'
  }
];

export default function WhyUdeti() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: 'var(--background-color)' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--secondary-color)' }}>
            Why Udeti?
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary-color)' }}>
            Transform your healthcare practice with our comprehensive digital solution designed specifically for Indian clinics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyUdetiFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--secondary-color)' }}>
                {feature.title}
              </h3>
              <p style={{ color: 'var(--text-secondary-color)' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}