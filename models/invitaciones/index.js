const {selectInvitaciones, newInvitacion} = require('./queries')
const { v4: uuidv4 } = require("uuid")
const selectAll= (db) => async () => {
    try {
        const response = await db.query(selectInvitaciones());

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

const newInvitado= (db) => async (invitado) => {
    try {

        const response = await db.query(newInvitacion(invitado));

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



module.exports ={
    selectAll,
    newInvitado,
}