import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: true}));

app
    .get("/formularz", (req, res) => {
        res.send('<html><form method="POST"><label>Imię: <input type="text" name="imie"/></label><br/><br/><label>Nazwisko: <input type="text" name="nazwisko"/></label><br/><br/><label>Miasto: <input type="text" name="miasto"/></label><br/><br/><input type="submit" name="ok" value="OK"/></form>');
    })
    .post("/formularz", (req, res) => {
        res.send(req.body.imie + " " + req.body.nazwisko + ", " + req.body.miasto);
    })
    .listen(PORT, () => {
        console.log("Serwer na porcie " + PORT);
    });
