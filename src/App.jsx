import { useState, useEffect, useRef } from 'react';
import Aurora from './components/Aurora/Aurora';
import BlurText from './components/BlurText/BlurText';
import ShinyText from './components/ShinyText/ShinyText';
import CountUp from './components/CountUp/CountUp';
import ChromaGrid from './components/ChromaGrid/ChromaGrid';
import ProjectModal from './components/ProjectModal/ProjectModal';
import PreLoader from './components/PreLoader/PreLoader';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import useCursor from './hooks/useCursor';
import { listProjects, listSkills, listCerts } from './data';
import './App.css';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const { dotRef, ringRef } = useCursor();

  /* Scroll reveal */
  useEffect(() => {
    if (!loaded) return;
    const els = document.querySelectorAll('.animate-on-scroll');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [loaded]);

  return (
    <>
      {/* Custom Cursor */}
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />

      {/* Preloader */}
      <PreLoader onDone={() => setLoaded(true)} />

      {/* Background */}
      <div className="grid-bg" />
      <div className="aurora-bg">
        <Aurora colorStops={['#00ffc8', '#6c63ff', '#ff6b8a']} blend={0.45} amplitude={0.9} speed={0.5} />
      </div>

      <Navbar />

      <main>
        {/* ── HERO ── */}
        <section id="hero" className="hero-section">
          <div className="hero-tag" style={{ animationDelay: '0.3s' }}>
            <span className="hero-tag-dot" /> Available for opportunities
          </div>
          <h1 className="hero-name">
            <span className="hero-name-first">Rajan</span>
            <span className="hero-name-last"> E.</span>
          </h1>
          <div className="hero-role">
            Java Full-Stack Developer ·{' '}
            <span className="hero-role-accent">Spring Boot</span> ·{' '}
            <span className="hero-role-accent2">React JS</span> · Angular
          </div>
          <BlurText
            text="B.Tech graduate crafting scalable full-stack solutions with Spring Boot, React JS, and RESTful APIs. Based in Chennai, India."
            delay={120}
            animateBy="words"
            direction="top"
            className="hero-bio"
          />
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects
            </button>
            <button className="btn-outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Contact Me
            </button>
          </div>
          <div className="hero-floating">
            <div className="fbadge"><span className="fbadge-dot dot-green" />Spring Boot</div>
            <div className="fbadge"><span className="fbadge-dot dot-purple" />React JS</div>
            <div className="fbadge"><span className="fbadge-dot dot-pink" />PostgreSQL</div>
            <div className="fbadge"><span className="fbadge-dot dot-green" />JWT Auth</div>
          </div>
          <div className="hero-scroll">
            <div className="scroll-bar" />
            <span className="scroll-text">scroll</span>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about">
          <div className="sec-header animate-on-scroll">
            <div className="sec-label">// 01 · About</div>
            <h2 className="sec-title">Building scalable<br />solutions.</h2>
            <div className="sec-line" />
          </div>
          <div className="about-grid">
            <div className="about-text animate-on-scroll">
              <p>
                I'm a <strong>B.Tech graduate in Information Technology</strong> from Manakula Vinayagar Institute of Technology, Pondicherry (CGPA: 7.9/10), passionate about crafting full-stack web applications that solve real-world problems.
              </p>
              <p>
                My hands-on experience spans <strong>Spring Boot REST APIs</strong>, <strong>Angular & React JS frontends</strong>, JWT-based authentication, and PostgreSQL databases. I enjoy clean architecture, SOLID principles, and writing production-grade code.
              </p>
              <p>
                Currently based in <strong>Chennai, India</strong> — actively seeking entry-level Software Engineer roles.
              </p>
            </div>
            <div className="about-stats animate-on-scroll">
              {[
                { num: 7.9, suffix: '/10', label: 'CGPA' },
                { num: 3, suffix: '+', label: 'Projects Built' },
                { num: 2, suffix: '', label: 'Certifications' },
                { num: 1, suffix: '', label: 'Internship' },
              ].map((s, i) => (
                <div key={i} className="stat-card">
                  <div className="stat-num">
                    <CountUp to={s.num} from={0} duration={1.5} />
                    <span className="stat-suffix">{s.suffix}</span>
                  </div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section id="skills">
          <div className="sec-header animate-on-scroll">
            <div className="sec-label">// 02 · Skills</div>
            <h2 className="sec-title">Tech Stack.</h2>
            <div className="sec-line" />
          </div>
          <div className="skills-grid">
            {listSkills.map((cat, i) => (
              <div key={i} className="skill-cat animate-on-scroll" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="skill-cat-title">{cat.category}</div>
                <div className="skill-pills">
                  {cat.skills.map((s, j) => (
                    <span key={j} className="pill">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section id="experience">
          <div className="sec-header animate-on-scroll">
            <div className="sec-label">// 03 · Experience</div>
            <h2 className="sec-title">Where I've<br />worked.</h2>
            <div className="sec-line" />
          </div>
          <div className="exp-card animate-on-scroll">
            <div className="exp-accent" />
            <div className="exp-top">
              <div>
                <div className="exp-role">Java Full-Stack Developer Intern</div>
                <div className="exp-company">Capgemini TNSIF · Chennai, India</div>
              </div>
              <div className="exp-date">Jul 2024 - sep 2024</div>
            </div>
            <ul className="exp-points">
              <li>Developed and tested RESTful APIs using Spring Boot, reducing manual data-handling time by integrating end-to-end request flows between Angular frontend and PostgreSQL backend.</li>
              <li>Built reusable Angular components for a customer-facing dashboard, improving UI responsiveness and enabling real-time data updates across 3+ modules.</li>
              <li>Participated in code reviews and applied MVC architectural patterns, contributing to a cleaner codebase and reducing bug recurrence by following SOLID design principles.</li>
            </ul>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects">
          <div className="sec-header animate-on-scroll">
            <div className="sec-label">// 04 · Projects</div>
            <h2 className="sec-title">Things I've<br />built.</h2>
            <div className="sec-line" />
          </div>
          <div className="animate-on-scroll">
            <ChromaGrid items={listProjects} onItemClick={setSelectedProject} radius={400} />
          </div>
        </section>

        {/* ── EDUCATION & CERTS ── */}
        <section id="education">
          <div className="sec-header animate-on-scroll">
            <div className="sec-label">// 05 · Education & Certs</div>
            <h2 className="sec-title">Background.</h2>
            <div className="sec-line" />
          </div>
          <div className="edu-cert-grid">
            <div className="edu-card animate-on-scroll">
              <div className="sec-label" style={{ marginBottom: '0.8rem' }}>Education</div>
              <div className="edu-degree">B.Tech – Information Technology</div>
              <div className="edu-inst">Manakula Vinayagar Institute of Technology</div>
              <div className="edu-detail">Pondicherry · Dec 2021 – May 2025</div>
              <div className="edu-cgpa">
                <CountUp to={7.9} from={0} duration={2} />
                <span className="cgpa-suffix">/10</span>
              </div>
            </div>
            <div className="cert-list animate-on-scroll">
              <div className="sec-label" style={{ marginBottom: '0.8rem' }}>Certifications</div>
              {listCerts.map((c, i) => (
                <div key={i} className="cert-item">
                  <div className="cert-icon">✦</div>
                  <div>
                    <div className="cert-name">{c.name}</div>
                    <div className="cert-org">{c.org}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact">
          <div className="sec-header animate-on-scroll">
            <div className="sec-label">// 06 · Contact</div>
            <h2 className="sec-title">Let's connect.</h2>
            <div className="sec-line" />
          </div>
          <div className="contact-grid">
            <div className="contact-text animate-on-scroll">
              <p>I'm actively looking for entry-level Software Engineer roles. If you have an opportunity or just want to talk tech — my inbox is open.</p>
              <ShinyText text="Let's build something great together." speed={4} className="contact-shiny" />
            </div>
            <div className="contact-links animate-on-scroll">
              {[
                { icon: '@', label: 'Email', val: 'rajan.e3481@gmail.com', href: 'mailto:rajan.e3481@gmail.com' },
                { icon: '#', label: 'Phone', val: '+91 84384 71773', href: 'tel:+918438471773' },
                { icon: 'in', label: 'LinkedIn', val: 'linkedin.com/in/rajan-e', href: 'https://linkedin.com' },
                { icon: '</>', label: 'GitHub', val: 'github.com/rajan-e', href: 'https://github.com' },
              ].map((link, i) => (
                <a key={i} className="contact-link" href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  <div className="contact-link-icon">{link.icon}</div>
                  <div>
                    <div className="contact-label">{link.label}</div>
                    <div className="contact-val">{link.val}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Project Modal */}
      <ProjectModal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} project={selectedProject} />
    </>
  );
}
