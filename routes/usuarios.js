const router = require('express').Router()
const userControllers = require('../controllers/usuarios')
const {authorizer}= require('../middlewares')
module.exports = (db)=> {
    router.get('/', userControllers.getAllUser(db)),
    router.get('/eventos',authorizer, userControllers.getUserAllEventos(db)),
    router.get('/:nombre',authorizer,userControllers.getOneName(db))
    return router
}