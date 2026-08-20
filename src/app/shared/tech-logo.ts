import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { TAG_LOGOS, TECH_LOGOS, type TechLogo } from '../data/tech-logos';

const BY_TITLE = new Map(
  [...TECH_LOGOS, ...TAG_LOGOS].map((logo) => [logo.title.toLowerCase(), logo]),
);

/**
 * Dopasowuje znak marki do tagu projektu, ignorując numer wersji — "Symfony 7.4"
 * wskazuje na ten sam znak co "Symfony". Tagi bez znaku (np. "Twig") zwracają null.
 */
export function techLogoForTag(tag: string): TechLogo | null {
  return BY_TITLE.get(tag.replace(/\s+\d[\d.]*$/, '').toLowerCase()) ?? null;
}

@Component({
  selector: 'app-tech-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[attr.aria-hidden]': 'true' },
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      [attr.viewBox]="logo().viewBox"
      [attr.width]="size()"
      [attr.height]="size()"
      [style.color]="logo().hex"
      focusable="false"
    >
      @for (part of logo().parts; track $index) {
        <path [attr.d]="part.d" [attr.fill]="part.fill ?? 'currentColor'" />
      }
    </svg>
  `,
  styles: `
    :host {
      display: inline-flex;
      flex: none;
    }
  `,
})
export class TechLogoIcon {
  readonly logo = input.required<TechLogo>();
  readonly size = input(16);
}
