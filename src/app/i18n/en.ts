import type { Dictionary } from './types';

export const en: Dictionary = {
  meta: {
    title: 'Tymoteusz Baran — PHP / Symfony / Angular developer',
    description:
      'Tymoteusz Baran — developer with over 10 years of experience. I build web applications, websites, e-commerce stores and ERP systems. Backend in PHP and Symfony, frontend in Angular.',
  },

  nav: {
    services: 'Services',
    about: 'About',
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
    badge: 'Kraków · open to work',
    roleBefore: 'Developer with over ',
    roleHighlight: '10 years',
    roleAfter:
      ' of experience. I build web applications, websites, e-commerce stores and ERP systems.',
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

  about: {
    label: 'About',
    title: 'Over a decade of writing code that ships',
    paragraphs: [
      'I started with PHP and never stopped — over the years Symfony, Doctrine, message queues, search engines and all the surrounding infrastructure joined in. Today I mostly work on e-commerce and marketplace systems: integrations with external platforms, order handling, product catalogues and data processing that has to keep working when traffic multiplies.',
      'In parallel I handle the frontend — Angular with standalone components and signals, without unnecessary libraries. I like it when one person can carry a feature from the domain model to the user’s screen and owns the whole thing rather than a slice of it.',
      'Outside of full-time work I build my own projects — from finance apps, through Sylius stores, to native macOS tools. They are the fastest way to verify whether an approach actually holds up.',
    ],
    principles: [
      {
        title: 'Architecture matched to complexity',
        body: 'Simple CRUD stays CRUD. Hexagonal, DDD and CQRS come in where the domain genuinely is complex — not as decoration.',
      },
      {
        title: 'Code that reads itself',
        body: 'Names instead of comments, explicit types, strict static analysis. Code should explain itself.',
      },
      {
        title: 'Data consistency',
        body: 'Transactions, idempotent handlers and awareness of race conditions. A half-written record is a worse bug than no record.',
      },
      {
        title: 'Performance you can measure',
        body: 'Benchmarks, profiling and metrics instead of guesses. If I claim something got faster, I have the numbers.',
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
    filterFeatured: 'Featured',
    filterAll: 'All',
    sourceCode: 'Source code',
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
        description:
          'A diagnostic laboratory service: a test catalogue with search and filters, preventive packages with savings calculation, a map of collection points, a cart and a results panel. The design system is built on CSS custom properties — the whole theme re-skins from a single colour.',
      },
      psg: {
        tagline: 'Terminal-style company valuation metric',
        description:
          'An app that computes the PSG ratio — a PEG equivalent for revenue. Company search with autocomplete, a trend chart, indicator tiles carrying their change over the selected range, a panel with the latest reported results and price-target consensus, plus clocks for the major exchanges with an open/closed session status.',
      },
      oma: {
        tagline: 'Physiotherapy practice site with a store',
        description:
          'A two-part project: an Angular landing page built to static files, plus a store and admin panel on Sylius. Everything is served from a single FrankenPHP container — the landing at “/”, the store at “/sklep/”, the panel at “/admin/”.',
      },
      stockx: {
        tagline: 'Price alerts for the StockX catalogue',
        description:
          'A user sets a price target on a product and gets an email when the lowest ask drops to that threshold. The backend uses hexagonal architecture with DDD and CQRS, the catalogue is imported on a schedule via Symfony Scheduler and mail goes out through Messenger.',
      },
      lalewicz: {
        tagline: 'English learning platform with native speakers',
        description:
          'The frontend of an online lesson platform: tutor selection, slot booking, student accounts and a lesson video room. Zero runtime dependencies beyond Angular — no UI kits, no state libraries.',
      },
      frankenphp: {
        tagline: 'Performance benchmark of two stacks',
        description:
          'A comparison of FrankenPHP in worker mode against classic PHP-FPM with Nginx — first on a synthetic application, then on production code with authorisation and a database. k6 measurements collected into InfluxDB and visualised in Grafana. Light endpoints 5–7× faster, heavy ones a draw, but with a markedly shorter latency tail.',
      },
      wallstreet: {
        tagline: 'Yahoo Finance-style market portal',
        description:
          'A portal with quotes and market news: an index bar, reusable SVG sparklines, pills combining symbol and percentage change, and a multi-column layout with a sidebar.',
      },
      worktimer: {
        tagline: 'Work timer in the macOS menu bar',
        description:
          'A native macOS app that tracks working time from keyboard and mouse activity — with background-work detection, an idle threshold, a daily reset and weekly stats. It installs as a LaunchAgent, so it starts at login and restarts itself.',
      },
      precommit: {
        tagline: 'Pre-commit hooks for PHP projects',
        description:
          'A set of pre-commit scripts ready to drop into any PHP project — linting, coding standards and static analysis run before code reaches the repository.',
      },
      dario: {
        tagline: 'Tooling for Claude Code',
        description:
          'Skills and agents that extend Claude Code with team conventions: generating commits and merge requests, code review, task initialisation from Redmine, ADRs and technical documentation. Installs into a project with a single sync script.',
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
