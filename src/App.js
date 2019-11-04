import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar/Navbar.js';
import Home from './componentes/Home/Home.js';
import Cadastro from './componentes/Cadastro/CadastroMaior.js';
import './componentes/Fonte.css'
import { BrowserRouter} from 'react-router-dom';
import './App.scss';
import ContainerCursos from './componentes/ContainerCursos/ContainerCursos';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/cadastro" component={Cadastro} />
      <ContainerCursos />
      <ContainerCursos />
      <ContainerCursos />
      <ContainerCursos />
    </BrowserRouter>
  )
}
export default App;