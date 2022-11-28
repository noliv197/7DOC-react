import AlertaStyled from "./Alerta";


export default function Alerta(props){
    return(
        <AlertaStyled>
            {props.children}
        </AlertaStyled>
    )
}