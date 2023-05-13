DROP TABLE IF EXISTS usuarios CASCADE;
DROP TABLE IF EXISTS eventos CASCADE;
DROP TABLE IF EXISTS invitaciones CASCADE;

DROP EXTENSION IF EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


CREATE TABLE usuarios (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  nombre TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  fecha_creacion DATE DEFAULT NOW()
);

CREATE TABLE eventos (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  nombre_evento TEXT NOT NULL,
  fecha_evento DATE NOT NULL,
  direccion TEXT NOT NULL,
  descripcion TEXT,
  id_usuario_creador uuid REFERENCES usuarios(id) NOT NULL
  ON UPDATE CASCADE
  ON DELETE CASCADE

);

CREATE TABLE invitaciones (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  estado_invitacion VARCHAR(20) NOT NULL, -- puede ser 'aceptado', 'pendiente', 'rechazado', etc.
  fecha_invitacion TEXT NOT NULL,
  id_usuario_invitado uuid REFERENCES usuarios(id)
  ON UPDATE CASCADE 
  ON DELETE CASCADE,
  id_evento uuid NOT NULL REFERENCES eventos(id)
  ON UPDATE CASCADE
   ON DELETE CASCADE
);