const router = require('express').Router()
const invitacionesControllers = require('../controllers/invitaciones')


module.exports = (db)=>{
 router.get('/', invitacionesControllers.getAllInvitaciones(db)),
 router.post('/new',invitacionesControllers.getNewinvitacion(db))
 return router
}