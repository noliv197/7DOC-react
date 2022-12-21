import classNames from 'classnames'
import { useState } from 'react';
import {MdKeyboardArrowUp,MdKeyboardArrowDown} from 'react-icons/md'
import OrdenadorStyled from './Ordenador'
import config from '../../data/filtros.json'

export default function Ordenador({ordenador, setOrdenador}){
    const ordenadores = ordenador && config.ordenador.find(opcao => opcao.value === ordenador)?.nome
    const [aberto, setAberto] = useState(false);
    return(
        <OrdenadorStyled>
            <button 
            className={classNames({
                'ordenador':true,
                'ordenador--ativo': ordenador !== ''
            })}
            onClick={() => setAberto(!aberto)}
            onBlur={() => setAberto(false)}
            >
            <span>{ordenadores || 'Ordenar'}</span>
            {aberto ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} /> }
            <div
                className={classNames({
                    'opcoes': true,
                    'opcoes--ativo': aberto
                })}
            >
                {config.ordenador.map(opcao =>(
                    <div
                        className='opcao'
                        key={opcao.value}
                        onClick={()=> setOrdenador(opcao.value)}
                    >
                        {opcao.nome}
                    </div>
                ))}
            </div>
            </button>
        </OrdenadorStyled>
    )
}