// Hero.jsx
// Hero banner section with main headline, CTA, and process flow
// First section users see - creates strong initial impression

import plumberImage from '../../assets/h93Fk01.png';
import teamImage from '../../assets/team-5.jpg';
import './Hero.css';

const Hero = () => {
  const processSteps = [
    {
      id: 1,
      title: 'Book Online',
      icon: '📅',
    },
    {
      id: 2,
      title: 'We Arrive',
      icon: '🚐',
    },
    {
      id: 3,
      title: 'Solve Problem',
      icon: '✓',
    },
  ];

  return (
    <section className="hero" style={{ backgroundImage: `url(${teamImage})` }}>
      <div className="hero-container">
        {/* Left Content Section */}
        <div className="hero-left">
          {/* Small Heading */}
          <p className="hero-label">:: Highly Trained Staff</p>

          {/* Main Headline */}
          <h1 className="hero-title">
            Ready For <span className="highlight">Help</span> You.
          </h1>

          {/* Descriptive Text */}
          <p className="hero-description">
            We are certified company. We provide best plumbing services for you & your company.
          </p>

          {/* CTA Section */}
          <div className="hero-cta-group">
            <button className="hero-cta-primary" aria-label="Book Online">
              <span>BOOK ONLINE</span>
            </button>
            <button className="hero-play-button" aria-label="Play video">
              <svg className="play-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>

          {/* Process Flow */}
          <div className="hero-process">
            {processSteps.map((step, index) => (
              <div key={step.id} className="process-wrapper">
                <div className="process-step">
                  <div className="process-icon">{step.icon}</div>
                  <p className="process-title">{step.title}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="process-arrow">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Plumber Image - Overlay on Right */}
        <img src={plumberImage} alt="Professional Plumber" className="hero-image-overlay" />
      </div>
    </section>
  );
};

export default Hero;
