const express = require('express')
const routes = require('./routes')
const connection = require('./connection')
const cors = require('cors')

const app = express()

const corsOptions = {
    // origin: 'http://descomplicandolinguagens.com.br',
    exposedHeaders: 'x-total-count'
};

app.use(cors(corsOptions))

app.use(express.json())
app.use(routes)

// Starta o DB
connection.startConnection()

app.listen(21262)
