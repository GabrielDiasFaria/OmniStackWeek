const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const app = express()

// Quando for para PRD -
// app.use(cors({
//     origin: 'http://meuapp.com'
// }))
app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)