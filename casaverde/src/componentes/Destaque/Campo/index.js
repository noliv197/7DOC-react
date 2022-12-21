import CampoStyled from "./Campo";

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