// About.jsx
// "Why Choose Us" section highlighting company strengths
// Builds trust and credibility with potential customers

import Button from '../common/Button';

const About = () => {
  // Array of reasons why customers should choose this company
  const reasons = [
    { id: 1, number: '15+', label: 'Years Experience' },
    { id: 2, number: '5000+', label: 'Happy Customers' },
    { id: 3, number: '24/7', label: 'Emergency Support' },
    { id: 4, number: '100%', label: 'Satisfaction Guarantee' },
  ];

  // Key features/benefits
  const features = [
    'Licensed and fully insured professionals',
    'Transparent, upfront pricing with no hidden fees',
    'Quality workmanship backed by warranty',
    'Quick response time to service calls',
    'Modern equipment and proven techniques',
    'Friendly, professional service every time',
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Why Choose Plumco?</h2>
          <p className="section-subtitle">
            Trusted by thousands for quality, reliability, and professional service
          </p>
        </div>

        {/* Stats Row */}
        <div className="stats-grid">
          {reasons.map((reason) => (
            <div key={reason.id} className="stat-box">
              <div className="stat-number">{reason.number}</div>
              <p className="stat-label">{reason.label}</p>
            </div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="about-content">
          {/* Left Column - Image Placeholder */}
          <div className="about-image">
            <span className="image-icon">🔧</span>
          </div>

          {/* Right Column - Features */}
          <div className="about-text">
            <h3 className="about-title">
              Professional Plumbing Solutions You Can Trust
            </h3>

            {/* Features List */}
            <ul className="features-list">
              {features.map((feature, index) => (
                <li key={index} className="feature-item">
                  <span className="feature-check">✓</span>
                  <span className="feature-text">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Button variant="primary" size="lg">
              Schedule Service Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
