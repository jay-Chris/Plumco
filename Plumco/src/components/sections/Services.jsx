// Services.jsx
// Displays available plumbing services in a card layout
// Uses an array of service data that we map over to create reusable cards

const Services = () => {
  // Array of service objects - easier to maintain and add new services
  const services = [
    {
      id: 1,
      icon: '🔧',
      title: 'Emergency Repairs',
      description: 'Fast response to urgent plumbing issues. Available 24/7 for your peace of mind.',
    },
    {
      id: 2,
      icon: '🚿',
      title: 'Drain Cleaning',
      description: 'Professional drain cleaning and unclogging services for residential and commercial.',
    },
    {
      id: 3,
      icon: '🚰',
      title: 'Water Installation',
      description: 'New water line installation and upgrades with professional craftsmanship.',
    },
    {
      id: 4,
      icon: '🛁',
      title: 'Bathroom Remodel',
      description: 'Complete bathroom renovation services including fixtures and plumbing upgrades.',
    },
    {
      id: 5,
      icon: '💧',
      title: 'Leak Detection',
      description: 'Advanced leak detection technology to find hidden leaks before major damage occurs.',
    },
    {
      id: 6,
      icon: '🏠',
      title: 'Maintenance Plans',
      description: 'Preventive maintenance packages to keep your plumbing system running smoothly.',
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive plumbing solutions tailored to your needs
          </p>
        </div>

        {/* Services Grid - responsive layout */}
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              {/* Icon */}
              <div className="service-icon">{service.icon}</div>

              {/* Title */}
              <h3 className="service-title">{service.title}</h3>

              {/* Description */}
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
