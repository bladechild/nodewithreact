const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send('Hello Miao Huang');
});

const PORT = process.env.PORT;
app.listen(PORT);