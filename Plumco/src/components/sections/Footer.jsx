// Footer.jsx
// Footer with company information, links, and contact details
// Provides navigation and essential company information

const Footer = () => {
  // Footer link sections
  const footerSections = [
    {
      title: 'Services',
      links: [
        { label: 'Emergency Repairs', href: '#' },
        { label: 'Drain Cleaning', href: '#' },
        { label: 'Water Installation', href: '#' },
        { label: 'Maintenance Plans', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Our Team', href: '#' },
        { label: 'Testimonials', href: '#' },
        { label: 'Blog', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact Us', href: '#' },
        { label: 'FAQ', href: '#' },
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Grid */}
        <div className="footer-grid">
          {/* Company Info Column */}
          <div className="footer-column">
            <div className="footer-logo">
              <div className="footer-logo-icon">P</div>
              <span className="footer-logo-text">Plumco</span>
            </div>
            <p className="footer-description">
              Professional plumbing services for residential and commercial clients.
            </p>
            {/* Social Media Links */}
            <div className="footer-social">
              <a href="#" className="social-link">
                Facebook
              </a>
              <a href="#" className="social-link">
                Instagram
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="footer-column">
              <h4 className="footer-column-title">{section.title}</h4>
              <ul className="footer-links">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom Section */}
        <div className="footer-bottom">
          {/* Copyright */}
          <p className="footer-copyright">
            © 2024 Plumco. All rights reserved. Licensed & Insured
          </p>

          {/* Contact Info */}
          <div className="footer-contact">
            <p className="contact-item">
              <strong>Phone:</strong> (555) 123-4567
            </p>
            <p className="contact-item">
              <strong>Email:</strong> info@plumco.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
