import CardOferta from "./CardOferta";
import OfertasStyled from "./Ofertas";
import produtos from './produtos.json'


export default function Ofertas(){

    return(
        <OfertasStyled>
            <span>conheça nossas</span>
            <h2>ofertas</h2>
            <div className="secao-cards">
                {produtos.map(produto => (
                    <CardOferta key={produto.id} produto={produto}/>
                ))}
            </div>
        </OfertasStyled>
    )
}