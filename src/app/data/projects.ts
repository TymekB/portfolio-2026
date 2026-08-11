export type ProjectId =
  | 'labkawa'
  | 'psg'
  | 'oma'
  | 'stockx'
  | 'lalewicz'
  | 'frankenphp'
  | 'wallstreet'
  | 'worktimer'
  | 'precommit'
  | 'dario';

export interface ProjectLink {
  readonly url: string;
  readonly kind: 'live' | 'code';
  /** Wypełniane tylko dla `kind: 'live'` — nazwa domeny nie podlega tłumaczeniu. */
  readonly label?: string;
}

export type ProjectShotKind =
  | 'landing'
  | 'store'
  | 'panel'
  | 'app'
  | 'catalogue'
  | 'packages'
  | 'locations'
  | 'dark';

export interface ProjectShot {
  readonly src: string;
  readonly kind: ProjectShotKind;
  /** Ustawiany tylko dla zrzutów z publicznie dostępnego widoku. */
  readonly href?: string;
}

export interface Project {
  readonly id: ProjectId;
  readonly name: string;
  readonly year: string;
  readonly tags: readonly string[];
  readonly links: readonly ProjectLink[];
  readonly shots: readonly ProjectShot[];
  readonly featured: boolean;
}

export const PROJECTS: readonly Project[] = [
  {
    id: 'labkawa',
    name: 'LabKawa',
    year: '2026',
    tags: ['Angular 18', 'Signals', 'Standalone components', 'SCSS'],
    links: [
      { url: 'https://labkawa.pl/', kind: 'live', label: 'labkawa.pl' },
      { url: 'https://github.com/TymekB/labkawa', kind: 'code' },
    ],
    shots: [
      { src: 'projects/labkawa-landing.webp', kind: 'landing', href: 'https://labkawa.pl/' },
      {
        src: 'projects/labkawa-catalogue.webp',
        kind: 'catalogue',
        href: 'https://labkawa.pl/badania',
      },
      {
        src: 'projects/labkawa-packages.webp',
        kind: 'packages',
        href: 'https://labkawa.pl/pakiety',
      },
      {
        src: 'projects/labkawa-locations.webp',
        kind: 'locations',
        href: 'https://labkawa.pl/punkty-pobran',
      },
    ],
    featured: true,
  },
  {
    id: 'psg',
    name: 'PSG Calculator',
    year: '2026',
    tags: ['Angular', 'ECharts', 'FMP API', 'Docker', 'Sentry'],
    links: [{ url: 'https://psg-calculator.com/', kind: 'live', label: 'psg-calculator.com' }],
    shots: [
      { src: 'projects/psg-app.webp', kind: 'app', href: 'https://psg-calculator.com/' },
      { src: 'projects/psg-dark.webp', kind: 'dark', href: 'https://psg-calculator.com/' },
    ],
    featured: true,
  },
  {
    id: 'oma',
    name: 'OMA Kraków',
    year: '2026',
    tags: ['Angular 22', 'Sylius 2.2', 'Symfony 7.4', 'FrankenPHP', 'MySQL'],
    links: [{ url: 'https://github.com/TymekB/oma-krakow', kind: 'code' }],
    shots: [
      { src: 'projects/oma-landing.webp', kind: 'landing', href: 'https://oma.pl/' },
      { src: 'projects/oma-panel.webp', kind: 'panel' },
    ],
    featured: true,
  },
  {
    id: 'stockx',
    name: 'StockX Monitoring',
    year: '2026',
    tags: ['Symfony 7', 'PHP 8.4', 'DDD', 'CQRS', 'PostgreSQL', 'Angular 20'],
    links: [],
    shots: [],
    featured: true,
  },
  {
    id: 'lalewicz',
    name: 'Lalewicz English',
    year: '2026',
    tags: ['Angular 22', 'TypeScript 6', 'SCSS'],
    links: [{ url: 'https://github.com/TymekB/lalewicz-english', kind: 'code' }],
    shots: [],
    featured: false,
  },
  {
    id: 'frankenphp',
    name: 'FrankenPHP vs PHP-FPM',
    year: '2025',
    tags: ['FrankenPHP', 'Symfony 7.2', 'k6', 'InfluxDB', 'Grafana'],
    links: [],
    shots: [],
    featured: false,
  },
  {
    id: 'wallstreet',
    name: 'Droga do Wallstreet',
    year: '2025',
    tags: ['Angular 17', 'Signals', 'SVG', 'SCSS'],
    links: [{ url: 'https://github.com/TymekB/droga-do-wallstreet', kind: 'code' }],
    shots: [],
    featured: false,
  },
  {
    id: 'worktimer',
    name: 'WorkTimer',
    year: '2025',
    tags: ['Swift', 'macOS', 'LaunchAgent'],
    links: [{ url: 'https://github.com/TymekB/work-timer', kind: 'code' }],
    shots: [],
    featured: false,
  },
  {
    id: 'precommit',
    name: 'pre-commit-php',
    year: '2019',
    tags: ['Shell', 'PHP', 'Open source'],
    links: [{ url: 'https://github.com/TymekB/pre-commit-php', kind: 'code' }],
    shots: [],
    featured: false,
  },
  {
    id: 'dario',
    name: 'DarIO AI',
    year: '2026',
    tags: ['Claude Code', 'Automation', 'DX'],
    links: [],
    shots: [],
    featured: false,
  },
];
