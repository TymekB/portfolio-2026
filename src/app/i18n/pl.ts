export const pl = {
  meta: {
    title: 'Tymoteusz Baran — programista PHP / Symfony / Angular',
    description:
      'Tymoteusz Baran — programista z ponad 10-letnim doświadczeniem. Tworzę aplikacje webowe, strony internetowe, sklepy e-commerce i systemy ERP. Backend w PHP i Symfony, frontend w Angularze.',
  },

  nav: {
    services: 'Usługi',
    about: 'O mnie',
    tech: 'Technologie',
    projects: 'Projekty',
    cta: 'Napisz do mnie',
    openMenu: 'Otwórz menu',
    closeMenu: 'Zamknij menu',
    skip: 'Przejdź do treści',
    language: 'Język',
    switchTo: 'Switch to English',
  },

  hero: {
    badge: 'Kraków · otwarty na współpracę',
    roleBefore: 'Programista z ponad ',
    roleHighlight: '10-letnim',
    roleAfter:
      ' doświadczeniem. Tworzę aplikacje webowe, strony internetowe, sklepy e-commerce i systemy ERP.',
    lead: 'Backend w PHP i Symfony, frontend w Angularze — od modelu domenowego aż po wdrożenie na produkcję. Buduję systemy, które muszą wytrzymać ruch i lata rozwoju: architektura heksagonalna, DDD i CQRS tam, gdzie złożoność tego wymaga, i prosty kod tam, gdzie nie.',
    ctaPrimary: 'Napisz do mnie',
    ctaSecondary: 'Zobacz projekty',
    stats: [
      { value: '10+', label: 'lat komercyjnego doświadczenia' },
      { value: 'Full-stack', label: 'backend, frontend i wdrożenie' },
      { value: 'E-commerce', label: 'sklepy, marketplace, ERP' },
    ],
  },

  services: {
    label: 'Czym się zajmuję',
    title: 'Tworzę aplikacje, strony, sklepy i systemy ERP',
    lead: 'Prowadzę projekt od rozmowy o wymaganiach aż po wdrożenie na produkcję — backend, frontend i infrastrukturę. Bez przerzucania odpowiedzialności między zespołami.',
    items: [
      {
        title: 'Aplikacje webowe',
        description:
          'Systemy szyte na miarę procesu, a nie odwrotnie. Od modelu domenowego, przez API, po interfejs użytkownika.',
        bullets: ['Panele i aplikacje SaaS', 'REST API', 'Migracje z systemów legacy'],
      },
      {
        title: 'Strony internetowe',
        description:
          'Szybkie, dostępne i dobrze zaindeksowane. Bez ciężkich szablonów i wtyczek, które trzeba potem łatać.',
        bullets: [
          'Landing page i strony firmowe',
          'Optymalizacja Core Web Vitals',
          'SEO techniczne',
        ],
      },
      {
        title: 'Sklepy e-commerce',
        description:
          'Sklepy na Syliusie i rozwiązania marketplace — z integracjami płatności, kurierów i platform sprzedażowych.',
        bullets: [
          'Sylius i Symfony',
          'Integracje z Allegro i marketplace',
          'Płatności i logistyka',
        ],
      },
      {
        title: 'Systemy ERP i integracje',
        description:
          'Łączenie systemów, które nie były projektowane do współpracy: magazyn, sprzedaż, księgowość, zewnętrzni dostawcy.',
        bullets: [
          'Synchronizacja stanów i cen',
          'Przetwarzanie asynchroniczne',
          'Wymiana danych EDI/API',
        ],
      },
    ],
  },

  about: {
    label: 'O mnie',
    title: 'Ponad dekada pisania kodu, który idzie na produkcję',
    paragraphs: [
      'Zaczynałem od PHP i od tamtej pory nie przestałem — przez lata doszły do tego Symfony, Doctrine, kolejki, wyszukiwarki i cała infrastruktura wokół. Dziś pracuję głównie przy systemach e-commerce i marketplace: integracjach z zewnętrznymi platformami, obsłudze zamówień, katalogach produktowych i przetwarzaniu danych, które musi działać także wtedy, gdy ruch rośnie kilkukrotnie.',
      'Równolegle prowadzę frontend — Angular w wersji standalone, na sygnałach, bez zbędnych bibliotek. Lubię, kiedy jedna osoba może przeprowadzić funkcję od modelu domenowego aż do ekranu użytkownika i odpowiada za całość, a nie za wycinek.',
      'Poza pracą etatową buduję własne projekty — od aplikacji finansowych, przez sklepy na Syliusie, po natywne narzędzia na macOS. To one najszybciej weryfikują, czy dane podejście faktycznie się broni.',
    ],
    principles: [
      {
        title: 'Architektura pod złożoność',
        body: 'Prosty CRUD zostaje CRUD-em. Heksagon, DDD i CQRS wchodzą tam, gdzie domena naprawdę jest złożona — nie jako ozdoba.',
      },
      {
        title: 'Kod, który się czyta',
        body: 'Nazwy zamiast komentarzy, jawne typy, statyczna analiza na wysokim poziomie. Kod ma tłumaczyć się sam.',
      },
      {
        title: 'Spójność danych',
        body: 'Transakcje, idempotentne handlery i świadomość race conditions. Połowiczny zapis to gorszy błąd niż brak zapisu.',
      },
      {
        title: 'Wydajność mierzona',
        body: 'Zamiast domysłów — benchmarki, profilowanie i metryki. Jeśli twierdzę, że jest szybciej, mam na to liczby.',
      },
    ],
  },

  stack: {
    label: 'Technologie',
    title: 'Czym pracuję na co dzień',
    lead: 'Narzędzia dobieram do problemu, ale największą biegłość mam w ekosystemie PHP i Symfony po stronie serwera oraz w Angularze po stronie przeglądarki.',
    groups: {
      backend: 'Backend',
      architecture: 'Architektura',
      frontend: 'Frontend',
      infrastructure: 'Dane i infrastruktura',
    },
  },

  projects: {
    label: 'Projekty',
    title: 'Wybrane rzeczy, które zbudowałem',
    lead: 'Projekty własne i produkcyjne. Część działa publicznie pod własną domeną, część ma otwarty kod na GitHubie.',
    sourceCode: 'Kod źródłowy',
    privateNote: 'Projekt prywatny — chętnie opowiem o szczegółach',
    more: 'Wszystkie repozytoria na GitHubie',
    shots: {
      landing: 'Strona główna',
      store: 'Sklep',
      panel: 'Panel administracyjny',
      app: 'Aplikacja',
      catalogue: 'Katalog badań',
      packages: 'Pakiety badań',
      locations: 'Punkty pobrań',
      dark: 'Tryb ciemny',
    },
    gallery: {
      roleDescription: 'karuzela zrzutów ekranu',
      previous: 'Poprzedni zrzut ekranu',
      next: 'Następny zrzut ekranu',
      pause: 'Zatrzymaj przewijanie',
      play: 'Wznów przewijanie',
    },
    items: {
      labkawa: {
        tagline: 'Laboratorium diagnostyczne online',
        description:
          'Serwis laboratorium diagnostycznego: katalog badań z wyszukiwarką i filtrami, pakiety profilaktyczne z kalkulacją oszczędności, mapa punktów pobrań, koszyk i panel z wynikami. Design system oparty na CSS custom properties — cały motyw przestawia się jednym kolorem.',
      },
      psg: {
        tagline: 'Wskaźnik wyceny spółek w stylu terminala',
        description:
          'Aplikacja licząca wskaźnik PSG — odpowiednik PEG dla przychodów. Wyszukiwarka spółek z autouzupełnianiem, wykres trendu, kafelki wskaźników ze zmianą w zakresie, panel z ostatnimi wynikami finansowymi i konsensusem cen docelowych oraz zegary głównych giełd z sesyjnym statusem open/closed.',
      },
      oma: {
        tagline: 'Strona gabinetu fizjoterapii ze sklepem',
        description:
          'Dwuczęściowy projekt: landing w Angularze zbudowany do statyków oraz sklep i panel na Syliusie. Wszystko serwowane z jednego kontenera FrankenPHP — landing pod „/", sklep pod „/sklep/", panel pod „/admin/".',
      },
    },
  },

  contact: {
    label: 'Kontakt',
    title: 'Porozmawiajmy o projekcie',
    lead: 'Opisz w kilku zdaniach, co chcesz zbudować — aplikację, stronę, sklep czy integrację z ERP. Odpiszę z pytaniami, szacunkiem czasu i propozycją kolejnego kroku.',
    directLabel: 'Napisz bezpośrednio',
    phoneLabel: 'Zadzwoń',
    stepsTitle: 'Co dalej',
    steps: [
      'Odpisuję z pytaniami, które doprecyzują zakres.',
      'Krótka rozmowa — telefon albo wideo, zwykle 30 minut.',
      'Dostajesz szacunek czasu, kosztu i propozycję pierwszego etapu.',
    ],
  },

  form: {
    name: 'Imię i nazwisko',
    namePlaceholder: 'Jan Kowalski',
    nameError: 'Podaj imię — przynajmniej dwa znaki.',
    email: 'Adres e-mail',
    emailPlaceholder: 'jan@firma.pl',
    emailError: 'Podaj poprawny adres e-mail — na niego odpiszę.',
    subject: 'Czego dotyczy projekt',
    subjects: [
      'Aplikacja webowa',
      'Strona internetowa',
      'Sklep e-commerce',
      'System ERP lub integracja',
      'Konsultacja / code review',
      'Inne',
    ],
    message: 'Wiadomość',
    messageCounter: 'min. 20',
    messagePlaceholder: 'Kilka zdań o projekcie: co ma robić, na kiedy i czy coś już istnieje.',
    messageError: 'Opisz projekt w co najmniej 20 znakach.',
    honeypot: 'Nazwa firmy',
    consent: 'Zgadzam się na przetwarzanie podanych danych w celu odpowiedzi na zapytanie.',
    consentError: 'Bez zgody nie mogę odpisać.',
    submit: 'Wyślij wiadomość',
    sending: 'Wysyłanie…',
    note: 'Odpowiadam w ciągu jednego dnia roboczego.',
    sendError: 'Nie udało się wysłać wiadomości. Napisz proszę bezpośrednio na',
    successTitle: 'Dziękuję za wiadomość',
    successBodyBefore:
      'Odpowiadam zwykle w ciągu jednego dnia roboczego. Jeśli nic nie przyjdzie — sprawdź folder spam albo napisz bezpośrednio na',
    successAgain: 'Wyślij kolejną wiadomość',
  },
};
