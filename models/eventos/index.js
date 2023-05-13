const {selectAllEventos, newEvento, selectInvitado} = require('./queries')
const { v4: uuidv4 } = require("uuid")


const selectAll = (db) => async () => {
    try {
        const response = await db.query(selectAllEventos());

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
const selectInvitacionesUsuario = (db) => async (nombre) => {
    try {
        const response = await db.query(selectInvitado(nombre));

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



const selectNewEvento = (db) => async (evento) => {
    try {
        console.log (evento)
        const newEventoId = uuidv4()
        const response = await db.query(newEvento(newEventoId,evento));
     console.log(response)
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
    selectNewEvento,
    selectInvitacionesUsuario,
}