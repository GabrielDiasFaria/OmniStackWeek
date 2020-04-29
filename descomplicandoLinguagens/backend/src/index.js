const express = require('express')
const routes = require('./routes')
const connection = require('./connection')
const cors = require('cors')
var path = require("path");

const app = express()

const corsOptions = {
    // origin: 'http://descomplicandolinguagens.com.br',
    exposedHeaders: 'x-total-count'
};

app.use(cors(corsOptions))

// app.use(express.static('public'))
app.use('/images', express.static(path.join(__dirname, "../public/images")))
// app.use('/images', express.static('public/images'))
// app.use("/public", express.static(path.join(__dirname, 'public')));

app.use(express.json())
app.use(routes)

// Starta o DB
connection.startConnection()

app.listen(21262)
