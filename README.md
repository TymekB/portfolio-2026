# tymoteuszbaran.pl

Portfolio — Tymoteusz Baran. Angular 22 (standalone components, signals, zoneless), bez routera:
jedna strona z nawigacją po kotwicach. Wyłącznie jasny motyw, dwie wersje językowe (PL/EN).

## Uruchomienie

Wymaga Node 20+ (projekt budowany na Node 23 — domyślny Node 16 w systemie jest za stary):

```bash
npm install
npm start          # http://localhost:4200
npm run build      # produkcyjny build do dist/tymoteuszbaran-pl/browser
npm run icons      # regeneracja logotypów technologii
```

## Struktura

```
scripts/
└─ generate-tech-logos.mjs   # wyciąga ścieżki SVG z pakietu simple-icons
public/                      # zdjęcie (webp + jpg), favicon, robots.txt, sitemap.xml
src/
├─ index.html                # meta OG, JSON-LD Person
├─ styles.scss               # design tokeny, reset, ziarno tła, klasy layoutu
└─ app/
   ├─ app.ts                 # komponent root — składa sekcje
   ├─ i18n/
   │  ├─ pl.ts               # wszystkie teksty po polsku (źródło kształtu słownika)
   │  ├─ en.ts               # tłumaczenie angielskie
   │  ├─ types.ts            # Lang + Dictionary = typeof pl
   │  └─ i18n.ts             # serwis: sygnał języka, słownik, <html lang>, title, meta
   ├─ data/
   │  ├─ profile.ts          # e-mail, endpoint formularza, linki, stack
   │  ├─ projects.ts         # dane projektów niezależne od języka (id, rok, tagi, linki)
   │  └─ tech-logos.ts       # GENEROWANY — nie edytuj ręcznie
   ├─ shared/icon.ts         # ikony interfejsu (SVG inline)
   └─ components/            # site-header, hero, services, about, stack, projects, contact
```

Sekcje na stronie w kolejności: hero → usługi → o mnie → technologie → projekty → kontakt.

## Języki

Przełącznik PL/EN siedzi w nagłówku. Wybór trafia do `localStorage` pod kluczem `lang`;
przy pierwszej wizycie decyduje `navigator.language` — polska przeglądarka dostaje polski,
każda inna angielski. Zmiana języka aktualizuje też `<html lang>`, `<title>` i `meta[name=description]`.

**Cała treść jest w `src/app/i18n/`**, a nie w szablonach. `Dictionary` to `typeof pl`, więc
brak jakiegokolwiek klucza w `en.ts` jest błędem kompilacji — nie da się przeoczyć nietłumaczonego
fragmentu. Dodając tekst: najpierw `pl.ts`, potem TypeScript wskaże, czego brakuje w `en.ts`.

Podział między `i18n/` a `data/`: w `data/projects.ts` zostaje to, co niezależne od języka
(identyfikator, rok, tagi, adresy linków), a `tagline` i `description` żyją w słownikach
pod tym samym `id`. Etykieta „Kod źródłowy" bierze się ze słownika, nazwa domeny przy linku
`live` — z danych projektu.

Ograniczenie: przełączanie działa w runtime, więc obie wersje siedzą pod jednym adresem
i w źródle HTML jest tylko język początkowy. Dla portfolio to zwykle wystarcza. Jeśli
angielska wersja ma być osobno indeksowana, trzeba przejść na wbudowane i18n Angulara
(osobny build per język, adresy `/` i `/en/`, `hreflang`) — to inna, cięższa konfiguracja wdrożenia.

## Edycja treści

- **teksty (oba języki)** — `src/app/i18n/pl.ts` i `src/app/i18n/en.ts`.
- **projekty** — `data/projects.ts` (struktura) + `projects.items` w słownikach (opisy).
  Pole `featured` decyduje, czy projekt jest widoczny w domyślnej zakładce „Wyróżnione".
  Pusta tablica `links` renderuje adnotację o projekcie prywatnym zamiast przycisków.
- **linki społecznościowe i stack** — `data/profile.ts`.
- **adres e-mail** — stała `CONTACT_EMAIL` w `data/profile.ts`. Zmiana w jednym miejscu
  aktualizuje formularz, kartę kontaktu i listę linków.

## Formularz kontaktowy

Reactive Forms z walidacją po stronie klienta (wymagane pola, format e-maila, minimalna długość
wiadomości, zgoda na przetwarzanie danych) oraz honeypotem `company` na proste boty.

Zachowanie po wysłaniu zależy od stałej `FORM_ENDPOINT` w `src/app/data/profile.ts`:

- **`null` (obecnie)** — formularz otwiera klienta pocztowego z gotowym tematem i treścią.
  Strona nie wymaga wtedy żadnego backendu.
- **adres URL** — formularz wysyła `POST` z JSON-em `{ name, email, subject, message }`
  pod podany adres i pokazuje ekran potwierdzenia albo komunikat błędu. Pasuje do usług
  typu Formspree/Getform lub własnego endpointu.

## Logotypy technologii

Ścieżki SVG pochodzą z pakietu `simple-icons` (licencja CC0) i są **wbudowane w kod** przez
`npm run icons` — w runtime nie ma zależności ani żadnego zapytania do CDN. Lista technologii
jest w tablicy `WANTED` w `scripts/generate-tech-logos.mjs`. Znaki towarowe należą do
ich właścicieli.

Sylius i FrankenPHP nie mają logotypów w `simple-icons`, więc występują tylko jako etykiety
tekstowe w tabeli stacku.

## Wdrożenie

Build produkuje statyki — wystarczy dowolny serwer plików albo hosting statyczny
(Cloudflare Pages, nginx na VPS). Katalog do wystawienia:

```
dist/tymoteuszbaran-pl/browser
```

Nie ma routera po stronie klienta, więc fallback na `index.html` nie jest wymagany.
