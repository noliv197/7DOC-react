import CampoStyled from "./Campo";
/* import nodemailer from 'nodemailer'

async function enviaEmail(email){
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
} */
export default function Campo({setEmail}){
    const pegaEmail = (e,setEmail) =>{
        e.preventDefault()
        const input = document.querySelector('input')
        setEmail(input.value)
        input.value = ''
        /* enviaEmail(input.value) */
    }
    return(
        <CampoStyled onSubmit={e => pegaEmail(e,setEmail)}>
            <input placeholder="Insira seu email" type='email' required/>
            <button type='submit'>Assinar newsletter</button>
        </CampoStyled>
  
    )
}