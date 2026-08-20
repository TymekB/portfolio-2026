import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
  type AbstractControl,
} from '@angular/forms';

import {
  CONTACT_EMAIL,
  FORM_ACCESS_KEY,
  FORM_ENDPOINT,
  FORM_SUBJECT_PREFIX,
} from '../../data/profile';
import { I18n } from '../../i18n/i18n';
import { Icon } from '../../shared/icon';

type SubmitState = 'idle' | 'sending' | 'sent' | 'error';

@Component({
  selector: 'app-contact-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, Icon],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {
  private readonly formBuilder = inject(FormBuilder);

  protected readonly t = inject(I18n).t;
  protected readonly email = CONTACT_EMAIL;
  protected readonly state = signal<SubmitState>('idle');
  protected readonly submitted = signal(false);

  protected readonly form = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: [0, [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(20)]],
    consent: [false, [Validators.requiredTrue]],
    company: [''],
  });

  protected readonly messageLength = signal(0);

  protected readonly buttonLabel = computed(() =>
    this.state() === 'sending' ? this.t().form.sending : this.t().form.submit,
  );

  constructor() {
    this.form.controls.message.valueChanges.subscribe((value) =>
      this.messageLength.set(value.length),
    );
  }

  protected showError(control: AbstractControl): boolean {
    return control.invalid && (control.touched || this.submitted());
  }

  protected async submit(): Promise<void> {
    this.submitted.set(true);

    if (this.form.invalid) {
      this.focusFirstInvalid();
      return;
    }

    if (this.form.controls.company.value.trim() !== '') {
      this.state.set('sent');
      return;
    }

    const { name, email, subject, message } = this.form.getRawValue();
    const subjectLabel = this.t().form.subjects[subject] ?? this.t().form.subjects[0]!;

    if (FORM_ACCESS_KEY === null) {
      this.openMailClient(name, email, subjectLabel, message);
      this.state.set('sent');
      return;
    }

    this.state.set('sending');

    try {
      // treść jako form-urlencoded, bo JSON wymusiłby preflight OPTIONS, którego Web3Forms nie obsługuje
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          Accept: 'application/json',
        },
        body: new URLSearchParams({
          access_key: FORM_ACCESS_KEY,
          subject: `${FORM_SUBJECT_PREFIX} ${subjectLabel}`,
          from_name: 'tymoteuszbaran.pl',
          name,
          email,
          replyto: email,
          message,
        }),
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || result.success !== true) {
        throw new Error(result.message ?? `Serwer odpowiedział statusem ${response.status}`);
      }

      this.reset();
      this.state.set('sent');
    } catch {
      this.state.set('error');
    }
  }

  protected reset(): void {
    this.form.reset({ subject: 0, consent: false });
    this.submitted.set(false);
    this.state.set('idle');
  }

  private openMailClient(name: string, email: string, subject: string, message: string): void {
    const body = `${message}\n\n---\n${name}\n${email}`;
    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `[tymoteuszbaran.pl] ${subject}`,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
  }

  private focusFirstInvalid(): void {
    const invalid = Object.entries(this.form.controls).find(
      ([, control]) => (control as FormControl).invalid,
    );

    if (!invalid) {
      return;
    }

    document.querySelector<HTMLElement>(`[formControlName="${invalid[0]}"]`)?.focus();
  }
}
