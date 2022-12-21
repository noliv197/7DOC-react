import { useEffect, useState } from "react";
import { aplicaFiltro } from "../data/filtro";
import {produtoService} from '../servidor/ProdutosServidor'
import Alerta from "../componentes/Alerta";
import Cabecalho from "../componentes/Cabecalho";
import Destaque from "../componentes/Destaque";
import Ofertas from "../componentes/Ofertas";
import Principal from "../componentes/Principal";

export default function HomePage(){
    const servidor = produtoService()
    const [email,setEmail] = useState('')
    const [produtos, setProdutos] = useState([])
    const [filtro, setFiltro] = useState(null)
    const [ordenador, setOrdenador] = useState('')

    useEffect(()=>{
        servidor
            .getAll()
            .then(dados => {
                const novaLista = dados.data.map(item=>  {
                    const parFiltro = {'filtro': aplicaFiltro(item)}
                    return item = {...item, ...parFiltro} 
                })
                setProdutos(novaLista)
            })
        })

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
            <Ofertas 
                produtos={produtos}
                filtro={filtro}
                setFiltro={setFiltro}
                ordenador={ordenador}
                setOrdenador={setOrdenador}
            />
        </main>
        </>
    )
}