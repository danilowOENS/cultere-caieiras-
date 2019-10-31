import React from 'react';
import './App.scss';
import ContainerCursos from './componentes/ContainerCursos/ContainerCursos';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Home from './componentes/Home';
import Cadastro from './componentes/Cadastro/Cadastro';
import './componentes/Fonte.css'


const App = () => {
  return (
    <BrowserRouter>
      <ContainerCursos />
      <ContainerCursos />
      <ContainerCursos />
      <ContainerCursos />
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/cadastro" component={Cadastro} />
    </BrowserRouter>
  )
}
export default App;