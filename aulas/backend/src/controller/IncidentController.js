const connection = require('../database/connection')

module.exports = {

    async create(req, res) {
        const { title, description, value } = req.body
        const ong_id = req.headers.authorization

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        })

        return res.json({ id })
    },

    async update(req, res) {
        const { id, title, description, value } = req.body
        const ong_id = req.headers.authorization

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first()

        if (ong_id != incident.ong_id || !incident.ong_id)
            return res.status(401).json({ error: 'Operation not Permitted.' })

        await connection('incidents')
            .update({
                title: title,
                description: description,
                value: value
            })
            .where('id', id)

        return res.status(204).send()
    },

    async delete(req, res) {
        const { id } = req.params
        const ong_id = req.headers.authorization

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first()

        if (ong_id != incident.ong_id)
            return res.status(401).json({ error: 'Operation not Permitted.' })


        await connection('incidents')
            .where('id', id)
            .delete()

        return res.status(204).send()
    },

    async list(req, res) {
        const { page = 1 } = req.query
        const totalPerPage = 5

        const [count] = await connection('incidents').count()

        const incidents = await connection('incidents')
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'])
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(totalPerPage)
            .offset((page - 1) * totalPerPage)

        res.header('X-Total-Count', count['count(*)'])

        return res.json(incidents)
    }

}