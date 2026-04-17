import { RepoIcon, DotsIcon } from './icons';

export default function ProjectCard({ project: p }) {
  const inner = (
    <>
      <div className="p-card-header">
        <div className="p-card-title">
          <RepoIcon />
          <div className="p-card-name-row">
            <span className="p-project-name">{p.name}</span>
            <span className="p-public-badge">Public</span>
          </div>
        </div>
        <DotsIcon />
      </div>
      <p className="p-project-desc">{p.desc}</p>
      <div className="p-project-footer">
        <span className="p-lang-dot" style={{ background: p.langColor }} />
        <span className="p-lang-name">{p.lang}</span>
      </div>
    </>
  );

  return p.url ? (
    <a href={p.url} target="_blank" rel="noopener noreferrer" className="p-project-card">
      {inner}
    </a>
  ) : (
    <div className="p-project-card">{inner}</div>
  );
}
