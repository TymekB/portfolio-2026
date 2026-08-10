import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type IconName =
  | 'github'
  | 'linkedin'
  | 'instagram'
  | 'mail'
  | 'arrow-up-right'
  | 'link'
  | 'check'
  | 'alert'
  | 'app'
  | 'globe'
  | 'cart'
  | 'erp';

@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[attr.aria-hidden]': 'true' },
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      [attr.width]="size()"
      [attr.height]="size()"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.6"
      stroke-linecap="round"
      stroke-linejoin="round"
      focusable="false"
    >
      @switch (name()) {
        @case ('github') {
          <path
            fill="currentColor"
            stroke="none"
            d="M12 1.8a10.2 10.2 0 0 0-3.23 19.88c.51.1.7-.22.7-.49l-.01-1.9c-2.84.62-3.44-1.2-3.44-1.2-.47-1.18-1.14-1.5-1.14-1.5-.93-.63.07-.62.07-.62 1.03.07 1.57 1.06 1.57 1.06.91 1.57 2.4 1.12 2.99.86.09-.66.36-1.12.65-1.38-2.27-.26-4.66-1.14-4.66-5.06 0-1.12.4-2.03 1.06-2.75-.11-.26-.46-1.3.1-2.7 0 0 .86-.28 2.81 1.05a9.7 9.7 0 0 1 5.12 0c1.95-1.33 2.81-1.05 2.81-1.05.56 1.4.21 2.44.1 2.7.66.72 1.06 1.63 1.06 2.75 0 3.93-2.4 4.8-4.68 5.05.37.32.7.94.7 1.9l-.01 2.82c0 .27.19.6.7.49A10.2 10.2 0 0 0 12 1.8Z"
          />
        }
        @case ('linkedin') {
          <path
            fill="currentColor"
            stroke="none"
            d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.05c.53-1 1.84-2.06 3.79-2.06C21.6 8.58 23 10.9 23 14.3V21h-4v-5.94c0-1.42-.03-3.24-1.98-3.24-1.98 0-2.28 1.54-2.28 3.13V21h-4V9Z"
          />
        }
        @case ('instagram') {
          <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="5.25" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
        }
        @case ('mail') {
          <rect x="2.75" y="4.75" width="18.5" height="14.5" rx="2.5" />
          <path d="m3.5 7 7.34 5.2a2 2 0 0 0 2.32 0L20.5 7" />
        }
        @case ('arrow-up-right') {
          <path d="M7 17 17 7M8.5 7H17v8.5" />
        }
        @case ('link') {
          <path d="M10 13.5a3.6 3.6 0 0 0 5.4.4l2.6-2.6a3.6 3.6 0 0 0-5.1-5.1l-1.5 1.5" />
          <path d="M14 10.5a3.6 3.6 0 0 0-5.4-.4L6 12.7a3.6 3.6 0 0 0 5.1 5.1l1.5-1.5" />
        }
        @case ('check') {
          <circle cx="12" cy="12" r="9.25" />
          <path d="m8.2 12.3 2.5 2.5 5.1-5.6" />
        }
        @case ('alert') {
          <circle cx="12" cy="12" r="9.25" />
          <path d="M12 7.6v5" />
          <circle cx="12" cy="16" r="0.9" fill="currentColor" stroke="none" />
        }
        @case ('app') {
          <rect x="2.75" y="3.75" width="18.5" height="16.5" rx="2.5" />
          <path d="M2.75 8.25h18.5" />
          <circle cx="6" cy="6" r="0.8" fill="currentColor" stroke="none" />
          <path d="M6.5 12.5h5.5M6.5 16h9" />
        }
        @case ('globe') {
          <circle cx="12" cy="12" r="9.25" />
          <path d="M2.9 9.5h18.2M2.9 14.5h18.2" />
          <path d="M12 2.75c2.4 2.6 3.6 5.7 3.6 9.25S14.4 18.65 12 21.25c-2.4-2.6-3.6-5.7-3.6-9.25S9.6 5.35 12 2.75Z" />
        }
        @case ('cart') {
          <path d="M2.75 3.75h2.4l2.35 11.1a1.7 1.7 0 0 0 1.66 1.35h8.3a1.7 1.7 0 0 0 1.66-1.32l1.48-6.43H6.1" />
          <circle cx="9.5" cy="20" r="1.3" />
          <circle cx="17.5" cy="20" r="1.3" />
        }
        @case ('erp') {
          <rect x="2.75" y="2.75" width="8" height="8" rx="1.8" />
          <rect x="13.25" y="2.75" width="8" height="8" rx="1.8" />
          <rect x="2.75" y="13.25" width="8" height="8" rx="1.8" />
          <path d="M17.25 13.25v8M13.25 17.25h8" />
        }
      }
    </svg>
  `,
  styles: `
    :host {
      display: inline-flex;
    }
  `,
})
export class Icon {
  readonly name = input.required<IconName>();
  readonly size = input(20);
}
