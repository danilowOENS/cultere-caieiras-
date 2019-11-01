import React from 'react';
import { Link } from 'react-router-dom';

import '../Header/Home.scss';
import Fundo from '../imagem/danilo_1.png'

const Home = () => {
    return (
        <div className="Home">
            <header>
                <img src={Fundo} />
            </header>
        </div>
    )
}
export default Home;