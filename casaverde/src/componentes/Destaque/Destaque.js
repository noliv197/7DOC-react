import styled from "styled-components"

const DestaqueStyled = styled.section`
    position: relative;
    left: 10%;    
    width: 580px;
    h2{
        color: var(--preto);
        font-size: var(--tamanho-grande);
        font-weight: var(--peso-normal);
        opacity: 0.5;
    }
    h1{
        color: var(--preto);
        font-size: var(--tamanho-destaque);
        font-family: var(--fonte-secundaria);
        opacity: 1;
    }
    p{
        color: var(--preto);
        font-size: var(--tamanho-normal);
        font-weight: var(--peso-normal);
        opacity: 0.5;
        margin: 1rem 0;
        line-height: 26px;
    }
`

export default DestaqueStyled