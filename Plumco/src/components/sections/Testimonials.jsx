// Testimonials.jsx
// Customer reviews and success stories
// Social proof that builds trust and encourages conversion

const Testimonials = () => {
  // Array of customer testimonial data
  const testimonials = [
    {
      id: 1,
      name: 'John Martinez',
      title: 'Restaurant Owner',
      text: 'Plumco handled our kitchen plumbing renovation perfectly. Professional, on-time, and within budget. Highly recommended!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Sarah Thompson',
      title: 'Homeowner',
      text: 'They fixed my burst pipe at 2 AM without hesitation. The technician was courteous and the work was excellent.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Michael Chen',
      title: 'Property Manager',
      text: 'Been using Plumco for all our maintenance needs across 5 buildings. Consistent quality and great customer service.',
      rating: 5,
    },
    {
      id: 4,
      name: 'Emma Davis',
      title: 'Homeowner',
      text: 'The transparency in pricing and quick service made them my go-to plumber. Best experience in years!',
      rating: 5,
    },
  ];

  // Helper function to render star rating
  const StarRating = ({ rating }) => {
    return (
      <div className="star-rating">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="star">★</span>
        ))}
      </div>
    );
  };

  return (
    <section className="testimonials-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header testimonials-header">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Real feedback from satisfied clients across the region
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              {/* Star Rating */}
              <StarRating rating={testimonial.rating} />

              {/* Testimonial Text */}
              <p className="testimonial-text">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="testimonial-author">
                <p className="author-name">{testimonial.name}</p>
                <p className="author-title">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
