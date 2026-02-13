import express from "express";

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send(`
        <html>
        <body>
            <form action="/wynik" method="POST">
            Imię: <input name="imie" type="text" /><br>
            Nazwisko: <input name="nazwisko" type="text" /><br>
            Miasto: <input name="miasto" type="text" /><br>
            <button type="submit">Wyślij</button>
            </form>
        </body>
        </html>
  `);
});

app.post("/wynik", (req, res) => {
    const { imie, nazwisko, miasto } = req.body;

    res.send(`
        <html>
        <body>
            <h1>Otrzymane dane</h1>
            <p><strong>Imię:</strong> ${imie}</p>
            <p><strong>Nazwisko:</strong> ${nazwisko}</p>
            <p><strong>Miasto:</strong> ${miasto}</p>

            <a href="/">Powrót</a>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
  console.log(`Serwer działa na http://localhost:${PORT}`);
});