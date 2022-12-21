import styled from "styled-components"

const PrincipalStyled = styled.section`
    background-color: var(--branco);
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    margin: 12rem auto 1rem auto;
    width: 995px;
    height: 440px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    .bkg-img{
        width: 585px;
        height: 440px;
        display: inline-block;
        background: url('./imagens/bkg-destaque.png');
    }
    .info{
        padding: 1rem;
        box-sizing: border-box;
        flex-grow: 1;
    }
    .bola{
        width: 52px;
        height: 52px;
        background: var(--amarelo);
        border-radius: 50%;
        display: inline-block;
    }
    span{
        opacity: 0.5;
        font-size: var(--tamanho-grande);
    }
    h3{
        font-size: 42px;
        font-family: var(--fonte-secundaria);
    }

    li{
        display: flex;
        align-items: center;
        margin: 1.5rem 0;
    }
    li span{
        padding-left: .5rem;
    }
`
export default PrincipalStyled