import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import './App.scss';
import ContainerCursos from './componentes/ContainerCursos/ContainerCursos';


const App = () => {
  return (
    <BrowserRouter>
      <ContainerCursos />
      <ContainerCursos />
      <ContainerCursos />
      <ContainerCursos />
    </BrowserRouter>
  )
}
export default App;
