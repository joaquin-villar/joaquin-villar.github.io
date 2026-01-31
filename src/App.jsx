import React, { useState, useEffect, useMemo } from 'react';
import { translations } from './content';
import './App.css';

// --- Helper Components ---

const SectionHeader = ({ title }) => (
  <h2 className="animate section-title">{title}</h2>
);

const ExperienceCard = ({ roles }) => (
  <div className="role-block animate">
    {roles.map((role, index) => (
      <React.Fragment key={index}>
        {/* If it is not the first role, add a divider */}
        {index > 0 && <hr className="role-divider" />}

        <div className="role-entry">
          <div className="role-header">
            <span className="date-badge">{role.date}</span>
            <span className="location">{role.location}</span>
          </div>
          <h3>{role.title}</h3>
          <ul>
            {role.items?.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      </React.Fragment>
    ))}
  </div>
);

const ProjectCard = ({ title, tech, items, links, img }) => (
  <div className="project-card animate">
    {img && (
      <div className="card-image-wrapper">
        <img src={img} alt={title} className="card-image" />
      </div>
    )}
    <div className="card-header">
      <h3 className="highlight">{title}</h3>
      <div className="card-links">
        {links && links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            aria-label={`Link to ${title} (${link.type})`}
            title={link.type === 'huggingface' ? 'Hugging Face' : link.type === 'github' ? 'GitHub' : 'Live Demo'}
          >
            {/* Logic to choose the icon */}
            {link.type === 'github' && (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            )}
            {link.type === 'huggingface' && (
              <span style={{ fontSize: '2.2rem', lineHeight: 1 }}>🤗</span>
            )}
            {link.type === 'demo' && (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            )}
          </a>
        ))}
      </div>
    </div>
    <p className="tech-stack"><strong>{tech}</strong></p>
    <ul>
      {items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  </div>
);

