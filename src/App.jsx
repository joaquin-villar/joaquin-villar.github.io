import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { translations, CONFIG, SKILL_META } from './content';
import './App.css';

// --- Framer Motion helpers ---
const ease = [0.16, 1, 0.3, 1];

const FadeIn = ({ children, delay = 0, className, style }) => (
  <motion.div
    initial={{ opacity: 0, y: 22 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.55, ease, delay }}
    className={className}
    style={style}
  >
    {children}
  </motion.div>
);

const staggerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const childVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

const StaggerWrap = ({ children, className, style }) => (
  <motion.div
    variants={staggerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: '-60px' }}
    className={className}
    style={style}
  >
    {children}
  </motion.div>
);

const StaggerChild = ({ children, className, style }) => (
  <motion.div variants={childVariants} className={className} style={style}>
    {children}
  </motion.div>
);

// --- Skill Icons ---

const I = (d, viewBox = '0 0 24 24') => (
  <svg width="24" height="24" viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{d}</svg>
);

const SKILL_ICONS = {
  // Devicons (tech logos)
  'Python':                         { type: 'dev', cls: 'devicon-python-plain colored' },
  'R Programming':                  { type: 'dev', cls: 'devicon-r-plain colored' },
  'SQL':                            { type: 'dev', cls: 'devicon-postgresql-plain colored' },
  'NoSQL':                          { type: 'dev', cls: 'devicon-mongodb-plain colored' },
  'AWS':                            { type: 'dev', cls: 'devicon-amazonwebservices-plain colored' },
  'Azure':                          { type: 'dev', cls: 'devicon-azure-plain colored' },
  'GCP':                            { type: 'dev', cls: 'devicon-googlecloud-plain colored' },
  'Docker':                         { type: 'dev', cls: 'devicon-docker-plain colored' },
  'Postman':                        { type: 'dev', cls: 'devicon-postman-plain colored' },
  'Salesforce':                     { type: 'dev', cls: 'devicon-salesforce-plain colored' },
  'IBM Cloud':                      { type: 'dev', cls: 'devicon-ibm-plain colored' },
  'Watsonx Platform':               { type: 'dev', cls: 'devicon-ibm-plain colored' },
  // SVG fallbacks
  'Power BI':                       { type: 'svg', el: I(<><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>) },
  'SPSS Modeler':                   { type: 'svg', el: I(<><circle cx="8" cy="18" r="2"/><circle cx="12" cy="10" r="2"/><circle cx="16" cy="14" r="2"/><circle cx="18" cy="6" r="2"/><path d="M9.41 16.59L10.59 11.41M13.41 12.59L14.59 7.41M16.59 12.41L17.41 7.59"/></>) },
  'MCP':                            { type: 'svg', el: I(<><path d="M18 6l-6-4-6 4v6l6 4 6-4V6z"/><line x1="12" y1="16" x2="12" y2="22"/></>) },
  'OCR':                            { type: 'svg', el: I(<><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>) },
  'AstraDB':                        { type: 'svg', el: I(<><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></>) },
  'Langgraph':                      { type: 'svg', el: I(<><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></>) },
  'Langchain':                      { type: 'svg', el: I(<><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></>) },
  'Generative AI':                  { type: 'svg', el: I(<><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/></>) },
  'Data Modelling & Visualisation': { type: 'svg', el: I(<><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></>) },
  'Statistical Analysis':           { type: 'svg', el: I(<><path d="M18 20V10M12 20V4M6 20v-6"/><path d="M2 20h20"/></>) },
  'RAG':                            { type: 'svg', el: I(<><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/><line x1="11" y1="8" x2="11" y2="14"/></>) },
  'Knowledge Graphs':               { type: 'svg', el: I(<><circle cx="5" cy="6" r="2.5"/><circle cx="19" cy="7" r="2.5"/><circle cx="12" cy="18" r="2.5"/><line x1="7.2" y1="7.2" x2="9.8" y2="16.8"/><line x1="16.9" y1="8.4" x2="13.6" y2="16.4"/><line x1="7.4" y1="6.4" x2="16.6" y2="6.7"/></>) },
  'Ontologies':                     { type: 'svg', el: I(<><rect x="9" y="2" width="6" height="4" rx="1"/><rect x="3" y="18" width="6" height="4" rx="1"/><rect x="15" y="18" width="6" height="4" rx="1"/><path d="M12 6v6M6 18v-3a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3"/></>) },
  'Multi-Agent Systems':            { type: 'svg', el: I(<><circle cx="12" cy="7" r="3"/><circle cx="5" cy="17" r="3"/><circle cx="19" cy="17" r="3"/><line x1="10.4" y1="9.5" x2="6.6" y2="14.5"/><line x1="13.6" y1="9.5" x2="17.4" y2="14.5"/><line x1="8" y1="17" x2="16" y2="17"/></>) },
  'Agent Development':              { type: 'svg', el: I(<><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></>) },
  'Prompt Engineering':             { type: 'svg', el: I(<><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></>) },
  'Data Strategy & Governance':     { type: 'svg', el: I(<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></>) },
  'Leadership':                     { type: 'svg', el: I(<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>) },
  'Teamwork':                       { type: 'svg', el: I(<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>) },
  'Stakeholder Management':         { type: 'svg', el: I(<><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></>) },
  'Design Thinking':                { type: 'svg', el: I(<><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></>) },
  'Agile Scrum':                    { type: 'svg', el: I(<><polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/></>) },
  'Storytelling':                   { type: 'svg', el: I(<><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></>) },
  'Spanish (Native)':               { type: 'svg', el: I(<><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>) },
  'English (Native Bilingual)':     { type: 'svg', el: I(<><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>) },
  'Italian (B1/B2)':                { type: 'svg', el: I(<><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>) },
};

