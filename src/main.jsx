import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const projects = [
  { title: 'YOUR PROJECT 01', type: 'PROJECT TYPE', stack: 'TECH STACK · HERE', description: 'Add your project description here. Replace this placeholder with the purpose, features, and technical highlights of your project.', url: '#', tone: 'lime' },
  { title: 'YOUR PROJECT 02', type: 'PROJECT TYPE', stack: 'TECH STACK · HERE', description: 'Add your project description here. Replace this placeholder with the purpose, features, and technical highlights of your project.', url: '#', tone: 'orange' },
];

const skills = [
  { name: 'React', icon: 'https://cdn.simpleicons.org/react' },
  { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript' },
  { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript' },
  { name: 'HTML / CSS', icon: 'https://cdn.simpleicons.org/html5' },
  { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs' },
  { name: 'Flutter', icon: 'https://cdn.simpleicons.org/flutter' },
  { name: 'Laravel', icon: 'https://cdn.simpleicons.org/laravel' },
  { name: 'PHP', icon: 'https://cdn.simpleicons.org/php' },
  { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql' },
  { name: 'Git / GitHub', icon: 'https://cdn.simpleicons.org/github' },
  { name: 'Bootstrap', icon: 'https://cdn.simpleicons.org/bootstrap' },
  { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs' },
];

function App() {
  return <>
    <header className="nav">
      <a className="brand" href="#home">Jhunkcion<span>®</span></a>
      <nav><a href="#work">Work</a><a href="#about">About</a><a href="#skills">Stack</a><a href="#contact">Contact</a></nav>
      <a className="nav-cta" href="https://github.com/Jhunkcion" target="_blank" rel="noreferrer">GitHub ↗</a>
    </header>

    <main>
      <section id="home" className="hero">
        <div className="hero-top"><span>FULL STACK DEVELOPER · MOBILE DEVELOPER</span><span>BASED IN INDONESIA</span></div>
        <div className="hero-main">
          <div className="hero-title-wrap"><div className="status-dot" /><h1>Building digital<br /><span>experiences</span> that matter.</h1></div>
          <div className="hero-photo" aria-label="Profile photo placeholder">
            <div className="photo-placeholder">
              <span className="photo-icon">+</span>
              <span>YOUR PHOTO</span>
              <small>Replace /public/profile.jpg</small>
            </div>
          </div>
        </div>
        <div className="hero-bottom"><p>I’m Aditya Ahmad Pribadi a.k.a. Jhunkcion — a full stack and mobile developer who turns ideas, requirements, and messy problems into useful digital products.</p><a className="circle-link" href="#work" aria-label="Scroll to work">↓</a></div>
      </section>

      <section id="about" className="intro section"><div className="section-label">01 — ABOUT</div><div className="intro-content"><h2>Developer by craft.<br /><span>Problem solver by nature.</span></h2><div><p>I’m a fresh graduate with a Bachelor’s degree in Informatics Engineering from <a href="https://unprimdn.ac.id/" target="_blank" rel="noreferrer">UNPRI | Universitas Prima Indonesia</a>. I work across frontend, backend, and mobile development, with a focus on clean interfaces, reliable systems, and practical engineering.</p><a className="text-link" href="https://unprimdn.ac.id/" target="_blank" rel="noreferrer">UNPRI | Universitas Prima Indonesia <span>↗</span></a></div></div></section>

      <section id="work" className="section work"><div className="section-head"><div className="section-label">02 — SELECTED WORK</div><a className="text-link" href="https://github.com/Jhunkcion?tab=repositories" target="_blank" rel="noreferrer">GitHub repositories ↗</a></div><h2 className="display-title">Things I’ve <span>built.</span></h2><div className="project-grid">{projects.map((project, i) => <article className={`project ${project.tone}`} key={project.title}><div className="project-visual"><span className="visual-mark">{String(i + 1).padStart(2, '0')}</span><span className="visual-arrow">↗</span></div><div className="project-info"><div><span className="project-type">{project.type}</span><h3>{project.title}</h3></div><p>{project.description}</p><div className="project-footer"><span>{project.stack}</span><a href={project.url} target="_blank" rel="noreferrer">View project ↗</a></div></div></article>)}</div></section>

      <section id="skills" className="section stack-section"><div className="section-label">03 — TOOLKIT</div><div className="stack-layout"><h2>My current<br /><span>stack.</span></h2><div className="skill-list">{skills.map((skill, i) => <span key={skill.name}><small>{String(i + 1).padStart(2, '0')}</small><img src={skill.icon} alt="" aria-hidden="true" />{skill.name}</span>)}</div></div></section>

      <section id="contact" className="contact section"><div className="section-label">04 — CONTACT</div><div className="contact-inner"><p>Have an idea, product, or problem to solve?</p><h2>Let’s make<br /><span>something useful.</span></h2><div className="social-buttons"><a className="contact-button" href="https://www.linkedin.com/in/adityaperibadi/" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.03 2.03 0 1 0 5.25 7.06 2.03 2.03 0 0 0 5.25 3ZM20.44 13.42c0-3.47-1.85-5.08-4.32-5.08-1.99 0-2.88 1.1-3.38 1.87V8.5H9.36V20h3.38v-6.4c0-1.69.32-3.33 2.42-3.33 2.07 0 2.1 1.94 2.1 3.44V20h3.18v-6.58Z" /></svg><span>LinkedIn</span><b>↗</b></a><a className="contact-button" href="https://www.instagram.com/jhunkcion/" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 2h9.6A5.2 5.2 0 0 1 22 7.2v9.6a5.2 5.2 0 0 1-5.2 5.2H7.2A5.2 5.2 0 0 1 2 16.8V7.2A5.2 5.2 0 0 1 7.2 2Zm-.1 2A3.1 3.1 0 0 0 4 7.1v9.8A3.1 3.1 0 0 0 7.1 20h9.8a3.1 3.1 0 0 0 3.1-3.1V7.1A3.1 3.1 0 0 0 16.9 4H7.1Zm9.95 1.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" /></svg><span>Instagram</span><b>↗</b></a></div></div></section>
    </main>
    <footer><span>© {new Date().getFullYear()} Jhunkcion</span><span>React · Built with intention</span><a href="#home">Back to top ↑</a></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<App />);
