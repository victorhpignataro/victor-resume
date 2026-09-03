import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      header: {
        role: "Frontend Software Developer",
        location: "São José do Rio Preto - SP, Brazil",
        age: "years old",
        single: "Single",
        portfolio: "Portfolio"
      },
      portfolioPage: {
        title: "Portfolio",
        back: "Back"
      },
      about: {
        title: "About Me",
        content: [
          "Fullstack developer with more than 7 years of experience in the development of corporate applications using React, Angular, TypeScript, Java and Laravel.",
          "Experience in building and modernizing interfaces for multichannel service systems, ticket platforms, IoT applications and visual builders (drag-and-drop), with a focus on componentization, performance and code maintenance.",
          "Acting in agile teams, participating from the implementation of new features to the refactoring of legacy systems and evolution of interfaces used in production.",
          "Communication with product and design teams for implementation of prototypes created.",
          "I use artificial intelligence tools to accelerate technical research, prototyping and continuous learning, maintaining critical analysis of the implemented solutions."
        ]
      },
      experience: {
        title: "Experience",
        present: "Present",
        jobs: [
          {
            role: "Developer",
            company: "Neppo Tecnologia",
            period: "12/2022 – 09/2026",
            description: [
              "Refactored UI improving usability and user experience.",
              "Developed frontend architecture for a ticket platform.",
              "Built dynamic bot builder tree component.",
              "Improved screen usability and interaction flows."
            ],
            stack: ["React 18", "AngularJS", "Angular 19", "TypeScript", "ChartJS", "Material Design", "SCSS"]
          },
          {
            role: "Front-end Developer",
            company: "Neppo Tecnologia / Algar Telecom",
            period: "04/2020 – 12/2022",
            description: [
              "Developed inventory management interface for SIM cards and IoT products.",
              "Implemented ReactJS frontend architecture.",
              "Migrated legacy frontend to React with Ant Design.",
              "Collaborated with telecom product teams."
            ],
            stack: ["React", "Ant Design", "TypeScript", "Less"]
          },
          {
            role: "Fullstack Developer",
            company: "MixSolutions",
            period: "07/2019 – 04/2020",
            description: [
              "Developed software for call center and PBX/IP telephony management.",
              "Led frontend interface modernization.",
              "Improved usability of service control dashboards.",
              "Integrated inventory management features."
            ],
            stack: ["Vue 2", "Laravel", "MariaDB", "CSS"]
          },
          {
            role: "Intern Developer Analyst",
            company: "Neppo Tecnologia",
            period: "04/2018 – 07/2019",
            description: [
              "Participated in internal developer training programs.",
              "Contributed to evaluation and testing software.",
              "Joined production teams after technical assessment.",
              "Supported development of internal company systems."
            ],
            stack: ["Angular", "Vue 2", "JavaScript", "HTML", "CSS", "Spring Boot"]
          },
          {
            role: "Computer Support",
            company: "Pignatari Consultores Contábeis",
            period: "2013 – 2014",
            description: [
              "Maintained office network infrastructure.",
              "Configured business software environments.",
              "Performed hardware repair and replacement.",
              "Provided general IT support for office operations."
            ],
            stack: ["Windows Server", "Networking", "Hardware"]
          }
        ]
      },
      projects: {
        title: "Projects",
        items: [
          {
            name: "Ticket Platform UI",
            description: "Frontend architecture for customer support ticket platform with reusable UI components.",
            stack: ["React", "TypeScript", "Material Design UI", "SWR", "GraphQL"]
          },
          {
            name: "Bot Builder Interface",
            description: "Tree-based visual builder for chatbot automation with drag-and-drop components.",
            stack: ["Angular 18", "Tailwind CSS"]
          },
          {
            name: "IoT Inventory Dashboard",
            description: "Dashboard for managing SIM cards and IoT devices with real-time inventory data.",
            stack: ["React", "SWR", "AntDesign"]
          }
        ]
      },
      skills: {
        title: "Skills"
      },
      languages: {
        title: "Languages",
        items: [
          { name: "Portuguese", level: "Native", flag: "flag-portuguese.svg" },
          { name: "English", level: "Intermediate", flag: "flag-english.svg" },
          { name: "Spanish", level: "Basic", flag: "flag-spanish.svg" }
        ]
      },
      education: {
        title: "Education",
        degree: "Bachelor in Computer Science",
        university: "Federal University of Uberlândia"
      },
      courses: {
        title: "Certifications & Courses",
        items: [
          "English Course (Private Teacher)",
          "Leadership, Ability to Learn and Resilience – PUC",
          "Produce Maintainable CSS With Sass",
          "Create Web Page Layouts With CSS",
          "Manage Your Code Project With Git & GitHub",
          "Build Web Apps with ReactJS",
          "Learn Programming With JavaScript",
          "VueJS Course – Neppo",
          "C++ Course – UFU",
          "Cobol Course – UFU",
          "Drupal Course – UFU",
          "Linux & Office Courses"
        ]
      },
      portfolioLinks: {
        title: "Portfolio Links",
        items: [
          {
            name: "Contabil Suite",
            description: "Accounting management system",
            url: "https://contabil-suite.victorpignataro.workers.dev/"
          },
          {
            name: "Calendar Events",
            description: "Event management application. User: demo@demo.com | Password: demo",
            url: "https://calendar-events-lovat.vercel.app/login"
          }
        ]
      }
    }
  },
  pt: {
    translation: {
      header: {
        role: "Desenvolvedor de Software",
        location: "São José do Rio Preto - SP, Brasil",
        age: "anos",
        single: "Solteiro",
        portfolio: "Portfólio"
      },
      portfolioPage: {
        title: "Portfólio",
        back: "Voltar"
      },
      about: {
        title: "Sobre Mim",
        content: [
          "Desenvolvedor Fullstack com mais de 7 anos de experiência no desenvolvimento de aplicações corporativas utilizando React, Angular, TypeScript, Java e Laravel.",
          "Experiência na construção e modernização de interfaces para sistemas de atendimento multicanal, plataformas de tickets, aplicações IoT e construtores visuais (drag-and-drop), com foco em componentização, performance e manutenção de código.",
          "Atuação em equipes ágeis, participando desde a implementação de novas funcionalidades até a refatoração de sistemas legados e evolução de interfaces utilizadas em produção.",
          "Comunicação com times de produto e design para implementação de protótipos criados.",
          "Utilizo ferramentas de inteligência artificial para acelerar pesquisa técnica, prototipação e aprendizado contínuo, mantendo análise crítica das soluções implementadas."
        ]
      },
      experience: {
        title: "Experiência",
        present: "Presente",
        jobs: [
          {
            role: "Desenvolvedor",
            company: "Neppo Tecnologia",
            period: "12/2022 – 09/2026",
            description: [
              "Refatoração de UI melhorando a usabilidade e experiência do usuário.",
              "Desenvolvimento da arquitetura frontend para uma plataforma de tickets.",
              "Construção de componente de árvore de bot builder dinâmico.",
              "Melhoria na usabilidade da tela e fluxos de interação visual."
            ],
            stack: ["React 18", "AngularJS", "Angular 19", "TypeScript", "ChartJS", "Material Design", "SCSS"]
          },
          {
            role: "Desenvolvedor Front-end",
            company: "Neppo Tecnologia / Algar Telecom",
            period: "04/2020 – 12/2022",
            description: [
              "Desenvolvimento de interface de gestão de estoque para cartões SIM e produtos IoT.",
              "Implementação de arquitetura frontend ReactJS.",
              "Migração de frontend legado para React com Ant Design.",
              "Colaboração com equipes de produtos de telecomunicações."
            ],
            stack: ["React", "Ant Design", "TypeScript", "Less"]
          },
          {
            role: "Desenvolvedor Fullstack",
            company: "MixSolutions",
            period: "07/2019 – 04/2020",
            description: [
              "Desenvolvimento de software para gestão de call center e telefonia PBX/IP.",
              "Liderança na modernização da interface frontend.",
              "Melhoria na usabilidade de dashboards de controle de serviço.",
              "Integração de recursos de gestão de estoque."
            ],
            stack: ["Vue 2", "Laravel", "MariaDB", "CSS"]
          },
          {
            role: "Analista Desenvolvedor Estagiário",
            company: "Neppo Tecnologia",
            period: "04/2018 – 07/2019",
            description: [
              "Participação em programas internos de treinamento de desenvolvedores.",
              "Contribuição para software de avaliação e testes.",
              "Ingresso nas equipes de produção após avaliação técnica.",
              "Suporte ao desenvolvimento de sistemas internos da empresa."
            ],
            stack: ["Angular", "Vue 2", "JavaScript", "HTML", "CSS", "Spring Boot"]
          },
          {
            role: "Suporte de Informática",
            company: "Pignatari Consultores Contábeis",
            period: "2013 – 2014",
            description: [
              "Manutenção da infraestrutura de rede do escritório.",
              "Configuração de ambientes de software de negócios.",
              "Realização de reparo e substituição de hardware.",
              "Fornecimento de suporte geral de TI para operações do escritório."
            ],
            stack: ["Windows Server", "Networking", "Hardware"]
          }
        ]
      },
      projects: {
        title: "Projetos",
        items: [
          {
            name: "UI de Plataforma de Tickets",
            description: "Arquitetura frontend para plataforma de tickets de suporte ao cliente com componentes de UI reutilizáveis.",
            stack: ["React", "TypeScript", "Material Design UI", "SWR", "GraphQL"]
          },
          {
            name: "Interface Bot Builder",
            description: "Construtor visual baseado em árvore para automação de chatbots com componentes drag-and-drop.",
            stack: ["Angular 18", "Tailwind CSS"]
          },
          {
            name: "Dashboard de Inventário IoT",
            description: "Dashboard para gestão de cartões SIM e dispositivos IoT com dados de inventário em tempo real.",
            stack: ["React", "SWR", "AntDesign"]
          }
        ]
      },
      skills: {
        title: "Habilidades"
      },
      languages: {
        title: "Idiomas",
        items: [
          { name: "Português", level: "Nativo", flag: "flag-portuguese.svg" },
          { name: "Inglês", level: "Intermediário", flag: "flag-english.svg" },
          { name: "Espanhol", level: "Básico", flag: "flag-spanish.svg" }
        ]
      },
      education: {
        title: "Educação",
        degree: "Bacharel em Ciência da Computação",
        university: "Universidade Federal de Uberlândia"
      },
      courses: {
        title: "Certificações e Cursos",
        items: [
          "Curso de Inglês (Professor Particular)",
          "Liderança, Capacidade de Aprender e Resiliência – PUC",
          "NLW Pocket: Javascript - Full-stack Intermediário",
          "CNV: Comunicação Não Violenta para melhores diálogos e relacionamentos",
          "Produce Maintainable CSS With Sass",
          "Create Web Page Layouts With CSS",
          "Manage Your Code Project With Git & GitHub",
          "Build Web Apps With ReactJS",
          "Learn Programming With JavaScript",
          "Curso de VueJS – Neppo",
          "Curso de C++ – UFU",
          "Curso de Cobol – UFU",
          "Curso de Drupal – UFU",
          "Cursos de Linux e Office"
        ]
      },
      portfolioLinks: {
        title: "Links do Portfólio",
        items: [
          {
            name: "Contabil Suite",
            description: "Sistema de gestão contábil",
            url: "https://contabil-suite.victorpignataro.workers.dev/"
          },
          {
            name: "Calendar Events",
            description: "Aplicativo de gerenciamento de eventos. Usuário: demo@demo.com | Senha: demo",
            url: "https://calendar-events-lovat.vercel.app/login"
          }
        ]
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt',
    supportedLngs: ['pt', 'en'],
    load: 'languageOnly', // Ignora variantes como pt-BR, usa apenas pt
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
      lookupLocalStorage: 'i18nextLng', // Chave padrão
    },
  });

export default i18n;