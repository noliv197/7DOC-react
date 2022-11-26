import MenuStyled from "./Menu"


export default function Menu(){
    const lista = ["Como fazer", "Ofertas", "Depoimentos","Videos"]
    return(
        <MenuStyled>
            <ul>
                {lista.map((item,index) => {
                   return (
                    <div key={index}>
                        <li>{item}</li>
                        <span>/</span>
                    </div>
                    )
                })}
                <li>Meu carrinho</li>
            </ul>
        </MenuStyled>
    )
}