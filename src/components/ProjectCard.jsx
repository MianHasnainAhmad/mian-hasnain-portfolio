export default function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.featured ? 'featured' : ''}`}>
      <div className="project-icon">{project.featured ? '✦' : '↗'}</div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tags">{project.tech.map((item) => <span key={item}>{item}</span>)}</div>
      <div className="project-links">
        {project.live && <a href={project.live} target={project.live.startsWith('http') ? '_blank' : undefined} rel="noreferrer">View project <span>→</span></a>}
        {project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub <span>→</span></a>}
      </div>
    </article>
  );
}
