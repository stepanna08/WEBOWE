import express from 'express';

const app = express()
const PORT = 3000

app
    .get('/', (req, res) => {
        res.write('<html><form method="POST">Podaj miasto:<input type="text" value="miasto" id="miasto" name="miasto"/> <input type="submit"> </form></html>')
        res.end()
    })
    .post('/', (req, res) => {
        res.write("post")
        res.end()
    })

    .listen(PORT, () => {
    console.log("\nSerwer dziala na porcie " + PORT)
    });