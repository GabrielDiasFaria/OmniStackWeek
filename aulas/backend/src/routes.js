const express = require('express')
const OngController = require('../src/controller/OngController')
const IncidentsController = require('../src/controller/IncidentController')
const ProfileController = require('../src/controller/ProfileController')
const SessionController = require('../src/controller/SessionController')

const routes = express.Router()

routes.get('/', (req, res) => {
    return res.json({})
})

//  -> Session
routes.post('/session', SessionController.create)
//  <- Session

//  -> Ongs
routes.get('/ongs', OngController.list)
routes.post('/ongs', OngController.create)
//  <- Ongs

//  -> Casos
routes.get('/incidents', IncidentsController.list)
routes.post('/incidents', IncidentsController.create)
routes.put('/incidents', IncidentsController.update)
routes.delete('/incidents/:id', IncidentsController.delete)
//  <- Casos

//  -> Profile
routes.get('/profile', ProfileController.list)
//  <- Profile

module.exports = routes