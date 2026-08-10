import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { I18n } from '../../i18n/i18n';
import { Icon } from '../../shared/icon';
import { SOCIAL_LINKS } from '../../data/profile';

@Component({
  selector: 'app-hero-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {
  protected readonly t = inject(I18n).t;
  protected readonly socials = SOCIAL_LINKS.filter((link) => link.icon !== 'mail');
}
