const express = require('express')
const routes = require('./routes')
const connection = require('./connection')
const cors = require('cors')

const app = express()

// Quando for para PRD -
app.use(cors({
    origin: 'http://descomplicandolinguagens.com.br'
}))
// app.use(cors())
app.use(express.json())
app.use(routes)

// Starta o DB
connection.startConnection()

app.listen(21262)
