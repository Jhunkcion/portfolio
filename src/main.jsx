import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const projects = [
  { title: 'SiAMang', type: 'Full Stack', stack: 'Laravel · MySQL · Bootstrap', description: 'Digital internship administration platform with registration, document upload, OTP verification, approval workflow, reporting, and multi-campus support.', url: 'https://github.com/Jhunkcion/SiAMang' },
  { title: 'CitraComm', type: 'Web App', stack: 'Next.js · Dashboard', description: 'Printing-service storefront and admin dashboard with catalog/gallery showcase and role-based login flow.', url: 'https://github.com/Jhunkcion/citracomm' },
  { title: 'Imigrasi Sumut', type: 'Web System', stack: 'Laravel 11 · PHP', description: 'Web application project built around a Laravel 11 backend and structured application services.', url: 'https://github.com/Jhunkcion/imigrasisumut' },
  { title: 'API Documentation', type: 'Documentation', stack: 'HTML · CSS · JavaScript', description: 'Interactive API documentation interface with endpoint sections, HTTP methods, parameters, and expandable details.', url: 'https://github.com/Jhunkcion/BBPSDMP-Komdigi-s-API-Docs' },
  { title: 'Projects Catalog', type: 'Frontend', stack: 'HTML · CSS · JavaScript', description: 'Character catalog website created for an event, focused on visual presentation and lightweight frontend interaction.', url: 'https://github.com/Jhunkcion/projects' },
  { title: 'Portfolio Website', type: 'Frontend', stack: 'HTML · CSS · JavaScript · AOS', description: 'Commission and portfolio website originally developed without a framework, using custom frontend work and animation libraries.', url: 'https://github.com/Jhunkcion/NekomaruKiyo.github.io' },
];

const skills = ['React', 'JavaScript', 'TypeScript', 'HTML / CSS', 'Node.js', 'Laravel', 'PHP', 'MySQL', 'REST API', 'Git / GitHub', 'Bootstrap', 'Next.js'];

function App() {
  return <>
    <header className="nav">
      <a className="brand" href="#home">J<span>.</span></a>
      <nav><a href="#work">Work</a><a href="#about">About</a><a href="#skills">Skills</a><a href="#contact">Contact</a></nav>
    </header>

    <main>
      <section id="home" className="hero">
        <div className="eyebrow">FULL STACK DEVELOPER · MEDAN</div>
        <h1>Building digital products<br /><em>that solve real problems.</em></h1>
        <p className="hero-copy">I’m Jhunkcion, a developer focused on modern web applications, clean interfaces, and practical systems—from frontend experiences to backend workflows.</p>
        <div className="actions"><a className="button primary" href="#work">View selected work</a><a className="button" href="https://github.com/Jhunkcion" target="_blank" rel="noreferrer">GitHub ↗</a></div>
        <div className="hero-meta"><span>Based in Indonesia</span><span>Available for projects</span><span>Web · Systems · API</span></div>
      </section>

      <section id="work" className="section">
        <div className="section-head"><div><div className="eyebrow">SELECTED WORK</div><h2>Projects with purpose.</h2></div><span className="count">06 projects</span></div>
        <div className="project-grid">{projects.map((project, i) => <article className="project" key={project.title}>
          <div className="project-number">0{i + 1}</div><div className="project-type">{project.type}</div><h3>{project.title}</h3><p>{project.description}</p><div className="stack">{project.stack}</div><a href={project.url} target="_blank" rel="noreferrer">View repository <span>↗</span></a>
        </article>)}</div>
      </section>

      <section id="about" className="split section">
        <div><div className="eyebrow">ABOUT</div><h2>From interface to infrastructure.</h2></div>
        <div className="about-copy"><p>I work across the stack, turning requirements into maintainable web products. My GitHub work spans frontend interfaces, Laravel systems, API documentation, admin dashboards, and responsive websites.</p><p>I care about useful architecture, predictable behavior, and interfaces that feel intentional rather than merely functional.</p></div>
      </section>

      <section id="skills" className="section skills"><div className="eyebrow">TOOLKIT</div><h2>Technologies I work with.</h2><div className="skill-list">{skills.map(skill => <span key={skill}>{skill}</span>)}</div></section>

      <section id="contact" className="contact section"><div className="eyebrow">LET’S BUILD</div><h2>Have a problem worth solving?</h2><p>Let’s turn the idea into a working product.</p><a className="button primary" href="https://github.com/Jhunkcion" target="_blank" rel="noreferrer">Connect on GitHub ↗</a></section>
    </main>
    <footer><span>© {new Date().getFullYear()} Jhunkcion</span><span>Built with React</span></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<App />);
