// Pricing.jsx
// Pricing plans and packages
// Shows service costs and helps customers make purchasing decisions

import Button from '../common/Button';

const Pricing = () => {
  // Array of pricing plan data
  const plans = [
    {
      id: 1,
      name: 'Basic',
      price: 149,
      description: 'Perfect for simple fixes',
      features: [
        'Service call included',
        'Parts and materials',
        'One hour labor',
        'Warranty on work',
      ],
      highlighted: false,
    },
    {
      id: 2,
      name: 'Professional',
      price: 299,
      description: 'Most popular choice',
      features: [
        'Service call included',
        'Parts and materials',
        'Four hours labor',
        'Extended warranty',
        'Priority scheduling',
        'Free follow-up visit',
      ],
      highlighted: true,
    },
    {
      id: 3,
      name: 'Premium',
      price: 499,
      description: 'For major projects',
      features: [
        'Service call included',
        'All parts and materials',
        'Eight hours labor',
        'Extended warranty (1 year)',
        'Priority 24/7 access',
        'Free follow-up visits',
        'Consulting included',
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="pricing-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-subtitle">
            Choose the perfect plan for your plumbing needs
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-card ${plan.highlighted ? 'pricing-highlighted' : ''}`}
            >
              {/* Plan Header */}
              <div className="pricing-header">
                <h3 className="pricing-name">
                  {plan.name}
                </h3>
                <p className="pricing-description">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="pricing-display">
                  <span className="price-amount">${plan.price}</span>
                  <span className="price-label">
                    starting price
                  </span>
                </div>

                {/* CTA Button */}
                <Button
                  variant={plan.highlighted ? 'primary' : 'outline'}
                  size="md"
                  className="pricing-button"
                >
                  Get Started
                </Button>
              </div>

              {/* Features List */}
              <div className="pricing-features">
                <p className="features-label">
                  Includes:
                </p>
                <ul className="features-list">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="pricing-feature">
                      <span className="feature-check">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="pricing-note">
          <p>
            <strong>Not sure which plan is right for you?</strong> Contact us for a custom quote 
            or free consultation. We'll assess your needs and provide the perfect solution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
