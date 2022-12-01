import styled from "styled-components"

const CardOfertaStyled = styled.div`
    background-color: var(--branco);
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    box-sizing: border-box;
    display:flex;
    align-items: center;
    height: 200px;
    img{
        flex-grow: 1;
        width: 65%;
    }
    div{
        display: flex;
        flex-direction: column;
        text-align: left;
        padding: .5rem;
    }
    h3{
        font-size: var(--tamanho-grande);
        font-family: var(--fonte-secundaria);
        color: var(--preto);
        margin-bottom: .5rem;
    }
    span{
        font-size: var(--tamanho-normal);
        font-weight:  var(--peso-normal);
        color: var(--preto);
        opacity: 0.5;
        margin-bottom: 1.5rem;
    }
    a{
        font-size: var(--tamanho-normal);
        font-weight:  var(--peso-normal);
        color: var(--amarelo);
    }
`

export default CardOfertaStyled