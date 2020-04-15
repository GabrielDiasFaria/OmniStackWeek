var TagSchema = require('../model/TagModel');

module.exports = {

    async list(req, res) {
        await TagSchema.find((err, object) => {
            if (err)
                return res.send(err)
            else
                return res.send(object)
        })
    },

    async details(req, res) {
        await TagSchema.findById(req.params.id, (err, object) => {
            if (err)
                return res.send(err)
            else
                return res.send(object)
        })
    },

    async create(req, res) {
        let tag = new TagSchema(
            {
                name: req.body.name,
                description: req.body.description,
                slug: req.body.slug
            }
        )

        await tag.save((err) => {
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

        await TagSchema.updateOne(filter, update, (err, result) => {
            if (result.ok === 1)
                return res.send({ status: "Registro modificado com sucesso!" })
            else
                return res.send(err)
        })

    },

    async delete(req, res) {
        await TagSchema.deleteOne({ _id: req.params.id }, (err) => {
            if (err)
                return res.send(err)
            else
                return res.send({ status: "Registro deletado com sucesso!" })
        })
    }

}