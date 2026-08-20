export interface SocialLink {
  readonly label: string;
  readonly handle: string;
  readonly url: string;
  readonly icon: 'github' | 'linkedin' | 'instagram' | 'mail';
}

export const CONTACT_EMAIL = 'baran.tymoteusz@gmail.com';

export const CONTACT_PHONE = '+48 728 761 171';

export const CONTACT_PHONE_HREF = 'tel:+48728761171';

/**
 * Adres, pod który formularz kontaktowy wysyła POST z JSON-em.
 */
export const FORM_ENDPOINT = 'https://api.web3forms.com/submit';

/**
 * Publiczny klucz Web3Forms — służy wyłącznie do wysyłki i nie daje dostępu
 * do skrzynki, dlatego może być w repozytorium. Gdy jest `null`, formularz
 * po walidacji otwiera klienta pocztowego z gotową treścią.
 */
export const FORM_ACCESS_KEY: string | null = '82f6e53a-1d77-4448-ba00-9d9459eaec49';

export const FORM_SUBJECT_PREFIX = '[tymoteuszbaran.pl]';

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    label: 'GitHub',
    handle: '@TymekB',
    url: 'https://github.com/TymekB/',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    handle: 'tymoteuszbaran',
    url: 'https://www.linkedin.com/in/tymoteuszbaran/',
    icon: 'linkedin',
  },
  {
    label: 'Instagram',
    handle: '@tymek.baran14',
    url: 'https://www.instagram.com/tymek.baran14',
    icon: 'instagram',
  },
  {
    label: 'E-mail',
    handle: CONTACT_EMAIL,
    url: `mailto:${CONTACT_EMAIL}`,
    icon: 'mail',
  },
];

export type StackGroupKey = 'backend' | 'architecture' | 'frontend' | 'infrastructure';

export interface StackGroup {
  readonly key: StackGroupKey;
  readonly items: readonly string[];
}

export const STACK: readonly StackGroup[] = [
  {
    key: 'backend',
    items: [
      'PHP 8.4',
      'Symfony 7',
      'Doctrine',
      'API Platform',
      'Sylius',
      'FrankenPHP',
      'PHPUnit',
      'PHPStan',
    ],
  },
  {
    key: 'architecture',
    items: [
      'Hexagonal Architecture',
      'Domain-Driven Design',
      'CQRS',
      'Event Sourcing',
      'Event-driven',
      'REST API',
    ],
  },
  {
    key: 'frontend',
    items: ['Angular 22', 'TypeScript', 'RxJS', 'Signals', 'SCSS', 'React'],
  },
  {
    key: 'infrastructure',
    items: [
      'MySQL',
      'Elasticsearch',
      'Redis',
      'RabbitMQ',
      'Docker',
      'GitLab CI',
      'Grafana',
    ],
  },
];
