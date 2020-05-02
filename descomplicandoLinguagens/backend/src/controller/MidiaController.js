const MidiaSchema = require('../model/MidiaModel');
const fs = require('fs')
const path = require("path")

async function details(id) {
    return await (await MidiaSchema.findById(id, (err, object) => { }))
}

module.exports = {

    async list(req, res) {
        await MidiaSchema.find((err, object) => {
            if (err)
                return res.send(err)
            else
                return res.send(object)
        })
    },

    async create(req, res) {
        // console.log("Requests file ---", req.file)

        try {
            let midia = new MidiaSchema(
                {
                    name: `${req.file.originalname}`,
                    file: `/images/${req.file.originalname}`
                }
            )
        } catch (e) {
            console.log("erro")
            res.send(e);
        } finally {
            console.log("retorno")
            return res.send({ message: "Upload realizado com sucesso!" })
            // await midia.save((err) => {
            //     if (err)
            //         return res.send(err)
            //     else
            //         return res.send({ message: "Registro criado com sucesso!" })
            // })
        }


    },

    async delete(req, res) {
        const midia = await details(req.params.id)

        // const path = `public/images/${midia.name}`
        const internalPath = path.join(__dirname, `../../public/images/${midia.name}`)

        fs.unlink(internalPath, (err) => {
            if (err) return res.send(err);
        })

        await MidiaSchema.deleteOne({ _id: req.params.id }, (err) => {
            if (err)
                return res.send(err)
            else
                return res.send({ message: `Registro deletado com sucesso!` })
        })
    }

}

