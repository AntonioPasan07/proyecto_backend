const nodemailer = require("nodemailer");
require('dotenv').config;

async function main(userEmail) {

    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        service:"gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL_USER, // generated ethereal user
          pass: process.env.EMAIL_PASS, // generated ethereal password
        },
      });

      let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: userEmail, // list of receivers
        subject: "Registro completado ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Gracias por registrarte a la pagina web</b>", // html body
      });

      console.log("Message sent: %s", info.messageId);
 
  
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  
}
module.exports = {
  main,
}