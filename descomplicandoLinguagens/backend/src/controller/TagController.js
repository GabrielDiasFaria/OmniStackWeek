const connection = require('../database/connection')

module.exports = {

    async create(req, res) {
        const { name, description, slug } = req.body
        const last_modify_user = '0'//req.headers.authorization

        var last_modify = new Date().toISOString().slice(0, 10)

        const [id] = await connection('tb_tag').insert({
            name,
            description,
            slug,
            last_modify,
            last_modify_user
        })

        return res.json({ id })
    },

    async update(req, res) {
        const { id, title, description, value } = req.body
        const user_id = req.headers.authorization

        // const incident = await connection('incidents')
        //     .where('id', id)
        //     .select('ong_id')
        //     .first()

        // if (ong_id != incident.ong_id || !incident.ong_id)
        //     return res.status(401).json({ error: 'Operation not Permitted.' })

        // await connection('incidents')
        //     .update({
        //         title: title,
        //         description: description,
        //         value: value
        //     })
        //     .where('id', id)

        // return res.status(204).send()
        return res.json({ text: "teste" })
    },

    async delete(req, res) {
        const { id } = req.params
        const user_id = req.headers.authorization

        // const incident = await connection('incidents')
        //     .where('id', id)
        //     .select('ong_id')
        //     .first()

        // if (ong_id != incident.ong_id)
        //     return res.status(401).json({ error: 'Operation not Permitted.' })


        await connection('tb_tag')
            .where('id', id)
            .delete()

        return res.status(204).send()
    },

    async list(req, res) {
        const { page = 1 } = req.query
        const totalPerPage = 5

        const [count] = await connection('tb_tag').count()

        const tags = await connection('tb_tag')
            .select([
                '*'])
            .limit(totalPerPage)
            .offset((page - 1) * totalPerPage)

        res.header('X-Total-Count', count['count(*)'])

        return res.json(tags)
    }

}