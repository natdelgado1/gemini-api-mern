const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const port = 8000;
require('./router/gemini.router')

require('./config/database.config');
require('./geminiApi');
app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(
    cors({
        credentials: true,
        origin: ["http://localhost:3000"]
    })
)
const router = require('./router/gemini.router')
app.use('/api', router);


app.listen(port, () => console.log(`Listening on port: ${port}`));