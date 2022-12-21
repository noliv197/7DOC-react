import styled from "styled-components"

const OrdenadorStyled = styled.div`

    .ordenador{
        border: 1px solid var(--amarelo);
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        background-color: var(--branco);
        color: var(--preto);
        padding: 0;
        min-width: 100px;
    }
    .ordenador--ativo{
        background-color: var(--amarelo);
        color: var(--preto);
    }
    .opcoes{
        display: none;
        flex-direction: column;
        width: 100%;
    }
    .opcoes--ativo{
        display: flex;
    }
    .opcao{
        align-items: center;
        background-color: var(--branco);
        border-top: 2px solid var(--amarelo);
        box-sizing: border-box;
        color: var(--preto);
        display: flex;
        height: 40px;
        justify-content: center;
        width: inherit;
    }
    .opcao:hover{
        background-color: var(--amarelo);
        cursor: pointer;
    }
`

export default OrdenadorStyled