const {sql} = require('slonik')


const selectAllEventos = ()=> sql.unsafe`
SELECT nombre_evento, fecha_evento, direccion, descripcion
FROM eventos`

const newEvento = (newEventoId, evento ) => sql.unsafe`
INSERT INTO eventos (id, nombre_evento, fecha_evento, direccion, descripcion, id_usuario_creador)
VALUES (${newEventoId},${evento.nombre_evento},${evento.fecha_evento},${evento.direccion},${evento.descripcion}, (SELECT id FROM usuarios WHERE nombre = 'Hugo'))`

const selectInvitado = (nombre)=> sql.unsafe`SELECT i.estado_invitacion,i.fecha_invitacion, e.nombre_evento, e.fecha_evento, e.direccion, e.descripcion
FROM invitaciones i
INNER JOIN eventos e ON i.id_evento = e.id
WHERE (SELECT id FROM usuarios WHERE Nombre = ${nombre}) = i.id_usuario_invitado`

module.exports = {
    selectAllEventos,
    newEvento,
    selectInvitado,


}