import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { I18n } from '../../i18n/i18n';

@Component({
  selector: 'app-about-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about-section.html',
  styleUrl: './about-section.scss',
})
export class AboutSection {
  protected readonly t = inject(I18n).t;
}
