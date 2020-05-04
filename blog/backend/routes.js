const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => {
    return res.json({
        author: "Gabriel Dias Faria",
        description: "API para Blog!"
    })
})

//>>> Postagens
routes.get('/postagens', (req, res) => {
    res.json([
        {
            titulo: "Primeiro Post",
            conteudo: "<h1>Opa!</h1>",
            autor: "Gabriel Dias Faria"
        },
        {
            titulo: "Segundo Post",
            conteudo: "<h1>Opa!</h1>",
            autor: "Gabriel Dias Faria"
        }
    ])
})
// Postagens

//>>> Comentários
routes.get('/comentarios/:postId', (req, res) => {
    res.json([
        {
            conteudo: "Olá, gostei do post",
            autor: "Gabriel Dias Faria"
        }
    ])
})
// Comentários

module.exports = routes
