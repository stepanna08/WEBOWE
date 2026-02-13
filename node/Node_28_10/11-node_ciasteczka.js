// #region informacje
/*	WSTEP DO CIASTECZEK W EXPRESS.JS
 *	Ciasteczka (cookies) to małe pliki tekstowe przechowywane w przeglądarce. Można w nich zapisywać informacje o np. preferencjach użytkownika, sesjach logowania itp. W Express.js  możemy łatwo zarządzać ciasteczkami za pomocą 'cookie-parser' (npm install cookie-parser) w middleware: 'app.use(cookieParser())'.
 *
 *	Różnice między ciasteczkami a sesjami:
 *	- Ciasteczka są przechowywane po stronie klienta (w przeglądarce)
 *	- Sesje są przechowywane po stronie serwera
 *	- Ciasteczka mają ograniczenie rozmiaru (~4KB)
 *	- Ciasteczka mogą być łatwo odczytane/zmodyfikowane przez użytkownika
 *	- Sesje są bezpieczniejsze dla wrażliwych danych
 *
 *	Ciasteczka podpisane (signed cookies):
 *	app.use(cookieParser('tajny-klucz-do-podpisywania'));
 *
 *	Ustawienie podpisanego ciasteczka:
 *	res.cookie('userId', '12345', { signed: true });
 *
 *	Odczytanie podpisanego ciasteczka:
 *	const userId = req.signedCookies.userId;
 */
// #endregion

// #region podstawowa konfiguracja
import express from 'express';
import cookieParser from 'cookie-parser';

const PORT = 3001;
const app = express();
const htmlHeader = `<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Ciasteczka w Express</title>
</head>
<body>`;
const htmlFooter = `
	</body>
</html>`;

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
// #endregion

// #region ustawienie ciasteczek
app.get('/', (req, res) => {
	res.cookie('username', 'JanKowalski', {
		maxAge: 1000 * 60 * 30, // 30 minut
		httpOnly: true // niedostępne dla JavaScript (bezpieczeństwo)
	});
	res.cookie('theme', 'dark', { maxAge: 1000 * 60 * 60 * 24 * 365 }); // 1 rok

	res.write(`${htmlHeader}Strona główna. Ciasteczka zostały ustawione! Przejdź do <a href="/dashboard">dashboard</a>.${htmlFooter}`);
	res.write("<form method = 'GET' action = '/dashboard'><input name = 'kolor' placeholder = 'kolor tla cz zi zo ni ro'><button type='submit'>Wyślij</button></form>")
});
// #endregion

// #region Odczyt ciasteczek
app.get('/dashboard', (req, res) => {
	// Odczytanie ciasteczek
	const kolor = req.query.kolor || 'ro';
	const username = req.cookies.username || 'Gość';
	const theme = req.cookies.theme || 'light';
	const lang = req.cookies.lang || "en";
	const wiadomosc = {
		pl:{
		welcome: "czesc",
		},
		en: {
			welcome: 'welcome'
		}
	}
	const k = {
		ro: {color: "pink", color2: "black"}, ni: {color: "blue", color2: "white"}, zo: {color: "yellow", color2: "black"}, zi: {color: "green", color2: "yellow"}, cz: {color: "red", color2: "white"},
	}
	const w = wiadomosc[lang] || "pl";
	res.send(`
		<style>body {background-color: ${k[kolor].color}; color: ${k[kolor].color2}} a {color: ${k[kolor].color2}}</style>
		${htmlHeader}

		<h1>${w.welcome}  ${username}!</h1>
		<p>Wybrany motyw: ${theme}</p>
		<p><a href="/cookies">Zobacz wszystkie ciasteczka</a></p>
		<p><a href="/delete-cookie">Usuń ciasteczko username</a></p>
		<p><a href="/set-language?lang=pl">zmien langzuz</a></p>
		<p><a href="/set-language?lang=en">chanz langzuz</a></p>
		<p><a href="/reset-color">reset color</a></p>
		${htmlFooter}
	`);

});
// #endregion

// #region Wyświetlenie wszystkich ciasteczek
app.get('/cookies', (req, res) => {
	res.send(`
		${htmlHeader}
		<h1>Wszystkie ciasteczka:</h1>
		<pre>${JSON.stringify(req.cookies, null, 2)}</pre>
		<p><a href="/">Strona główna</a></p>
		${htmlFooter}
	`);
});
// #endregion

// #region Usunięcie ciasteczka
app.get('/delete-cookie', (req, res) => {
	// Usunięcie ciasteczka
	res.clearCookie('username');
	res.send(`${htmlHeader}Ciasteczko "username" zostało usunięte! <a href="/dashboard">Wróć do dashboard</a>${htmlFooter}`);
});

app.get('/set-language', (req, res) => {
	let lang = req.query.lang || "pl"
	res.cookie('lang', lang, { maxAge: 1000 * 60 * 60 * 24 * 365 });
	res.redirect('/dashboard');

});
app.get('/reset-color', (req, res) => {
	let kolor = "ro";
	res.redirect('/dashboard');

});

app.listen(PORT, () => {
	console.log(`Serwer działa na porcie ${PORT}`);
});
// #endregion

// #region Zadania
/* Zadanie 1: X
1. Uruchom powyższy kod serwera Express.
2. Otwórz przeglądarkę i przejdź do http://localhost:3000/.
3. Przejdź do /dashboard, aby zobaczyć odczytane ciasteczka.
4. Sprawdź ciasteczka w narzędziach deweloperskich przeglądarki (F12 -> Application/Storage -> Cookies).
5. Przetestuj usuwanie ciasteczka poprzez /delete-cookie.
*/

/* Zadanie 2: X
1. Dodaj trasę /set-language, która przyjmuje parametr query string (np. ?lang=pl lub ?lang=en).
2. Zapisz wybrany język w ciasteczku o nazwie 'language'.
3. Na stronie /dashboard wyświetl komunikat w odpowiednim języku na podstawie ciasteczka.
4. Przetestuj przełączanie między językami.
*/

/* Zadanie 3: X
1. Utwórz formularz na stronie głównej, który pozwala użytkownikowi wybrać preferowany kolor tła (np. red, blue, green).
2. Po przesłaniu formularza, zapisz wybrany kolor w ciasteczku.
3. Na stronie /dashboard zastosuj wybrany kolor tła na podstawie ciasteczka.
4. Dodaj możliwość resetowania preferencji koloru.
*/

/* Zadanie 4:
1. Zaimplementuj licznik wizyt używając ciasteczek.
2. Przy każdej wizycie na stronie głównej zwiększaj wartość licznika w ciasteczku.
3. Wyświetl informację "To Twoja [X] wizyta na tej stronie".
4. Przetestuj, czy licznik działa poprawnie po odświeżeniu strony.
*/

/* Zadanie 5:
1. Zaimplementuj system zapamiętywania ostatnio odwiedzonych stron (maksymalnie 5).
2. Zapisuj historię odwiedzin w ciasteczku jako JSON.
3. Utwórz trasę /history, która wyświetla listę ostatnio odwiedzonych stron.
4. Upewnij się, że ciasteczko nie przekracza limitów rozmiaru.
*/

/* Zadanie 6 (zaawansowane):
1. Zaimplementuj podpisane ciasteczka do bezpiecznego przechowywania identyfikatora użytkownika.
2. Utwórz prosty system "zapamiętaj mnie" przy logowaniu.
3. Jeśli użytkownik zaznaczy "zapamiętaj mnie", ustaw ciasteczko z długim czasem życia.
4. Automatycznie loguj użytkownika, jeśli ciasteczko istnieje i jest poprawnie podpisane.
*/
// #endregion
