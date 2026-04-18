const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/products')
const app = express();

app.use('/', router);
app.use(bodyParser.urlencoded());

app.listen(3000, () => {
    console.log(`Server is running...`)
})