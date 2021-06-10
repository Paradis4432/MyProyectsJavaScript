const express = require('express');
const app = express()
const path = require('path')

app.listen(3000,() => console.log('open '))

app.use(express.static(path.resolve(__dirname, "../public")));

app.use(require('./routes/web'))
