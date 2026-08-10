import { readFileSync, writeFileSync } from 'node:fs';
import * as simpleIcons from 'simple-icons';

/**
 * Znaki z pakietu simple-icons — jednokolorowe, malowane barwą marki.
 */
const FROM_PACKAGE = [
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
];

/**
 * Podmiany dla znaków, w których aktualna wersja simple-icons nie odpowiada
 * temu, co chcemy pokazać. Plik musi mieć viewBox "0 0 24 24" i jedną ścieżkę.
 */
const OVERRIDES = {
  siRedis: {
    file: 'icon-overrides/redis.svg',
    hex: 'D82C20',
    reason: 'znak sprzed rebrandingu — klasyczny stos warstw, wraz z ówczesną czerwienią',
  },
};

/**
 * Marki, których simple-icons w ogóle nie zawiera. Pliki pochodzą wprost od
 * właściciela znaku, więc zachowują własny viewBox i własne kolory.
 */
const CUSTOM = [
  {
    key: 'sylius',
    title: 'Sylius',
    file: 'icon-overrides/sylius.svg',
    hex: '30BA9D',
    after: 'Symfony',
  },
];

function readSvg(file) {
  const svg = readFileSync(new URL(file, import.meta.url), 'utf8');
  const viewBox = /viewBox="([^"]+)"/.exec(svg)?.[1];
  const paths = [...svg.matchAll(/<path\b[^>]*>/g)].map((match) => {
    const tag = match[0];
    return {
      d: /\sd="([^"]+)"/.exec(tag)?.[1],
      fill: /\sfill="([^"]+)"/.exec(tag)?.[1],
    };
  });

  if (!viewBox || paths.length === 0 || paths.some((part) => !part.d)) {
    throw new Error(`Plik "${file}" nie zawiera poprawnego viewBox lub ścieżek`);
  }

  return { viewBox, paths };
}

function serialise({ title, hex, viewBox, paths }) {
  const parts = paths
    .map((part) => {
      const fill = part.fill && part.fill !== 'none' ? `, fill: '${part.fill}'` : '';
      return `{ d: '${part.d}'${fill} }`;
    })
    .join(', ');

  return `  { title: ${JSON.stringify(title)}, hex: '#${hex}', viewBox: '${viewBox}', parts: [${parts}] },`;
}

const logos = FROM_PACKAGE.map(([key, title]) => {
  const icon = simpleIcons[key];
  if (!icon) {
    throw new Error(`simple-icons nie zawiera ikony "${key}"`);
  }

  const override = OVERRIDES[key];
  if (override) {
    const { viewBox, paths } = readSvg(override.file);
    return { title, hex: override.hex ?? icon.hex, viewBox, paths };
  }

  // znaki z pakietu malujemy kolorem marki, więc bez własnego fill
  return { title, hex: icon.hex, viewBox: '0 0 24 24', paths: [{ d: icon.path }] };
});

for (const custom of CUSTOM) {
  const { viewBox, paths } = readSvg(custom.file);
  const entry = { title: custom.title, hex: custom.hex, viewBox, paths };
  const index = logos.findIndex((logo) => logo.title === custom.after);

  if (index === -1) {
    throw new Error(`Nie znaleziono znaku "${custom.after}", po którym wstawić "${custom.title}"`);
  }

  logos.splice(index + 1, 0, entry);
}

const file = `// Plik generowany przez scripts/generate-tech-logos.mjs — nie edytuj ręcznie.
// Ścieżki pochodzą z pakietu simple-icons (CC0) oraz z materiałów właścicieli znaków.
// Znaki towarowe należą do ich właścicieli.

export interface TechLogoPart {
  readonly d: string;
  /** Brak oznacza malowanie kolorem marki przez currentColor. */
  readonly fill?: string;
}

export interface TechLogo {
  readonly title: string;
  readonly hex: string;
  readonly viewBox: string;
  readonly parts: readonly TechLogoPart[];
}

export const TECH_LOGOS: readonly TechLogo[] = [
${logos.map(serialise).join('\n')}
];
`;

writeFileSync(new URL('../src/app/data/tech-logos.ts', import.meta.url), file);
console.log(`Zapisano ${logos.length} logotypów do src/app/data/tech-logos.ts`);
