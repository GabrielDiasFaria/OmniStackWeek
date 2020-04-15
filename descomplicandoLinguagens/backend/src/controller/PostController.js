var PostSchema = require('../model/PostModel');
var UserController = require('./UserController')

module.exports = {

    async list(req, res) {
        await PostSchema.find((err, object) => {
            if (err)
                return res.send(err)
            else
                return res.send(object)
        })
    },

    async details(req, res) {
        await PostSchema.findById(req.params.id, (err, object) => {
            if (err)
                return res.send(err)
            else
                return res.send(object)
        })
    },

    async create(req, res) {
        const userId = req.headers.authorization

        let post = new PostSchema({
            description: req.body.description,
            tag: req.body.tag,
            category: req.body.category,
            html: req.body.html,
            author: userId
        })

        await post.save((err) => {
            if (err)
                return res.send(err)
            else
                return res.send({ status: "Registro criado com sucesso!" })
        })
    },

    async update(req, res) {
        const userId = req.headers.authorization

        // Check Permission
        // const userExists = await UserController.checkExists(userId, "post", 'update')
        // if (!userExists.name) {
        //     return res.send({ status: "Usuário sem permissão para efetuar este processo!" })
        // } else {
        //     if (!userExists.permission.posts.create)
        //         return res.send({ status: "Usuário sem permissão para efetuar este processo!" })
        // }

        const filter = { _id: req.params.id };
        const update = {
            description: req.body.description,
            tag: req.body.tag,
            category: req.body.category,
            html: req.body.html,
            author: userId
        }

        await PostSchema.updateOne(filter, update, (err, result) => {
            if (!err)
                return res.send({ status: "Registro modificado com sucesso!" })
            else
                return res.send(err)
        })

    },

    async delete(req, res) {
        await PostSchema.deleteOne({ _id: req.params.id }, (err) => {
            if (err)
                return res.send(err)
            else
                return res.send({ status: "Registro deletado com sucesso!" })
        })
    }

}