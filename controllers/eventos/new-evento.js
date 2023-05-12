const queries = require('../../models/eventos')
const error = require('../../misc/errors')

module.exports = (db)=> async (req, res, next) => {
  
    const dbRes = await queries.selectNewEvento(await db)(req.body)
   console.log(dbRes)
   if (!dbRes.ok) {
        return next(error[401]);
      }

    res.status(200).json({
        success : true,
        data: dbRes.response,
    })
}