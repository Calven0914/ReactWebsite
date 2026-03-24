// pages/Projects.jsx
// Projects section — renders ProjectCard for each project in the data array

import ProjectCard from '../components/ProjectCard';

// ============================================================
// PROJECT DATA — update these with your real projects
// ============================================================
const PROJECTS = [
  {
    title: 'Smart Attendance System',
    description:
      'A facial recognition-based attendance system built for university classrooms. Uses OpenCV and DeepFace for real-time face detection and matching, with a Laravel backend and MySQL database. Reduces manual marking time by ~80%.',
    techs: ['Python', 'OpenCV', 'DeepFace', 'Laravel', 'MySQL', 'Bootstrap'],
    githubUrl: 'https://github.com/alexreyes/smart-attendance',
    demoUrl: null,
  },
  {
    title: 'Campus Food Ordering App',
    description:
      'A Flutter mobile application that lets students browse menus, place orders, and track delivery status in real-time. Integrated Firebase Firestore for live updates and Firebase Auth for user accounts. Supports both iOS and Android.',
    techs: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'Firebase Auth'],
    githubUrl: 'https://github.com/alexreyes/campus-food-app',
    demoUrl: 'https://alexreyes-food-demo.web.app',
  },
  {
    title: 'DevLink — Developer Portfolio Generator',
    description:
      'A React web app that lets developers input their profile data and auto-generates a shareable portfolio page. Supports custom themes, project cards, and social links. Deployed on Vercel with zero-config CI/CD.',
    techs: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Vercel'],
    githubUrl: 'https://github.com/alexreyes/devlink',
    demoUrl: 'https://devlink-demo.vercel.app',
  },
  {
    title: 'Expense Tracker API',
    description:
      'A RESTful API for personal finance management built with PHP and Laravel. Features JWT authentication, category-based expense tracking, monthly report generation, and CSV export. Fully documented with Postman.',
    techs: ['PHP', 'Laravel', 'MySQL', 'JWT', 'REST API', 'Postman'],
    githubUrl: 'https://github.com/alexreyes/expense-tracker-api',
    demoUrl: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container" style={{ maxWidth: '1200px' }}>

        {/* Section heading */}
        <div className="row mb-5">
          <div className="col-12">
            <span className="section-tag fade-in">02 — Projects</span>
            <h2 className="section-title fade-in fade-in-delay-1">Things I've built</h2>
            <div className="section-divider fade-in fade-in-delay-1"></div>
            <p className="section-subtitle fade-in fade-in-delay-2">
              A selection of projects I've worked on — from computer vision systems to
              mobile apps and web APIs. Each one taught me something new.
            </p>
          </div>
        </div>

        {/* Project cards grid */}
        <div className="row g-4">
          {PROJECTS.map((project, index) => (
            <div key={project.title} className="col-12 col-md-6">
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="row mt-5">
          <div className="col-12 text-center fade-in">
            <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
              Want to see more?
            </p>
            <a
              href="https://github.com/alexreyes"
              target="_blank"
              rel="noreferrer"
              className="btn-outline-custom"
            >
              <i className="bi bi-github"></i>
              View All on GitHub
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
