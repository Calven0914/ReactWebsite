// components/ProjectCard.jsx
// Reusable project card with title, description, tech tags, and links

export default function ProjectCard({ project, index }) {
  const { title, description, techs, githubUrl, demoUrl } = project;

  // Zero-padded project number label (e.g. 01, 02, 03)
  const projectNumber = String(index + 1).padStart(2, '0');

  return (
    <div className="project-card fade-in" style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
      {/* Project number */}
      <span className="project-number">Project — {projectNumber}</span>

      {/* Title */}
      <h3 className="project-title">{title}</h3>

      {/* Description */}
      <p className="project-description">{description}</p>

      {/* Technology tags */}
      <div className="tech-tags">
        {techs.map(tech => (
          <span key={tech} className="tech-tag">{tech}</span>
        ))}
      </div>

      {/* Links */}
      <div className="project-links">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            <i className="bi bi-github"></i>
            Code
          </a>
        )}
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            <i className="bi bi-box-arrow-up-right"></i>
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
