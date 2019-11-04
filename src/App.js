import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar/Navbar';
import Sobre from './componentes/sobre nos/Sobrenos';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Sobre />
    </BrowserRouter>
  )
}
export default App;