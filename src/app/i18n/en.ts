import type { Dictionary } from './types';

export const en: Dictionary = {
  meta: {
    title: 'Tymoteusz Baran — PHP / Symfony / Angular developer',
    description:
      'Tymoteusz Baran — developer with over 10 years of experience. I build web applications, websites, e-commerce stores and ERP systems. Backend in PHP and Symfony, frontend in Angular.',
  },

  nav: {
    services: 'Services',
    tech: 'Tech',
    projects: 'Projects',
    cta: 'Get in touch',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    skip: 'Skip to content',
    language: 'Language',
    switchTo: 'Przełącz na polski',
  },

  hero: {
    role: 'I build web applications, websites, e-commerce stores and ERP systems.',
    lead: 'Backend in PHP and Symfony, frontend in Angular — from the domain model all the way to production. I build systems that have to survive both traffic and years of development: hexagonal architecture, DDD and CQRS where the complexity calls for it, and plain code where it does not.',
    ctaPrimary: 'Get in touch',
    ctaSecondary: 'See projects',
    stats: [
      { value: '10+', label: 'years of commercial experience' },
      { value: 'Full-stack', label: 'backend, frontend and deployment' },
      { value: 'E-commerce', label: 'stores, marketplaces, ERP' },
    ],
  },

  services: {
    label: 'What I do',
    title: 'I build applications, websites, stores and ERP systems',
    lead: 'I run a project from the first conversation about requirements through to production — backend, frontend and infrastructure. No handing responsibility between teams.',
    items: [
      {
        title: 'Web applications',
        description:
          'Systems tailored to the process, not the other way round. From the domain model, through the API, to the user interface.',
        bullets: ['Admin panels and SaaS apps', 'REST APIs', 'Migrations off legacy systems'],
      },
      {
        title: 'Websites',
        description:
          'Fast, accessible and properly indexed. No heavy templates or plugins you have to patch later.',
        bullets: ['Landing pages and company sites', 'Core Web Vitals tuning', 'Technical SEO'],
      },
      {
        title: 'E-commerce stores',
        description:
          'Sylius-based stores and marketplace solutions — with payment, courier and sales platform integrations.',
        bullets: [
          'Sylius and Symfony',
          'Allegro and marketplace integrations',
          'Payments and logistics',
        ],
      },
      {
        title: 'ERP systems and integrations',
        description:
          'Connecting systems that were never designed to work together: warehouse, sales, accounting, external suppliers.',
        bullets: [
          'Stock and price synchronisation',
          'Asynchronous processing',
          'EDI/API data exchange',
        ],
      },
    ],
  },


  stack: {
    label: 'Tech',
    title: 'What I work with day to day',
    lead: 'I pick tools to fit the problem, but I am strongest in the PHP and Symfony ecosystem on the server and in Angular in the browser.',
    groups: {
      backend: 'Backend',
      architecture: 'Architecture',
      frontend: 'Frontend',
      infrastructure: 'Data and infrastructure',
    },
  },

  projects: {
    label: 'Projects',
    title: 'Selected things I have built',
    lead: 'Personal and production projects. Some run publicly on their own domain, some have their source open on GitHub.',
    privateNote: 'Private project — happy to walk through the details',
    more: 'All repositories on GitHub',
    shots: {
      landing: 'Landing page',
      store: 'Store',
      panel: 'Admin panel',
      app: 'Application',
      catalogue: 'Test catalogue',
      packages: 'Test packages',
      locations: 'Collection points',
      dark: 'Dark mode',
    },
    gallery: {
      roleDescription: 'screenshot carousel',
      previous: 'Previous screenshot',
      next: 'Next screenshot',
      pause: 'Pause the carousel',
      play: 'Resume the carousel',
    },
    items: {
      labkawa: {
        tagline: 'Online diagnostic laboratory',
      },
      psg: {
        tagline: 'Terminal-style company valuation metric',
      },
      oma: {
        tagline: 'Physiotherapy practice site',
      },
      omaStore: {
        tagline: 'Practice store on Sylius',
      },
      omaPanel: {
        tagline: 'Store back office in the Sylius panel',
      },
    },
  },

  contact: {
    label: 'Contact',
    title: 'Let’s talk about your project',
    lead: 'Describe in a few sentences what you want to build — an application, a website, a store or an ERP integration. I will come back with questions, a time estimate and a proposed next step.',
    directLabel: 'Write directly',
    phoneLabel: 'Call me',
    stepsTitle: 'What happens next',
    steps: [
      'I reply with questions that pin down the scope.',
      'A short call — phone or video, usually 30 minutes.',
      'You get a time and cost estimate plus a proposed first stage.',
    ],
  },

  form: {
    name: 'Full name',
    namePlaceholder: 'John Smith',
    nameError: 'Please enter your name — at least two characters.',
    email: 'Email address',
    emailPlaceholder: 'john@company.com',
    emailError: 'Please enter a valid email address — that is where I will reply.',
    subject: 'What the project is about',
    subjects: [
      'Web application',
      'Website',
      'E-commerce store',
      'ERP system or integration',
      'Consulting / code review',
      'Something else',
    ],
    message: 'Message',
    messageCounter: 'min. 20',
    messagePlaceholder:
      'A few sentences about the project: what it should do, by when, and whether anything already exists.',
    messageError: 'Please describe the project in at least 20 characters.',
    honeypot: 'Company name',
    consent: 'I agree to my data being processed in order to answer this enquiry.',
    consentError: 'I cannot reply without your consent.',
    submit: 'Send message',
    sending: 'Sending…',
    note: 'I reply within one business day.',
    sendError: 'The message could not be sent. Please write directly to',
    successTitle: 'Thank you for your message',
    successBodyBefore:
      'I usually reply within one business day. If nothing arrives — check your spam folder or write directly to',
    successAgain: 'Send another message',
  },
};
