import express from 'express';

const app = express()
const PORT = 3000;

app
    .get('/subskrybent', (req, res) => {

        res.write('Furia Furia Furioza');
        res.end('');

    })
    .listen(PORT, () => {
        console.log(`Serwer działa na http://localhost:${PORT}`);
    })