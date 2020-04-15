var UserSchema = require('../model/UserModel');
var bcrypt = require('bcrypt');

function generateHash(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

module.exports = {

    async list(req, res) {
        await UserSchema.find((err, object) => {
            if (err)
                return res.send(err)
            else
                return res.send(object)
        })
    },

    async details(req, res) {
        await UserSchema.findById(req.params.id, (err, object) => {
            if (err)
                return res.send(err)
            else
                return res.send(object)
        })
    },

    async checkExists(id) {
        // return await UserSchema.find().where({ _id: id })
        return await (await UserSchema.findById(id, (err, object) => { }))
    },

    async create(req, res) {
        let user = new UserSchema({
            name: req.body.name,
            function: req.body.function,
            profile: req.body.profile,
            email: req.body.email,
            password: req.body.password,
            permission: {
                posts: {
                    view: req.body.permission.posts.view,
                    update: req.body.permission.posts.update,
                    create: req.body.permission.posts.create
                },
                tags: {
                    view: req.body.permission.tags.view,
                    update: req.body.permission.tags.update,
                    create: req.body.permission.tags.create
                },
                categories: {
                    view: req.body.permission.categories.view,
                    update: req.body.permission.categories.update,
                    create: req.body.permission.categories.create
                }
            }
        })

        user.password = generateHash(user.password)

        await user.save((err) => {
            if (err)
                return res.send(err)
            else
                return res.send({ status: "Registro criado com sucesso!" })
        })
    },

    async update(req, res) {
        const filter = { _id: req.params.id };
        const update = {
            name: req.body.name,
            function: req.body.function,
            profile: req.body.profile,
            email: req.body.email,
            password: req.body.password,
            permission: {
                posts: {
                    view: req.body.permission.posts.view,
                    update: req.body.permission.posts.update,
                    create: req.body.permission.posts.create
                },
                tags: {
                    view: req.body.permission.tags.view,
                    update: req.body.permission.tags.update,
                    create: req.body.permission.tags.create
                },
                categories: {
                    view: req.body.permission.categories.view,
                    update: req.body.permission.categories.update,
                    create: req.body.permission.categories.create
                }
            }
        }

        user.password = generateHash(user.password)

        await UserSchema.updateOne(filter, update, (err, result) => {
            if (result.ok === 1)
                return res.send({ status: "Registro modificado com sucesso!" })
            else
                return res.send(err)
        })

    },

    async delete(req, res) {
        await UserSchema.deleteOne({ _id: req.params.id }, (err) => {
            if (err)
                return res.send(err)
            else
                return res.send({ status: "Registro deletado com sucesso!" })
        })
    }

}