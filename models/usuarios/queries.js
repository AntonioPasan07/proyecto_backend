const {sql} = require('slonik')

const selectAllUser = () => sql.unsafe`SELECT nombre, email, fecha_creacion
FROM usuarios;`

const selectUserAllEventos = ()=> sql.unsafe`
SELECT u.nombre, u.email, u.fecha_creacion, e.nombre_evento, e.fecha_evento, e.direccion, e.descripcion
FROM usuarios u
JOIN eventos e ON u.id = e.id_usuario_creador;

`


const selectByuser = (nombre)=> sql.unsafe`
SELECT u.nombre, u.email, u.fecha_creacion, e.nombre_evento, e.fecha_evento, e.direccion, e.descripcion
FROM usuarios u
JOIN eventos e ON u.id = e.id_usuario_creador
WHERE u.nombre LIKE ${nombre};
`;




module.exports = {
    selectAllUser,
    selectByuser,
    selectUserAllEventos,
}