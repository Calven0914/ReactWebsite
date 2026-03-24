// pages/Projects.jsx
// Projects section — renders ProjectCard for each project in the data array

import ProjectCard from '../components/ProjectCard';

// ============================================================
// PROJECT DATA — update these with your real projects
// ============================================================
const PROJECTS = [
  {
  title: 'AI-Powered Café Analytics System (FYP)',
  description:
    'A web-based system that analyzes uploaded video footage to track customer flow, identify peak hours, and measure time spent in a café. Built using OpenCV and YOLO for human detection, with automated report generation in CSV and visual formats to support business decision-making.',
  techs: ['Python', 'OpenCV', 'YOLO', 'PHP', 'XAMPP', 'MySQL'],
  githubUrl: 'https://github.com/yourusername/cafe-analytics-system',
  demoUrl: null,
},
{
  title: 'Baking Recipe Mobile App',
  description:
    'A Flutter mobile application that provides users with a collection of baking recipes categorized by country. Features include step-by-step flashcards, a random recipe spin wheel, favorites system, and Firebase integration for data storage and authentication.',
  techs: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'Firebase Auth'],
  githubUrl: 'https://github.com/yourusername/baking-recipe-app',
  demoUrl: null,
},
{
  title: 'Employee Management System',
  description:
    'A desktop application developed using C# .NET that allows users to manage employee records, including adding, editing, and deleting employee information. Includes salary calculation functionality and basic reporting features.',
  techs: ['C#', '.NET', 'Windows Forms'],
  githubUrl: 'https://github.com/yourusername/employee-management-system',
  demoUrl: null,
},
{
  title: 'Recruitment Management System',
  description:
    'A web-based system designed to streamline the recruitment process, allowing administrators to manage job postings, track applicants, and organize candidate information efficiently. Built with a focus on CRUD operations and user-friendly interface design.',
  techs: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
  githubUrl: 'https://github.com/yourusername/recruitment-system',
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
