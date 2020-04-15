const express = require('express')
const TagController = require('./controller/TagController')
const CategoryController = require('./controller/CategoryController')
const UserController = require('./controller/UserController')
const PostController = require('./controller/PostController')

const routes = express.Router()

routes.get('/', (req, res) => {
    return res.json({
        author: "Gabriel Dias Faria",
        description: "API para Blog!"
    })
})


// Exemplos
//  -> Tag
routes.get('/tags', TagController.list)
routes.get('/tags/:id', TagController.details)
routes.post('/tags', TagController.create)
routes.put('/tags/:id', TagController.update)
routes.delete('/tags/:id', TagController.delete)
//  <- Tag

//  -> Category
routes.get('/categories', CategoryController.list)
routes.get('/categories/:id', CategoryController.details)
routes.post('/categories', CategoryController.create)
routes.put('/categories/:id', CategoryController.update)
routes.delete('/categories/:id', CategoryController.delete)
//  <- Category

//  -> User
routes.get('/users', UserController.list)
routes.get('/users/:id', UserController.details)
routes.post('/users', UserController.create)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.delete)
//  <- User

//  -> Post
routes.get('/posts', PostController.list)
routes.get('/posts/:id', PostController.details)
routes.post('/posts', PostController.create)
routes.put('/posts/:id', PostController.update)
routes.delete('/posts/:id', PostController.delete)
//  <- Post

module.exports = routes