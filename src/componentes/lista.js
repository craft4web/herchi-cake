import React from "react";
import "../hojas-de-estilo/lista.css";

function Lista(){
 
  return(
    <div className="contenedor-aside-lista">
      <h3>Nuestros productos:</h3>
      <ul className="contenedor-lista">
        <div className="aside-lista">
          <li>Tortas</li>
          <li>Cupcakes</li>
          <li>Brownies</li>
          <li>Tartaletas</li>
        </div>
      </ul>
    </div>
  );
}
export default Lista;