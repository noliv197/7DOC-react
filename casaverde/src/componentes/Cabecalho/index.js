import CabecalhoStyled from "./Cabecalho";
import Menu from "./Menu";

export default function Cabecalho(){
    return(
        <CabecalhoStyled>
            <img src='./imagens/logoCompleta.png' alt='logo'/>
            <Menu/>
        </CabecalhoStyled>
    )
}