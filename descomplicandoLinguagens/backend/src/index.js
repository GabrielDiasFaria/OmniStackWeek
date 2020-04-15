const express = require('express')
const routes = require('./routes')
const connection = require('./connection')

const app = express()

app.use(express.json())
app.use(routes)

// Starta o DB
connection.startConnection()

app.listen(21262)
