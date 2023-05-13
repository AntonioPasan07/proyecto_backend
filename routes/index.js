const router = require('express').Router()
const authRouter = require('./auth');
const usuariosRutes = require('./usuarios');
const eventosRouter = require('./eventos');
const invitacionesRouter = require('./invitaciones');
module.exports = (db) => {
    router.use('/auth',authRouter(db)),
    router.use('/usuarios',usuariosRutes(db)),
    router.use('/eventos',eventosRouter(db)),
    router.use('/invitaciones',invitacionesRouter(db))
    return router
}