import React from 'react';
import './Genero.scss'

const Genero = () => {
    return(
        <div >
            <label className="Label">Gênero</label>
            <select className="Genero"> 
            <option className="escolha" disabled selected value="">Escolha o sexo</option>
            <option value="Feminino">Feminino</option>
            <option value="Masculino">Masculino</option>
            <option value="Indefinido">Não Definido</option>
            </select>
        </div>
    )
}

export default Genero;


