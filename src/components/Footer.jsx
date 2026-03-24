// components/Footer.jsx
// Clean footer with brand, copyright, and social icon links

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="portfolio-footer">
      <div className="container" style={{ maxWidth: '1200px' }}>
        <div className="row align-items-center">
          {/* Brand */}
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <p className="footer-brand mb-1">
              <span>{'<'}</span>Calven<span>{'/>'}</span>
            </p>
            <p className="footer-copy mb-0">Software Engineering Graduate</p>
          </div>

          {/* Copyright */}
          <div className="col-12 col-md-4 mb-3 mb-md-0 text-md-center">
            <p className="footer-copy mb-0">
              © {currentYear} — Built with React &amp; Bootstrap
            </p>
          </div>

          {/* Social Icons */}
          <div className="col-12 col-md-4">
            <div className="footer-links">
              <a href="https://github.com/Calven0914" target="_blank" rel="noreferrer" className="footer-link" title="GitHub">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/calven-chow-kai-wen-03703727a/" target="_blank" rel="noreferrer" className="footer-link" title="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="mailto:calvenc0914@gmail.com" className="footer-link" title="Email">
                <i className="bi bi-envelope"></i>
              </a>
              <a href="#home" className="footer-link" title="Back to top"
                 onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                <i className="bi bi-arrow-up-circle"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
