import express from 'express';
const app = express();
const PORT = 3000;

app 
 .get('/details/:id', (req,res) => {
     res.send('id jerst ' + req.params.id);
 })
 .post('/user', (req,res) => {
    res.send('zmieniono dane użytkownika');
    
})
 .listen(PORT, ()=> {
     console.log(`Example app listening at https://localhost:${PORT}`);
 });
 