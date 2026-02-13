import express from "express";

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app
    .get("/", (req, res) => {
        const html = `
            <html>
                <head><title>Formularz</title></head>
                <body>
                    <h2>Wprowadź dane:</h2>
                    <form method="POST" action="/wynik">
                        Imię: <input type="text" name="imie"><br><br>
                        Nazwisko: <input type="text" name="nazwisko"><br><br>

                        Miasto: <input type="text" name="miasto"><br><br>
                        <button type="submit">Wyślij</button>
                    </form>
                </body>
            </html>
        `;
        res.send(html);
    });

app.
    post("/wynik", (req, res) => {
        const { imie, nazwisko, miasto } = req.body;

        res.send(`
            <html>
                <body>
                    <h2>Otrzymane dane:</h2>
                    <p><b>Imię:</b> ${imie}</p>
                    <p><b>Nazwisko:</b> ${nazwisko}</p>
                    <p><b>Miasto:</b> ${miasto}</p>
                    <br><a href="/">Powrót</a>
                </body>
            </html>
        `);
    });

app.listen(PORT, () => {
    console.log("Server działa na porcie:", PORT);
});

