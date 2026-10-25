import projects from './projectCatalog';
import { ProjectPreview } from './ProjectPreview';
import { useState } from 'react';
import { assetUrl } from './assetUrl';

export function Landing({ onSelect }: { onSelect: (id: string) => void }) {
  const [offset, setOffset] = useState(0);
  const ordered = projects.filter(project => project.featured);
  const featured = Array.from({ length: 4 }, (_, index) => ordered[(offset + index) % ordered.length]);
  return <section id="home" className="editorial-home wrap">
    <div className="editorial-top"><p>WELCOME<br />TO MY WORLD</p><span aria-hidden="true">✳</span><p>DESIGN. DEVELOP.<br />MAKE IT WORK.</p></div>
    <div className="portfolio-title"><span className="registration-mark mark-top-left" aria-hidden="true">+</span><span className="registration-mark mark-top-right" aria-hidden="true">+</span><span className="red-block" aria-hidden="true" /><h1 aria-label="Portfolio"><span className="title-half title-half-left" aria-hidden="true"><span className="title-solid">PORT</span><span className="title-outline">PORT</span></span><span className="title-half title-half-right" aria-hidden="true"><span className="title-solid">FOLIO</span><span className="title-outline">FOLIO</span></span></h1><span className="registration-mark mark-bottom-left" aria-hidden="true">+</span><span className="registration-mark mark-bottom-right" aria-hidden="true">+</span></div>
    <div className="editorial-byline"><p>CARL ANDREY GITGANO</p><span>REACT / JAVASCRIPT / CSS / HTML / PHP</span><p>APP & WEB DEVELOPER</p></div>
    <div className="fan-heading"><span>SELECT A CARD TO EXPLORE</span><span aria-hidden="true">↓</span><span>HOVER TO TAKE A CLOSER LOOK</span></div>
    <div className="fan-controls"><button type="button" aria-label="Previous projects" onClick={() => setOffset(previous => previous === 0 ? Math.floor((ordered.length - 1) / 4) * 4 : previous - 4)}>←</button><p role="status">PROJECT SET {Math.floor(offset / 4) + 1} <span>/ {Math.ceil(ordered.length / 4)}</span></p><button type="button" aria-label="Next projects" onClick={() => setOffset(previous => previous + 4 >= ordered.length ? 0 : previous + 4)}>→</button></div>
    <div className="card-fan" aria-label="Explore projects and profile">
      {featured.slice(0, 2).map((project, index) => <a key={project.id} className={`fan-card fan-position-${index} fan-project fan-color-${index}`} href={`#project-${project.id}`} onClick={() => onSelect(project.id)}><span className="fan-card-kicker">PROJECT / 0{index + 1}</span><ProjectPreview project={project} /><span className="fan-card-bottom"><strong>{project.name}</strong><span aria-hidden="true">↗</span></span><span className="fan-category">{project.category} · {project.tags.slice(0, 2).join(' / ')}</span></a>)}
      <a className="fan-card fan-profile fan-position-2" href="#about" aria-label="View Carl Andrey Gitgano’s profile"><img src={assetUrl('/images/carl-andrey-gitgano.jpg')} alt="Carl Andrey Gitgano" width="1536" height="2048" /><span className="profile-overlay"><small>THE PERSON BEHIND THE CODE</small><strong>Carl Andrey<br />Gitgano <span aria-hidden="true">↗</span></strong></span></a>
      {featured.slice(2, 4).map((project, index) => <a key={project.id} className={`fan-card fan-position-${index + 3} fan-project fan-color-${index + 2}`} href={`#project-${project.id}`} onClick={() => onSelect(project.id)}><span className="fan-card-kicker">PROJECT / 0{index + 3}</span><ProjectPreview project={project} /><span className="fan-card-bottom"><strong>{project.name}</strong><span aria-hidden="true">↗</span></span><span className="fan-category">{project.category} · {project.tags.slice(0, 2).join(' / ')}</span></a>)}
    </div>
    <a className="profile-seal" href="#about" aria-label="Meet Carl Andrey Gitgano"><span aria-hidden="true">↗</span><strong>ME</strong><small>THE PERSON BEHIND THE CODE</small></a>
    <div className="editorial-bottom"><p>Ideas, brought to life through code.</p><a href="#work" onClick={() => onSelect('')}>EXPLORE ALL {projects.length} PROJECTS <span aria-hidden="true">↗</span></a><a href="#about">ME <span aria-hidden="true">↗</span></a></div>
  </section>;
}




