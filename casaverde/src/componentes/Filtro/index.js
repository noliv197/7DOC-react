import classNames from "classnames";
import { useState } from 'react';
import FiltroStyled from "./Filtro";
import {MdKeyboardArrowUp,MdKeyboardArrowDown} from 'react-icons/md'
import config from '../../data/filtros.json'

export default function Filtro({filtro,setFiltro}){
    const filtros = filtro && config.filtros.find(opcao => opcao.value === filtro)?.nome
    const [aberto, setAberto] = useState(false);
    return(
        <FiltroStyled>
            <button
                className={classNames({
                    'filtro': true,
                    'filtro--ativo': filtro !== ''
                })}
                onClick={() => setAberto(!aberto)}
            >
            <span>{filtros ||'Filtrar'}</span>
            {aberto ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} /> }
            <div
                className={classNames({
                    'opcoes': true,
                    'opcoes--ativo': aberto
                })}
            >
                {config.filtros.map(opcao =>(
                    <div
                        className='opcao'
                        key={opcao.value}
                        onClick={()=> setFiltro(opcao.value)}
                    >
                        {opcao.nome}
                    </div>
                ))}
            </div>

            </button>
        </FiltroStyled>
    )
}