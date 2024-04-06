import express from 'express'

const app = express();


app.get("/", (req, res) => {
    res.send('<h1>Suman kamilya</h1>');
})

app.listen(4000, () => {
    console.log('App is listening at http://localhost:4000');
})