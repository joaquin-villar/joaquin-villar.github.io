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
            title: 'CSM Solutions Architect Summer Intern - IBM',
            location: 'London, UK',
            items: [
              'Built a sustainable data integration asset leveraging Apache Iceberg tables and Watsonx.ai to enrich and query the metadata of unstructured financial statements within IBM Cloud. This reduced evaluation time in the mortgage risk assessment process by 18% and LLM hallucination risk by 30% for a leading financial services client. ',
              'Designed and deployed a Multimodal RAG AI Agent to query the CSM business unit’s deployments dashboard. The agent autonomously extracts key insights, generates context aware executive summaries and distributes them to the respective stakeholders via email, saving 3-4 hours every week in internal debrief meetings.',
              'Delivered multiple product demos across AI & Analytics Consulting and Technical Sales, showcasing deployed use cases and IBM’s go-to-market platforms through effective use of the client engagement model and storytelling',
              'Supported asset-based consulting engagement with the conversational banking unit of a leading financial services provider, gaining exposure to the design and deployment of AI Assistant user journeys and the development of an Agentic AI strategy.'
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
      greenhouse: {
        title: 'Greenhouse Digital Shadow',
        tech: 'SNNs, AWS Lambda, IoT Core, Serverless',
        items: [
          'Implemented a near real-time digital shadow for greenhouse monitoring using Spiking Neural Networks (SNNs)',
          'Built a serverless architecture on AWS utilizing IoT Core, Lambda, and DynamoDB for sensor data processing',
          'Integrated multi-sensor anomaly detection to monitor environment health and trigger alerts',
          'Developed an interactive dashboard for high-frequency data visualization and insights'
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

    // --- UPDATED SKILLS SECTION ---
    skills: {
      title: 'Skills & Technologies',
      programmingTools: {
        title: 'Programming & Tools',
        items: ['Python', 'R', 'SQL', 'NoSQL', 'Power BI', 'SPSS Modeler', 'Docker', 'Excel & VBA']
      },
      cloudAI: {
        title: 'Cloud & AI Platforms',
        items: ['IBM Watsonx', 'IBM Cloud', 'AWS', 'Azure', 'GCP', 'Generative AI', 'RAG', 'Agent Development']
      },
      coreCompetencies: {
        title: 'Core Competencies',
        items: ['Data Modelling', 'Statistical Analysis', 'Data Strategy', 'Prompt Engineering', 'Stakeholder Management', 'Design Thinking', 'Agile Scrum', 'Storytelling']
      },
      certifications: {
        title: 'Certifications',
        items: [
          { img: 'ibm-internship.png', title: 'IBM Internship Program' },
          { img: 'agentic-ai.png', title: 'IBM Agentic AI Foundations' },
          { img: 'watsonx.png', title: 'Watsonx.ai Sales Foundation' },
          { img: 'aws-cloud.png', title: 'AWS Cloud Foundations' },
          { img: 'design-thinking.png', title: 'Design Thinking Co-Creator' },
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
            date: 'Septiembre 2022 – Diciembre 2022',
            title: 'Data Analytics Off-Cycle Intern - Pacifico Seguros',
            location: 'Lima, Perú',
            items: [
              'Contributed to the company’s digital transformation...'
            ]
          },
          {
            date: 'Junio 2022 – Septiembre 2022',
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
      greenhouse: {
        title: 'Gemelo Digital de Invernadero',
        tech: 'SNNs, AWS Lambda, IoT Core, Serverless',
        items: [
          'Implementé un gemelo digital en tiempo casi real para el monitoreo de invernaderos usando Redes Neuronales de Impulsos (SNNs)',
          'Construí una arquitectura serverless en AWS utilizando IoT Core, Lambda y DynamoDB para el procesamiento de datos de sensores',
          'Integré detección de anomalías multi-sensor para monitorear la salud ambiental y activar alertas',
          'Desarrollé un panel interactivo para visualización de datos de alta frecuencia e insights'
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
      degree: 'Licenciatura en Ciencia de Datos',
      university: 'La Universidad de Sheffield',
      period: 'Septiembre 2023 – Junio 2026',
      grade: 'Esperado: Honores de Primera Clase',
      coursework: 'Cursos Relevantes:',
      courses: 'Estadística Inferencial, IA y Machine Learning, Modelado de Bases de Datos, Ética en IA'
    },
    leadership: {
      title: 'Liderazgo y Voluntariado',
      dss: {
        roles: [
          {
            date: 'Septiembre 2025 – Presente',
            title: 'Data Science Society - Responsable de Educación',
            location: 'University of Sheffield',
            items: [
              'Lideré proyectos de datos pro bono con 2 organizaciones locales',
              'Desarrollé agente de cumplimiento BSA para consultoría de construcción',
              'Creé estrategia de optimización de alcance para caridad que apoya a sobrevivientes de esclavitud moderna'
            ]
          },
          {
            date: 'Febrero 2024 – Mayo 2025',
            title: 'Data Science Society - Fundador y Presidente',
            location: 'University of Sheffield',
            items: [
              'Fundé y presidí la sociedad, impulsando el crecimiento de membresía mediante alcance dirigido',
              'Gestioné presupuesto financiado por estudiantes y aseguré financiamiento adicional',
              'Entregué la mejor experiencia universitaria para más de 120 estudiantes'
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
        title: 'Programación y Herramientas',
        items: ['Python', 'R', 'SQL', 'NoSQL', 'Power BI', 'SPSS Modeler', 'Docker', 'Excel & VBA']
      },
      cloudAI: {
        title: 'Plataformas Cloud e IA',
        items: ['IBM Watsonx', 'IBM Cloud', 'AWS', 'Azure', 'GCP', 'IA Generativa', 'RAG', 'Desarrollo de Agentes']
      },
      coreCompetencies: {
        title: 'Competencias Principales',
        items: ['Modelado de Datos', 'Análisis Estadístico', 'Estrategia de Datos', 'Ingeniería de Prompts', 'Gestión de Interesados', 'Design Thinking', 'Agile Scrum', 'Storytelling']
      },
      certifications: {
        title: 'Certificaciones',
        items: [
          { img: 'ibm-internship.png', title: 'IBM Internship Program' },
          { img: 'agentic-ai.png', title: 'IBM Agentic AI Foundations' },
          { img: 'watsonx.png', title: 'Watsonx.ai Sales Foundation' },
          { img: 'aws-cloud.png', title: 'AWS Cloud Foundations' },
          { img: 'design-thinking.png', title: 'Design Thinking Co-Creator' },
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
            title: 'Stagista Architetto di Soluzioni CSM - IBM',
            location: 'Londra, Regno Unito',
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
            date: 'Settembre 2022 – Dicembre 2022',
            title: 'Data Analytics Off-Cycle Intern - Pacifico Seguros',
            location: 'Lima, Perú',
            items: [
              'Contributed to the company’s digital transformation...'
            ]
          },
          {
            date: 'Giugno 2022 – Settembre 2022',
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
      greenhouse: {
        title: 'Digital Twin Serra',
        tech: 'SNNs, AWS Lambda, IoT Core, Serverless',
        items: [
          'Implementato un gemello digitale in tempo quasi reale per il monitoraggio delle serre utilizzando Spiking Neural Networks (SNNs)',
          'Costruita un\'architettura serverless su AWS utilizzando IoT Core, Lambda e DynamoDB per l\'elaborazione dei dati dei sensori',
          'Integrato il rilevamento delle anomalie multi-sensore per monitorare la salute dell\'ambiente e attivare avvisi',
          'Sviluppato un dashboard interattivo per la visualizzazione di dati ad alta frequenza e insight'
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
      grade: 'Previsto: Lode di Prima Classe',
      coursework: 'Corsi Rilevanti:',
      courses: 'Statistica Inferenziale, AI e Machine Learning, Modellazione Database, Etica AI'
    },
    leadership: {
      title: 'Leadership e Volontariato',
      dss: {
        roles: [
          {
            date: 'Settembre 2025 – Presente',
            title: 'Data Science Society - Responsabile Educazione',
            location: 'Università di Sheffield',
            items: [
              'Ho guidato progetti dati pro bono con 2 organizzazioni locali',
              'Ho sviluppato agente di conformità BSA per consulenza edile',
              'Ho creato strategia di ottimizzazione outreach per carità che supporta sopravvissuti alla schiavitù moderna'
            ]
          },
          {
            date: 'Febbraio 2024 – Maggio 2025',
            title: 'Data Science Society - Fondatore e Presidente',
            location: 'Università di Sheffield',
            items: [
              'Ho fondato e presieduto la società, guidando la crescita dei membri attraverso outreach mirato',
              'Ho gestito budget finanziato da studenti e assicurato finanziamenti aggiuntivi',
              'Ho fornito la migliore esperienza universitaria per oltre 120 studenti'
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
        title: 'Programmazione e Strumenti',
        items: ['Python', 'R', 'SQL', 'NoSQL', 'Power BI', 'SPSS Modeler', 'Docker', 'Excel & VBA']
      },
      cloudAI: {
        title: 'Piattaforme Cloud e AI',
        items: ['IBM Watsonx', 'IBM Cloud', 'AWS', 'Azure', 'GCP', 'IA Generativa', 'RAG', 'Sviluppo di Agenti']
      },
      coreCompetencies: {
        title: 'Competenze Principali',
        items: ['Modellazione Dati', 'Analisi Statistica', 'Strategia Dati', 'Prompt Engineering', 'Gestione Stakeholder', 'Design Thinking', 'Agile Scrum', 'Storytelling']
      },
      certifications: {
        title: 'Certificazioni',
        items: [
          { img: 'ibm-internship.png', title: 'IBM Internship Program' },
          { img: 'agentic-ai.png', title: 'IBM Agentic AI Foundations' },
          { img: 'watsonx.png', title: 'Watsonx.ai Sales Foundation' },
          { img: 'aws-cloud.png', title: 'AWS Cloud Foundations' },
          { img: 'design-thinking.png', title: 'Design Thinking Co-Creator' },
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