import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { ContactForm } from './contact-form';
import { I18n } from '../../i18n/i18n';
import { Icon } from '../../shared/icon';
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  SOCIAL_LINKS,
} from '../../data/profile';

@Component({
  selector: 'app-contact-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, ContactForm],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
})
export class ContactSection {
  protected readonly t = inject(I18n).t;
  protected readonly email = CONTACT_EMAIL;
  protected readonly phone = CONTACT_PHONE;
  protected readonly phoneHref = CONTACT_PHONE_HREF;
  protected readonly socials = SOCIAL_LINKS.filter((link) => link.icon !== 'mail');
  protected readonly year = new Date().getFullYear();
}
