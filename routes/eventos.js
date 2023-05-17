const router = require('express').Router()

const eventosControllers = require('../controllers/eventos')
const {authorizer}= require('../middlewares')
module.exports = (db)=> {
    router.get('/',eventosControllers.getEventos(db)),
    router.post('/new',authorizer,eventosControllers.getNewEvento(db)),
    router.get('/:nombre',authorizer,eventosControllers.getInvitados(db)),
    router.put('/new/:nombre',authorizer,eventosControllers.getUpdate(db))
    return router
}
