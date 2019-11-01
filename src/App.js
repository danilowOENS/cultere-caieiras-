import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './componentes/Fonte.css'
import { BrowserRouter} from 'react-router-dom';
import Navbar from './componentes/Nav/Navbar';
import Header from './componentes/Header/Home';



const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      
    </BrowserRouter>
  )
}
export default App;