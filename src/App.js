import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        experience: 'Experience',
        projects: 'Projects',
        education: 'Education',
        leadership: 'Leadership',
        contact: 'Contact'
      },
      hero: {
        title: 'Data Science Student | AI & Cloud Specialist',
        intro: 'Graduating Data Science student with hands-on experience in AI, Cloud and Data Services. Passionate about the application of Digital Twins for Sustainable Development.',
      },
      about: {
        title: 'About Me',
        text: "I'm a final-year Data Science undergraduate at The University of Sheffield with a completed internship at IBM. As a bilingual, analytical and creative problem solver, I have years of experience delivering data-driven solutions. I'm passionate about digital transformation through AI/MLOps and sustainable solutions, seeking opportunities to drive change and deliver value through strategic and client-facing roles."
      },
      experience: {
        title: 'Professional Experience',
        ibm: {
          roles: [
            {
              date: 'June 2025 – September 2025',
              title: 'CSM Solutions Architect Summer Intern - IBM',
              location: 'London, UK',
              items: [
                'Built a sustainable data integration asset leveraging Apache Iceberg tables and Watsonx.ai to enrich and query the metadata of unstructured financial statements within IBM Cloud. This reduced evaluation time in the mortgage risk assessment process by 18% and LLM hallucination risk by 30% for a leading financial services client. ',
                'Designed and deployed a Multimodal RAG AI Agent to query the CSM business unit’s deployments dashboard. The agent autonomously extracts key insights, generates context aware executive summaries and distributes them to the respective stakeholders via email, saving 3-4 hours every week in internal debrief meetings.',
                'Delivered multiple product demos across AI & Analytics Consulting and Technical Sales, showcasing deployed use cases and IBM’s go-to-market platforms through effective use of the client engagement model and storytelling',
                'Supported asset-based consulting engagement with the conversational banking unit of a leading financial services provider, , gaining exposure to the design and deployment of AI Assistant user journeys and the development of an Agentic AI strategy.' 
              ]
            }
          ]
        },
        primax: {
          roles: [
            {
              date: 'June 2024 – August 2024',
              title: 'Loyalty CRM & Digital Sales Summer Intern - Corporación Primax S.A.',
              location: 'Lima, Perú',
              items: [
                'Quantified market opportunity using RFM clustering on 5+ million records',
                'Redesigned margin matrices to better reflect profitability across consumer groups',
                'Designed managerial dashboard for Colombia division expansion',
                'Developed automated One-Pager alerts for KPI monitoring'
              ]
            }
          ]
        },
        aviva: {
          roles: [
            {
              date: 'June 2023 – September 2023',
              title: 'Data Management Intern - Clínica Aviva / Grupo Intercorp',
              location: 'Lima, Perú',
              items: [
                'Optimised pharmacy procurement process by integrating legacy ERP with RPA prototypes',
                'Reduced decision-making contact hours by 37% between finance and procurement teams'
              ]
            }
          ]
        },
        pacifico: {
          roles: [
            {
              date: 'September 2022 – December 2022',
              title: 'Data Analytics Off-Cycle Intern - Pacifico Seguros',
              location: 'Lima, Perú',
              items: [
                'Contributed to the company’s digital transformation...'
              ]
            },
            {
              date: 'June 2022 – September 2022',
              title: 'Process Innovation Summer Intern - Pacifico Seguros',
              location: 'Lima, Perú',
              items: [
                'Built a sustainable data integration asset leveraging Apache Iceberg tables...',
                'Designed and deployed a Multimodal RAG AI Agent...',
                'Delivered multiple client demos...'
              ]
            }
          ]
        }
      },
      projects: {
        title: 'Projects',
        portfolio: {
          title: 'Personal Portfolio Website',
          tech: 'React, JavaScript, CSS',
          items: [
            'Built modern, responsive portfolio showcasing professional experience, projects and certifications',
            'Implemented animations and interactive UI components',
            'Deployed using GitHub Pages with automated CI/CD pipeline'
          ]
        },
        dssSociety: {
          title: 'Data Science Society Website',
          tech: 'Web Development, Society Management',
          items: [
            'Designed and developed society website for 120+ members',
            'Integrated event management and member communication systems',
            'Created platform for showcasing student projects and opportunities'
          ]
        },
        windEnergy: {
          title: 'Wind Energy Research Project',
          tech: 'Data Science, Renewable Energy, Statistical Analysis',
          items: [
            'Conducted research on wind energy optimization and sustainability',
            'Applied machine learning models for energy production forecasting',
            'Analyzed meteorological data to identify optimal turbine placement'
          ]
        }
      },
      education: {
        title: 'Education',
        degree: 'BSc Data Science',
        university: 'The University of Sheffield',
        period: 'September 2023 – June 2026',
        grade: 'Expected: First-Class Honours',
        coursework: 'Relevant Coursework:',
        courses: 'Inferential Statistics, AI & Machine Learning, Database Modelling, AI Ethics'
      },
      leadership: {
        title: 'Leadership & Volunteering',
        dss: {
          roles: [
            {
              date: 'September 2025 – Present',
              title: 'Data Science Society - Education Officer',
              location: 'University of Sheffield',
              items: [
                'Led pro bono data projects with 2 local organisations',
                'Developed BSA compliance agent for construction consultancy',
                'Created outreach optimisation strategy for charity supporting modern slavery survivors'
              ]
            },
            {
              date: 'February 2024 – May 2025',
              title: 'Data Science Society - Founder & President',
              location: 'University of Sheffield',
              items: [
                'Founded and chaired the society, driving membership growth through targeted outreach',
                'Managed student-financed budget and secured additional funding',
                'Delivered best university experience for 120+ students'
              ]
            }
          ]
        },
        genAI: {
          roles: [
            {
              date: 'July 2025 – September 2025',
              title: 'GenAI Society - Summer Internship Event Lead',
              location: 'IBM',
              items: [
                'Organised \'AI in Media\' half-day event for 50+ Early Professionals',
                'Featured SMEs and Managing Director as guest speakers',
                'First event of its kind in IBM UKI'
              ]
            }
          ]
        },
        siemens: {
          roles: [
            {
              date: 'October 2024 – May 2025',
              title: 'Digital Transformation Advisor',
              location: 'Siemens Digital Innovation Zone',
              items: [
                'Showcased potential of live stream data analytics and CAD software',
                'Demonstrated Digital Twin of the Diamond Pilot Plant',
                'Only one of its kind in any UK university'
              ]
            }
          ]
        }
      },
      skills: {
        title: 'Skills & Technologies',
        programmingTools: 'Programming & Tools',
        cloudAI: 'Cloud & AI Platforms',
        coreCompetencies: 'Core Competencies',
        certifications: 'Certifications'
      },
      contact: {
        title: 'Get In Touch',
        email: 'Email',
        linkedin: 'LinkedIn',
        location: 'Location',
        downloadText: 'Download Resume/CV'
      },
      languages: {
        title: 'Languages I Speak',
        spanish: 'Spanish',
        english: 'English',
        italian: 'Italian',
        native: 'Native',
        bilingual: 'Native Bilingual',
        intermediate: 'Intermediate (B1/B2)'
      }
    },
    es: {
      nav: {
        home: 'Inicio',
        about: 'Sobre Mí',
        experience: 'Experiencia',
        projects: 'Proyectos',
        education: 'Educación',
        leadership: 'Liderazgo',
        contact: 'Contacto'
      },
      hero: {
        title: 'Estudiante de Ciencia de Datos | Especialista en IA y Cloud',
        intro: 'Estudiante de Ciencia de Datos próximo a graduarse con experiencia práctica en IA, Cloud y Servicios de Datos. Apasionado por la aplicación de gemelos digitales para el desarrollo sostenible.',
      },
      about: {
        title: 'Sobre Mí',
        text: 'Soy un estudiante de último año de Ciencia de Datos en la Universidad de Sheffield con una pasantía completada en IBM. Como solucionador de problemas bilingüe, analítico y creativo, tengo años de experiencia entregando soluciones basadas en datos. Me apasiona la transformación digital a través de IA/MLOps y soluciones basadas en activos, buscando oportunidades para impulsar el cambio y entregar valor a través de roles estratégicos y orientados al cliente.'
      },
      experience: {
        title: 'Experiencia Profesional',
        ibm: {
          roles: [
            {
              date: 'Junio 2025 – Septiembre 2025',
              title: 'Pasante de Arquitecto de Soluciones CSM - IBM',
              location: 'Londres, UK',
              items: [
                'Construí un activo de integración de datos sostenible aprovechando tablas Apache Iceberg y Watsonx.ai, reduciendo el tiempo de evaluación en un 18% y el riesgo de alucinación de LLM en un 30%',
                'Diseñé e implementé un Agente de IA RAG Multimodal que genera resúmenes ejecutivos de forma autónoma, ahorrando 3-4 horas semanales en reuniones internas',
                'Entregué múltiples demos de cliente en Consultoría de IA y Análisis y Ventas Técnicas',
                'Apoyé un compromiso de consultoría basado en activos con un proveedor líder de servicios financieros'
              ]
            }
          ]
        },
        primax: {
          roles: [
            {
              date: 'Junio 2024 – Agosto 2024',
              title: 'Pasante de CRM de Lealtad y Ventas Digitales - Corporación Primax S.A.',
              location: 'Lima, Perú',
              items: [
                'Cuantifiqué la oportunidad de mercado utilizando clustering RFM en más de 5 millones de registros',
                'Rediseñé matrices de margen para reflejar mejor la rentabilidad entre grupos de consumidores',
                'Diseñé un panel gerencial para la expansión de la división de Colombia',
                'Desarrollé alertas automatizadas One-Pager para el monitoreo de KPIs'
              ]
            }
          ]
        },
        aviva: {
          roles: [
            {
              date: 'Junio 2023 – Septiembre 2023',
              title: 'Pasante de Gestión de Datos - Clínica Aviva Grupo Intercorp',
              location: 'Lima, Perú',
              items: [
                'Optimicé el proceso de adquisición de farmacia integrando ERP heredado con prototipos RPA',
                'Reduje las horas de contacto para la toma de decisiones en un 37% entre los equipos de finanzas y adquisiciones'
              ]
            }
          ]
        },
        pacifico: {
          roles: [
            {
              date: 'September 2022 – December 2022',
              title: 'Data Analytics Off-Cycle Intern - Pacifico Seguros',
              location: 'Lima, Perú',
              items: [
                'Contributed to the company’s digital transformation...'
              ]
            },
            {
              date: 'June 2022 – September 2022',
              title: 'Process Innovation Summer Intern - Pacifico Seguros',
              location: 'Lima, Perú',
              items: [
                'Built a sustainable data integration asset leveraging Apache Iceberg tables...',
                'Designed and deployed a Multimodal RAG AI Agent...',
                'Delivered multiple client demos...'
              ]
            }
          ]
        }
      },
      projects: {
        title: 'Proyectos',
        portfolio: {
          title: 'Sitio Web de Portafolio Personal',
          tech: 'React, JavaScript, CSS',
          items: [
            'Construí un portafolio moderno y responsive que muestra experiencia profesional y proyectos',
            'Implementé animaciones suaves y componentes de UI interactivos',
            'Desplegado usando GitHub Pages con pipeline CI/CD automatizado'
          ]
        },
        dssSociety: {
          title: 'Sitio Web de Data Science Society',
          tech: 'Desarrollo Web, Gestión de Sociedad',
          items: [
            'Diseñé y desarrollé sitio web de la sociedad para más de 120 miembros',
            'Integré sistemas de gestión de eventos y comunicación de miembros',
            'Creé plataforma para mostrar proyectos estudiantiles y oportunidades'
          ]
        },
        windEnergy: {
          title: 'Proyecto de Investigación de Energía Eólica',
          tech: 'Ciencia de Datos, Energía Renovable, Análisis Estadístico',
          items: [
            'Realicé investigación sobre optimización de energía eólica y sostenibilidad',
            'Apliqué modelos de machine learning para pronóstico de producción de energía',
            'Analicé datos meteorológicos para identificar ubicación óptima de turbinas'
          ]
        }
      },
      education: {
        title: 'Educación',
        degree: 'Licenciatura en Ciencia de Datos',
        university: 'La Universidad de Sheffield',
        period: 'Septiembre 2023 – Junio 2026',
        grade: 'Esperado: Honores de Primera Clase',
        coursework: 'Cursos Relevantes:',
        courses: 'Estadística Inferencial, IA y Machine Learning, Modelado de Bases de Datos, Ética en IA'
      },
      leadership: {
        title: 'Liderazgo y Voluntariado',
        dssEducation: {
          title: 'Data Science Society - Oficial de Educación',
          period: 'Universidad de Sheffield | Septiembre 2025 – Presente',
          items: [
            'Lideré proyectos de datos pro bono con 2 organizaciones locales',
            'Desarrollé agente de cumplimiento BSA para consultoría de construcción',
            'Creé estrategia de optimización de alcance para caridad que apoya a sobrevivientes de esclavitud moderna'
          ]
        },
        dssPresident: {
          title: 'Data Science Society - Fundador y Presidente',
          period: 'Universidad de Sheffield | Febrero 2024 – Mayo 2025',
          items: [
            'Fundé y presidí la sociedad, impulsando el crecimiento de membresía mediante alcance dirigido',
            'Gestioné presupuesto financiado por estudiantes y aseguré financiamiento adicional',
            'Entregué la mejor experiencia universitaria para más de 120 estudiantes'
          ]
        },
        genAI: {
          title: 'GenAI Society - Líder de Evento de Pasantía de Verano',
          period: 'IBM | Julio 2025 – Septiembre 2025',
          items: [
            'Organicé evento de medio día \'IA en Medios\' para más de 50 Profesionales Jóvenes',
            'Presenté SMEs y Director General como oradores invitados',
            'Primer evento de este tipo en IBM UKI'
          ]
        },
        siemens: {
          title: 'Asesor de Transformación Digital',
          period: 'Zona de Innovación Digital de Siemens | Octubre 2024 – Mayo 2025',
          items: [
            'Mostré el potencial de análisis de datos de transmisión en vivo y software CAD',
            'Demostré el Gemelo Digital de la Planta Piloto Diamond',
            'El único de su tipo en cualquier universidad del Reino Unido'
          ]
        }
      },
      skills: {
        title: 'Habilidades y Tecnologías',
        programmingTools: 'Programación y Herramientas',
        cloudAI: 'Plataformas Cloud e IA',
        coreCompetencies: 'Competencias Principales',
        certifications: 'Certificaciones'
      },
      contact: {
        title: 'Contáctame',
        email: 'Correo',
        linkedin: 'LinkedIn',
        location: 'Ubicación',
        downloadText: 'Descargar CV/Currículum'
      },
      languages: {
        title: 'Idiomas Que Hablo',
        spanish: 'Español',
        english: 'Inglés',
        italian: 'Italiano',
        native: 'Nativo',
        bilingual: 'Bilingüe Nativo',
        intermediate: 'Intermedio (B1/B2)'
      }
    },
    it: {
      nav: {
        home: 'Home',
        about: 'Chi Sono',
        experience: 'Esperienza',
        projects: 'Progetti',
        education: 'Istruzione',
        leadership: 'Leadership',
        contact: 'Contatto'
      },
      hero: {
        title: 'Studente di Data Science | Specialista AI e Cloud',
        intro: 'Studente di Data Science in procinto di laurearsi con esperienza pratica in AI, Cloud e Servizi Dati. Appassionato dell\'applicazione dei gemelli digitali per lo sviluppo sostenibile.',
      },
      about: {
        title: 'Chi Sono',
        text: 'Sono uno studente dell\'ultimo anno di Data Science all\'Università di Sheffield con uno stage completato presso IBM. Come risolutore di problemi bilingue, analitico e creativo, ho anni di esperienza nel fornire soluzioni basate sui dati. Sono appassionato di trasformazione digitale attraverso AI/MLOps e soluzioni basate su asset, cercando opportunità per guidare il cambiamento e fornire valore attraverso ruoli strategici e orientati al cliente.'
      },
      experience: {
        title: 'Esperienza Professionale',
        ibm: {
          roles: [
            {
              date: 'Giugno 2025 – Settembre 2025',
              title: 'Stagista Architetto di Soluzioni CSM - IBM',
              location: 'Londra, Regno Unito | Gruppo Tecnologico',
              items: [
                'Ho costruito un asset di integrazione dati sostenibile sfruttando tabelle Apache Iceberg e Watsonx.ai, riducendo il tempo di valutazione del 18% e il rischio di allucinazione LLM del 30%',
                'Ho progettato e implementato un Agente AI RAG Multimodale che genera automaticamente riassunti esecutivi, risparmiando 3-4 ore settimanali in riunioni interne',
                'Ho consegnato molteplici demo per clienti in Consulenza AI e Analytics e Vendite Tecniche',
                'Ho supportato un impegno di consulenza basato su asset con un fornitore leader di servizi finanziari'
              ]
            }
          ]
        },
        primax: {
          roles: [
            {
              date: 'Giugno 2024 – Agosto 2024',
              title: 'Stagista CRM Fedeltà e Vendite Digitali - Corporación Primax S.A.',
              location: 'Lima, Perù',
              items: [
                'Ho quantificato l\'opportunità di mercato utilizzando clustering RFM su oltre 5 milioni di record',
                'Ho ridisegnato matrici di margine per riflettere meglio la redditività tra gruppi di consumatori',
                'Ho progettato dashboard manageriale per l\'espansione della divisione Colombia',
                'Ho sviluppato alert automatizzati One-Pager per il monitoraggio KPI'
              ]
            }
          ]
        },
        aviva: {
          roles: [
            {
              date: 'Giugno 2023 – Settembre 2023',
              title: 'Stagista Gestione Dati - Clínica Aviva Grupo Intercorp',
              location: 'Lima, Perù',
              items: [
                'Ho ottimizzato il processo di approvvigionamento farmaceutico integrando ERP legacy con prototipi RPA',
                'Ho ridotto le ore di contatto per le decisioni del 37% tra i team finanziari e di approvvigionamento'
              ]
            }
          ]
        },
        pacifico: {
          roles: [
            {
              date: 'September 2022 – December 2022',
              title: 'Data Analytics Off-Cycle Intern - Pacifico Seguros',
              location: 'Lima, Perú',
              items: [
                'Contributed to the company’s digital transformation...'
              ]
            },
            {
              date: 'June 2022 – September 2022',
              title: 'Process Innovation Summer Intern - Pacifico Seguros',
              location: 'Lima, Perú',
              items: [
                'Built a sustainable data integration asset leveraging Apache Iceberg tables...',
                'Designed and deployed a Multimodal RAG AI Agent...',
                'Delivered multiple client demos...'
              ]
            }
          ]
        }
      },
      projects: {
        title: 'Progetti',
        portfolio: {
          title: 'Sito Web Portfolio Personale',
          tech: 'React, JavaScript, CSS',
          items: [
            'Ho costruito un portfolio moderno e responsive che mostra esperienza professionale e progetti',
            'Ho implementato animazioni fluide e componenti UI interattivi',
            'Distribuito usando GitHub Pages con pipeline CI/CD automatizzata'
          ]
        },
        dssSociety: {
          title: 'Sito Web Data Science Society',
          tech: 'Sviluppo Web, Gestione Società',
          items: [
            'Ho progettato e sviluppato il sito web della società per oltre 120 membri',
            'Ho integrato sistemi di gestione eventi e comunicazione membri',
            'Ho creato piattaforma per mostrare progetti studenteschi e opportunità'
          ]
        },
        windEnergy: {
          title: 'Progetto di Ricerca Energia Eolica',
          tech: 'Data Science, Energia Rinnovabile, Analisi Statistica',
          items: [
            'Ho condotto ricerca sull\'ottimizzazione dell\'energia eolica e sostenibilità',
            'Ho applicato modelli di machine learning per previsione produzione energetica',
            'Ho analizzato dati meteorologici per identificare posizionamento ottimale delle turbine'
          ]
        }
      },
      education: {
        title: 'Istruzione',
        degree: 'Laurea in Data Science',
        university: 'L\'Università di Sheffield',
        period: 'Settembre 2023 – Giugno 2026',
        grade: 'Previsto: Lode di Prima Classe',
        coursework: 'Corsi Rilevanti:',
        courses: 'Statistica Inferenziale, AI e Machine Learning, Modellazione Database, Etica AI'
      },
      leadership: {
        title: 'Leadership e Volontariato',
        dssEducation: {
          title: 'Data Science Society - Responsabile Educazione',
          period: 'Università di Sheffield | Settembre 2025 – Presente',
          items: [
            'Ho guidato progetti dati pro bono con 2 organizzazioni locali',
            'Ho sviluppato agente di conformità BSA per consulenza edile',
            'Ho creato strategia di ottimizzazione outreach per carità che supporta sopravvissuti alla schiavitù moderna'
          ]
        },
        dssPresident: {
          title: 'Data Science Society - Fondatore e Presidente',
          period: 'Università di Sheffield | Febbraio 2024 – Maggio 2025',
          items: [
            'Ho fondato e presieduto la società, guidando la crescita dei membri attraverso outreach mirato',
            'Ho gestito budget finanziato da studenti e assicurato finanziamenti aggiuntivi',
            'Ho fornito la migliore esperienza universitaria per oltre 120 studenti'
          ]
        },
        genAI: {
          title: 'GenAI Society - Responsabile Evento Stage Estivo',
          period: 'IBM | Luglio 2025 – Settembre 2025',
          items: [
            'Ho organizzato evento di mezza giornata \'AI nei Media\' per oltre 50 Giovani Professionisti',
            'Ho presentato SME e Direttore Generale come relatori ospiti',
            'Primo evento del suo genere in IBM UKI'
          ]
        },
        siemens: {
          title: 'Consulente Trasformazione Digitale',
          period: 'Zona di Innovazione Digitale Siemens | Ottobre 2024 – Maggio 2025',
          items: [
            'Ho mostrato il potenziale dell\'analisi dati in streaming live e software CAD',
            'Ho dimostrato il Gemello Digitale della Diamond Pilot Plant',
            'L\'unico del suo genere in qualsiasi università del Regno Unito'
          ]
        }
      },
      skills: {
        title: 'Competenze e Tecnologie',
        programmingTools: 'Programmazione e Strumenti',
        cloudAI: 'Piattaforme Cloud e AI',
        coreCompetencies: 'Competenze Principali',
        certifications: 'Certificazioni'
      },
      contact: {
        title: 'Contattami',
        email: 'Email',
        linkedin: 'LinkedIn',
        location: 'Posizione',
        downloadText: 'Scarica CV/Curriculum'
      },
      languages: {
        title: 'Lingue Che Parlo',
        spanish: 'Spagnolo',
        english: 'Inglese',
        italian: 'Italiano',
        native: 'Madrelingua',
        bilingual: 'Bilingue Madrelingua',
        intermediate: 'Intermedio (B1/B2)'
      }
    }
  };

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      setShowScrollTop(scrollPosition > 300);
      
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      const elements = document.querySelectorAll('.animate');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    // Replace with your actual resume URL
    const resumeUrl = process.env.PUBLIC_URL + '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Joaquin_Villar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="App">
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
      
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">JV</div>
          
          <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li><a onClick={() => scrollToSection('hero')}>{t.nav.home}</a></li>
            <li><a onClick={() => scrollToSection('about')}>{t.nav.about}</a></li>
            <li><a onClick={() => scrollToSection('experience')}>{t.nav.experience}</a></li>
            <li><a onClick={() => scrollToSection('projects')}>{t.nav.projects}</a></li>
            <li><a onClick={() => scrollToSection('education')}>{t.nav.education}</a></li>
            <li><a onClick={() => scrollToSection('leadership')}>{t.nav.leadership}</a></li>
            <li><a onClick={() => scrollToSection('contact')}>{t.nav.contact}</a></li>
          </ul>
        </div>
      </nav>

      {/* Scroll to Top Button */}
      <button 
        className={`scroll-top-btn ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Scroll to top"   // ← Tooltip on hover
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 15l-6-6-6 6"/>
        </svg>
      </button>

      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="hero-content">
          <div className="hero-left">
            <h1>
              <span className="name-line">
                <span className="name-part">Joaquin</span>
                <span className="name-part">Villar</span>
              </span>
            </h1>
            
            <p className="title">{t.hero.title}</p>
            
            <div className="tags-container">
              <span className="tag-bubble">AI/ML</span>
              <span className="tag-bubble">Cloud Services</span>
              <span className="tag-bubble">Predicitive Analytics</span>
              <span className="tag-bubble">Digital Twins</span>
            </div>
            
            <p className="intro">{t.hero.intro}</p>
          </div>
          
          <div className="hero-right">
            <img 
              src={process.env.PUBLIC_URL + '/profile.png'} 
              alt="Joaquin Villar" 
              className="profile-img"
            />
            <div className="profile-bg-layer top"></div>
            <div className="profile-bg-layer bottom"></div>
            
            <a href="https://linkedin.com/in/joaquin-villar-11b0171b7/" target="_blank" rel="noopener noreferrer" className="profile-icon top-left" aria-label="LinkedIn Profile">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            <a href="https://github.com/joaquin-villar" target="_blank" rel="noopener noreferrer" className="profile-icon bottom-right" aria-label="GitHub Profile">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="container">
          <h2 className="animate">{t.about.title}</h2>
          <p className="animate">{t.about.text}</p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section alt-bg" id="experience">
        <div className="container">
          <h2 className="animate">{t.experience.title}</h2>

          <div className="timeline">

            {/* IBM */}
            <div className="timeline-item animate">
              <div className="timeline-content">
                {(t.experience.ibm?.roles || []).map((role, roleIndex) => (
                  <div className="role-block" key={roleIndex}>
                    <span className="date">{role.date}</span>
                    <h3>{role.title}</h3>
                    <p className="highlight">{role.location}</p>
                    <ul>
                      {(role.items || []).map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Primax */}
            <div className="timeline-item animate">
              <div className="timeline-content">
                {(t.experience.primax?.roles || []).map((role, roleIndex) => (
                  <div className="role-block" key={roleIndex}>
                    <span className="date">{role.date}</span>
                    <h3>{role.title}</h3>
                    <p className="highlight">{role.location}</p>
                    <ul>
                      {(role.items || []).map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Aviva */}
            <div className="timeline-item animate">
              <div className="timeline-content">
                {(t.experience.aviva?.roles || []).map((role, roleIndex) => (
                  <div className="role-block" key={roleIndex}>
                    <span className="date">{role.date}</span>
                    <h3>{role.title}</h3>
                    <p className="highlight">{role.location}</p>
                    <ul>
                      {(role.items || []).map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Pacífico */}
            <div className="timeline-item animate">
              <div className="timeline-content">
                {(t.experience.pacifico?.roles || []).map((role, roleIndex) => (
                  <div className="role-block" key={roleIndex}>
                    <span className="date">{role.date}</span>
                    <h3>{role.title}</h3>
                    <p className="highlight">{role.location}</p>
                    <ul>
                      {(role.items || []).map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>


        {/* Projects Section */}
        <section className="section" id="projects">
          <div className="container">
            <h2 className="animate">{t.projects.title}</h2>
            
            <div className="projects-grid">
              <div className="project-card animate">
                <a href="https://joaquin-villar.github.io" target="_blank" rel="noopener noreferrer" className="project-github-link" aria-label="View project on GitHub">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <h3 className="highlight">{t.projects.portfolio.title}</h3>
                <p><strong>{t.projects.portfolio.tech}</strong></p>
                <ul>
                  {t.projects.portfolio.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="project-card animate">
                <h3 className="highlight">{t.projects.dssSociety.title}</h3>
                <p><strong>{t.projects.dssSociety.tech}</strong></p>
                <ul>
                  {t.projects.dssSociety.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="project-card animate">
                <h3 className="highlight">{t.projects.windEnergy.title}</h3>
                <p><strong>{t.projects.windEnergy.tech}</strong></p>
                <ul>
                  {t.projects.windEnergy.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

      {/* Education Section */}
      <section className="section alt-bg" id="education">
        <div className="container">
          <h2 className="animate">{t.education.title}</h2>
          <div className="education-grid">
            <div className="card animate">
              <div className="edu-info">
                <h3>{t.education.degree}</h3>
                <p><strong>{t.education.university}</strong></p>
                <p>{t.education.period}</p>
                <p>{t.education.grade}</p>
                <p style={{marginTop: '1rem', fontSize: '1.4rem'}}>
                  <strong>{t.education.coursework}</strong> {t.education.courses}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Volunteering Section */}
      <section className="section" id="leadership">
        <div className="container">
          <h2 className="animate">{t.leadership.title}</h2>
          
          <div className="projects-grid">
            {/* Data Science Society */}
            <div className="project-card animate">
              {(t.leadership.dss?.roles || []).map((role, roleIndex) => (
                <div key={roleIndex} style={{marginBottom: roleIndex < t.leadership.dss.roles.length - 1 ? '2rem' : '0'}}>
                  <span className="date" style={{background: 'var(--blue)', color: 'white', padding: '0.4rem 1rem', borderRadius: '15px', fontSize: '1.2rem', fontWeight: '600', display: 'inline-block', marginBottom: '1rem'}}>{role.date}</span>
                  <h3 className="highlight">{role.title}</h3>
                  <p><strong>{role.location}</strong></p>
                  <ul>
                    {(role.items || []).map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* GenAI Society */}
            <div className="project-card animate">
              {(t.leadership.genAI?.roles || []).map((role, roleIndex) => (
                <div key={roleIndex} style={{marginBottom: roleIndex < t.leadership.genAI.roles.length - 1 ? '2rem' : '0'}}>
                  <span className="date" style={{background: 'var(--blue)', color: 'white', padding: '0.4rem 1rem', borderRadius: '15px', fontSize: '1.2rem', fontWeight: '600', display: 'inline-block', marginBottom: '1rem'}}>{role.date}</span>
                  <h3 className="highlight">{role.title}</h3>
                  <p><strong>{role.location}</strong></p>
                  <ul>
                    {(role.items || []).map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Siemens */}
            <div className="project-card animate">
              {(t.leadership.siemens?.roles || []).map((role, roleIndex) => (
                <div key={roleIndex} style={{marginBottom: roleIndex < t.leadership.siemens.roles.length - 1 ? '2rem' : '0'}}>
                  <span className="date" style={{background: 'var(--blue)', color: 'white', padding: '0.4rem 1rem', borderRadius: '15px', fontSize: '1.2rem', fontWeight: '600', display: 'inline-block', marginBottom: '1rem'}}>{role.date}</span>
                  <h3 className="highlight">{role.title}</h3>
                  <p><strong>{role.location}</strong></p>
                  <ul>
                    {(role.items || []).map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section alt-bg" id="skills">
        <div className="container">
          <h2 className="animate">{t.skills.title}</h2>
          
          <div className="skills-container">
            <h3 className="subheading animate">{t.skills.programmingTools}</h3>
            <div className="skills-grid animate">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">R</span>
              <span className="skill-tag">SQL</span>
              <span className="skill-tag">NoSQL</span>
              <span className="skill-tag">Power BI</span>
              <span className="skill-tag">SPSS Modeler</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">Excel & VBA</span>
            </div>

            <h3 className="subheading animate">{t.skills.cloudAI}</h3>
            <div className="skills-grid animate">
              <span className="skill-tag">IBM Watsonx</span>
              <span className="skill-tag">IBM Cloud</span>
              <span className="skill-tag">AWS</span>
              <span className="skill-tag">Azure</span>
              <span className="skill-tag">GCP</span>
              <span className="skill-tag">Generative AI</span>
              <span className="skill-tag">RAG</span>
              <span className="skill-tag">Agent Development</span>
            </div>

            <h3 className="subheading animate">{t.skills.coreCompetencies}</h3>
            <div className="skills-grid animate">
              <span className="skill-tag">Data Modelling</span>
              <span className="skill-tag">Statistical Analysis</span>
              <span className="skill-tag">Data Strategy</span>
              <span className="skill-tag">Prompt Engineering</span>
              <span className="skill-tag">Stakeholder Management</span>
              <span className="skill-tag">Design Thinking</span>
              <span className="skill-tag">Agile Scrum</span>
              <span className="skill-tag">Storytelling</span>
            </div>
          </div>

          <h3 className="subheading animate" style={{marginTop: '5rem'}}>{t.skills.certifications}</h3>
          <div className="cert-grid">
            <a href="https://www.credly.com/users/joaquin-villar" target="_blank" rel="noopener noreferrer" className="cert-item animate">
              <img 
                src={process.env.PUBLIC_URL + '/badges/ibm-internship.png'} 
                alt="IBM Internship Program Certificate" 
                className="cert-badge"
              />
              <div className="cert-content">
                <h3>IBM Internship Program Certificate</h3>
              </div>
            </a>
            <a href="https://www.credly.com/users/joaquin-villar" target="_blank" rel="noopener noreferrer" className="cert-item animate">
              <img 
                src={process.env.PUBLIC_URL + '/badges/agentic-ai.png'} 
                alt="IBM Consulting Agentic AI Foundations" 
                className="cert-badge"
              />
              <div className="cert-content">
                <h3>IBM Consulting Agentic AI Foundations</h3>
              </div>
            </a>
            <a href="https://www.credly.com/users/joaquin-villar" target="_blank" rel="noopener noreferrer" className="cert-item animate">
              <img 
                src={process.env.PUBLIC_URL + '/badges/watsonx.png'} 
                alt="Watsonx.ai Data Science & MLOps Sales Foundation" 
                className="cert-badge"
              />
              <div className="cert-content">
                <h3>Watsonx.ai Data Science & MLOps Sales Foundation</h3>
              </div>
            </a>
            <a href="https://www.credly.com/users/joaquin-villar" target="_blank" rel="noopener noreferrer" className="cert-item animate">
              <img 
                src={process.env.PUBLIC_URL + '/badges/aws-cloud.png'} 
                alt="AWS Cloud Foundations" 
                className="cert-badge"
              />
              <div className="cert-content">
                <h3>AWS Cloud Foundations</h3>
              </div>
            </a>
            <a href="https://www.credly.com/users/joaquin-villar" target="_blank" rel="noopener noreferrer" className="cert-item animate">
              <img 
                src={process.env.PUBLIC_URL + '/badges/design-thinking.png'} 
                alt="Design Thinking Co-Creator" 
                className="cert-badge"
              />
              <div className="cert-content">
                <h3>Design Thinking Co-Creator</h3>
              </div>
            </a>
            <a href="https://www.credly.com/users/joaquin-villar" target="_blank" rel="noopener noreferrer" className="cert-item animate">
              <img 
                src={process.env.PUBLIC_URL + '/badges/academic-ambassador.png'} 
                alt="IBM Academic Ambassador" 
                className="cert-badge"
              />
              <div className="cert-content">
                <h3>IBM Academic Ambassador</h3>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="section" id="languages">
        <div className="container">
          <h2 className="animate">{t.languages.title}</h2>
          
          <div className="skills-grid animate">
            <div className={`language-card ${language === 'es' ? 'active' : ''}`} onClick={() => setLanguage('es')}>
              <div className="language-flag">🇪🇸</div>
              <h3>{t.languages.spanish}</h3>
              <p>{t.languages.native}</p>
            </div>
            <div className={`language-card ${language === 'en' ? 'active' : ''}`} onClick={() => setLanguage('en')}>
              <div className="language-flag">🇬🇧</div>
              <h3>{t.languages.english}</h3>
              <p>{t.languages.bilingual}</p>
            </div>
            <div className={`language-card ${language === 'it' ? 'active' : ''}`} onClick={() => setLanguage('it')}>
              <div className="language-flag">🇮🇹</div>
              <h3>{t.languages.italian}</h3>
              <p>{t.languages.intermediate}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section alt-bg" id="contact">
        <div className="container">
          <h2 className="animate">{t.contact.title}</h2>
          
          <div className="contact-grid">
            <a href="mailto:joaquinvillar8802@gmail.com" className="contact-item animate">
              <div className="contact-icon">📧</div>
              <div>
                <h3>{t.contact.email}</h3>
                <p>joaquinvillar8802@gmail.com</p>
              </div>
            </a>

            <a href="https://linkedin.com/in/joaquin-villar-11b0171b7/" target="_blank" rel="noopener noreferrer" className="contact-item animate">
              <div className="contact-icon">💼</div>
              <div>
                <h3>{t.contact.linkedin}</h3>
                <p>Joaquin Villar</p>
              </div>
            </a>

            <div className="contact-item animate">
              <div className="contact-icon">📍</div>
              <div>
                <h3>{t.contact.location}</h3>
                <p>Sheffield, United Kingdom</p>
              </div>
            </div>
          </div>
            {/* Download Resume Button*/}
          <div className="download-resume-wrapper animate" style={{textAlign: 'center', marginTop: '3rem'}}>
              <button className="download-resume-btn" onClick={handleDownloadResume}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                {t.contact.downloadText}
              </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Joaquin Villar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;