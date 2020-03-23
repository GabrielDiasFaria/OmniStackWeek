const express = require('express')

const app = express()

app.get('/', (req, res) => {
    return res.json({
        evento: 'Semana OmnStack 11',
        aluno: 'Gabriel'
    })
})

app.listen(3333)