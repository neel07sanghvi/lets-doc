"use client";

import { useState } from 'react';

const pricingPlans = {
  monthly: [
    {
      name: 'Starter',
      price: '₹999',
      period: '/month',
      features: [
        'Up to 100 appointments/month',
        'Basic patient records',
        'SMS reminders',
        'Mobile app access',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '₹1999',
      period: '/month',
      features: [
        'Unlimited appointments',
        'Complete patient management',
        'SMS & WhatsApp reminders',
        'Custom website',
        'Analytics dashboard',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '₹3999',
      period: '/month',
      features: [
        'Multi-location support',
        'Advanced analytics',
        'API integration',
        'Custom branding',
        'Dedicated account manager',
        '24/7 phone support'
      ],
      popular: false
    }
  ],
  annual: [
    {
      name: 'Starter',
      price: '₹8999',
      period: '/year',
      features: [
        'Up to 100 appointments/month',
        'Basic patient records',
        'SMS reminders',
        'Mobile app access',
        'Email support',
        '2 months FREE'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '₹19999',
      period: '/year',
      features: [
        'Unlimited appointments',
        'Complete patient management',
        'SMS & WhatsApp reminders',
        'Custom website',
        'Analytics dashboard',
        'Priority support',
        '2 months FREE'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '₹39999',
      period: '/year',
      features: [
        'Multi-location support',
        'Advanced analytics',
        'API integration',
        'Custom branding',
        'Dedicated account manager',
        '24/7 phone support',
        '2 months FREE'
      ],
      popular: false
    }
  ]
};

export default function UdetiPricing() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--secondary-color)' }}>
            Choose Your Plan
          </h2>
          <p className="text-lg mb-8" style={{ color: 'var(--text-secondary-color)' }}>
            Select the perfect plan for your clinic's needs. Upgrade or downgrade anytime.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-8">
            <span className={`mr-3 ${billingPeriod === 'monthly' ? 'font-semibold' : ''}`} style={{ color: 'var(--text-color)' }}>
              Monthly
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annual' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{
                backgroundColor: billingPeriod === 'annual' ? 'var(--primary-color)' : '#d1d5db',
                color: 'var(--primary-color)'
              }}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${billingPeriod === 'annual' ? 'translate-x-6' : 'translate-x-1'
                  }`}
              />
            </button>
            <span className={`ml-3 ${billingPeriod === 'annual' ? 'font-semibold' : ''}`} style={{ color: 'var(--text-color)' }}>
              Annual <span className="text-sm" style={{ color: 'var(--primary-color)' }}>(Save 25%)</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans[billingPeriod].map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg p-8 relative ${plan.popular ? 'ring-2 ring-opacity-50 scale-105' : ''
                }`}
              style={{
                color: plan.popular ? 'var(--primary-color)' : 'transparent'
              }}
            >
              {plan.popular && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-sm font-medium"
                  style={{ backgroundColor: 'var(--primary-color)' }}
                >
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--secondary-color)' }}>
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold" style={{ color: 'var(--primary-color)' }}>
                    {plan.price}
                  </span>
                  <span className="text-sm" style={{ color: 'var(--text-secondary-color)' }}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      style={{ color: 'var(--primary-color)' }}
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm" style={{ color: 'var(--text-secondary-color)' }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors duration-200 ${plan.popular
                  ? 'text-white hover:opacity-90'
                  : 'border-2 hover:text-white'
                  }`}
                style={{
                  backgroundColor: plan.popular ? 'var(--primary-color)' : 'transparent',
                  borderColor: 'var(--primary-color)',
                  color: plan.popular ? 'white' : 'var(--primary-color)'
                }}
                onMouseEnter={(e) => {
                  if (!plan.popular) {
                    e.currentTarget.style.backgroundColor = 'var(--primary-color)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!plan.popular) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}