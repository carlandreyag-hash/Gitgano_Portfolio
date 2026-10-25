import { useEffect, useRef, useState } from 'react';
import projects from './projectCatalog';

export function Navigation({ onSelect }: { onSelect: (id: string) => void }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const container = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function outside(event: PointerEvent) {
      if (!container.current?.contains(event.target as Node)) setOpen(false);
    }
    function escape(event: KeyboardEvent) {
      if (event.key === 'Escape' && open) { setOpen(false); trigger.current?.focus(); }
    }
    document.addEventListener('pointerdown', outside);
    document.addEventListener('keydown', escape);
    return () => { document.removeEventListener('pointerdown', outside); document.removeEventListener('keydown', escape); };
  }, [open]);
  const matches = projects.filter(project => `${project.name} ${project.folder}`.toLowerCase().includes(query.toLowerCase()));
  return <header className="site-header"><div className="nav wrap">
    <a className="wordmark" href="#home" aria-label="Gitgano home">gitgano<span>®</span></a>
    <nav aria-label="Main navigation">
      <div className="project-navigation" ref={container} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setOpen(false); }}>
        <button ref={trigger} className="projects-trigger" aria-expanded={open} aria-controls="project-navigation-panel" onClick={() => setOpen(!open)}>Projects <span className="nav-count">{projects.length}</span><span aria-hidden="true" className="chevron">⌄</span></button>
        {open && <div id="project-navigation-panel" className="project-navigation-panel">
          <div className="project-panel-heading"><div><strong>Explore my projects</strong><p>Find an idea. See how it was built.</p></div><a href="#work" onClick={() => { onSelect(''); setOpen(false); }}>View all ↗</a></div>
          <label className="navigation-search">Search the collection<input autoFocus type="search" placeholder="Search by project name…" value={query} onChange={event => setQuery(event.target.value)} /></label>
          <div className="project-navigation-list">{matches.map(project => <a key={project.id} href={`#project-${project.id}`} onClick={() => { onSelect(project.id); setOpen(false); }}><span className="project-menu-icon" aria-hidden="true">{project.category === 'Web' ? '⌘' : '◫'}</span><span><strong>{project.name}</strong><small>{project.folder} · {project.category}</small></span><span className="project-menu-arrow" aria-hidden="true">↗</span></a>)}{matches.length === 0 && <p className="navigation-empty" role="status">No projects found. Try another name.</p>}</div>
          <div className="project-panel-footer">{matches.length} of {projects.length} projects <span>BUILT WITH CURIOSITY</span></div>
        </div>}
      </div>
      <a className="about-nav" href="#about">About</a><a className="nav-contact" href="#contact">Let’s talk <span>↗</span></a>
    </nav>
  </div></header>;
}
