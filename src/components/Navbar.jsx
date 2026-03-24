// components/Navbar.jsx
// Sticky navbar with smooth scroll navigation and mobile hamburger menu

import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollY = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className="portfolio-nav">
        <div className="container d-flex align-items-center justify-content-between" style={{ maxWidth: '1200px' }}>
          {/* Brand / Logo */}
          <a href="#home" className="nav-brand" onClick={() => handleNavClick('#home')}>
            <span>{'<'}</span>CC<span>{'/>'}</span>
          </a>

          {/* Desktop nav links */}
          <div className="d-flex align-items-center gap-1 nav-links-desktop">
            {NAV_LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                className={`nav-link-custom ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary-custom ms-2"
              style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            >
              Hire Me
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <i className={`bi ${menuOpen ? 'bi-x-lg' : 'bi-list'}`} style={{ fontSize: '1.1rem' }}></i>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map(link => (
          <a
            key={link.label}
            href={link.href}
            className={`nav-link-custom ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="btn-primary-custom mt-2"
          style={{ width: 'fit-content', padding: '0.6rem 1.5rem' }}
          onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
        >
          Hire Me
        </a>
      </div>
    </>
  );
}
