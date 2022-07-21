import React from "react";
import logocake from "../imagenes/logo.jpg";
import "../hojas-de-estilo/logohc.css";

function Logohc (){
  return(
    <div>
      <div className="contenedor-logo"> 
        <img 
          src={logocake}
          className="logohc"
        />
      <div className="contenedor-nombre">
        <h1>HerchiCake</h1>
      </div>
      </div>
    </div>
  );
}

export default Logohc;