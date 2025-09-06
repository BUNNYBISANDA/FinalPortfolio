export default function ProjectCard({ project }) {
  const { title, description, tech, link, repo, image } = project;
  return (
    <article className="card project-card">
      <img className="cover" src={image} alt={title} loading="lazy" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
        <div className="chip-row">
          {tech.map((t) => <span key={t} className="chip">{t}</span>)}
        </div>
        <div className="card-actions">
          {link && <a className="btn small" href={link} target="_blank">Live</a>}
          {repo && <a className="btn small" href={repo} target="_blank">Code</a>}
        </div>
      </div>
    </article>
  );
}