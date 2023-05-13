const {selectAllUser, selectByuser,selectUserAllEventos}=require('./queries')

const selectAll= (db) => async () => {
    try {
        const response = await db.query(selectAllUser());

        return {
            ok: true,
            response: response.rows
        }
    } catch(error) {
        return {
            ok: false,
            message: error.message,
        }
    }
}


const selecUserEventos= (db) => async () => {
    try {
        const response = await db.query(selectUserAllEventos());

        return {
            ok: true,
            response: response.rows
        }
    } catch(error) {
        return {
            ok: false,
            message: error.message,
        }
    }
}




const oneUserName= (db) => async (nombre) => {
    try {
        const response = await db.query(selectByuser(nombre));

        return {
            ok: true,
            response: response.rows
        }
    } catch(error) {
        return {
            ok: false,
            message: error.message,
        }
    }
}
module.exports = {
    selectAll,
    oneUserName,
    selecUserEventos,
}