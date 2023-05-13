const {sql} = require('slonik')

const insertUser = (nombre,email,password) => sql.unsafe`
INSERT INTO usuarios(
   nombre,email,password,fecha_creacion
    )VALUES(
    ${nombre}, ${email},${password}, NOW())`
   

const selectByUername = (email)=> sql.unsafe`SELECT nombre, email, password
 FROM usuarios WHERE email LIKE ${email}; `
    module.exports ={
        insertUser,
        selectByUername,

    }