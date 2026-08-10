import { Injectable, computed, effect, signal } from '@angular/core';

import { en } from './en';
import { pl } from './pl';
import type { Dictionary, Lang } from './types';

const STORAGE_KEY = 'lang';

const DICTIONARIES: Record<Lang, Dictionary> = { pl, en };

@Injectable({ providedIn: 'root' })
export class I18n {
  readonly lang = signal<Lang>(this.detectInitialLang());

  readonly t = computed<Dictionary>(() => DICTIONARIES[this.lang()]);

  readonly other = computed<Lang>(() => (this.lang() === 'pl' ? 'en' : 'pl'));

  constructor() {
    effect(() => {
      const lang = this.lang();
      const dictionary = DICTIONARIES[lang];

      document.documentElement.lang = lang;
      document.title = dictionary.meta.title;
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute('content', dictionary.meta.description);
    });
  }

  toggle(): void {
    const next = this.other();
    this.lang.set(next);

    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* tryb prywatny — wybór działa do końca sesji */
    }
  }

  private detectInitialLang(): Lang {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'pl' || stored === 'en') {
        return stored;
      }
    } catch {
      /* brak dostępu do localStorage — decyduje język przeglądarki */
    }

    return navigator.language.toLowerCase().startsWith('pl') ? 'pl' : 'en';
  }
}
