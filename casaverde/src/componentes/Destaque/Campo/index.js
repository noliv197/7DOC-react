import CampoStyled from "./Campo";

export default function Campo({setEmail}){
    const enviaEmail = (e,setEmail) =>{
        e.preventDefault()
        const input = document.querySelector('input')
        setEmail(input.value)
        input.value = ''
    }
    return(
        <CampoStyled onSubmit={e => enviaEmail(e,setEmail)}>
            <input placeholder="Insira seu email" type='email' required/>
            <button type='submit'>Assinar newsletter</button>
        </CampoStyled>
  
    )
}