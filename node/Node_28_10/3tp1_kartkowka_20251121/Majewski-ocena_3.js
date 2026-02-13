// MW: Korzystanie z materiałów z poprzednich lekcji
import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended:true}));

var sendHeaders = (res, headers = []) => {
    res.setHeader('charset', 'UTF-8');
    res.setHeader('Content-Type', 'text/html');
    if (headers){
        for (let header of headers){
            res.setHeader(header[0], header[1]);
        };
    };
};

app
    .get('/test', (req,res) =>{
        sendHeaders(res);

        res.write("<form method='POST' action='/test'>");

        res.write('wpisz imie: ');
        res.write('<input name="imie"></input> <br>');

        res.write("wpisz nazwisko: ")
        res.write("<input name='nazwisko'></input> <br>")

        res.write("wpisz miasto: ")
        res.write("<input name='miasto'></input> <br>")
        
        res.write("<input type='submit' value='wyslij'></input>")

        res.write("</form>");

    })

    .post('/test', (req,res) =>{
        sendHeaders(res);

        let imie = _POST['imie']; // MW: $_POST wystepuje w języku PHP

        res.write("Twoje imie: ");
        res.write(imie); // MW: powinno być 'req.body.imie'

    })

    .listen(PORT, () => {

        console.log('\nSerwer działa na porcie ' + PORT);

    })
    