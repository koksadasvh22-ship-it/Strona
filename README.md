# Randkuj Normalnie — strona sprzedażowa e-booka

Repozytorium zawiera stronę sprzedażową e-booka „Od matcha do pierwszej randki”.

## Publikacja na Netlify

Plik `netlify.toml` jest skonfigurowany pod wdrożenie z GitHuba:

- build command przygotowuje katalog `publish`;
- jeżeli w repozytorium istnieje katalog `randkuj-normalnie-site/`, Netlify kopiuje z niego pliki strony;
- w przeciwnym razie Netlify rozpakowuje archiwum `randkuj-normalnie-landing.zip` i publikuje jego katalog `randkuj-normalnie-site/`;
- katalog publikacji to `publish`;
- nie jest potrzebny framework ani osobny build aplikacji.

W Netlify wybierz **Add new site → Import an existing project → GitHub**, wskaż repozytorium `koksadasvh22-ship-it/Strona`, pozostaw ustawienia z `netlify.toml` i uruchom deploy. Po połączeniu Netlify będzie wdrażać kolejne commity z wybranej gałęzi (domyślnie `main`).

## Praca nad stroną w Codexie

Obecnie pełny projekt jest zachowany w `randkuj-normalnie-landing.zip`. Żeby edytować pliki bezpośrednio w repozytorium:

1. Rozpakuj archiwum w katalogu głównym repozytorium:
   `unzip -o randkuj-normalnie-landing.zip -d .`
2. Edytuj pliki w `randkuj-normalnie-site/` (HTML, CSS, JavaScript, konfigurację, grafiki i podglądy).
3. Dodaj rozpakowany katalog do GitHuba i wykonaj commit.

Gdy katalog `randkuj-normalnie-site/` będzie już w repozytorium, Netlify automatycznie będzie publikować tę wersję źródłową, a nie zawartość ZIP-a. Dzięki temu późniejsze zmiany zapisane w Codexie i wypchnięte do GitHuba będą wdrażane automatycznie.

## Aktywacja sprzedaży

Strona jest obecnie w trybie demonstracyjnym. Przed uruchomieniem sprzedaży uzupełnij `randkuj-normalnie-site/config.js`:

- `priceDisplay` — rzeczywistą cenę;
- `checkoutUrl` — link do koszyka Naffy, Easycart lub innej platformy;
- `sellerName` i `sellerEmail` — dane sprzedawcy i kontakt;
- `termsUrl` i `privacyUrl` — opublikowane dokumenty.

Pełny e-book PDF powinien być przechowywany w platformie sprzedażowej z automatyczną dostawą po płatności. Nie umieszczaj pełnego pliku PDF w publicznym katalogu strony. W projekcie znajdują się tylko wybrane strony podglądowe.

## Struktura projektu

- `randkuj-normalnie-landing.zip` — kompletna paczka projektu (HTML, CSS, JavaScript, konfiguracja, grafiki i podglądy);
- `netlify.toml` — konfiguracja wdrożenia i nagłówków bezpieczeństwa/cache;
- `randkuj-normalnie-site/` — katalog źródłowy, który można rozpakować i śledzić w Git.

Przed publicznym uruchomieniem sprzedaży uzupełnij dane sprzedawcy, dokumenty, cenę i checkout oraz sprawdź obowiązki prawne dotyczące sprzedaży treści cyfrowych.
