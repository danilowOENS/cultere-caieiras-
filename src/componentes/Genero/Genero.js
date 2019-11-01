import React from 'react';
import './Genero.scss'

const Genero = () => {
    return(
        <div >
            <select className="Genero">
            <option disabled selected value="">Escolha o sexo</option>
            <option value="feminino">Feminino</option>
            <option value="masculino">Masculino</option>
            <option value="NDF">Não Definido</option>
            </select>
        </div>
    )
}

export default Genero;


