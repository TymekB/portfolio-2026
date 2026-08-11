export type ProjectId = 'labkawa' | 'psg' | 'oma' | 'omaStore' | 'omaPanel';

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
  },
  {
    id: 'oma',
    name: 'OMA Kraków',
    year: '2026',
    tags: ['Angular 22', 'TypeScript', 'SCSS', 'FrankenPHP'],
    links: [{ url: 'https://github.com/TymekB/oma-krakow', kind: 'code' }],
    shots: [{ src: 'projects/oma-landing.webp', kind: 'landing', href: 'https://oma.pl/' }],
  },
  {
    id: 'omaStore',
    name: 'OMA Sklep',
    year: '2026',
    tags: ['Sylius 2.2', 'Symfony 7.4', 'Twig', 'MySQL', 'FrankenPHP'],
    links: [{ url: 'https://github.com/TymekB/oma-krakow', kind: 'code' }],
    shots: [{ src: 'projects/oma-store.webp', kind: 'store' }],
  },
  {
    id: 'omaPanel',
    name: 'OMA Panel administracyjny',
    year: '2026',
    tags: ['Sylius 2.2', 'Symfony 7.4', 'Doctrine', 'MySQL'],
    links: [{ url: 'https://github.com/TymekB/oma-krakow', kind: 'code' }],
    shots: [{ src: 'projects/oma-panel.webp', kind: 'panel' }],
  },
];
