export function enviaEmailSG(email){
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.REACT_APP_SENDGRID_KEY)
    const msg = {
        to: email,
        from: process.env.REACT_APP_EMAIL,
        subject: 'Confirmação de cadastro',
        text: 'Olá! Boas-vindas à Casa Verde! Você se cadastrou em nossa newsletter e vai começar a receber e-mails com as novidades de nossa loja e dicas de como cuidar de suas plantas.Até logo!',
        html: `<h1>Olá!</h1>
                <p>Boas-vindas à Casa Verde! Você se cadastrou em nossa newsletter e vai começar a receber e-mails com as novidades de nossa loja e dicas de como cuidar de suas plantas.
                <br>Até logo!</p>
            `
    }
    sgMail
        .send(msg)
        .then(() => {
            console.log('Email enviado')
          })
          .catch((error) => {
            console.error(error)
          })
}


export async function enviaEmailNM(email){
    const nodemailer = require('nodemailer')
    let contateste = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        auth: contateste,
      });
    let info = await transporter.sendMail({
        from: '"Dev Naty" <noreply@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "Confirmação de cadastro", // Subject line
        text: `Olá! Boas-vindas à Casa Verde! Você se cadastrou em nossa newsletter e vai começar a receber e-mails com as novidades de nossa loja e dicas de como cuidar de suas plantas.Até logo!`, // plain text body
        html: `<h1>Olá!</h1>
                <p>Boas-vindas à Casa Verde! Você se cadastrou em nossa newsletter e vai começar a receber e-mails com as novidades de nossa loja e dicas de como cuidar de suas plantas.
                <br>Até logo!</p>
            `, // html body
    });
    console.log('URL: ' + nodemailer.getTestMessageUrl(info))
} 

