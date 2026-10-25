import { useEffect, useMemo, useState } from 'react';
import projectData from './projectCatalog';
import { ProjectPreview } from './ProjectPreview';

interface Project {
  id: string;
  name: string;
  folder: string;
  tags: string[];
  category: string;
  description: string;
  featured: boolean;
  url?: string;
  screenshot?: string;
}
const projects: Project[] = projectData;

export function Projects({ selection }: { selection: { id: string; revision: number } }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [scope, setScope] = useState('Selected');
  useEffect(() => {
    if (!selection.revision) return;
    setQuery('');
    setCategory('All');
    setScope(selection.id && !projects.find(project => project.id === selection.id)?.featured ? 'All projects' : selection.id ? 'Selected' : 'All projects');
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(selection.id ? `project-${selection.id}` : 'work');
      target?.scrollIntoView({ block: 'start' });
      if (selection.id) target?.focus({ preventScroll: true });
    });
    return () => cancelAnimationFrame(frame);
  }, [selection]);
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  const filtered = useMemo(() => projects.filter(project =>
    (scope === 'All projects' || project.featured) &&
    (category === 'All' || project.category === category) &&
    `${project.name} ${project.folder} ${project.tags.join(' ')}`.toLowerCase().includes(query.toLowerCase())
  ), [query, category, scope]);
  return <section id="work" className="work wrap">
    <div className="section-heading"><div><span className="eyebrow">01 / SELECTED WORK</span><h2>My strongest <em>work.</em></h2></div><p>Six projects spanning useful mobile experiences, team workflows, and PHP development.</p></div>
    <div className="collection-switch" aria-label="Project collection">{['Selected', 'All projects'].map(item => <button key={item} aria-pressed={scope === item} onClick={() => { setScope(item); setQuery(''); setCategory('All'); }}>{item} <span>{item === 'Selected' ? projects.filter(project => project.featured).length : projects.length}</span></button>)}</div>
    <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-wrap gap-2" aria-label="Filter projects">{categories.map(item => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)} className={`filter-button ${category === item ? 'selected' : ''}`}>{item}</button>)}</div>
      <label className="flex items-center gap-3 text-sm">Search projects<input className="rounded-full border border-stone-300 bg-transparent px-4 py-3 outline-offset-4" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Name or technology" /></label>
    </div>
    <p className="mb-5 text-xs text-stone-500" role="status">Showing {filtered.length} of {projects.length} projects</p>
    {(query || category !== 'All') && <button className="clear-filters" onClick={() => { setQuery(''); setCategory('All'); }}>Clear filters ×</button>}
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{filtered.map((project, index) => <article id={`project-${project.id}`} tabIndex={-1} key={project.id} className={`catalog-card flex flex-col overflow-hidden rounded-2xl border border-stone-300 ${selection.id === project.id ? 'selected-project' : ''}`}>
      <div className={`catalog-art ${project.featured ? 'featured-art' : ''}`}><span className="eyebrow">{project.featured ? 'FEATURED PROJECT' : project.category.toUpperCase() + ' PROJECT'}</span><ProjectPreview project={project} /><span className="catalog-number">{String(index + 1).padStart(2, '0')}</span></div>
      <div className="flex flex-1 flex-col p-6"><p className="mb-2 text-xs text-stone-500">{project.folder}</p><h3 className="text-xl font-semibold tracking-tight">{project.name}</h3><p className="mt-3 text-sm leading-7 text-stone-600">{project.description}</p><div className="mb-6 mt-4 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-full border border-stone-300 px-3 py-1 text-xs">{tag}</span>)}</div>{project.url ? <a className="mt-auto text-sm font-semibold underline underline-offset-4" href={project.url} target="_blank" rel="noreferrer">View repository ↗</a> : <p className="mt-auto text-xs text-stone-500">Local project · public link not added</p>}</div>
    </article>)}</div>
    {filtered.length === 0 && <p className="py-12 text-center text-stone-600">No projects match. Try another name or technology.</p>}
  </section>;
}

