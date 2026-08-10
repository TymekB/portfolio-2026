import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { I18n } from '../../i18n/i18n';
import { Icon, IconName } from '../../shared/icon';

@Component({
  selector: 'app-services-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  templateUrl: './services-section.html',
  styleUrl: './services-section.scss',
})
export class ServicesSection {
  protected readonly t = inject(I18n).t;
  protected readonly icons: readonly IconName[] = ['app', 'globe', 'cart', 'erp'];
}
