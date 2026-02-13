// MW: Korzystanie z materiałów zewnętrznych
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 80;
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "static")));

app
.get("/", (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="pl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Formular</title>
        <style>
            body {
                background-color: #070707;
                color: #f3fff3;
            }
        </style>
    </head>
    <body>
        <h1>Wprowadź dane</h1>

        <form method="POST" action="/">
            <label for="imie">Imię</label><br>
            <input type="text" name="imie"><br> <!-- MW: label do działania potrzebuje w input 'id="imie"' -->

            <label for="nazwisko">Nazwisko</label><br>
            <input type="text" name="nazwisko"><br> <!-- MW: label do działania potrzebuje w input 'id="nazwisko"' -->

            <label for="miasto">Miasto</label><br>
            <input type="text" name="miasto"><br> <!-- MW: label do działania potrzebuje w input 'id="miasto"' -->

            <br><button type="submit">Wyślij</button>
        </form>
    </body>
    </html>    
    `)
    // res.sendFile(path.join(__dirname, "static", "index.html"));
})
.post("/", (req, res) => {
    console.log(req.body);
    const {imie, nazwisko, miasto} = req.body;
    const html = `
    <!DOCTYPE html>
    <html lang="pl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Formular</title>
        <style>
            body {
                background-color: #070707;
                color: #f3fff3;
            }
        </style>
    </head>
    <body>
        <h1>Przesłane dane</h1><ul>
        <li>Imię: ${imie}</li>
        <li>Nazwisko:${nazwisko}</li>
        <li>Miasto: ${miasto}</li></ul>
    </body>
    </html>
    `;
    res.send(html);
})
.listen(PORT, () => {
    console.log(`server jest na http://localhost:${PORT}`);
});