const SkillIcon = ({ skill }) => {
  const icon = SKILL_ICONS[skill];
  const meta = SKILL_META[skill];
  if (!icon) return <div className="skill-icon-badge skill-icon-abbr">{meta?.abbr || skill.slice(0, 2).toUpperCase()}</div>;
  if (icon.type === 'dev') return <div className="skill-icon-badge skill-icon-dev"><i className={icon.cls} /></div>;
  return <div className="skill-icon-badge skill-icon-svg">{icon.el}</div>;
};

// --- Helper Components ---

const SectionHeader = ({ title }) => (
  <FadeIn><h2 className="section-title">{title}</h2></FadeIn>
);

const Counter = ({ value, suffix, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const startTime = performance.now();
          const tick = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * value;
            setCount(Number.isInteger(value) ? Math.round(current) : Math.round(current * 10) / 10);
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);
  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-number">{Number.isInteger(value) ? count : count.toFixed(1)}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

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
  const projectKeys = ['greenhouse', 'portfolio', 'newsClassifier', 'limaMapping', 'windEnergy'];


  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [language, setLanguage] = useState('en');
  const [skillFilter, setSkillFilter] = useState('all');
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [showAllCerts, setShowAllCerts] = useState(false);
  const CERT_PREVIEW_COUNT = 8;

  const langRef = useRef(null);

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
      });
    };

    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLangMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
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
    setLangMenuOpen(false);
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
              {['home', 'about', 'experience', 'projects', 'giveback', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a onClick={() => scrollToSection(item === 'home' ? 'hero' : item)}>
                    {t.nav[item]}
                  </a>
                </li>
              ))}
            </ul>

            <div className="nav-separator"></div>

            <div className="nav-lang-switcher">
              <div className={`lang-dropdown ${langMenuOpen ? 'open' : ''}`} ref={langRef}>
                <button className="dropdown-trigger" onClick={() => setLangMenuOpen(!langMenuOpen)}>
                  {t.nav.langLabel}
                  <svg className="chevron-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div className="dropdown-content">
                  <button className={language === 'en' ? 'active' : ''} onClick={() => { setLanguage('en'); setLangMenuOpen(false); }}>English</button>
                  <button className={language === 'es' ? 'active' : ''} onClick={() => { setLanguage('es'); setLangMenuOpen(false); }}>Español</button>
                  <button className={language === 'it' ? 'active' : ''} onClick={() => { setLanguage('it'); setLangMenuOpen(false); }}>Italiano</button>
                </div>
              </div>
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
          <motion.div
            className="hero-left"
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } }}
          >
            <motion.h1 variants={childVariants}><span className="name-line">Joaquin Villar</span></motion.h1>
            <motion.p className="title" variants={childVariants}>
              {t.hero.title.split('·').map((part, i) => (
                <span key={i} className={i === 0 ? 'title-role' : 'title-sub'}>{part.trim()}</span>
              ))}
            </motion.p>
            <motion.div className="tags-container" variants={childVariants}>
              {['Data Science', 'Knowledge Graphs', 'Ontologies', 'Multi-Agent Systems'].map(tag => (
                <span key={tag} className="tag-bubble">{tag}</span>
              ))}
            </motion.div>
            <motion.p className="intro" variants={childVariants}>{t.hero.intro}</motion.p>
            <motion.div className="hero-cta" variants={childVariants}>
              <button className="btn-primary" onClick={() => scrollToSection('contact')}>{t.nav.contact}</button>
              <button className="btn-secondary" onClick={() => scrollToSection('projects')}>{t.nav.projects}</button>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-right"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
          >
            <motion.div
              className="profile-wrapper"
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 280, damping: 20 }}
            >
              {CONFIG.showOpenToWork && (
                <div className="open-to-work-badge">{t.hero.openToWork}</div>
              )}
              <img src={'/profile.png'} alt="Joaquin Villar" className="profile-img" />
              <div className="face-logos" aria-hidden="true">
                <img
                  src="/logos/sheffield-white.png"
                  alt="The University of Sheffield"
                  className="face-logo face-logo-lead"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <span className="face-logos-divider" />
                {[
                  { src: '/logos/am-white.png', alt: 'Alvarez & Marsal' },
                  { src: '/logos/ibm-white.svg', alt: 'IBM' },
                ].map((logo) => (
                  <img
                    key={logo.src}
                    src={logo.src}
                    alt={logo.alt}
                    className="face-logo"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="stats-row">
        <div className="stats-grid">
          {[
            { value: 1.5, suffix: '', labelKey: 'experience' },
            { value: 19,  suffix: '',  labelKey: 'certifications' },
            { value: 5,   suffix: '',  labelKey: 'projects' },
            { value: 3,   suffix: '',  labelKey: 'languages' },
          ].map(({ value, suffix, labelKey }) => (
            <Counter key={labelKey} value={value} suffix={suffix} label={t.stats[labelKey]} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container">
          <SectionHeader title={t.about.title} />
          <FadeIn className="about-text-wrapper">
            <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.8rem', lineHeight: '1.8' }}>{t.about.text}</p>
          </FadeIn>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section alt-bg" id="experience">
        <div className="container">
          <SectionHeader title={t.experience.title} />
          <StaggerWrap className="timeline">
            {Object.keys(t.experience).filter(key => key !== 'title').map((companyKey) => (
              <StaggerChild className="timeline-item" key={companyKey}>
                <div className="timeline-content">
                  <ExperienceCard roles={t.experience[companyKey].roles} />
                </div>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* Education Section */}
      <section className="section alt-bg" style={{ paddingTop: 0 }} id="education">
        <div className="container">
          <SectionHeader title={t.education.title} />
          <FadeIn className="education-card">
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
          </FadeIn>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section" id="projects">
        <div className="container">
          <SectionHeader title={t.projects.title} />

          <FadeIn className="project-carousel">
            {/* Numbered tabs */}
            <div className="carousel-tabs">
              {projectKeys.map((key, i) => (
                <button
                  key={key}
                  className={`carousel-tab ${i === currentProjectIndex ? 'active' : ''}`}
                  onClick={() => setCurrentProjectIndex(i)}
                >
                  <span className="tab-number">{String(i + 1).padStart(2, '0')}</span>
                  <span className="tab-title">{t.projects[key].title}</span>
                </button>
              ))}
            </div>

            {/* Main display — AnimatePresence for smooth transitions */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProjectIndex}
                className="carousel-content"
                initial={{ opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -14 }}
                transition={{ duration: 0.28, ease }}
              >
                <div className="carousel-image">
                  {t.projects[projectKeys[currentProjectIndex]].img && (
                    <img
                      src={t.projects[projectKeys[currentProjectIndex]].img}
                      alt={t.projects[projectKeys[currentProjectIndex]].title}
                    />
                  )}
                </div>
                <div className="carousel-details">
                  <span className="carousel-index">{String(currentProjectIndex + 1).padStart(2, '0')} / {String(projectKeys.length).padStart(2, '0')}</span>
                  <h3 className="carousel-title">{t.projects[projectKeys[currentProjectIndex]].title}</h3>
                  <p className="carousel-tech">{t.projects[projectKeys[currentProjectIndex]].tech}</p>
                  <ul className="carousel-items">
                    {t.projects[projectKeys[currentProjectIndex]].items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className="carousel-links">
                    {t.projects[projectKeys[currentProjectIndex]].links?.map((link, i) => (
                      <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="carousel-link-btn">
                        {link.type === 'github' && 'GitHub'}
                        {link.type === 'demo' && 'Live Demo'}
                        {link.type === 'huggingface' && 'Hugging Face'}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Prev / Next */}
            <div className="carousel-nav">
              <button
                className="carousel-arrow"
                onClick={() => setCurrentProjectIndex(i => (i - 1 + projectKeys.length) % projectKeys.length)}
                aria-label="Previous project"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              <div className="carousel-dots">
                {projectKeys.map((_, i) => (
                  <button
                    key={i}
                    className={`carousel-dot ${i === currentProjectIndex ? 'active' : ''}`}
                    onClick={() => setCurrentProjectIndex(i)}
                    aria-label={`Go to project ${i + 1}`}
                  />
                ))}
              </div>
              <button
                className="carousel-arrow"
                onClick={() => setCurrentProjectIndex(i => (i + 1) % projectKeys.length)}
                aria-label="Next project"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* GiveBack Section */}
      <section className="section" id="giveback">
        <div className="container">
          <SectionHeader title={t.giveback.title} />
          <StaggerWrap className="projects-grid">
            {[t.giveback.dss, t.giveback.genAI, t.giveback.siemens].map((group, idx) => (
              group?.roles ? group.roles.map((role, rIdx) => (
                <StaggerChild key={`${idx}-${rIdx}`}>
                  <ProjectCard title={role.title} tech={role.location} items={role.items} links={[]} img={role.img} />
                </StaggerChild>
              )) : null
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section alt-bg" id="skills">
        <div className="container">
          <SectionHeader title={t.skills.title} />

          <FadeIn className="skill-filters">
            {['all', 'programmingTools', 'cloudAI', 'coreCompetencies'].map(key => (
              <button
                key={key}
                className={`skill-filter-btn ${skillFilter === key ? 'active' : ''}`}
                onClick={() => setSkillFilter(key)}
              >
                {key === 'all' ? t.skills.filterAll : t.skills[key].title}
              </button>
            ))}
          </FadeIn>

          {(() => {
            const items = skillFilter === 'all'
              ? [...t.skills.programmingTools.items, ...t.skills.cloudAI.items, ...t.skills.coreCompetencies.items]
              : t.skills[skillFilter].items;
            return (
              <StaggerWrap className="skill-list">
                {items.map((skill, i) => {
                  const meta = SKILL_META[skill] || { abbr: skill.slice(0, 2).toUpperCase(), desc: '' };
                  return (
                    <StaggerChild key={i} className="skill-list-item">
                      <SkillIcon skill={skill} />
                      <div className="skill-list-text">
                        <strong>{skill}</strong>
                        {meta.desc && <p>{meta.desc}</p>}
                      </div>
                    </StaggerChild>
                  );
                })}
              </StaggerWrap>
            );
          })()}

          <FadeIn delay={0.1}><h3 className="subheading">{t.skills.certifications.title}</h3></FadeIn>
          <div className="cert-grid">
            {(showAllCerts
              ? t.skills.certifications.items
              : t.skills.certifications.items.slice(0, CERT_PREVIEW_COUNT)
            ).map((cert) => (
              <a
                key={cert.img}
                href={cert.link || "https://www.credly.com/users/joaquin-villar"}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-item"
              >
                <img src={`/badges/${cert.img}`} alt={cert.title} className="cert-badge" />
                <p>{cert.title}</p>
              </a>
            ))}
          </div>
          {t.skills.certifications.items.length > CERT_PREVIEW_COUNT && (
            <FadeIn delay={0.1} className="cert-toggle-wrap">
              <button
                className="cert-toggle-btn"
                onClick={() => setShowAllCerts(v => !v)}
              >
                {showAllCerts
                  ? '− Show fewer'
                  : `+ Show all ${t.skills.certifications.items.length} certifications`}
              </button>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" id="contact">
        <div className="container">
          <SectionHeader title={t.contact.title} />

          <StaggerWrap className="contact-wrapper">
            <StaggerChild className="contact-card">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <a href="mailto:joaquinvillar8802@gmail.com">joaquinvillar8802@gmail.com</a>
            </StaggerChild>
            <StaggerChild className="contact-card">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <a href="https://www.linkedin.com/in/joaquin-villar-urrutia/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </StaggerChild>
            <StaggerChild className="contact-card">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <a href="https://github.com/joaquin-villar" target="_blank" rel="noopener noreferrer">GitHub</a>
            </StaggerChild>
            <StaggerChild className="contact-card">
              <span className="contact-icon-emoji" aria-hidden="true">🤗</span>
              <a href="https://huggingface.co/jvillar02" target="_blank" rel="noopener noreferrer">Hugging Face</a>
            </StaggerChild>
          </StaggerWrap>

          <FadeIn delay={0.15} className="resume-download">
            <a href={'/resume.pdf'} download="Joaquin_Villar_Resume.pdf" className="btn-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {t.contact.downloadText}
            </a>
          </FadeIn>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Joaquin Villar. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;