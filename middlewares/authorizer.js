const {deserialize}= require('simple-stateless-auth-library')
const error = require('../misc/errors')
module.exports = (req, res, next) => {
    const payload = deserialize(req)

 if(!payload) return next(error[401])

 res.locals = payload
    next()
}