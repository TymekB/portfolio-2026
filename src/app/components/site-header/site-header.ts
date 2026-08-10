import { ChangeDetectionStrategy, Component, HostListener, computed, inject, signal } from '@angular/core';

import { I18n } from '../../i18n/i18n';

@Component({
  selector: 'app-site-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
})
export class SiteHeader {
  protected readonly i18n = inject(I18n);
  protected readonly t = this.i18n.t;

  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);

  protected readonly navItems = computed(() => [
    { label: this.t().nav.services, fragment: 'uslugi' },
    { label: this.t().nav.about, fragment: 'o-mnie' },
    { label: this.t().nav.tech, fragment: 'technologie' },
    { label: this.t().nav.projects, fragment: 'projekty' },
  ]);

  @HostListener('window:scroll')
  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 16);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
