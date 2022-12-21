import CardOfertaStyled from "./CardOferta";
import {AiOutlineArrowRight} from 'react-icons/ai'


export default function CardOferta({produto}){
    return(
        <CardOfertaStyled>
            <img src={produto.img} alt={produto.nome}/>
            <div className="texto">
                <h3>{produto.nome}</h3>
                <span>{`R$ ${parseFloat(produto.preco).toFixed(2)}`}</span>
                <div className="link">
                    <a href='/'>Comprar </a>
                    <AiOutlineArrowRight size={20}/>
                </div>
            </div>
        </CardOfertaStyled>


    )
}