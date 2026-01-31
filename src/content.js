export const translations = {
  en: {
    // ... [nav, hero, about, experience, projects, education, leadership remain the same] ...
    // COPY THE PREVIOUS SECTIONS HERE, I WILL FOCUS ON SKILLS & BADGES BELOW
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
            title: 'CSM Solutions Architect, Technology Group Intern - IBM',
            location: 'London, UK',
            items: [
              'Built a sustainable data integration asset leveraging Apache Iceberg tables and Watsonx.ai to enrich and query the metadata of unstructured financial statements within IBM Cloud, reducing evaluation time in mortgage risk assessment by 18% and LLM hallucination risk by 30%.',
              'Designed and deployed a Multimodal RAG AI Agent to query the CSM deployments dashboard, saving 3-4 hours every week by autonomously generating and distributing context-aware executive summaries.',
              'Delivered multiple product demos across AI & Analytics Consulting and Technical Sales, showcasing IBM’s go-to-market platforms through effective storytelling and client engagement models.',
              'Supported asset-based consulting for a leading financial services provider, gaining exposure to the design of AI Assistant user journeys and the development of an Agentic AI strategy.'
            ]
          }
        ]
      },
      primax: {
        roles: [
          {
            date: 'June 2024 – August 2024',
            title: 'Loyalty CRM & Digital Sales Intern - Corporación Primax S.A.',
            location: 'Lima, Perú',
            items: [
              'Quantified market opportunity using RFM clustering on 5+ million records to aid the digital sales 2024 Q4 strategy.',
              'Redesigned margin matrices to better reflect profitability across consumer groups.',
              'Designed and proposed a managerial dashboard for the Colombia division expansion.',
              'Developed automated One-Pager alerts for KPI monitoring across the sales department.'
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
              'Optimised the clinic pharmacy’s procurement process by integrating legacy ERP with RPA prototypes, reducing decision-making contact hours by 37% between finance and procurement teams.'
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
              'Contributed to the company’s digital transformation by automating reporting processes and developing predictive models for customer churn.'
            ]
          },
          {
            date: 'June 2022 – September 2022',
            title: 'Process Innovation Summer Intern - Pacifico Seguros',
            location: 'Lima, Perú',
            items: [
              'Streamlined internal workflows by implementing low-code solutions and RPA bots, reducing manual effort in operational tasks by 25%.'
            ]
          }
        ]
      }
    },
    projects: {
      title: 'Projects',
      greenhouse: {
        title: 'Greenhouse Digital Twin',
        tech: 'SNNs, AWS Lambda, PostgreSQL RDS, Serverless',
        img: '/greenhouse.png',
        items: [
          'Implemented a near real-time digital twin for greenhouse monitoring using Spiking Neural Networks (SNNs).',
          'Built a serverless architecture on AWS utilizing Lambda, EventBridge, and PostgreSQL RDS for sensor data processing.',
          'Integrated multi-sensor anomaly detection to monitor environment health and trigger alerts.',
          'Developed an interactive dashboard for high-frequency data visualization and insights.'
        ],
        links: [
          { type: 'demo', url: 'https://greenhouse-digital-twin-dashboard.vercel.app/' }
        ]
      },
      portfolio: {
        title: 'Personal Portfolio Website',
        tech: 'React, JavaScript, CSS',
        items: [
          'Built modern, responsive portfolio showcasing professional experience and projects',
          'Implemented animations, interactive UI components and multi-language support',
          'Deployed using GitHub Pages with automated CI/CD pipeline'
        ],
        links: [
          { type: 'github', url: 'https://github.com/joaquin-villar/joaquinvillar.github.io' }
        ]
      },
      newsClassifier: {
        title: 'LoRA News Classifier',
        tech: 'NLP, PEFT (LoRA), Streamlit, Hugging Face',
        items: [
          'Fine-tuned a Large Language Model using Low-Rank Adaptation (LoRA) for news categorization',
          'Deployed the model as an interactive web app using Streamlit',
          'Hosted on Hugging Face Spaces for public accessibility'
        ],
        links: [
          { type: 'huggingface', url: 'https://jvillar02-news-classifier-streamlit.hf.space/' },
          { type: 'demo', url: 'https://lora-news-category.streamlit.app/' }
        ]
      },
      dssSociety: {
        title: 'Data Science Society Website',
        tech: 'React, Web Development, Vercel',
        items: [
          'Designed and developed the official website for 120+ society members',
          'Integrated event management and member communication systems',
          'Deployed on Vercel for high performance and scalability'
        ],
        links: [
          { type: 'demo', url: 'https://sheffdatasoc.vercel.app/' }
        ]
      },
      limaMapping: {
        title: 'Lima Projects Mapping',
        tech: 'Geospatial Data, Visualization, Vercel',
        items: [
          'Interactive map visualization of infrastructure projects in Lima',
          'Provides insights into urban development and resource allocation',
          'Optimized for web performance and mobile responsiveness'
        ],
        links: [
          { type: 'demo', url: 'https://lima-projects-mapping.vercel.app/' }
        ]
      },
      windEnergy: {
        title: 'Wind Energy Research',
        tech: 'Data Science, Renewable Energy, Statistics',
        items: [
          'Conducted research on wind energy optimization and sustainability',
          'Applied machine learning models for energy production forecasting',
          'Analyzed meteorological data to identify optimal turbine placement'
        ],
        links: []
      }
    },
    education: {
      title: 'Education',
      degree: 'BSc Data Science',
      university: 'The University of Sheffield',
      period: 'September 2023 – June 2026',
      grade: 'Expected: First-Class Honours (1st)',
      coursework: 'Relevant Coursework:',
      courses: 'Inferential Statistics, Building AI Applications, Database Modelling, AI Ethics, Machine Learning. Extracurriculars: Sheffield University Rowing Club, Data Science Society (Founder), Sheffield Technology Group (Co-Founder), Siemens DIZ Advisor, Italian Society, Wine Society (Treasurer)'
    },
    leadership: {
      title: 'Leadership & Volunteering',
      dss: {
        roles: [
          {
            date: 'September 2025 – Present',
            title: 'Outreach Officer & IBM Academic Ambassador',
            location: 'University of Sheffield',
            items: [
              'Launched the first Data Dive competition securing £1000 in funding and partnership with Sirius Digital; guided 100+ students through machine learning projects.',
              'Collaborated with IBM’s CSR team on an OBD2 Scanner data project involving 500k+ records to simulate predictive maintenance and build a monitoring dashboard.'
            ]
          },
          {
            date: 'February 2024 – May 2025',
            title: 'Founder & President - Data Science Society',
            location: 'University of Sheffield',
            items: [
              'Founded and chaired the society through 15 successful events for 108 members, driving membership growth through student-financed budgets and corporate sponsorships.'
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

    // --- UPDATED SKILLS SECTION ---
    skills: {
      title: 'Skills & Technologies',
      programmingTools: {
        title: 'Tools & Platforms',
        items: ['Python', 'R Programming', 'SQL', 'NoSQL', 'Power BI', 'SPSS Modeler', 'Watsonx Platform', 'IBM Cloud', 'AWS', 'Azure', 'GCP', 'Salesforce', 'MCP', 'OCR', 'AstraDB', 'Langgraph', 'Langchain', 'Generative AI', 'Docker', 'Postman']
      },
      cloudAI: {
        title: 'Core Competencies',
        items: ['Data Modelling & Visualisation', 'Statistical Analysis', 'RAG', 'Agent Development', 'Prompt Engineering', 'Data Strategy & Governance', 'Leadership', 'Teamwork', 'Stakeholder Management', 'Design Thinking', 'Agile Scrum', 'Storytelling']
      },
      coreCompetencies: {
        title: 'Languages',
        items: ['Spanish (Native)', 'English (Native Bilingual)', 'Italian (B1/B2)']
      },
      certifications: {
        title: 'Certifications',
        items: [
          { img: 'ibm-internship.png', title: 'IBM Internship Program' },
          { img: 'agentic-ai.png', title: 'IBM Consulting Agentic AI Foundations' },
          { img: 'watsonx.png', title: 'Watsonx.ai Data Science and MLOps Sales' },
          { img: 'aws-cloud.png', title: 'AWS Cloud Foundations' },
          { img: 'design-thinking.png', title: 'Accenture Strategy Consulting' },
          { img: 'academic-ambassador.png', title: 'IBM Academic Ambassador' }
        ]
      }
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
    // ... [Nav, Hero, About, Experience, Projects, Education, Leadership - KEEP AS IS] ...
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
            title: 'Pasante de Arquitecto de Soluciones CSM, Tecnología - IBM',
            location: 'Londres, Reino Unido',
            items: [
              'Creé un activo de integración de datos sostenible mediante tablas Apache Iceberg y Watsonx.ai, reduciendo el tiempo de evaluación en un 18% y el riesgo de alucinación de LLM en un 30%.',
              'Diseñé e implementé un Agente de IA RAG Multimodal para el panel de despliegue de CSM, ahorrando 3-4 horas semanales mediante la generación autónoma de resúmenes ejecutivos.',
              'Entregué múltiples demostraciones de productos en Consultoría de IA y Ventas Técnicas, destacando las plataformas de IBM con un enfoque narrativo y de compromiso con el cliente.',
              'Apoyé la consultoría basada en activos para un proveedor líder de servicios financieros, ganando experiencia en el diseño de viajes de usuario de Asistentes de IA y estrategias de IA Agéntica.'
            ]
          }
        ]
      },
      primax: {
        roles: [
          {
            date: 'Junio 2024 – Agosto 2024',
            title: 'Pasante de CRM de Fidelización y Ventas Digitales - Corporación Primax S.A.',
            location: 'Lima, Perú',
            items: [
              'Cuantifiqué la oportunidad de mercado mediante clustering RFM con más de 5 millones de registros para apoyar la estrategia de ventas digitales del cuarto trimestre de 2024.',
              'Rediseñé matrices de margen para reflejar mejor la rentabilidad por grupos de consumidores.',
              'Diseñé y propuse un panel gerencial para la expansión de la división de Colombia.',
              'Desarrollé alertas automatizadas de una página para el monitoreo de KPIs en el departamento de ventas.'
            ]
          }
        ]
      },
      aviva: {
        roles: [
          {
            date: 'Junio 2023 – Septiembre 2023',
            title: 'Pasante de Gestión de Datos - Clínica Aviva / Grupo Intercorp',
            location: 'Lima, Perú',
            items: [
              'Optimicé el proceso de adquisición de la farmacia clínica integrando ERP heredado con prototipos RPA, reduciendo las horas de contacto para la toma de decisiones en un 37%.'
            ]
          }
        ]
      },
      pacifico: {
        roles: [
          {
            date: 'Septiembre 2022 – Diciembre 2022',
            title: 'Pasante de Analítica de Datos (Off-Cycle) - Pacifico Seguros',
            location: 'Lima, Perú',
            items: [
              'Contribuí a la transformación digital de la empresa automatizando procesos de reporte y desarrollando modelos predictivos de fuga de clientes.'
            ]
          },
          {
            date: 'Junio 2022 – Septiembre 2022',
            title: 'Pasante de Innovación de Procesos - Pacifico Seguros',
            location: 'Lima, Perú',
            items: [
              'Agilicé los flujos de trabajo internos mediante la implementación de soluciones low-code y bots RPA, reduciendo el esfuerzo manual en un 25%.'
            ]
          }
        ]
      }
    },
    projects: {
      title: 'Proyectos',
      greenhouse: {
        title: 'Gemelo Digital de Invernadero',
        tech: 'SNNs, AWS Lambda, PostgreSQL RDS, Serverless',
        img: '/greenhouse.png',
        items: [
          'Implementé un gemelo digital en tiempo casi real para el monitoreo de invernaderos usando Redes Neuronales de Impulsos (SNNs).',
          'Construí una arquitectura serverless en AWS utilizando Lambda, EventBridge y PostgreSQL RDS para el procesamiento de datos de sensores.',
          'Integré detección de anomalías multi-sensor para monitorear la salud ambiental y activar alertas.',
          'Desarrollé un panel interactivo para visualización de datos de alta frecuencia e insights.'
        ],
        links: [
          { type: 'demo', url: 'https://greenhouse-digital-twin-dashboard.vercel.app/' }
        ]
      },
      portfolio: {
        title: 'Sitio Web de Portafolio Personal',
        tech: 'React, JavaScript, CSS',
        items: [
          'Construí un portafolio moderno y responsive',
          'Implementé animaciones y soporte multilingüe',
          'Desplegado usando GitHub Pages con CI/CD'
        ],
        links: [
          { type: 'github', url: 'https://github.com/joaquin-villar/joaquinvillar.github.io' }
        ]
      },
      newsClassifier: {
        title: 'Clasificador de Noticias LoRA',
        tech: 'NLP, PEFT (LoRA), Streamlit, Hugging Face',
        items: [
          'Afiné un LLM usando Adaptación de Bajo Rango (LoRA)',
          'Desplegué el modelo como app web interactiva en Streamlit',
          'Alojado en Hugging Face Spaces'
        ],
        links: [
          { type: 'huggingface', url: 'https://jvillar02-news-classifier-streamlit.hf.space/' },
          { type: 'demo', url: 'https://lora-news-category.streamlit.app/' }
        ]
      },
      dssSociety: {
        title: 'Sitio Web Data Science Society',
        tech: 'React, Desarrollo Web, Vercel',
        items: [
          'Diseñé y desarrollé el sitio web oficial para más de 120 miembros',
          'Integré sistemas de gestión de eventos',
          'Desplegado en Vercel para alto rendimiento'
        ],
        links: [
          { type: 'demo', url: 'https://sheffdatasoc.vercel.app/' }
        ]
      },
      limaMapping: {
        title: 'Mapeo de Proyectos en Lima',
        tech: 'Datos Geoespaciales, Visualización',
        items: [
          'Visualización interactiva de proyectos de infraestructura en Lima',
          'Proporciona insights sobre desarrollo urbano',
          'Optimizado para web y móviles'
        ],
        links: [
          { type: 'demo', url: 'https://lima-projects-mapping.vercel.app/' }
        ]
      },
      windEnergy: {
        title: 'Investigación de Energía Eólica',
        tech: 'Ciencia de Datos, Energía Renovable',
        items: [
          'Investigación sobre optimización de energía eólica',
          'Apliqué modelos de ML para pronóstico de producción',
          'Analicé datos meteorológicos'
        ],
        links: []
      }
    },
    education: {
      title: 'Educación',
      degree: 'Grado en Ciencia de Datos',
      university: 'La Universidad de Sheffield',
      period: 'Septiembre 2023 – Junio 2026',
      grade: 'Previsto: Matrícula de Honor (1st)',
      coursework: 'Cursos Relevantes:',
      courses: 'Estadística Inferencial, Aplicaciones de IA, Modelado de Bases de Datos, Ética en IA, Machine Learning. Actividades: Club de Remo, Data Science Society (Fundador), Sheffield Technology Group (Cofundador), Asesor Siemens DIZ, Italian Society, Wine Society (Tesorero)'
    },
    leadership: {
      title: 'Liderazgo y Voluntariado',
      dss: {
        roles: [
          {
            date: 'Septiembre 2025 – Presente',
            title: 'Responsable de Alcance y Embajador Académico IBM',
            location: 'Universidad de Sheffield',
            items: [
              'Lancé la primera competición Data Dive asegurando £1000 en fondos y colaboración con Sirius Digital; guiando a más de 100 estudiantes en proyectos de aprendizaje automático.',
              'Colaboré con el equipo de RSC de IBM en un proyecto de datos OBD2 con más de 500k registros para mantenimiento predictivo.'
            ]
          },
          {
            date: 'Febrero 2024 – Mayo 2025',
            title: 'Fundador y Presidente - Data Science Society',
            location: 'Universidad de Sheffield',
            items: [
              'Fundé y presidí la sociedad a través de 15 eventos exitosos para 108 miembros, impulsando el crecimiento mediante presupuestos financiados por estudiantes y patrocinios corporativos.'
            ]
          }
        ]
      },
      genAI: {
        roles: [
          {
            date: 'Julio 2025 – Septiembre 2025',
            title: 'GenAI Society - Líder de Evento de Pasantía de Verano',
            location: 'IBM',
            items: [
              'Organicé evento de medio día \'IA en Medios\' para más de 50 Profesionales Jóvenes',
              'Presenté SMEs y Director General como oradores invitados',
              'Primer evento de este tipo en IBM UKI'
            ]
          }
        ]
      },
      siemens: {
        roles: [
          {
            date: 'Octubre 2024 – Mayo 2025',
            title: 'Asesor de Transformación Digital',
            location: 'Zona de Innovación Digital de Siemens',
            items: [
              'Mostré el potencial de análisis de datos de transmisión en vivo y software CAD',
              'Demostré el Gemelo Digital de la Planta Piloto Diamond',
              'El único de su tipo en cualquier universidad del Reino Unido'
            ]
          }
        ]
      }
    },

    // --- UPDATED SKILLS SECTION (ES) ---
    skills: {
      title: 'Habilidades y Tecnologías',
      programmingTools: {
        title: 'Herramientas y Plataformas',
        items: ['Python', 'Programación en R', 'SQL', 'NoSQL', 'Power BI', 'SPSS Modeler', 'Watsonx Platform', 'IBM Cloud', 'AWS', 'Azure', 'GCP', 'Salesforce', 'MCP', 'OCR', 'AstraDB', 'Langgraph', 'Langchain', 'IA Generativa', 'Docker', 'Postman']
      },
      cloudAI: {
        title: 'Competencias Principales',
        items: ['Modelado y Visualización de Datos', 'Análisis Estadístico', 'RAG', 'Desarrollo de Agentes', 'Ingeniería de Prompts', 'Estrategia y Gobernanza de Datos', 'Liderazgo', 'Trabajo en Equipo', 'Gestión de Interesados', 'Design Thinking', 'Agile Scrum', 'Storytelling']
      },
      coreCompetencies: {
        title: 'Idiomas',
        items: ['Español (Nativo)', 'Inglés (Bilingüe Nativo)', 'Italiano (B1/B2)']
      },
      certifications: {
        title: 'Certificaciones',
        items: [
          { img: 'ibm-internship.png', title: 'IBM Internship Program' },
          { img: 'agentic-ai.png', title: 'IBM Consulting Agentic AI Foundations' },
          { img: 'watsonx.png', title: 'Watsonx.ai Data Science and MLOps Sales' },
          { img: 'aws-cloud.png', title: 'AWS Cloud Foundations' },
          { img: 'design-thinking.png', title: 'Accenture Strategy Consulting' },
          { img: 'academic-ambassador.png', title: 'IBM Academic Ambassador' }
        ]
      }
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
    // ... [Nav, Hero, About, Experience, Projects, Education, Leadership - KEEP AS IS] ...
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
            title: 'Stagista Architetto di Soluzioni CSM, Tecnologia - IBM',
            location: 'Londra, Regno Unito',
            items: [
              'Realizzato un asset di integrazione dati sostenibile utilizzando tabelle Apache Iceberg e Watsonx.ai, riducendo il tempo di valutazione del 18% e il rischio di allucinazione LLM del 30%.',
              'Progettato e implementato un Agente AI RAG Multimodale per la dashboard di CSM, risparmiando 3-4 ore settimanali grazie alla generazione autonoma di riassunti esecutivi.',
              'Consegnato molteplici demo di prodotto in Consulenza AI & Analytics e Vendite Tecniche, valorizzando le piattaforme IBM tramite storytelling e modelli di coinvolgimento cliente.',
              'Supportato consulenza basata su asset per un leader dei servizi finanziari, acquisendo esperienza nel design di user journey per Assistenti AI e strategie di IA Agentica.'
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
              'Quantificato opportunità di mercato tramite clustering RFM su oltre 5 milioni di record per supportare la strategia di vendite digitali del Q4 2024.',
              'Ridisegnato matrici di margine per riflettere meglio la redditività per gruppi di consumatori.',
              'Progettato e proposto una dashboard manageriale per l\'espansione della divisione in Colombia.',
              'Sviluppato avvisi automatizzati "One-Pager" per il monitoraggio dei KPI nel dipartimento vendite.'
            ]
          }
        ]
      },
      aviva: {
        roles: [
          {
            date: 'Giugno 2023 – Settembre 2023',
            title: 'Stagista Gestione Dati - Clínica Aviva / Gruppo Intercorp',
            location: 'Lima, Perù',
            items: [
              'Ottimizzato il processo di approvvigionamento della farmacia integrando ERP legacy con prototipi RPA, riducendo le ore di contatto per le decisioni del 37%.'
            ]
          }
        ]
      },
      pacifico: {
        roles: [
          {
            date: 'Settembre 2022 – Dicembre 2022',
            title: 'Stagista Data Analytics (Off-Cycle) - Pacifico Seguros',
            location: 'Lima, Perù',
            items: [
              'Contribuito alla trasformazione digitale dell\'azienda automatizzando processi di reporting e sviluppando modelli predittivi per l\'abbandono dei clienti.'
            ]
          },
          {
            date: 'Giugno 2022 – Settembre 2022',
            title: 'Stagista Innovazione dei Processi - Pacifico Seguros',
            location: 'Lima, Perù',
            items: [
              'Ottimizzato i flussi di lavoro interni implementando soluzioni low-code e bot RPA, riducendo l\'impegno manuale del 25%.'
            ]
          }
        ]
      }
    },
    projects: {
      title: 'Progetti',
      greenhouse: {
        title: 'Digital Twin Serra',
        tech: 'SNNs, AWS Lambda, PostgreSQL RDS, Serverless',
        img: '/greenhouse.png',
        items: [
          'Implementato un gemello digitale in tempo quasi reale per il monitoraggio delle serre utilizzando Spiking Neural Networks (SNNs).',
          'Costruita un\'architettura serverless su AWS utilizzando Lambda, EventBridge e PostgreSQL RDS per l\'elaborazione dei dati dei sensori.',
          'Integrato il rilevamento delle anomalie multi-sensore per monitorare la salute dell\'ambiente e attivare avvisi.',
          'Sviluppato un dashboard interattivo per la visualizzazione di dati ad alta frequenza e insight.'
        ],
        links: [
          { type: 'demo', url: 'https://greenhouse-digital-twin-dashboard.vercel.app/' }
        ]
      },
      portfolio: {
        title: 'Sito Web Portfolio Personale',
        tech: 'React, JavaScript, CSS',
        items: [
          'Ho costruito un portfolio moderno e responsive',
          'Ho implementato animazioni e supporto multilingue',
          'Distribuito usando GitHub Pages con CI/CD'
        ],
        links: [
          { type: 'github', url: 'https://github.com/joaquin-villar/joaquinvillar.github.io' }
        ]
      },
      newsClassifier: {
        title: 'Classificatore di Notizie LoRA',
        tech: 'NLP, PEFT (LoRA), Streamlit, Hugging Face',
        items: [
          'Ho perfezionato un LLM usando Low-Rank Adaptation (LoRA)',
          'Ho distribuito il modello come app web interattiva su Streamlit',
          'Ospitato su Hugging Face Spaces'
        ],
        links: [
          { type: 'huggingface', url: 'https://jvillar02-news-classifier-streamlit.hf.space/' },
          { type: 'demo', url: 'https://lora-news-category.streamlit.app/' }
        ]
      },
      dssSociety: {
        title: 'Sito Web Data Science Society',
        tech: 'React, Sviluppo Web, Vercel',
        items: [
          'Ho progettato e sviluppato il sito ufficiale per oltre 120 membri',
          'Ho integrato sistemi di gestione eventi',
          'Distribuito su Vercel per alte prestazioni'
        ],
        links: [
          { type: 'demo', url: 'https://sheffdatasoc.vercel.app/' }
        ]
      },
      limaMapping: {
        title: 'Mappatura Progetti Lima',
        tech: 'Dati Geospaziali, Visualizzazione',
        items: [
          'Visualizzazione interattiva dei progetti infrastrutturali a Lima',
          'Fornisce approfondimenti sullo sviluppo urbano',
          'Ottimizzato per web e dispositivi mobili'
        ],
        links: [
          { type: 'demo', url: 'https://lima-projects-mapping.vercel.app/' }
        ]
      },
      windEnergy: {
        title: 'Ricerca Energia Eolica',
        tech: 'Data Science, Energia Rinnovabile',
        items: [
          'Ho condotto ricerca sull\'ottimizzazione dell\'energia eolica',
          'Ho applicato modelli di ML per previsione produzione',
          'Ho analizzato dati meteorologici'
        ],
        links: []
      }
    },
    education: {
      title: 'Istruzione',
      degree: 'Laurea in Data Science',
      university: 'Università di Sheffield',
      period: 'Settembre 2023 – Giugno 2026',
      grade: 'Previsto: Lode di Prima Classe (1st)',
      coursework: 'Corsi Rilevanti:',
      courses: 'Statistica Inferenziale, Applicazioni AI, Modellazione Database, Etica AI, Machine Learning. Attività: Club di Canottaggio, Data Science Society (Fondatore), Sheffield Technology Group (Cofondatore), Consulente Siemens DIZ, Italian Society, Wine Society (Tesoriere)'
    },
    leadership: {
      title: 'Leadership e Volontariato',
      dss: {
        roles: [
          {
            date: 'Settembre 2025 – Presente',
            title: 'Responsabile Outreach e IBM Academic Ambassador',
            location: 'Università di Sheffield',
            items: [
              'Lanciata la prima competizione Data Dive assicurando £1000 in finanziamenti e partnership con Sirius Digital; guidato oltre 100 studenti in progetti di machine learning.',
              'Collaborato con il team CSR di IBM su un progetto dati OBD2 con oltre 500k record per manutenzione predittiva.'
            ]
          },
          {
            date: 'Febbraio 2024 – Maggio 2025',
            title: 'Fondatore e Presidente - Data Science Society',
            location: 'Università di Sheffield',
            items: [
              'Fondatore e presidente della società tramite 15 eventi di successo per 108 membri, guidando la crescita tramite budget finanziati dagli studenti e sponsorizzazioni aziendali.'
            ]
          }
        ]
      },
      genAI: {
        roles: [
          {
            date: 'Luglio 2025 – Settembre 2025',
            title: 'GenAI Society - Responsabile Evento Stage Estivo',
            location: 'IBM',
            items: [
              'Ho organizzato evento di mezza giornata \'AI nei Media\' per oltre 50 Giovani Professionisti',
              'Ho presentato SME e Direttore Generale come relatori ospiti',
              'Primo evento del suo genere in IBM UKI'
            ]
          }
        ]
      },
      siemens: {
        roles: [
          {
            date: 'Ottobre 2024 – Maggio 2025',
            title: 'Consulente Trasformazione Digitale',
            location: 'Zona di Innovazione Digitale Siemens',
            items: [
              'Ho mostrato il potenziale dell\'analisi dati in streaming live e software CAD',
              'Ho dimostrato il Gemello Digitale della Diamond Pilot Plant',
              'L\'unico del suo genere in qualsiasi università del Regno Unito'
            ]
          }
        ]
      }
    },

    // --- UPDATED SKILLS SECTION (IT) ---
    skills: {
      title: 'Competenze e Tecnologie',
      programmingTools: {
        title: 'Strumenti e Piattaforme',
        items: ['Python', 'Programmazione R', 'SQL', 'NoSQL', 'Power BI', 'SPSS Modeler', 'Watsonx Platform', 'IBM Cloud', 'AWS', 'Azure', 'GCP', 'Salesforce', 'MCP', 'OCR', 'AstraDB', 'Langgraph', 'Langchain', 'IA Generativa', 'Docker', 'Postman']
      },
      cloudAI: {
        title: 'Competenze Principali',
        items: ['Modellazione e Visualizzazione Dati', 'Analisi Statistica', 'RAG', 'Sviluppo Agenti', 'Prompt Engineering', 'Strategia e Governance Dati', 'Leadership', 'Lavoro di Squadra', 'Gestione Stakeholder', 'Design Thinking', 'Agile Scrum', 'Storytelling']
      },
      coreCompetencies: {
        title: 'Lingue',
        items: ['Spagnolo (Madrelingua)', 'Inglese (Madrelingua Bilingue)', 'Italiano (B1/B2)']
      },
      certifications: {
        title: 'Certificazioni',
        items: [
          { img: 'ibm-internship.png', title: 'IBM Internship Program' },
          { img: 'agentic-ai.png', title: 'IBM Consulting Agentic AI Foundations' },
          { img: 'watsonx.png', title: 'Watsonx.ai Data Science and MLOps Sales' },
          { img: 'aws-cloud.png', title: 'AWS Cloud Foundations' },
          { img: 'design-thinking.png', title: 'Accenture Strategy Consulting' },
          { img: 'academic-ambassador.png', title: 'IBM Academic Ambassador' }
        ]
      }
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