const queries = require('../../models/usuarios')
const error = require('../../misc/errors')
module.exports = (db)=> async (req, res, next) => {
    const {nombre}= req.params
    const dbRes = await queries.oneUserName(await db)(nombre)

   if (!dbRes.ok) {
        return next(error[500]);
      }

    res.status(200).json({
        success : true,
        data: dbRes.response,
    })
}