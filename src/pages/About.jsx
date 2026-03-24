// pages/About.jsx
// About section — background, skills grid, and education card

// Skills list — update to match your actual skills
const SKILLS = [
  'React', 'JavaScript', 'Java',
  'Flutter', 'Dart', 'Python',
  'OpenCV', 'Android Studio', 'PHP',
  'Laravel', 'MySQL', 'Git',
  'C#', 'Figma', 'C++', '.Net'
];

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container" style={{ maxWidth: '1200px' }}>
        <div className="row">

          {/* Section heading */}
          <div className="col-12 mb-5">
            <span className="section-tag fade-in">01 — About</span>
            <h2 className="section-title fade-in fade-in-delay-1">A bit about me</h2>
            <div className="section-divider fade-in fade-in-delay-1"></div>
          </div>

          {/* Background text */}
          <div className="col-12 col-lg-6 mb-5 mb-lg-0">
            <p className="about-text fade-in fade-in-delay-2">
              I'm <strong>Calven Chow Kai Wen</strong>, you can call me <strong>Calven</strong> a fresh Software Engineering graduate passionate about
              building software that solves real problems. My journey spans web development,
              mobile apps, and computer vision — I love working across the full stack.
            </p>
            <p className="about-text fade-in fade-in-delay-2">
              During my degree, I developed an <strong>AI-powered café analytics system</strong> as my Final Year Project using computer vision techniques, 
              built a <strong>Flutter mobile application</strong> for baking recipes with Firebase, and created an <strong>employee management system</strong> 
              using C# .NET. I am always eager to learn and continuously challenge myself to improve.
            </p>
            <p className="about-text fade-in fade-in-delay-3">
              Outside of code, I enjoy photography, listening to music, and spending time cooking and baking. 
              I also like staying up-to-date with the latest trends in <strong>AI and machine learning</strong>.
            </p>
          </div>

          {/* Skills column */}
          <div className="col-12 col-lg-6">
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}
                className="fade-in fade-in-delay-2">
              Technologies &amp; Tools
            </h4>
            <div className="skills-grid fade-in fade-in-delay-3">
              {SKILLS.map(skill => (
                <span key={skill} className="skill-chip">{skill}</span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="col-12 mt-5">
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}
                className="fade-in">
              Education
            </h4>
            <div className="row g-3">

              {/* Degree card */}
              <div className="col-12 col-md-6 fade-in fade-in-delay-1">
                <div className="edu-card">
                  <div className="d-flex align-items-start gap-3">
                    <div style={{ color: 'var(--accent)', fontSize: '1.5rem', marginTop: '2px' }}>
                      <i className="bi bi-mortarboard-fill"></i>
                    </div>
                    <div>
                      <p className="edu-degree">B.Sc. Information Technology(Software Engineering)</p>
                      <p className="edu-school">SEGi University Kota Damansara</p>
                      <p className="edu-year">2024 — 2025 · GPA 3.79</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 fade-in fade-in-delay-1">
                <div className="edu-card">
                  <div className="d-flex align-items-start gap-3">
                    <div style={{ color: 'var(--accent)', fontSize: '1.5rem', marginTop: '2px' }}>
                      <i className="bi bi-mortarboard-fill"></i>
                    </div>
                    <div>
                      <p className="edu-degree">Diploma in Information Technology</p>
                      <p className="edu-school">SEGi College Kota Damansara</p>
                      <p className="edu-year">2021 — 2023 · GPA 3.63</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certification card */}
              <div className="col-12 col-md-6 fade-in fade-in-delay-2">
                <div className="edu-card">
                  <div className="d-flex align-items-start gap-3">
                    <div style={{ color: 'var(--accent)', fontSize: '1.5rem', marginTop: '2px' }}>
                      <i className="bi bi-patch-check-fill"></i>
                    </div>
                    <div>
                      <p className="edu-degree">Google Cloud Computing Foundations: Data, ML, and AI in Google Cloud</p>
                      <p className="edu-school">Google Cloud Skills Boost</p>
                      <p className="edu-year">2024</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 fade-in fade-in-delay-2">
                <div className="edu-card">
                  <div className="d-flex align-items-start gap-3">
                    <div style={{ color: 'var(--accent)', fontSize: '1.5rem', marginTop: '2px' }}>
                      <i className="bi bi-patch-check-fill"></i>
                    </div>
                    <div>
                      <p className="edu-degree">Foundations of Cybersecurity</p>
                      <p className="edu-school">Coursera</p>
                      <p className="edu-year">2023</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
