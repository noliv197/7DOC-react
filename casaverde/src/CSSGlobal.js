import { createGlobalStyle } from "styled-components"

const CSSGlobal = createGlobalStyle`
    html{
        font-size: 16px
    }
    body {
        background: url('./imagens/linhas.png'), url('./imagens/Vector.png') no-repeat;
        background-position: center, top right;
        background-size: auto, 50%;
        font-family: 'Montserrat', sans-serif;
        margin: 0
    }
    main{
        background: url('./imagens/bkg-planta.png') no-repeat;
        background-size: 500px;
        background-position: 70% -5%;
        height: 100vw;
        margin-top: 5rem;
    }
    li{
        list-style: none
    }
    h1,h2,h3,span,p{
        margin:0
    }
`

export default CSSGlobal