import { useEffect, useState } from "react";
import Alerta from "../componentes/Alerta";
import Cabecalho from "../componentes/Cabecalho";
import Destaque from "../componentes/Destaque";
import Ofertas from "../componentes/Ofertas";
import Principal from "../componentes/Principal";
import { chave } from "../servidor/server";


export default function HomePage(){
    console.log(chave)
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
            <Principal/>
            <Ofertas/>
        </main>
        </>
    )
}