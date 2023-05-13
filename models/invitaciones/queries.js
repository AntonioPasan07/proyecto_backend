const {sql} = require('slonik')


const selectInvitaciones = () => sql.unsafe`
SELECT estado_invitacion, fecha_invitacion 
FROM invitaciones`

const newInvitacion = (invitado) => sql.unsafe`
INSERT INTO invitaciones (id_evento, estado_invitacion, fecha_invitacion, id_usuario_invitado)
VALUES((SELECT id FROM eventos WHERE nombre_evento LIKE ${invitado.evento}),
    ${invitado.estado_invitacion},${invitado.fecha_invitacion},
    (SELECT id FROM usuarios WHERE nombre LIKE ${invitado.nombre_invitado}))`


module.exports = {
    selectInvitaciones,
    newInvitacion,
}