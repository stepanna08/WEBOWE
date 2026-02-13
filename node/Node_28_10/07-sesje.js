import express from 'express';
import session from 'express-session';
import flash from 'connect-flash';
// npm install express express-session connect-flash

const PORT = 3000;
const app = express();

app.use(session({
	secret: 'T@jny-Kluc2-D0-52yfr0w@n!@-M!n-32-2n@k!-N@jlep!ej-Wygener0w@ny-L050w0',
	resave: false, // zapisywac sesję przy każdym żądaniu, nawet bez zmian? Zwykle false
	saveUninitialized: true, // zapisywać nową sesję, zanim zostanie zmodyfikowana? Zwykle true
	cookie: {
		maxAge: 1000 * 60 * 30,
		// cacheControl: 'no-store, no-cache, must-revalidate, private',
		// pragma: 'no-cache',
		// expires: 0,
	}
}))
app.use(flash());
app.use(express.urlencoded({ extended: true }));

/* Przykładowe użycie sesji i flash messages */
app.get('/', (req, res) => {
	req.flash('info', 'Witamy na stronie głównej!');	//	Ustawienie wiadomości flash
	res.write('<html><head><meta charset = "UTF-8"></head>');
	res.write('<body><form method = "GET" action = "/dashboard"><input type = "text" name = "imie"><button type="submit">Wyślij</button></form></form><body>')
	res.write('Strona główna. Przejdź do /dashboard, aby zobaczyć sesję i wiadomości flash.<br><a href="/dashboard">DASHBOARD</a>');	
	res.end();
});

app.get('/dashboard', (req, res) => {
	const username = req.query.imie || 'Gość';	//	Pobranie wartości z sesji
	if (username == "Gość"){
		req.flash("info","Nie zalogowany użytkownik, odmowa dostępu!");
		console.log(req.flash('info'))
		res.redirect('/');
		//req.session.destroy(err => {});
		
	}
	else {
		const messages = req.flash('info');	//	Pobranie wiadomości flash
		res.write('<!DOCTYPE html><html lang = "pl"><head><meta charset = "UTF-8"></head>');
		res.write(`<a href="/">HOME</a><br>Witaj, ${username}!<br>Wiadomości: ${messages}`);
		res.end();
	}
});

app.get('/logout', (req, res) => {
	
	//req.session.refresh();
	req.flash("info","Wylogowano!");
	res.clearCookie();
	res.redirect('/');
	//req.session.destroy(err => {});
	
});

app.use((req,res,next) => {
	if (req.session) {
		req.session.cookie.maxAge = 1000 * 60 * 30;
	}
	next();
});

app.listen(PORT, () => {
	console.log(`Serwer działa na porcie ${PORT}`);
});


// Teraz serwer Express obsługuje sesje i wiadomości flash. Przykładowe trasy pokazują, jak ustawiać i pobierać dane z sesji oraz jak korzystać z flash messages.

/* usuwanie sesji
req.session.destroy(err => {
    if (err) {
        return console.log(err);
    }

	res.redirect('/'); // przekierowanie na inną stronę
});
/**/

/* Zadanie 1: X
1. Uruchom powyższy kod serwera Express.
2. Otwórz przeglądarkę i przejdź do http://localhost:3000/.
3. Następnie przejdź do http://localhost:3000/dashboard, aby zobaczyć ustawioną wartość sesji i wiadomości flash.
4. Zmodyfikuj kod, aby dodać więcej informacji do sesji i wyświetlić je na stronie dashboard.
*/

/* Zadanie 2: X
1. Dodaj trasę /logout, która usuwa dane sesji i przekierowuje użytkownika z powrotem na stronę główną z wiadomością flash informującą o wylogowaniu.
2. Przetestuj działanie trasy /logout.
*/

/* Zadanie 3: X
1. Dodaj formularz logowania na stronie głównej, który pozwala użytkownikowi wprowadzić nazwę użytkownika.
2. Po przesłaniu formularza, zapisz nazwę użytkownika w sesji i przekieruj użytkownika do dashboard.
3. Wyświetl nazwę użytkownika na stronie dashboard.
*/

/* Zadanie 4: X
1. Dodaj mechanizm ograniczający dostęp do strony dashboard tylko dla zalogowanych użytkowników (tych, którzy mają ustawioną nazwę użytkownika w sesji).
2. Jeśli niezalogowany użytkownik spróbuje uzyskać dostęp do dashboard, przekieruj go na stronę główną z odpowiednią wiadomością flash.
*/

/* Zadanie 5: X
1. Zaimplementuj funkcję odświeżania sesji, która resetuje czas wygaśnięcia sesji przy każdym żądaniu użytkownika.
2. Przetestuj, czy sesja wygasa po określonym czasie nieaktywności.
*/
