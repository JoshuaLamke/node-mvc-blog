const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
let app = express();
require('dotenv').config();

const port = process.env.EXPRESS_PORT;

app.get('/', (req, res) => {
    res.send('Reached index');
})

app.listen(port, console.log(`Server is running on port ${port}`));

