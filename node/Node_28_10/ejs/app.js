import express from 'express';

const PORT = 3000;
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

const generujLayout = (fnazwaLayoutu, resource, daneDlaLayoutu) => {
	console.log('	[generujLayout]	layout:', fnazwaLayoutu); // nazwaLayoutu np lekcje/listaLekcji
	resource.render(fnazwaLayoutu, daneDlaLayoutu, (error, content) => {
        if (error) {
			console.log('	[generujLayout]	błąd renderowania "' + fnazwaLayoutu + '":', error);
			throw error;
		}

		resource.write(content);
		resource.end();
	});
}

app.get('/', (req, res) => {
    res.render('index', { tytulStrony: 'SZABLONY EJS' });
});

app.get('/uzytkownik', (req, res) => {
	const uzytkownik = {
		imie: 'Jan',
		nazw: 'Kowalski',
		logi: 'jkowalski',
		miasto: 'Warszawa'
	};
	generujLayout("index", res, { uzytkownik });
});

app.listen( PORT, () => {
    console.log(`app at localhost:${PORT}/`)
});