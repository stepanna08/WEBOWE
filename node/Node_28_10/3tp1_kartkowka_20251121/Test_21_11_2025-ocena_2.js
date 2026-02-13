// MW: Korzystanie z materiałów z poprzednich lekcji
import express from "express";
const routerSubskrybent = express.Router();

var sendHeaders = (res, headers = []) => {
    res.setHeader('charset', 'utf-8');
    res.setHeader('Content-Type', 'text/html');
    if (headers){
        for (let header of headers){
            res.setHeader(header[0], header[1]);
        }
    }
}

const app = express();
const PORT = 3000;

app
	// MW: Brak '.use(express.urlencoded({ extended: true }))' do obsługi formularzy
    .get("/form", (req, res) =>{
        sendHeaders(res)
        res.write("<form method = 'post'>")
        res.write("Imie <input type='text' name='imie'> <br>")
        res.write("Nazwisko <input type='text' name='nazwisko'> <br>")
        res.write("Miasto <input type='text' name='miasto'><br>")
        res.write("<input type='submit'></form>")
        res.end()
    })
    .post("/form", (req, res) =>{
        res.write("Witaj, " + req.body.imie + " " + req.body.nazwisko + " z " + req.body.miasto)
        res.end()
    })
    .listen(PORT, ()=>
        console.log("Aktywacja!")
    );
