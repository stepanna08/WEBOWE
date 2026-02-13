// MW: Korzystanie z materiałów z poprzednich lekcji
import express from 'express';

const app=express();
const PORT=3001;

app.use(express.urlencoded({extended:true}));

var sendHeaders = (res, headers = []) => {
    res.setHeader('Charset', 'utf-8');
    res.setHeader('Content-Type', 'text/html');
    if (headers) {
        for (let header of headers) {
            res.setHeader(header[0], header[1]);
        }
    }
}



app 


.get('/', (req,res) => { 
    sendHeaders(res);
     
    res.write('<html><form method="POST" action="/form">Imie: <input type="text";name="im"><br>Nazwisko: <input type="text"; name="naz"><br> Miasto: <input type="text"; name="mias"><br><button type="submit">przeslij</button></form></html>')
    

})

.post('/form', (res,req) =>{
	// MW: Brak obsługi przesłanych danych np. 'req.body.imie'
    res.write('test');
})


.listen(PORT, ()=>{
console.log('Dziala na porcie: '+ PORT);

})
