import styled from "styled-components"

const CampoStyled = styled.form`
    display: flex;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    box-sizing: border-box;
    input{
        border: none;
        padding: 1rem;
        flex-grow:1;
    }
    button{
        background-color: var(--amarelo);
        color: var(--branco);
        padding: 1rem;
        border: none;
        cursor: pointer;
    }
`

export default CampoStyled