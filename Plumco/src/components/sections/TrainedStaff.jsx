// TrainedStaff.jsx
// Highlights the professional, trained plumbing staff
// Features a headline, description, CTA button, and plumber image

import Button from '../common/Button';

const TrainedStaff = () => {
  return (
    <section id="trained-staff" className="trained-staff-section">
      <div className="section-container">
        <div className="trained-staff-content">
          {/* Left Column - Text Content */}
          <div className="trained-staff-text">
            <h3 className="trained-staff-headline">:: HIGHLY TRAINED STAFF</h3>
            <h2 className="trained-staff-title">Ready For Help You.</h2>
            <p className="trained-staff-description">
              We are certified company. We provide best plumbing services for you & your company.
            </p>
            
            {/* Book Online Button with Play Icon */}
            <div className="trained-staff-button-wrapper">
              <Button variant="primary" size="lg">
                ▶ BOOK ONLINE
              </Button>
            </div>
          </div>

          {/* Right Column - Plumber Image */}
          <div className="trained-staff-image">
            <img 
              src="https://images.unsplash.com/photo-1557524173-b7cf97d4538b?w=500&h=600&fit=crop" 
              alt="Professional plumber in white shirt and blue suspenders"
              className="plumber-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainedStaff;
