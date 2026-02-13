import express from 'express';
// MW: To jest wersja pierwsza (przesłana o 12:00). Różni się znacząco od wersji drugiej (przesłana o 12:09). Korzystanie z materiałów z poprzednich lekcji.

const app = express()
const PORT = 3000;

app
	// MW: Brak '.use(express.urlencoded({ extended: true }))' do obsługi formularzy
    .get('/subskrybent', (req, res) => {

        res.write('Furia Furia Furioza');
        res.end('');

    })
	// MW: Brak obsługi post '.post("/subskrybent", (req, res) => { ... })' oraz przesłanych danych np. 'req.body.imie'
    .listen(PORT, () => {
        console.log(`Serwer działa na http://localhost:${PORT}`);
    })
