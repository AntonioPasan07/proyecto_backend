const {hash} = require('simple-stateless-auth-library')
const {createUser} = require('../../models/auth')
const nodemailer = require('../../configs/nodemailer')

module.exports = (db) => async(req, res, next) => {

 const {nombre,email, password}= req.body
 
 if(!nombre|| !email || !password) return next(error[400])

const encrypted = await hash.encrypt(password)

 const result = await createUser(await db)(nombre,email, encrypted)
 

console.log(result)
 if (!result.ok)return next(error[500])

 await nodemailer.main(email)
 
    res.status(200).json({
        success:true,

    })
}