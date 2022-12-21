import classNames from "classnames";
import { useState } from 'react';
import DropDownStyled from "./DropDown";
import {MdKeyboardArrowUp,MdKeyboardArrowDown} from 'react-icons/md'
import config from '../../data/filtros.json'

export default function DropDown({children,prop,setProp,tipo}){
    const itens = prop && config[tipo].find(opcao => opcao.value === prop)?.nome
    const [aberto, setAberto] = useState(false);


    return(
        <DropDownStyled>
            <div 
                onClick={() => setAberto(!aberto)}               
            >
                <span className="label">{children}</span>
                {aberto ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} /> }
            </div>
            <button
                className={classNames({
                    'filtro': true,
                    'filtro--ativo': prop !== ''
                })}
                onClick={() => setAberto(!aberto)}
                onBlur={() => setAberto(false)}
            >
                <span className="label">{itens ||''}</span>
                <div
                    className={classNames({
                        'opcoes': true,
                        'opcoes--ativo': aberto
                    })}
                >
                    {config[tipo].map(opcao =>(
                        <div
                            className='opcao'
                            key={opcao.value}
                            value={opcao.value}
                            onClick={()=> {setProp(opcao.value)}}
                        >
                            {opcao.nome}
                        </div>
                    ))}
                </div>
            </button>
        </DropDownStyled>
    )
}