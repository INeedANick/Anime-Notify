import './App.css';
import Koei from "./Img/background.jpg"
import logoANP from "./Img/logoANP.png"
import searchIcon from "./Icon/search50.png"
import Boton from "./componentes/Boton"
import "../src/Hoja-de-estilos/Boton.css"
import React, { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch('http://localhost:5000/members', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Aquí puedes agregar cualquier otra cabecera necesaria para tu solicitud
      },
      mode: 'cors', // Habilita CORS para la solicitud desde el cliente
    }).then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )

  }, [])

  return (
    <div className="App">
      <header>
        <img className='logoNotify' 
        src={logoANP} 
        alt='anp'></img>
        <div className='botonesHeader'>
          <Boton
          imagen = "support"></Boton>
          <Boton
          imagen = "grupo"></Boton> 
        </div>
      </header>
      <body>
        <img className='KoieFondo'
          src={Koei} 
          alt='logo'></img>
        <div className='contenedor'>
          <img className='search'
            src={searchIcon}
            alt='icon'></img>
          <button className='botonBuscador'></button>
          <input className='buscador'></input>
        </div>
          
      </body>
      <footer>
        <p className='textoLegal' type='text'>
          ™2020-2023 LePravda Group. Todos los derechos resevados. LePravda Group, Anime Alert Hub, Sunflower Devs y Koel son marcas comerciales, marcas de servicios o marcas registradas de LePravda Group.
        </p>
      </footer>
    </div>
  );
}

export default App;
