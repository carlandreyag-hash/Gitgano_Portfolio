import assets from './preview-assets.json';
import { assetUrl } from './assetUrl';

type PreviewProject = { id: string; name: string; category: string; tags: string[]; screenshot?: string };
const projectAssets: Record<string, { icon: string; title: string }> = assets;

export function ProjectPreview({ project }: { project: PreviewProject }) {
  const asset = projectAssets[project.id];
  const mobile = project.category === 'Mobile';
  return <div className={`device-preview ${mobile ? 'mobile-preview' : 'web-preview'}`}>
    <div className="device-frame">
      {mobile ? <div className="phone-top"><span>9:41</span><i /><span>▰</span></div> : <div className="browser-top"><span>● ● ●</span><span>{project.name.toLowerCase().replace(/\s+/g, '-')}.app</span></div>}
      {project.screenshot ? <img className="project-screenshot" src={assetUrl(project.screenshot)} alt={`${project.name} screenshot`} loading="lazy" /> : <div className="illustrated-interface">
        <div className="preview-brand">{asset ? <img src={assetUrl(asset.icon)} alt="" loading="lazy" /> : <span className="preview-symbol" aria-hidden="true">{mobile ? '◈' : '◫'}</span>}<span>{asset?.title || project.name}</span></div>
        <div className="preview-welcome"><span>{mobile ? 'MOBILE APPLICATION' : 'WEB APPLICATION'}</span><b>{project.name}</b><p>{project.tags.slice(0, 2).join(' · ') || 'PHP web project'}</p></div>
        <div className="preview-search"><span aria-hidden="true">⌕</span><i /></div>
        <div className="preview-content"><div className="preview-feature"><span aria-hidden="true">{mobile ? '◈' : '▤'}</span><i /><i /></div><div className="preview-tiles">{[0, 1, 2].map(item => <div key={item}><span /><i /><i /></div>)}</div></div>
        <div className="preview-bottom" aria-hidden="true"><span>⌂</span><span>▦</span><span>♡</span><span>○</span></div>
      </div>}
    </div>
    {!project.screenshot && <span className="preview-disclaimer">Illustrative layout{asset ? ' · original app icon' : ''}</span>}
  </div>;
}
