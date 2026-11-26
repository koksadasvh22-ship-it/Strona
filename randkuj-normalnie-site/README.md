# Randkuj Normalnie — landing page e-booka

Statyczna, responsywna strona sprzedażowa jednego produktu: **„Od matcha do pierwszej randki”**.

## Uruchomienie lokalne

Możesz otworzyć `index.html` bezpośrednio w przeglądarce. Dla testów lokalnych zalecany jest prosty serwer:

```bash
python -m http.server 8080
```

Następnie otwórz `http://localhost:8080`.

## Publikacja na Netlify

1. Rozpakuj cały katalog projektu.
2. Przeciągnij folder `randkuj-normalnie-site` do Netlify Drop albo podepnij repozytorium GitHub.
3. Ustaw katalog publikacji na `.` (root projektu). Nie jest wymagany build command.
4. Dodaj własną domenę, jeśli ją posiadasz.

## Aktywacja sprzedaży

Strona działa w trybie demonstracyjnym: przyciski „Kup e-booka” wyjaśniają, że płatności nie są jeszcze podłączone. Nie symulują zakupu i nie udostępniają pełnego PDF-a.

Przed sprzedażą otwórz `config.js` i uzupełnij:

- `priceDisplay` — rzeczywistą cenę produktu,
- `checkoutUrl` — adres checkoutu w Naffy, Easycart lub innej platformie,
- `sellerName` — dane sprzedawcy,
- `sellerEmail` — adres kontaktowy,
- `termsUrl` — link do regulaminu,
- `privacyUrl` — link do polityki prywatności.

W platformie sprzedażowej dodaj rzeczywisty plik PDF jako produkt cyfrowy i ustaw automatyczną dostawę po opłaceniu zamówienia. **Nie kopiuj pełnego PDF-a do folderu strony ani do publicznego katalogu `assets`.** W katalogu `previews` znajdują się tylko cztery wybrane strony podglądowe (z 51).

Przed uruchomieniem sprzedaży zweryfikuj regulamin, politykę prywatności, dane sprzedawcy, sposób dostawy, zasady reklamacji i informacje dla konsumenta dotyczące treści cyfrowych. Projekt nie stanowi porady prawnej.

## Zawartość

- `index.html` — wszystkie sekcje strony i treści sprzedażowe,
- `styles.css` — projekt, responsywność, animacje i style dostępności,
- `script.js` — menu mobilne, FAQ, podglądy stron, okna informacyjne i konfiguracja CTA,
- `extra.css`, `extra.js` — dodatki wersji MIX: rozwijane rozdziały, porównanie, tabela „teraz → po”, przyklejony pasek zakupu na telefonie, poprawki proporcji obrazów i rozmiarów tekstu,
- `config.js` — dane do podpięcia płatności i danych sprzedawcy,
- `assets/` — mockup e-booka z rzeczywistą okładką, ilustracja i grafika Open Graph,
- `previews/` — przykładowe strony z e-booka z oznaczeniem podglądu.

## Uwaga o treści i cenie

Teksty strony oparte są na wersji MIX e-booka (51 stron, 12 rozdziałów, plan na 30 dni, 13 checklist, 11 arkuszy). Nie dodano fikcyjnych opinii klientów. Cena nie została narzucona — należy ją uzupełnić w `config.js`.
