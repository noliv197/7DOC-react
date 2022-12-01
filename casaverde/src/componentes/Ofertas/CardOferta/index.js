import CardOfertaStyled from "./CardOferta";
import {AiOutlineArrowRight} from 'react-icons/ai'


export default function CardOferta({produto}){
    return(
        <CardOfertaStyled>
            <img src={produto.img} alt={produto.nome}/>
            <div>
                <h3>{produto.nome}</h3>
                <span>{`R$ ${produto.preco}`}</span>
                <a href='/'>Comprar <AiOutlineArrowRight size={20}/></a>
                
            </div>
        </CardOfertaStyled>


    )
}