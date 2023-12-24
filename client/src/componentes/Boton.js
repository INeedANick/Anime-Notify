import React from "react";
import "../Hoja-de-estilos/Boton.css"

function Boton(props){
    return(
        <button className="BotonHeader">
            <img className="iconBoton"
            src={require(`../Icon/${props.imagen}.png`)}
            alt="icon-de-header"/>
        </button>
    )
}

export default Boton;