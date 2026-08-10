import type { pl } from './pl';

export type Lang = 'pl' | 'en';

/**
 * Kształt słownika wynika z wersji polskiej — dzięki temu brak klucza
 * w tłumaczeniu angielskim jest błędem kompilacji, a nie luką w interfejsie.
 */
export type Dictionary = typeof pl;
