import React from 'react';
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