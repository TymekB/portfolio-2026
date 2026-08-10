import { readFileSync, writeFileSync } from 'node:fs';
import * as simpleIcons from 'simple-icons';

/**
 * Znaki, dla których aktualna wersja simple-icons nie pasuje.
 * Plik SVG musi mieć viewBox "0 0 24 24" i jedną ścieżkę, tak jak reszta pakietu.
 */
const OVERRIDES = {
  siRedis: {
    file: 'icon-overrides/redis.svg',
    hex: 'D82C20',
    reason: 'znak sprzed rebrandingu — klasyczny stos warstw, wraz z ówczesną czerwienią',
  },
};

function readOverride(key) {
  const override = OVERRIDES[key];
  if (!override) {
    return null;
  }

  const svg = readFileSync(new URL(override.file, import.meta.url), 'utf8');
  const viewBox = /viewBox="([^"]+)"/.exec(svg)?.[1];
  const path = / d="([^"]+)"/.exec(svg)?.[1];

  if (viewBox !== '0 0 24 24' || !path) {
    throw new Error(`Nadpisanie "${override.file}" ma niezgodny viewBox albo brak ścieżki`);
  }

  return { path, hex: override.hex };
}

const WANTED = [
  ['siPhp', 'PHP'],
  ['siSymfony', 'Symfony'],
  ['siDoctrine', 'Doctrine'],
  ['siComposer', 'Composer'],
  ['siAngular', 'Angular'],
  ['siTypescript', 'TypeScript'],
  ['siReact', 'React'],
  ['siNodedotjs', 'Node.js'],
  ['siPostgresql', 'PostgreSQL'],
  ['siMysql', 'MySQL'],
  ['siRedis', 'Redis'],
  ['siElasticsearch', 'Elasticsearch'],
  ['siRabbitmq', 'RabbitMQ'],
  ['siDocker', 'Docker'],
  ['siNginx', 'nginx'],
  ['siGrafana', 'Grafana'],
  ['siSentry', 'Sentry'],
];

const entries = WANTED.map(([key, title]) => {
  const icon = simpleIcons[key];
  if (!icon) {
    throw new Error(`simple-icons nie zawiera ikony "${key}"`);
  }

  const override = readOverride(key);
  const path = override?.path ?? icon.path;
  const hex = override?.hex ?? icon.hex;

  return `  { title: ${JSON.stringify(title)}, hex: '#${hex}', path: '${path}' },`;
});

const file = `// Plik generowany przez scripts/generate-tech-logos.mjs — nie edytuj ręcznie.
// Ścieżki pochodzą z pakietu simple-icons (CC0). Znaki towarowe należą do ich właścicieli.

export interface TechLogo {
  readonly title: string;
  readonly hex: string;
  readonly path: string;
}

export const TECH_LOGOS: readonly TechLogo[] = [
${entries.join('\n')}
];
`;

writeFileSync(new URL('../src/app/data/tech-logos.ts', import.meta.url), file);
console.log(`Zapisano ${WANTED.length} logotypów do src/app/data/tech-logos.ts`);
