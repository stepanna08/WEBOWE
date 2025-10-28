import express from 'express';
const app = express();
const PORT = 3000;

app 
 .get('/', (req,res) => {
     res.send('Hello World');
 })
 .post('/user', (req,res) => {
    res.send('zmieniono dane użytkownika');
    
})
 .listen(PORT, ()=> {
     console.log(`Example app listening at https://localhost:${PORT}`);
 });
 