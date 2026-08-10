import { writeFileSync } from 'node:fs';
import * as simpleIcons from 'simple-icons';

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

  return `  { title: ${JSON.stringify(title)}, hex: '#${icon.hex}', path: '${icon.path}' },`;
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
