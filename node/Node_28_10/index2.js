import express from 'express';
const app = express();
const PORT = 3000;

app
    .use(express.urlencoded({ extended: true })) 

    .get('/subskrybent', (req, res) => {
        res.send(`
            <head>
            <meta charset='UTF-8'>
            </head>
            <body>
            <form method="POST">
                <h1>Login <input type="text" name="login"></h1>
                <h1>Wiek <input type="number" name="wiek"></h1>
                <h1><input type="radio" name="czy_sigma">sigma?</h1>
                <button type="submit">Wyślij</button>
            </form>
            </body>
        `); 
    })

    .post('/subskrybent', (req, res) => {
        console.log(req.body);

        if (req.body.czy_sigma) {
            res.write('Sigma: Tak \n');
        } else {
            res.write('Sigma: nie \n');
        }

        res.write("Login: " + req.body.login + "\n");
        res.write("Wiek: " + req.body.wiek + "\n");
        res.end();
    })

    .get('/subskrybent/:imie', (req, res) => {
        res.write(`Otwarto strone ` + req.params.imie);
        res.end();
    })

    .listen(PORT, () => {
        console.log(`\n Example app listening at http://localhost:${PORT}`); 
    });