// --- Main App ---

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [language, setLanguage] = useState('en');

  const t = useMemo(() => translations[language], [language]);

  useEffect(() => {
    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        const scrollPosition = window.scrollY;
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolledPct = (winScroll / height) * 100;

        setScrolled(scrollPosition > 50);
        setShowScrollTop(scrollPosition > 300);
        setScrollProgress(scrolledPct);

        const elements = document.querySelectorAll('.animate');
        elements.forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight - 100) {
            el.classList.add('visible');
          }
        });
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>

      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo" onClick={scrollToTop}>JV</div>

          <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span><span></span><span></span>
          </div>

          <div className={`nav-content ${menuOpen ? 'open' : ''}`}>
            <ul className="nav-links">
              {['home', 'about', 'experience', 'projects', 'leadership', 'contact'].map((item) => (
                <li key={item}>
                  <a onClick={() => scrollToSection(item === 'home' ? 'hero' : item)}>
                    {t.nav[item]}
                  </a>
                </li>
              ))}
            </ul>

            <div className="nav-lang-switcher">
              <button className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')}>EN</button>
              <span className="divider">|</span>
              <button className={language === 'es' ? 'active' : ''} onClick={() => setLanguage('es')}>ES</button>
              <span className="divider">|</span>
              <button className={language === 'it' ? 'active' : ''} onClick={() => setLanguage('it')}>IT</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Scroll Top Button */}
      <button
        className={`scroll-top-btn ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>

      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="hero-content">
          <div className="hero-left">
            <h1><span className="name-line">Joaquin Villar</span></h1>
            <p className="title">{t.hero.title}</p>
            <div className="tags-container">
              {['AI/ML', 'Cloud Services', 'Predictive Analytics', 'Digital Twins'].map(tag => (
                <span key={tag} className="tag-bubble">{tag}</span>
              ))}
            </div>
            <p className="intro">{t.hero.intro}</p>
            <div className="hero-cta">
              <button className="btn-primary" onClick={() => scrollToSection('contact')}>{t.nav.contact}</button>
              <button className="btn-secondary" onClick={() => scrollToSection('projects')}>{t.nav.projects}</button>
            </div>
          </div>

          <div className="hero-right">
            <div className="profile-wrapper animate">
              <div className="open-to-work-badge">
                {t.hero.openToWork}
              </div>
              <img
                src={'/profile.png'}
                alt="Joaquin Villar"
                className="profile-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container">
          <SectionHeader title={t.about.title} />
          <div className="about-text-wrapper animate">
            <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.8rem', lineHeight: '1.8' }}>{t.about.text}</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section alt-bg" id="experience">
        <div className="container">
          <SectionHeader title={t.experience.title} />
          <div className="timeline">
            {Object.keys(t.experience).filter(key => key !== 'title').map((companyKey) => (
              <div className="timeline-item animate" key={companyKey}>
                <div className="timeline-content">
                  {/* Updated to pass the full array of roles */}
                  <ExperienceCard roles={t.experience[companyKey].roles} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section - Moved Here */}
      <section className="section alt-bg" style={{ paddingTop: 0 }} id="education">
        <div className="container">
          <SectionHeader title={t.education.title} />
          <div className="education-card animate">
            <div className="edu-header">
              <h3>{t.education.degree}</h3>
              <span className="date-badge">{t.education.period}</span>
            </div>
            <p className="university">{t.education.university}</p>
            <p className="grade">{t.education.grade}</p>
            <hr style={{ margin: '2rem 0', opacity: 0.2 }} />
            <p className="coursework">
              <strong>{t.education.coursework}</strong> {t.education.courses}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section" id="projects">
        <div className="container">
          <SectionHeader title={t.projects.title} />
          <div className="projects-grid">
            <ProjectCard
              title={t.projects.greenhouse.title}
              tech={t.projects.greenhouse.tech}
              items={t.projects.greenhouse.items}
              links={t.projects.greenhouse.links}
              img={t.projects.greenhouse.img}
            />

            <ProjectCard
              title={t.projects.portfolio.title}
              tech={t.projects.portfolio.tech}
              items={t.projects.portfolio.items}
              links={t.projects.portfolio.links}
              img={t.projects.portfolio.img}
            />

            <ProjectCard
              title={t.projects.newsClassifier.title}
              tech={t.projects.newsClassifier.tech}
              items={t.projects.newsClassifier.items}
              links={t.projects.newsClassifier.links}
              img={t.projects.newsClassifier.img}
            />

            <ProjectCard
              title={t.projects.dssSociety.title}
              tech={t.projects.dssSociety.tech}
              items={t.projects.dssSociety.items}
              links={t.projects.dssSociety.links}
              img={t.projects.dssSociety.img}
            />

            <ProjectCard
              title={t.projects.limaMapping.title}
              tech={t.projects.limaMapping.tech}
              items={t.projects.limaMapping.items}
              links={t.projects.limaMapping.links}
              img={t.projects.limaMapping.img}
            />

            <ProjectCard
              title={t.projects.windEnergy.title}
              tech={t.projects.windEnergy.tech}
              items={t.projects.windEnergy.items}
              links={t.projects.windEnergy.links}
              img={t.projects.windEnergy.img}
            />
          </div>
        </div>
      </section>

      {/* GiveBack Section */}
      <section className="section" id="giveback">
        <div className="container">
          <SectionHeader title={t.giveback.title} />
          <div className="projects-grid">
            {[t.giveback.dss, t.giveback.genAI, t.giveback.siemens].map((group, idx) => (
              <div key={idx} style={{ display: 'contents' }}>
                {group?.roles ? group.roles.map((role, rIdx) => (
                  <ProjectCard
                    key={`${idx}-${rIdx}`}
                    title={role.title}
                    tech={role.location}
                    items={role.items}
                    links={[]}
                    img={role.img}
                  />
                )) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section alt-bg" id="skills">
        <div className="container">
          <SectionHeader title={t.skills.title} />

          <div className="skills-wrapper">
            {/* 1. Programming & Tools */}
            <div className="skill-category animate">
              <h3>{t.skills.programmingTools.title}</h3>
              <div className="tags-container" style={{ justifyContent: 'center' }}>
                {t.skills.programmingTools.items.map(s => <span key={s} className="skill-tag">{s}</span>)}
              </div>
            </div>

            {/* 2. Cloud & AI */}
            <div className="skill-category animate">
              <h3>{t.skills.cloudAI.title}</h3>
              <div className="tags-container" style={{ justifyContent: 'center' }}>
                {t.skills.cloudAI.items.map(s => <span key={s} className="skill-tag">{s}</span>)}
              </div>
            </div>

            {/* 3. Core Competencies (NEW) */}
            <div className="skill-category animate">
              <h3>{t.skills.coreCompetencies.title}</h3>
              <div className="tags-container" style={{ justifyContent: 'center' }}>
                {t.skills.coreCompetencies.items.map(s => <span key={s} className="skill-tag">{s}</span>)}
              </div>
            </div>
          </div>

          <h3 className="subheading animate">{t.skills.certifications.title}</h3>
          <div className="cert-grid">
            {t.skills.certifications.items.map((cert, i) => (
              <a key={i} href="https://www.credly.com/users/joaquin-villar" target="_blank" rel="noopener noreferrer" className="cert-item animate">
                <img src={`/badges/${cert.img}`} alt={cert.title} className="cert-badge" />
                <p>{cert.title}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" id="contact">
        <div className="container">
          <SectionHeader title={t.contact.title} />

          <div className="contact-wrapper">
            {/* Email */}
            <div className="contact-card animate">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <a href="mailto:joaquinvillar8802@gmail.com">joaquinvillar8802@gmail.com</a>
            </div>

            {/* LinkedIn */}
            <div className="contact-card animate">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <a href="https://www.linkedin.com/in/joaquin-villar-urrutia/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>

            {/* GitHub */}
            <div className="contact-card animate">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <a href="https://github.com/joaquin-villar" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>

            {/* Hugging Face */}
            <div className="contact-card animate">
              <span style={{ fontSize: '2.4rem', lineHeight: 1 }}>🤗</span>
              <a href="https://huggingface.co/jvillar02" target="_blank" rel="noopener noreferrer">Hugging Face</a>
            </div>
          </div>

          <div className="resume-download animate">
            <a
              href={'/resume.pdf'}
              download="Joaquin_Villar_Resume.pdf"
              className="btn-primary"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {t.contact.downloadText}
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Joaquin Villar. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;