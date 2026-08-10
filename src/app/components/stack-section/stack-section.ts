import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { I18n } from '../../i18n/i18n';
import { STACK } from '../../data/profile';
import { TECH_LOGOS } from '../../data/tech-logos';

@Component({
  selector: 'app-stack-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './stack-section.html',
  styleUrl: './stack-section.scss',
})
export class StackSection {
  protected readonly t = inject(I18n).t;
  protected readonly groups = STACK;
  protected readonly logos = TECH_LOGOS;
}
