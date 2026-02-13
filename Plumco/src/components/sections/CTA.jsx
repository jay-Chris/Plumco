// CTA.jsx
// Call-to-Action section to drive conversions
// Final push to encourage visitors to contact or schedule service

import Button from '../common/Button';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="section-container cta-content">
        {/* Headline */}
        <h2 className="cta-title">
          Ready to Get Your Plumbing Fixed?
        </h2>

        {/* Subheading */}
        <p className="cta-subtitle">
          Don't let plumbing problems wait. Contact us today for fast, professional service. 
          We're available 24/7 for emergencies.
        </p>

        {/* CTA Buttons */}
        <div className="cta-buttons">
          <Button
            variant="primary"
            size="lg"
          >
            Schedule Service Now
          </Button>
          <Button
            variant="outline"
            size="lg"
          >
            Call: (555) 123-4567
          </Button>
        </div>

        {/* Trust Signals */}
        <p className="cta-signals">
          ✓ Licensed & Insured  ✓ Free Estimates  ✓ Same-Day Service Available
        </p>
      </div>
    </section>
  );
};

export default CTA;
