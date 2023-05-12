const queries = require('../../models/usuarios')
const error = require('../../misc/errors')
module.exports = (db)=> async (req, res, next) => {
    
    const dbRes = await queries.selectAll(await db)()

   if (!dbRes.ok) {
        return next(error[500]);
      }

    res.status(200).json({
        success : true,
        data: dbRes.response,
    })
}