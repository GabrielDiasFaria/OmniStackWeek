var PostSchema = require('../model/PostModel');
var UserController = require('./UserController')

async function addView(post) {

    const views = post.views + 1

    const filter = { _id: post._id };
    const update = {
        views: views
    }

    await PostSchema.updateOne(filter, update, (err, result) => {
        if (!err) {
            return ({ status: "Registro modificado com sucesso!" })
        } else {
            return ({ status: "Erro" })
        }

    })
}

module.exports = {

    async list(req, res) {
        const posts = await PostSchema.find((err, object) => {
            if (err)
                return err
            else
                return object
        })

        const authors = await UserController.listAll()

        const postsAggregate = posts.map(post => {
            const authorSelect = authors.map(author => {
                if (author._id == post.author) {
                    return author
                }
            })

            post.author_name = authorSelect[0].name
            post.author_avatar = authorSelect[0].avatar

            return post
        })

        res.send(postsAggregate)

    },

    async details(req, res) {
        const post = await PostSchema.findById(req.params.id, (err, object) => {
            if (err)
                return res.send(err)
            return object
        })

        const authors = await UserController.listAll()

        const authorSelect = authors.map(author => {
            if (author._id == post.author) {
                return author
            }
        })

        post.author_name = authorSelect[0].name
        post.author_avatar = authorSelect[0].avatar

        // Sucesso na busca
        // Adicionar mais um na View
        const addViewResponse = await addView(post)

        return res.send(post)
    },

    async getByCategory(req, res) {
        const posts = await PostSchema.find((err, object) => {
            if (err)
                return res.send(err)
            else
                return object
        }).where({ category: req.params.category })

        const authors = await UserController.listAll()

        const postsAggregate = posts.map(post => {
            const authorSelect = authors.map(author => {
                if (author._id == post.author) {
                    return author
                }
            })

            post.author_name = authorSelect[0].name
            post.author_avatar = authorSelect[0].avatar

            return post
        })

        res.send(postsAggregate)

    },

    async create(req, res) {
        const userId = req.headers.authorization

        const currentDate = new Date(Date.now()).toLocaleString().split(',')[0]

        let post = new PostSchema({
            title: req.body.title,
            description: req.body.description,
            tag: req.body.tag,
            category: req.body.category,
            html: req.body.html,
            author: userId,
            author_name: "",
            author_avatar: "",
            image: req.body.image,
            banner: req.body.banner,
            data_criacao: currentDate,
            views: '0'
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
            title: req.body.title,
            description: req.body.description,
            tag: req.body.tag,
            category: req.body.category,
            html: req.body.html,
            author: userId,
            author_name: "",
            author_avatar: "",
            image: req.body.image,
            banner: req.body.banner
        }

        const response = await PostSchema.updateOne(filter, update, (err, result) => {
            if (!err)
                return { status: "Registro modificado com sucesso!" }
            else
                return err
        })

        return res.send(response)

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