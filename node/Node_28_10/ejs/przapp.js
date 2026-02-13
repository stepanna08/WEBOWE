import express from 'express';

const PORT = 3000;
const app = express();

app.set('views',"./views");
app.set('view engine', 'ejs');

const genLay = (flayname, res, data) => {
    res.render(flayname, data, (error,content) => {
        if (error) {
            throw error;
        }
        res.write(content);
        res.end();
    })
};

app.get('/przedmioty', (req,res) => {
    const przedmioty = ["matematyka", "język polski", "język angielski", "informatyka"];
    genLay("przedmioty", res, {przedmioty});
});

app.listen(PORT, () => {
    console.log(`app at port ${PORT}`);
});