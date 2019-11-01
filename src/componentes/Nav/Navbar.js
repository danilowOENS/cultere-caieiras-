import React, { useState } from "react";
import '../Nav/Navbar.scss';
import { Link } from 'react-router-dom';
import Culturando from '../imagem/culura.png'


const Navbar = () => {
  const [menuAtivo, setMenuAtivo] = useState(false);

  const abrirMenu = () => {
    setMenuAtivo(!menuAtivo);
  };

  const fecharMenu = () => {
    setMenuAtivo(false)
  }

  return (
    <div className="Navbar">
      <nav>
        <div id="nome">
          <img src={Culturando} />
        </div>
        
        <div onClick={abrirMenu} id="menu-hamburguer">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      <section className={`menu ${menuAtivo ? "ativo" : ""}`}>
        <Link onClick={fecharMenu} to="/">Home</Link>
        <Link onClick={fecharMenu} to="/pagamento">Cursos</Link>
        <Link onClick={fecharMenu} to="/carrinho">Sobre</Link>
        <Link onClick={fecharMenu} to="/produtos">Cadastro</Link>
      </section>
    </div>
  );
};
export default Navbar;
