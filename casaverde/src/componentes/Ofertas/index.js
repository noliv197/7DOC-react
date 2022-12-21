import CardOferta from "./CardOferta";
import DropDown from "../DropDown";
import OfertasStyled from "./Ofertas";
import ordenar from "../../data/sort";
import {filtrar} from "../../data/filtro";
import { useEffect, useState } from "react";

export default function Ofertas({produtos,filtro,setFiltro,ordenador,setOrdenador}){
    const [lista, setLista] = useState(produtos)
    useEffect(()=>{
        const novaLista = produtos.filter(item => filtrar(filtro,item.filtro))
        setLista(ordenar(novaLista,ordenador))
    },[produtos, filtro, ordenador])

    return(
        <OfertasStyled>
            <span>conheça nossas</span>
            <h2>ofertas</h2>
            <div className="filtros">
                <DropDown
                    tipo='filtros'
                    prop={filtro}
                    setProp={setFiltro}
                >Filtrar</DropDown>
                <DropDown
                    tipo='ordenador'
                    prop={ordenador}
                    setProp={setOrdenador}
                >Ordernar</DropDown>
            </div>
            <div className="secao-cards">
                {
                lista.map(item => (
                    <CardOferta key={item.id} produto={item}/>
                ))
                }
            </div>
        </OfertasStyled>
    )
}