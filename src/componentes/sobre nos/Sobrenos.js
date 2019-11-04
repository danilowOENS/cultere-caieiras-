import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import joj from '../Imagens/download.jpeg';
import '../sobre nos/Sobrenos.scss';
import jj from '../Imagens/jj.jpg'
import viadagem857 from '../Imagens/ei.jpg'
import bob from '../Imagens/bob.jpg'
import {  } from "module";
import {  } from "module";

const Sobrenos = () => {
    return(
      <aside>
          <h1>Sobre Culturando</h1>

          <div id="sobre">

            <p>
                Culturando é um site que facilita o acesso a cultura na cidade de Caieiras.
                A nossa intenção com o site é fazer que todos tenha um completo acesso aos cursos culturais ou esportivos disponíveis.
            </p>

            <h1>Sobre a nossa equipe</h1>
            
          </div>

          <div id="perfil">
            <img src={joj} alt="joj"></img>
                    <h2>Luana Marques</h2>

            </div>

            <div id="perfil">
            <img src={jj} alt="joj"></img>

            </div>

            <div id="perfil">
            <img src={viadagem857} alt="joj"></img>

            </div>

            <div id="perfil">
            <img src={bob} alt="joj"></img>

            </div>

            <div id="perfil">
            <img src={} alt="joj"></img>

            </div>

            <div id="perfil">
            <img src={} alt="joj"></img>

            </div>
      </aside>
  )
}








export default Sobrenos;
    
