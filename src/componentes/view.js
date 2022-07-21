import React from "react";
import "../hojas-de-estilo/view.css";


function View(props){


  return(
    <div className="contenedor-view">
      <img 
        src={require(`../imagenes/${props.imagen}`)} 
        className="imagen-torta"    
      />
      <p className="descrip">{props.descripcion}</p>
      <p className="precio">Desde: S/{props.precio}</p>
    </div>
  );
}

export default View;