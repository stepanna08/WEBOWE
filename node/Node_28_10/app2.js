import express from 'express';
const app = express();
const PORT = 3007;

app
    .use(express.urlencoded({extended:true}))

    .get('/user', (req,res) => {
        res.write(`<head>
        <meta charset = 'utf-8'>
        </head>
        <body>
        <form method = 'POST'>`)
        res.write("<h1>LOGIN</h1><br>\
        <input type = 'text' name = 'login'><br>")
        res.write("<h1>WIEK</h1><br>")
        res.write("<input type = 'number' name = 'wiek'><br>")
        res.write("<h1>CZY SIGMA</h1><br>")
        res.write("<input type = 'checkbox' name = 'czy_s'><br>")
        res.write("<button type = 'submit'>wyslij</button>")
        res.write("</body></form>")
        res.end();        
    })
    .post('/user', (req,res) => {
        res.write('hello ' + req.body.login)
        res.write(' masz lat ' + req.body.wiek)
        /*
        a = 0   //  false
        a = 5 // true
        b = 'asdf' // true
        b = '' // false
        c = [2134,234] // true
        c = [] // false
        a == b  //  true == true => true
        a === b //  int(5) === string('asdf') => false
        */
        if (req.body.czy_s){
            res.write(' i jesteś sigma ')
        }
        res.end()
    })
    .listen(PORT, () => {
        console.log(`Example app listening at http://localhost:${PORT}`);
    });