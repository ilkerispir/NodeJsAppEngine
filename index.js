const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`Ilker Ispir`);
});

app.listen(process.env.PORT || 8080);