import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const projects = [
  { title: 'SiAMang', type: 'FULL STACK', stack: 'Laravel · MySQL · Bootstrap', description: 'Digital internship administration platform with registration, document upload, OTP verification, approval workflow, reporting, and multi-campus support.', url: 'https://github.com/Jhunkcion/SiAMang', tone: 'lime' },
  { title: 'Imigrasi Sumut', type: 'WEB SYSTEM', stack: 'Laravel 11 · PHP', description: 'Web application project built around a Laravel 11 backend and structured application services.', url: 'https://github.com/Jhunkcion/imigrasisumut', tone: 'orange' },
];

const skills = ['React', 'JavaScript', 'TypeScript', 'HTML / CSS', 'Node.js', 'Laravel', 'PHP', 'MySQL', 'REST API', 'Git / GitHub', 'Bootstrap', 'Next.js'];

function App() {
  return <>
    <header className="nav">
      <a className="brand" href="#home">Jhunkcion<span>®</span></a>
      <nav><a href="#work">Work</a><a href="#about">About</a><a href="#skills">Stack</a><a href="#contact">Contact</a></nav>
      <a className="nav-cta" href="https://github.com/Jhunkcion" target="_blank" rel="noreferrer">GitHub ↗</a>
    </header>

    <main>
      <section id="home" className="hero">
        <div className="hero-top"><span>FULL STACK DEVELOPER</span><span>BASED IN INDONESIA</span></div>
        <div className="hero-title-wrap"><div className="status-dot" /><h1>Building digital<br /><span>experiences</span> that matter.</h1></div>
        <div className="hero-bottom"><p>I’m Jhunkcion — a full stack developer who turns ideas, requirements, and messy problems into useful web products.</p><a className="circle-link" href="#work" aria-label="Scroll to work">↓</a></div>
      </section>

      <section className="intro section"><div className="section-label">01 — ABOUT</div><div className="intro-content"><h2>Developer by craft.<br /><span>Problem solver by nature.</span></h2><div><p>I work across frontend and backend, with a focus on clean interfaces, reliable systems, and practical engineering.</p><a className="text-link" href="#contact">More about me <span>↗</span></a></div></div></section>

      <section id="work" className="section work"><div className="section-head"><div className="section-label">02 — SELECTED WORK</div><a className="text-link" href="https://github.com/Jhunkcion?tab=repositories" target="_blank" rel="noreferrer">GitHub repositories ↗</a></div><h2 className="display-title">Things I’ve <span>built.</span></h2><div className="project-grid">{projects.map((project, i) => <article className={`project ${project.tone}`} key={project.title}><div className="project-visual"><span className="visual-mark">{String(i + 1).padStart(2, '0')}</span><span className="visual-arrow">↗</span></div><div className="project-info"><div><span className="project-type">{project.type}</span><h3>{project.title}</h3></div><p>{project.description}</p><div className="project-footer"><span>{project.stack}</span><a href={project.url} target="_blank" rel="noreferrer">View project ↗</a></div></div></article>)}</div></section>

      <section id="about" className="section manifesto"><div className="section-label">03 — APPROACH</div><h2>Good software should feel <span>simple.</span><br />Good design should feel <span>inevitable.</span></h2><p>I care about the details people notice and the ones they don’t: hierarchy, performance, responsive behavior, maintainability, and the small interactions that make a product feel considered.</p></section>

      <section id="skills" className="section stack-section"><div className="section-label">04 — TOOLKIT</div><div className="stack-layout"><h2>My current<br /><span>stack.</span></h2><div className="skill-list">{skills.map((skill, i) => <span key={skill}><small>{String(i + 1).padStart(2, '0')}</small>{skill}</span>)}</div></div></section>

      <section id="contact" className="contact section"><div className="section-label">05 — CONTACT</div><div className="contact-inner"><p>Have an idea, product, or problem to solve?</p><h2>Let’s make<br /><span>something useful.</span></h2><a className="contact-button" href="https://github.com/Jhunkcion" target="_blank" rel="noreferrer">Start a conversation <b>↗</b></a></div></section>
    </main>
    <footer><span>© {new Date().getFullYear()} Jhunkcion</span><span>React · Built with intention</span><a href="#home">Back to top ↑</a></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<App />);
