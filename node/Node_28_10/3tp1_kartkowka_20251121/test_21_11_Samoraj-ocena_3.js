import express from "express";

const app = express();
const PORT = 3000;

app
    .get('/form', (req, res) => { //localhost:3000/form
        res.write("<!DOCTYPE html>");
        res.write("<h3>Test - dane do formularza</h3><br>");
        res.write("<form action = '/form' method = 'POST'><b>Podaj imie</b><input name = 'imie' type = 'text'/><br><b>Podaj nazwisko</b><input name = 'nazwisko' type = 'text'/><br><b>Podaj Miasto</b><input name = 'miasto' type = 'text'/><br><button type = 'submit'>Zatwierdz</button></form>");

        // MW: Poniższa linia powinna być w ".post('/form', ...)"
        //res.write("<p> Imie: " + res.body.imie + "<br> Nazwisko:" + res.body.nazwisko + "<br> Miasto: " + res.body.miasto + "</p>");

        res.end();  
    })
    // MW: Brak .post('/form', (req, res) => { ... })

    .listen(PORT, () => { 
        console.log("\nSerwer działa na porcie: " + PORT);
    })