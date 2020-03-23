const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    res.status(200).send('der Server functionieret')
})


app.listen(3000)