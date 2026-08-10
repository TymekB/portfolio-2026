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

export interface Project {
  readonly id: ProjectId;
  readonly name: string;
  readonly year: string;
  readonly tags: readonly string[];
  readonly links: readonly ProjectLink[];
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
    featured: true,
  },
  {
    id: 'psg',
    name: 'PSG Calculator',
    year: '2026',
    tags: ['Angular', 'ECharts', 'FMP API', 'Docker', 'Sentry'],
    links: [{ url: 'https://psg-calculator.com/', kind: 'live', label: 'psg-calculator.com' }],
    featured: true,
  },
  {
    id: 'oma',
    name: 'OMA Kraków',
    year: '2026',
    tags: ['Angular 22', 'Sylius 2.2', 'Symfony 7.4', 'FrankenPHP', 'MySQL'],
    links: [{ url: 'https://github.com/TymekB/oma-krakow', kind: 'code' }],
    featured: true,
  },
  {
    id: 'stockx',
    name: 'StockX Monitoring',
    year: '2026',
    tags: ['Symfony 7', 'PHP 8.4', 'DDD', 'CQRS', 'PostgreSQL', 'Angular 20'],
    links: [],
    featured: true,
  },
  {
    id: 'lalewicz',
    name: 'Lalewicz English',
    year: '2026',
    tags: ['Angular 22', 'TypeScript 6', 'SCSS'],
    links: [{ url: 'https://github.com/TymekB/lalewicz-english', kind: 'code' }],
    featured: false,
  },
  {
    id: 'frankenphp',
    name: 'FrankenPHP vs PHP-FPM',
    year: '2025',
    tags: ['FrankenPHP', 'Symfony 7.2', 'k6', 'InfluxDB', 'Grafana'],
    links: [],
    featured: false,
  },
  {
    id: 'wallstreet',
    name: 'Droga do Wallstreet',
    year: '2025',
    tags: ['Angular 17', 'Signals', 'SVG', 'SCSS'],
    links: [{ url: 'https://github.com/TymekB/droga-do-wallstreet', kind: 'code' }],
    featured: false,
  },
  {
    id: 'worktimer',
    name: 'WorkTimer',
    year: '2025',
    tags: ['Swift', 'macOS', 'LaunchAgent'],
    links: [{ url: 'https://github.com/TymekB/work-timer', kind: 'code' }],
    featured: false,
  },
  {
    id: 'precommit',
    name: 'pre-commit-php',
    year: '2019',
    tags: ['Shell', 'PHP', 'Open source'],
    links: [{ url: 'https://github.com/TymekB/pre-commit-php', kind: 'code' }],
    featured: false,
  },
  {
    id: 'dario',
    name: 'DarIO AI',
    year: '2026',
    tags: ['Claude Code', 'Automation', 'DX'],
    links: [],
    featured: false,
  },
];
