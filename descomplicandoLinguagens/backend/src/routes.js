const express = require('express')
const TagController = require('../src/controller/TagController')

const routes = express.Router()

routes.get('/', (req, res) => {
    return res.json({
        author: "Gabriel Dias Faria",
        description: "API para Blog"
    })
})


// Exemplos
//  -> Tag
routes.get('/tags', TagController.list)
routes.post('/tags', TagController.create)
routes.put('/tags', TagController.update)
routes.delete('/tags/:id', TagController.delete)
//  <- Tag

module.exports = routes