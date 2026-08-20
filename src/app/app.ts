import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { I18n } from './i18n/i18n';

import { ContactSection } from './components/contact-section/contact-section';
import { HeroSection } from './components/hero-section/hero-section';
import { ProjectsSection } from './components/projects-section/projects-section';
import { ServicesSection } from './components/services-section/services-section';
import { SiteHeader } from './components/site-header/site-header';
import { StackSection } from './components/stack-section/stack-section';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    SiteHeader,
    HeroSection,
    ServicesSection,
    StackSection,
    ProjectsSection,
    ContactSection,
  ],
  template: `
    <a class="skip-link" href="#uslugi">{{ t().nav.skip }}</a>
    <app-site-header />
    <main>
      <app-hero-section />
      <app-services-section />
      <app-projects-section />
      <app-stack-section />
      <app-contact-section />
    </main>
  `,
})
export class App {
  protected readonly t = inject(I18n).t;
}
