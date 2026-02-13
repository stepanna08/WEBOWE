import express from 'express';
const app = express();
const PORT = 3000;
app
    .get('/', (req, res)=>{
        const html=`
        <form method="POST">
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
        res.send("Wiatj");
    })
    .listen(PORT, ()=>{
        console.log(`serwer chodzi na https://localhost:${PORT}`)
    });