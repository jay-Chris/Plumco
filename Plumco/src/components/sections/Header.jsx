// Header.jsx
// Navigation header component
// Displays logo and navigation menu

import { useState } from 'react';
import Button from '../common/Button';
import logo from '../../assets/h93Fk01.png';

const Header = () => {
  // State to track if mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation links array - easier to maintain and map over
  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Shop', href: '#shop' },
    { label: 'Pages', href: '#pages' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="header">
      {/* Top Bar with Time and Phone */}
      <div className="header-topbar">
        <div className="topbar-container">
          <div className="topbar-left">
            <div className="topbar-time">
              <svg className="topbar-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
              </svg>
              Sun - Fri || 8:00 - 7:00
            </div>
          </div>
          <div className="topbar-right">
            <div className="topbar-phone">
              <svg className="topbar-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              +00 56 98 46
            </div>
            <div className="topbar-language">
              <span>English</span>
              <svg className="language-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar">
        {/* Logo Section */}
        <div className="logo-section">
          <div className="logo-container">
            <img src={logo} alt="Plumco Logo" className="header-logo" />
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-menu desktop">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button and Mobile Menu Toggle */}
        <div className="nav-right">
          <Button variant="primary" size="sm" className="cta-button">
            Request Quote
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mobile-menu-divider">
              <Button variant="primary" size="sm" className="mobile-cta">
                  Request Quote
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
