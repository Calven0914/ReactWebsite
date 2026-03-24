// pages/Home.jsx
// Hero section — name, role, short intro, CTA buttons, and animated avatar

export default function Home() {
  const scrollToProjects = (e) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="container" style={{ maxWidth: '1200px' }}>
        <div className="row align-items-center">

          {/* LEFT — Text content */}
          <div className="col-12 col-lg-7">
            <p className="hero-greeting fade-in">Hello, World</p>

            <h1 className="hero-name fade-in fade-in-delay-1">
              Calven<br />
              <span className="last-name">Chow.</span>
            </h1>

            <p className="hero-role fade-in fade-in-delay-2">
              {'// '} Software Engineering Graduate &amp; Developer
            </p>

            <p className="hero-description fade-in fade-in-delay-3">
              I build clean, thoughtful software — from mobile apps with Flutter to
              computer vision systems with OpenCV. Currently open to full-time opportunities.
            </p>

            <div className="hero-cta-group fade-in fade-in-delay-4">
              <a href="#projects" className="btn-primary-custom" onClick={scrollToProjects}>
                <i className="bi bi-grid-3x3-gap-fill"></i>
                View Projects
              </a>
              <a href="#contact" className="btn-outline-custom" onClick={scrollToContact}>
                <i className="bi bi-send"></i>
                Get In Touch
              </a>
            </div>

            {/* Quick stats */}
            <div className="stats-row fade-in fade-in-delay-5">
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Projects Built</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Technologies</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2025</span>
                <span className="stat-label">Grad Year</span>
              </div>
            </div>
          </div>

          {/* RIGHT — Avatar visual */}
          <div className="col-12 col-lg-5">
            <div className="hero-visual fade-in fade-in-delay-3">
              <div className="avatar-frame">
                <span className="avatar-initials">CC</span>
                <span className="avatar-badge">Available for hire</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator">
        <i className="bi bi-chevron-down"></i>
        <span>scroll</span>
      </div>
    </section>
  );
}
