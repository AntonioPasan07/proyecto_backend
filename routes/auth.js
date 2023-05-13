const router = require('express').Router()
const authControllers = require('../controllers/auth');

const {authorizer}= require('../middlewares')
module.exports = (db) => {
    router.post('/register',authControllers.signup(db))
    router.post('/login',authControllers.signin(db))
    router.post('/signout',authorizer, authControllers.signout())
    return router
}