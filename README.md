1.Ejecuta el comando npm init -y para generar el archivo package.json.
2.Instala las dependencias necesarias con los siguientes comandos:


npm install express slonik
npm install -D nodemon dotenv
npm install simple-stateless-auth-library
npm install nodemailer
npm install uuid

3.Modifica los scripts en el archivo package.json

"scripts": {
    "dev": " nodemon index.js",
    "docker:up": "docker-compose up",
    "send-email": "node nodemailer"
},
4. Crea un archivo index.js en la raíz del proyecto que servirá como punto de entrada de la aplicación.

5.Crea una carpeta configs y dentro de ella crea el archivo db.js donde se guardarán los datos de configuración de la base de datos.

6.Crea un archivo creation.sql para definir la estructura de las tablas en SQL.
7.Crea un archivo insertion.sql para insertar datos de ejemplo en las tablas.

8.Levanta el contenedor de Docker con el comando docker-compose up o docker-compose start en la terminal.

9.Ejecuta el comando nodemon npm run dev para iniciar la aplicación en modo de desarrollo.

10.Estructura de carpetas y archivos

routes: Carpeta que contiene las rutas de los endpoints.
Crea un archivo index.js en esta carpeta que servirá como punto de entrada de las rutas.
Define las rutas utilizando express.Router() y los controladores correspondientes.
controllers: Carpeta que contiene los controladores de los endpoints.
Crea un archivo por cada endpoint que maneje la lógica de negocio y responda a las peticiones.
models: Carpeta que contiene los modelos y consultas a la base de datos.
Crea un archivo por cada tabla de la base de datos que contenga las consultas necesarias.

ENDPOINS

1.Retorna los campos nombre, email y fecha_creacion de todos los usuarios registrados.
Expresión: router.get('/usuarios')

2.Retorna los campos nombre, email y fecha_creacion de los usuarios, junto con los campos nombre_evento, fecha_evento, direccion y descripcion de los eventos asociados.
Expresión: router.get('/usuarios/eventos')


3.Parámetro: nombre (nombre del usuario)
Retorna los campos nombre, email y fecha_creacion del usuario que coincida con el nombre especificado.
Expresión: router.get('/usuarios/nombre')


4.Retorna los campos nombre_evento, fecha_evento, direccion y descripcion de todos los eventos registrados.
Expresión: router.get('/eventos')


5.Parámetros: id, nombre_evento, fecha_evento, direccion, descripcion, id_usuario_creador
Crea un nuevo evento con los datos proporcionados.
Expresión: router.post('/eventos/new')


6.Parámetro: nombre (nombre de usuario)
Retorna los campos estado_invitacion, fecha_invitacion de las invitaciones que coincidan con el nombre de usuario, junto con los campos nombre_evento, fecha_evento, direccion y descripcion de los eventos correspondientes.
Expresión: router.get('/eventos/nombre')


7.Retorna los campos estado_invitacion, fecha_invitacion de todas las invitaciones.
Expresión: router.get('/invitaciones')


8.Parámetros: id_evento, estado_invitacion, fecha_invitacion, id_usuario_invitado
Crea una nueva invitación asociada a un evento y un usuario. El id_evento corresponde al nombre del evento que se pasa como parámetro y debe coincidir con el id del evento en la base de datos. El id_usuario_invitado debe corresponder al id del usuario en la base de datos.
Expresión: router.post('/invitaciones/new')