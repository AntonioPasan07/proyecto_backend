INSERT INTO usuarios (
    nombre, email, password, fecha_creacion
)VALUES
   ('Antonio', 'user1@hotmail.com', '2222', '2022-04-05'),
   ('Jose', 'user2@hotmail.com','1234', '2022-03-04'),
   ('Arturo', 'user3@hotmail.com','2345', '2022-06-10'),
   ('Jorge', 'user4@hotmail.com','3456', '2021-02-11'),
   ('Hugo', 'user5@hotmail.com','5678', '2010-01-21'),
   ('Alberto', 'user6@hotmail.com','7890', '2018-07-15');


 INSERT INTO eventos (
  nombre_evento, fecha_evento, direccion, descripcion, id_usuario_creador
 )VALUES('Cumpleaños','2020-12-01','Leganes','Cumpleaños de Jose',(SELECT id FROM usuarios WHERE nombre LIKE  'Antonio'));

 INSERT INTO eventos (
  nombre_evento, fecha_evento, direccion, descripcion,id_usuario_creador
 )VALUES('Bodas','2021-11-04','madrid','Boda de Antonio',(SELECT id FROM usuarios WHERE nombre LIKE  'Jose'));

 INSERT INTO eventos (
  nombre_evento, fecha_evento, direccion, descripcion, id_usuario_creador
 )VALUES('Bautizo','2020-03-15','Mostoles','Bautizo de Eder',(SELECT id FROM usuarios WHERE nombre LIKE 'Arturo'));

 INSERT INTO eventos (
  nombre_evento, fecha_evento, direccion, descripcion, id_usuario_creador
 )VALUES('Comunion','2019-06-22','Alcorcon','Comunion de Sofia',(SELECT id FROM usuarios WHERE nombre LIKE 'Jorge'));

 INSERT INTO eventos (
  nombre_evento, fecha_evento, direccion, descripcion, id_usuario_creador
 )VALUES('Fiesta','2021-09-11','Getafe','Botellon invita Molpe',(SELECT id FROM usuarios WHERE nombre LIKE  'Hugo'));
 INSERT INTO eventos (
  nombre_evento, fecha_evento, direccion, descripcion, id_usuario_creador
 )VALUES('Fiesta','2022-03-15','Alicante','Esta invita Giorgio',(SELECT id FROM usuarios WHERE nombre LIKE  'Alberto'));
  

 INSERT INTO invitaciones (
  estado_invitacion, fecha_invitacion, id_usuario_invitado, id_evento
) VALUES (
  'pendiente',
  '2010-02-23',
  (SELECT id FROM usuarios WHERE nombre LIKE 'Antonio'),
  (SELECT id FROM eventos WHERE nombre_evento LIKE 'Cumpleaños' AND id_usuario_creador = (SELECT id FROM usuarios WHERE nombre LIKE 'Antonio'))
);

INSERT INTO invitaciones (
  estado_invitacion, fecha_invitacion, id_usuario_invitado, id_evento
) VALUES (
  'pendiente',
  '2011-02-23',
  (SELECT id FROM usuarios WHERE nombre LIKE 'Jose'),
  (SELECT id FROM eventos WHERE nombre_evento LIKE 'Bodas' AND id_usuario_creador = (SELECT id FROM usuarios WHERE nombre LIKE 'Jose'))
);

INSERT INTO invitaciones (
  estado_invitacion, fecha_invitacion, id_usuario_invitado, id_evento
) VALUES(
  'pendiente',
  '2012-02-23',
  (SELECT id FROM usuarios WHERE nombre LIKE 'Arturo'),
  (SELECT id FROM eventos WHERE nombre_evento LIKE 'Bautizo' AND id_usuario_creador = (SELECT id FROM usuarios WHERE nombre LIKE 'Arturo'))
);

INSERT INTO invitaciones (
  estado_invitacion, fecha_invitacion, id_usuario_invitado, id_evento
) VALUES (
  'pendiente',
  '2013-02-23',
  (SELECT id FROM usuarios WHERE nombre LIKE 'Jorge'),
  (SELECT id FROM eventos WHERE nombre_evento LIKE 'Comunion' AND id_usuario_creador = (SELECT id FROM usuarios WHERE nombre LIKE 'Jorge'))
);

INSERT INTO invitaciones (
  estado_invitacion, fecha_invitacion, id_usuario_invitado, id_evento
) VALUES (
  'pendiente',
  '2014-02-23',
  (SELECT id FROM usuarios WHERE nombre LIKE 'Hugo'),
  (SELECT id FROM eventos WHERE nombre_evento LIKE 'Fiesta' AND id_usuario_creador = (SELECT id FROM usuarios WHERE nombre LIKE 'Hugo'))
);

INSERT INTO invitaciones (
  estado_invitacion, fecha_invitacion, id_usuario_invitado, id_evento
) VALUES (
  'pendiente',
  '2015-02-23',
  (SELECT id FROM usuarios WHERE nombre LIKE 'Alberto'),
  (SELECT id FROM eventos WHERE nombre_evento LIKE 'Fiesta'  AND id_usuario_creador = (SELECT id FROM usuarios WHERE nombre LIKE 'Alberto'))
);
