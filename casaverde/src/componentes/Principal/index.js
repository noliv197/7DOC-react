import PrincipalStyled from "./Principal";


export default function Principal(){
    return(
        <PrincipalStyled>
            <div className="bkg-img"></div>
            <div className="info">
                <span>Como conseguir</span>
                <h3>minha planta</h3>
                <ul>
                    <li>
                        <div className="bola"></div>
                        <span>Escolha suas plantas</span>
                    </li>
                    <li>
                        <div className="bola"></div>
                        <span>Faça seu pedido</span>
                    </li>
                    <li>
                        <div className="bola"></div>
                        <span>Aguarde na sua casa</span>
                    </li>
                </ul>
            </div>
        </PrincipalStyled>
    )
}