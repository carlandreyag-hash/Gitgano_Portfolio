import { useState } from 'react';
import { Projects } from './Projects';
import { Navigation } from './Navigation';
import { Landing } from './Landing';
export default function App() { const [selection, setSelection] = useState({ id: '', revision: 0 }); return <>
  <a className="skip-link" href="#main">Skip to content</a>
  <Navigation onSelect={id => setSelection(previous => ({ id, revision: previous.revision + 1 }))} />
  <main id="main" tabIndex={-1}>
    <Landing onSelect={id => setSelection(previous => ({ id, revision: previous.revision + 1 }))} />
    <Projects selection={selection} />
    <section id="about" className="about"><div className="wrap about-grid"><div><span className="eyebrow">02 / BEHIND THE SCREEN</span><h2>Always learning.<br />Always <em>building.</em></h2><div className="abstract" aria-hidden="true"><span>g.</span><i>✳</i></div></div><div className="about-copy"><p className="large-copy">Good things start with curiosity.</p><p>I’m Carl Andrey Gitgano, an app and web developer with expertise in React, JavaScript, CSS, HTML, and PHP.</p><p>I enjoy turning ideas into useful applications, bringing together thoughtful design and practical development. This portfolio brings my projects and explorations into one place.</p><div className="skills"><span className="eyebrow">MY EXPERTISE</span><div><span>React</span><span>JavaScript</span><span>CSS</span><span>HTML</span><span>PHP</span></div></div></div></div></section>
    <section id="contact" className="contact wrap"><span className="eyebrow">03 / LET’S TALK</span><h2>Have an idea?<br />Let’s make it <em>happen.</em> <span aria-hidden="true">↗</span></h2><div className="contact-bottom"><p>Reach out about a project, a collaboration, or just to say hello.</p><a className="contact-email-action" href="mailto:carlandrey.ae@gmail.com">Send me an email <span aria-hidden="true">↗</span></a></div><div className="contact-links"><a className="contact-link-card" href="tel:+639319204652"><span className="contact-channel">PHONE <span aria-hidden="true">↗</span></span><strong>+63 931 920 4652</strong><small>Tap to call</small></a><a className="contact-link-card" href="mailto:carlandrey.ae@gmail.com"><span className="contact-channel">EMAIL / GMAIL <span aria-hidden="true">↗</span></span><strong>carlandrey.ae@gmail.com</strong><small>Let’s start a conversation</small></a><div className="contact-link-card"><span className="contact-channel">FACEBOOK</span><strong>Carl Andrey Gitgano</strong><small>Profile link coming soon</small></div></div></section>
  </main>
  <footer className="wrap"><a className="wordmark" href="#home">gitgano<span>®</span></a><p>© <span>{new Date().getFullYear()}</span> Carl Andrey Gitgano. Made with curiosity.</p><a href="#home">Back to top ↑</a></footer>
</>; }


