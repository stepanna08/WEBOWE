import express from 'express';
const app = express();
const PORT = 3000;
app
	// MW: Brak '.use(express.urlencoded({ extended: true }))' do obsługi formularzy
	.get('/', (req, res)=>{
        const html=`
        <form method="POST">
		<!-- MW: nie do końca właściwy HTML (przecinki, brak '=' przy value) -->
        <input type="text",name="imie",value" ", placeholder="podaj imie"><br>
        <input type="text",name="nazwisko",value" ", placeholder="podaj nazwisko"><br>
        <input type="text",name="miasto",value" ", placeholder="podaj miasto"><br>
        <input type="submit">
        </form>
        `
    res.write(html);
    res.end();    
    })
    .post('/', (req, res)=>{
		// MW: brak obsługi wysłanych danych np. 'req.body.imie'
        res.send("Wiatj");
    })
    .listen(PORT, ()=>{
        console.log(`serwer chodzi na https://localhost:${PORT}`)
    });
