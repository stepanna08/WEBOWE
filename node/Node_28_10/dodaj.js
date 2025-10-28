import express from 'express';
const app = express();
const PORT = 3000;
const dodaj = (a,b) => a+b;

app 
 .get('/user', (req,res) => {
     const wynik = dodaj(3,5)
     res.send('wynik ' + wynik);
 })
 .listen(PORT, ()=> {
     console.log('\nSerwer działa na porcie: ' + PORT);
 });