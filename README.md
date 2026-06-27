# trzecifilar.com — nowa strona (Medart 2000 / ustniki.pl)

Nowy wygląd strony prezentującej produkty i usługi firmy **Medart 2000 — Peryt Janusz**.
Strona **statyczna** (jeden plik `index.html`, bez kroku budowania) — szybka, tania i prosta
do wdrożenia na Render z repozytorium GitHub.

## Co jest w środku

| Plik | Do czego służy |
|------|----------------|
| `index.html` | Cała strona: treść, style (CSS) i skrypt (JS) w jednym pliku |
| `render.yaml` | Konfiguracja wdrożenia na Render (strona statyczna + nagłówki bezpieczeństwa) |
| `.gitignore` | Pliki, których nie wysyłamy do repozytorium |

## Co poprawiono względem starej strony (z audytu)

- **Tylko HTTPS** — przekierowanie i nagłówki ustawione w `render.yaml`.
- **Czysta nawigacja** bez powtórzonych pozycji menu („Szkolenia", „Kontakt" itd.).
- **Opisy `alt`** przy każdym zdjęciu produktu (SEO + dostępność).
- **Dane strukturalne** (schema.org `Store`) — dane firmy dla Google.
- **Poprawne meta** i Open Graph, spójna marka, brak przestarzałego `meta keywords`.
- **Responsywność**, widoczny fokus klawiatury, poszanowanie `reduced-motion`.

## Zanim opublikujesz — uzupełnij

1. **E-mail.** W `index.html` jest placeholder `biuro@ustniki.pl` (oznaczony „do potwierdzenia").
   Zamień na prawdziwy adres — wyszukaj `biuro@ustniki.pl` i podmień wszędzie.
2. **Zdjęcia produktów.** Strona pokazuje miniatury 100×100 px ze starego serwera.
   Docelowo wgraj zdjęcia w wyższej rozdzielczości do katalogu `images/` i podmień adresy
   (zmienna `IMG` oraz pole `img` na liście `products` w `index.html`).
3. **Produkty.** Lista `products` w `index.html` jest łatwa do edycji — dodaj/usuń pozycje,
   zmień ceny i opisy.
4. **Regulamin / polityka prywatności.** Podlinkuj właściwą podstronę (na razie `#`).
5. **Formularz kontaktowy.** Strona statyczna nie wysyła formularzy sama — działają telefon
   i e-mail (mailto). Jeśli chcesz formularz, podłącz np. Formspree lub funkcję Render
   (mogę to dorobić).

## Podgląd lokalny (opcjonalnie)

Otwórz `index.html` w przeglądarce — to zwykły plik, działa bez serwera.

---

## Wdrożenie: GitHub + Render

Tych kroków musisz dokonać samodzielnie (wymagają logowania na Twoje konta).
Polecenia w terminalu uruchom w katalogu `trzecifilar-nowa/`.

### 1. Repozytorium na GitHub

1. Załóż konto i zaloguj się na https://github.com → **New repository** → nazwa np. `trzecifilar-nowa` → **Create**.
2. W terminalu, w katalogu projektu:

   ```bash
   git init
   git add .
   git commit -m "Nowa strona Medart 2000"
   git branch -M main
   git remote add origin https://github.com/TWOJA-NAZWA/trzecifilar-nowa.git
   git push -u origin main
   ```

### 2. Strona statyczna na Render

1. Załóż konto na https://render.com (możesz zalogować się przez GitHub).
2. **New** → **Static Site** → połącz konto GitHub i wybierz repo `trzecifilar-nowa`.
3. Ustawienia:
   - **Build Command:** *(zostaw puste)*
   - **Publish Directory:** `.`
4. **Create Static Site**. Render zbuduje i poda adres typu `https://trzecifilar-nowa.onrender.com`.

> Render sam wykryje `render.yaml`, więc zamiast konfigurować ręcznie możesz wybrać
> **New → Blueprint** i wskazać repo — ustawienia i nagłówki bezpieczeństwa wczytają się same.

### 3. Domena trzecifilar.com (gdy będziesz gotowy)

W panelu Render: **Settings → Custom Domains → Add** `trzecifilar.com`, a u rejestratora domeny
ustaw rekordy DNS według instrukcji Render. Certyfikat HTTPS Render wystawi automatycznie.

---

Pytania lub zmiany w wyglądzie/treści — daj znać, dopracuję.
