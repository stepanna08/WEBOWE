import express from 'express';
const app = express();
const PORT = 48238;
app.use(express.urlencoded({extended:true}))
app
    .get('/',(req,res)=>{
        const html = `
        <html>
        <body>
        <form method="POST" action="/">
        <input type="text",name="imie",value=" ", placeholder="podaj imię"><br>
        <input type="text",name="nazwisko",value=" ", placeholder="podaj nazwisko"><br>
        <input type="text",name="miejsco",value=" " placeholder="podaj miasto"><br>
        <button type="submit"> wyślij</button>
        </form>
        </body>
        </html>
        `
        res.write(html);


    } )
    .post('/',(req,res)=>{
      const {imie,nazwisko,miejsco} = req.body;
        res.send(`Witaj ${imie} ${nazwisko} z ${miejsco} ` )
    })
    
    .listen(PORT, ()=>{
        console.log(`server chodzi na https://localhost:${PORT}`)
    });
