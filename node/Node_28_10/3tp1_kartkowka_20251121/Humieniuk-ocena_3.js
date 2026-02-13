// MW: Korzystanie z materiałów z poprzednich lekcji
import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: true}));

app
    .get('/uzytkownik', (req,res) => {
        res.send('<form method="POST">Podaj imie: <input type="text" name="imie"></input><br> Podaj Nazwisko: <input type="text" name="nazwisko"></input><br> Podaj Miasto: <input type="text" name="miasto"></input><br><input type="submit" name="button"></form>');
        res.end();
    })
    .post('/uzytkownik', (req,res) => {
        res.send('Imię: '+req.body.imie+'       Nazwisko:   '+req.body.nazwisko+'    Miasto:  '+req.body.miasto);
    })
    .listen(PORT, () =>{
        console.log('\nSerwer działa na porcie' + PORT);
    });
    // "type": "module"
