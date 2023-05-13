const router = require('express').Router()
const invitacionesControllers = require('../controllers/invitaciones')

const {authorizer}= require('../middlewares')
module.exports = (db)=>{
 router.get('/', invitacionesControllers.getAllInvitaciones(db)),
 router.post('/new',authorizer,invitacionesControllers.getNewinvitacion(db))
 return router
}