import { useEffect, useState } from 'react';
import Header from './components/Header';
import SectionTitle from './components/SectionTitle';
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';
import { links, facts, skillGroups, projects, timeline, certifications } from './data';

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    try { return localStorage.getItem('theme') === 'dark'; } catch { return false; }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
    try { localStorage.setItem('theme', isDark ? 'dark' : 'light'); } catch { /* storage unavailable */ }
  }, [isDark]);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header isDark={isDark} onThemeChange={() => setIsDark(!isDark)} />
      <main id="main">
        <section className="hero container" id="home">
          <div className="hero-copy">
            <p className="availability"><span aria-hidden="true"></span>Open to internships and entry-level roles</p>
            <p className="eyebrow">Full Stack Web Developer · Software Engineering Student</p>
            <h1>Hi, I’m <span>Mian Hasnain Ahmad.</span></h1>
            <p className="lead">
              I build responsive web apps with React and JavaScript, and I’m adding backend skills to become a complete full stack developer. I also run a tuition academy, so I know how to explain things clearly and deliver on time.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">View projects <span>→</span></a>
              <a className="button button-plain" href="#contact">Contact me</a>
              <a className="button button-plain" href={links.cv} download>Download CV <span>↓</span></a>
            </div>
            <div className="social-row">
              <a href={links.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href={`mailto:${links.email}`}>Email ↗</a>
            </div>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-accent"></div>
            <img src="/profile.jpeg" alt="Portrait of Mian Hasnain Ahmad" className="portrait" width="430" height="495" />
          </div>
        </section>

        <section className="facts-strip" aria-label="At a glance">
          <div className="container facts-grid">
            {facts.map(([title, detail]) => (
              <div className="fact" key={title}><strong>{title}</strong><span>{detail}</span></div>
            ))}
          </div>
        </section>

        <section className="section muted" id="about">
          <div className="container about-grid">
            <SectionTitle eyebrow="About me" title="Learning by building.">
              A full stack developer in the making, with real projects and real users.
            </SectionTitle>
            <div className="about-copy">
              <p>
                I’m a Computer Science (Software Engineering) student at Abdul Wali Khan University, Mardan. I build responsive interfaces with HTML, CSS, JavaScript and React, and I’m now learning backend development so I can build complete applications from the database to the screen.
              </p>
              <p>
                Outside class I run Mian Tuition Academy in Nowshera Kalan, where I’ve taught for more than four years and built the academy’s website myself. Teaching keeps me patient, organised and focused on the person using what I make, and I bring the same habits to my code.
              </p>
              <a href="#contact" className="text-link">Let’s work together <span>→</span></a>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="container">
            <SectionTitle eyebrow="What I use" title="Skills and tools.">
              What I use to design, build and ship web projects.
            </SectionTitle>
            <div className="skill-groups">
              {skillGroups.map((group) => (
                <article className="skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section muted" id="projects">
          <div className="container">
            <SectionTitle eyebrow="Selected work" title="Projects I’m proud to share.">
              Each one solves a real problem, and the source code is on GitHub.
            </SectionTitle>
            <div className="project-grid">
              {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
            </div>
            <a className="button button-plain all-projects" href={links.github} target="_blank" rel="noreferrer">See all repositories on GitHub <span>→</span></a>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="container">
            <SectionTitle eyebrow="Path so far" title="Education & experience." />
          </div>
          <div className="container timeline">
            {timeline.map((item) => (
              <article key={item.title}>
                <p className="timeline-date">{item.date}</p>
                <div>
                  <p className="timeline-kind">{item.kind}</p>
                  <h3>{item.title}</h3>
                  <p className="timeline-place">{item.place}</p>
                  <p>{item.text}</p>
                  {item.link && <a href={item.link.href} target="_blank" rel="noreferrer" className="text-link">{item.link.label} <span>↗</span></a>}
                </div>
              </article>
            ))}
          </div>
          <div className="container certs">
            <h3 className="certs-title">Certifications</h3>
            <ul>
              {certifications.map(([name, issuer]) => (
                <li key={name}><strong>{name}</strong><span>{issuer}</span></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-grid">
            <div>
              <SectionTitle eyebrow="Get in touch" title="Looking for an intern or junior developer?">
                I’m open to internships and entry-level roles. Send me a message and I’ll reply as soon as I can.
              </SectionTitle>
              <div className="contact-details">
                <a href={`mailto:${links.email}`}><span>Email</span>{links.email}</a>
                <a href={links.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span>Connect with me ↗</a>
                <a href={links.github} target="_blank" rel="noreferrer"><span>GitHub</span>MianHasnainAhmad ↗</a>
                <a href={links.cv} download><span>Resume</span>Download my CV (PDF) ↓</a>
                <p className="contact-location"><span>Location</span>{links.location}</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <a className="brand" href="#home">MHA<span>.</span></a>
          <p>© {new Date().getFullYear()} Mian Hasnain Ahmad. Built with React and Vite.</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
