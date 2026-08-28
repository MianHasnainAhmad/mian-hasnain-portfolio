import { useEffect, useState } from 'react';
import Header from './components/Header';
import SectionTitle from './components/SectionTitle';
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';
import { links, projects, skills } from './data';

export default function App() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark');
  useEffect(() => { document.documentElement.dataset.theme = isDark ? 'dark' : 'light'; localStorage.setItem('theme', isDark ? 'dark' : 'light'); }, [isDark]);
  return <>
    <Header isDark={isDark} onThemeChange={() => setIsDark(!isDark)} />
    <main>
      <section className="hero container" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Frontend developer · Educator</p>
          <h1>Hi, I’m <span>Mian Hasnain Ahmad.</span></h1>
          <p className="lead">I build clear, responsive websites and enjoy turning practical ideas into useful digital experiences.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">View projects <span>→</span></a><a className="button button-plain" href="#contact">Contact me</a></div>
          <div className="social-row"><a href={links.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
        </div>
        <div className="portrait-wrap"><div className="portrait-accent"></div><img src="/profile.jpeg" alt="Mian Hasnain Ahmad" className="portrait" /></div>
      </section>
      <section className="section muted" id="about"><div className="container about-grid"><SectionTitle eyebrow="About me" title="Learning by building.">I’m a web developer focused on dependable, straightforward interfaces.</SectionTitle><div className="about-copy"><p>I’m developing my skills in modern frontend development through hands-on projects and continuous practice. I value simple design, careful details, and websites that work well for real people.</p><p>Alongside my development journey, I created Mian Tuition Classes to bring a learning-focused service online. My goal is to keep growing as a developer while creating useful work for students, clients, and communities.</p><a href="#contact" className="text-link">Let’s work together <span>→</span></a></div></div></section>
      <section className="section" id="skills"><div className="container"><SectionTitle eyebrow="What I use" title="Skills built through practice.">A practical toolkit for designing and shipping responsive web projects.</SectionTitle><div className="skill-grid">{skills.map(([name, detail], index) => <article className="skill-card" key={name}><span>0{index + 1}</span><h3>{name}</h3><p>{detail}</p></article>)}</div></div></section>
      <section className="section muted" id="projects"><div className="container"><SectionTitle eyebrow="Selected work" title="Projects I’m proud to share.">A selection of work from my web-development journey.</SectionTitle><div className="project-grid">{projects.map((project) => <ProjectCard key={project.title} project={project} />)}</div><a className="button button-plain all-projects" href={links.github} target="_blank" rel="noreferrer">Explore GitHub <span>→</span></a></div></section>
      <section className="section" id="experience"><div className="container"><SectionTitle eyebrow="Path so far" title="Education & experience." /></div><div className="container timeline"><article><p className="timeline-date">Present</p><div><h3>Web Development Learner</h3><p>Building practical projects with HTML, CSS, JavaScript, React, and GitHub while strengthening frontend fundamentals.</p></div></article><article><p className="timeline-date">Current project</p><div><h3>Mian Tuition Classes</h3><p>Created and maintain a public online presence for a tuition academy, combining education with real-world web development practice.</p><a href={links.academy} target="_blank" rel="noreferrer" className="text-link">Visit academy website <span>↗</span></a></div></article></div></section>
      <section className="section contact-section" id="contact"><div className="container contact-grid"><div><SectionTitle eyebrow="Get in touch" title="Let’s start a conversation.">Have an opportunity, a project, or simply want to connect? I’d be happy to hear from you.</SectionTitle><div className="contact-details"><a href={`mailto:${links.email}`}><span>Email</span>{links.email}</a><a href={`tel:${links.phone}`}><span>Phone</span>{links.phone}</a><a href={links.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span>Connect with me ↗</a></div></div><ContactForm /></div></section>
    </main>
    <footer><div className="container"><a className="brand" href="#home">MHA<span>.</span></a><p>© {new Date().getFullYear()} Mian Hasnain Ahmad. Built with React.</p><a href="#home">Back to top ↑</a></div></footer>
  </>;
}
