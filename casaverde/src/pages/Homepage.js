import { useEffect, useState } from "react";
import Alerta from "../componentes/Alerta";
import Cabecalho from "../componentes/Cabecalho";
import Destaque from "../componentes/Destaque";

export default function HomePage(){
    const [email,setEmail] = useState('')

    useEffect(()=>{
        if(email){
            setTimeout(()=> setEmail(''),5000)
        }
    },[email])
    return(
        <>
        <Cabecalho/>
        <main>
            <Destaque setEmail={setEmail}/>
            <div id='alerta'>{email?<Alerta>Obrigado pela sua assinatura, você receberá nossas novidades no e-mail: {email}</Alerta>:''}</div>
        </main>
        </>
    )
}