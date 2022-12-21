import Filtro from "../Filtro";
import Ordenador from "../Ordenador";
import CardOferta from "./CardOferta";
import OfertasStyled from "./Ofertas";

export default function Ofertas({produtos,filtro,setFiltro,ordenador,setOrdenador}){
    return(
        <OfertasStyled>
            <span>conheça nossas</span>
            <h2>ofertas</h2>
            <div className="filtros">
                <Filtro filtro={filtro} setFiltro={setFiltro}/>
                <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
            </div>
            <div className="secao-cards">
                {
                produtos.map(produto => (
                    <CardOferta key={produto.id} produto={produto}/>
                ))
                }
            </div>
        </OfertasStyled>
    )
}