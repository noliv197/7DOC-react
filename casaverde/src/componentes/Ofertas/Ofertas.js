import styled from "styled-components"

const OfertasStyled = styled.section`
    text-align: center;
    margin: 1rem 2rem;
    .secao-cards{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
    }
    .filtros{
        display:flex;
        margin-bottom: 1rem;
    }
    span{
        opacity: 0.5;
        font-size: var(--tamanho-grande)
    }
    h2{
        font-family: var(--fonte-secundaria);
        font-size: var(--tamanho-destaque)
    }
`

export default OfertasStyled