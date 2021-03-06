const connection = require('../database/connection')

module.exports = {
    async create(req, res) {
        const { id } = req.body

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first()

        if (!ong)
            return res.status(401).json({ error: 'No Ong Found!' })

        return res.json(ong)
    }
}