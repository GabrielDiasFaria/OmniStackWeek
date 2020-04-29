const express = require('express')
const TagController = require('./controller/TagController')
const CategoryController = require('./controller/CategoryController')
const UserController = require('./controller/UserController')
const PostController = require('./controller/PostController')
const MidiaController = require('./controller/MidiaController')
var path = require("path");
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
routes.put('/resetUserPass/:id', UserController.resetPassword)
routes.post('/validateUser', UserController.validateUser)
//  <- User

//  -> Post
routes.get('/posts', PostController.list)
routes.get('/posts/:id', PostController.details)
routes.get('/postsByCategory/:category', PostController.getByCategory)
routes.post('/posts', PostController.create)
routes.put('/posts/:id', PostController.update)
routes.delete('/posts/:id', PostController.delete)
//  <- Post

//  -> Midia

var multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../public/images"));
    },
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}`);
    }
});
const upload = multer({
    storage
});

// routes.post("/upload", upload.single("photo"), async (req, res, next) => {
//     try {
//         console.log(req.file)
//         res.send({ status: "Sucesso!" })
//     } catch (ex) {
//         console.dir(ex)
//         res.status(400).send({ error: ex });
//     }
// })

routes.get('/midias', MidiaController.list)
routes.post('/midias', upload.single("photo"), MidiaController.create)
routes.delete('/midias/:id', MidiaController.delete)
//  <- Midia

module.exports = routes