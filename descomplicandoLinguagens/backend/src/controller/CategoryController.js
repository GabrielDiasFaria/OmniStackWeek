var CategorySchema = require('../model/CategoryModel');

module.exports = {

    async list(req, res) {
        await CategorySchema.find((err, object) => {
            if (err)
                return res.send(err)
            else
                return res.send(object)
        })
    },

    async details(req, res) {
        await CategorySchema.findById(req.params.id, (err, object) => {
            if (err)
                return res.send(err)
            else
                return res.send(object)
        })
    },

    async create(req, res) {
        let category = new CategorySchema(
            {
                name: req.body.name,
                description: req.body.description,
                slug: req.body.slug
            }
        )

        await category.save((err) => {
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
            description: req.body.description,
            slug: req.body.slug
        }

        await CategorySchema.updateOne(filter, update, (err, result) => {
            if (!err)
                return res.send({ status: "Registro modificado com sucesso!" })
            else
                return res.send(err)
        })

    },

    async delete(req, res) {
        await CategorySchema.deleteOne({ _id: req.params.id }, (err) => {
            if (err)
                return res.send(err)
            else
                return res.send({ status: "Registro deletado com sucesso!" })
        })
    }

}