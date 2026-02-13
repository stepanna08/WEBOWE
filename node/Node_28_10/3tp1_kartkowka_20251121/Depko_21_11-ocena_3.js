import express from 'express'
const app = express();
const PORT = 3000;


app
	// MW: Brak '.use(express.urlencoded({ extended: true }))' do obsługi formularzy
    .get('/form', (request, response)=>{
        const html = `<form method = 'POST'>
            imię: <input type = 'text' name = 'imie'><br>
            nazwisko: <input type = 'text' name = 'nazwisko'><br>
            miasto: <input type = 'text' name = 'miasto'><br>
            <input type = 'submit' name = 'przycisk'>
        </form>`
        response.write(html)
        response.end()
    })
    .post('/form', (request, response)=> {
		// MW: Brak obsługi przesłanych danych np. 'req.body.imie'

    })
    .listen(PORT, ()=>{
        console.log("serwer dziala na porcie " + PORT)
    })
