const express = require('express');
const path = require('path');
const rootDir = require('./utils/path'); // adjust path if needed

const bodyParser = require('body-parser');
const router = require('./routes/products');

const app = express();

app.use('/', router);

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(3000, () => {
    console.log(`Server is running...`)
})