// pages/Contact.jsx
// Contact section — UI form (no backend) + social/contact links

import { useState } from 'react';

export default function Contact() {
  // Form state (UI only — no backend connected)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Simulates a form submission (replace with real handler if needed)
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container" style={{ maxWidth: '1200px' }}>

        {/* Section heading */}
        <div className="row mb-5">
          <div className="col-12">
            <span className="section-tag fade-in">03 — Contact</span>
            <h2 className="section-title fade-in fade-in-delay-1">Let's work together</h2>
            <div className="section-divider fade-in fade-in-delay-1"></div>
            <p className="section-subtitle fade-in fade-in-delay-2">
              I'm currently open to full-time roles, freelance projects, and collaborations.
              Drop me a message — I'll respond within 24 hours.
            </p>
          </div>
        </div>

        <div className="row g-5">

          {/* Contact Form */}
          <div className="col-12 col-lg-7 fade-in fade-in-delay-2">
            <div className="contact-form-wrapper">
              {submitted ? (
                /* Success state */
                <div className="text-center py-4">
                  <div style={{ color: 'var(--accent)', fontSize: '2.5rem', marginBottom: '1rem' }}>
                    <i className="bi bi-check-circle-fill"></i>
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    Message Sent!
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    Thanks for reaching out. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    {/* Name */}
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label className="form-label-custom">Your Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="form-control-custom"
                          placeholder="Calven Chow"
                          required
                        />
                      </div>
                    </div>
                    {/* Email */}
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label className="form-label-custom">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-control-custom"
                          placeholder="you@example.com"
                          required
                        />
                      </div>
                    </div>
                    {/* Subject */}
                    <div className="col-12">
                      <div className="form-group">
                        <label className="form-label-custom">Subject</label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="form-control-custom"
                          placeholder="Internship opportunity / Project collaboration"
                          required
                        />
                      </div>
                    </div>
                    {/* Message */}
                    <div className="col-12">
                      <div className="form-group">
                        <label className="form-label-custom">Message</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="form-control-custom"
                          rows="5"
                          placeholder="Tell me about your project or opportunity..."
                          required
                        />
                      </div>
                    </div>
                    {/* Submit */}
                    <div className="col-12">
                      <button type="submit" className="btn-primary-custom">
                        <i className="bi bi-send-fill"></i>
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Contact info sidebar */}
          <div className="col-12 col-lg-5 fade-in fade-in-delay-3">
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              Find me online
            </h4>
            <div className="social-links">
              {/* Email */}
              <a href="mailto:calvenc0914@gmail.com" className="social-link-item">
                <div className="social-icon">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <div className="social-info">
                  <span className="social-label">Email</span>
                  <span className="social-value">calvenc0914@gmail.com.com</span>
                </div>
                <i className="bi bi-arrow-right" style={{ color: 'var(--text-muted)' }}></i>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/calven-chow-kai-wen-03703727a/" target="_blank" rel="noreferrer" className="social-link-item">
                <div className="social-icon">
                  <i className="bi bi-linkedin"></i>
                </div>
                <div className="social-info">
                  <span className="social-label">LinkedIn</span>
                  <span className="social-value">linkedin.com/in/calven-chow</span>
                </div>
                <i className="bi bi-arrow-right" style={{ color: 'var(--text-muted)' }}></i>
              </a>

              {/* GitHub */}
              <a href="https://github.com/Calven0914" target="_blank" rel="noreferrer" className="social-link-item">
                <div className="social-icon">
                  <i className="bi bi-github"></i>
                </div>
                <div className="social-info">
                  <span className="social-label">GitHub</span>
                  <span className="social-value">github.com/Calven0914</span>
                </div>
                <i className="bi bi-arrow-right" style={{ color: 'var(--text-muted)' }}></i>
              </a>

              {/* Location */}
              <div className="social-link-item" style={{ cursor: 'default' }}>
                <div className="social-icon">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <div className="social-info">
                  <span className="social-label">Location</span>
                  <span className="social-value">Kuala Lumpur, Malaysia</span>
                </div>
                <i className="bi bi-check-circle" style={{ color: 'var(--accent)' }}></i>
              </div>
            </div>

            {/* Availability badge */}
            <div className="mt-4 p-3" style={{ background: 'rgba(245,166,35,0.06)', border: '1px solid rgba(245,166,35,0.2)', borderRadius: 'var(--radius-lg)' }}>
              <div className="d-flex align-items-center gap-2">
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80', display: 'inline-block', boxShadow: '0 0 8px #4ade80' }}></span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  Available for full-time roles &amp; freelance
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
