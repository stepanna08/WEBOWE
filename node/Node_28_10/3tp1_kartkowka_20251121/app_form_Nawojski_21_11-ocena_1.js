import express from 'express';

const app=express();
const PORT=3000;

app.use(express.urlencoded({extended:true}));

// MW: Korzystanie z materiałów z poprzednich lekcji
// var sendHeaders = (res, headers = []) => {
//     res.setHeader('Charset', 'utf-8');
//     res.setHeader('Content-Type', 'text/html');
//     if (headers) {
//         for (let header of headers) {
//             res.setHeader(header[0], header[1]);
//         }
//     }
// }

app
    .get('/form', (req,res) =>{
        // sendHeaders(res);

        res.write('<html> <form method="POST"> Imie <input type="text" name="imie"> </br> </br> Nazwisko <input type="text" name="nazwisko"> </br> </br> Miasto <input type="text" name="miasto"> </br> <button type="submit">Przeslij</button> </form> </html>');
    })

    .post('/form', (req,res) => {
		// MW: Brak obsługi przesłanych danych np. 'req.body.imie'
        res.write('');
    })

    .listen(PORT, () => {
        console.log('Dziala na porcie ' + PORT);
    })
