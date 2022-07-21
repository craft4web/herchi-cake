import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import "../hojas-de-estilo/navegacion.css";
import "../hojas-de-estilo/barramenu.css";

function BarraMenu(){
  var upDow=1;
  function desplegate(){
    const term = document.getElementById("list-show");
   
    if( upDow==1){
      term.style.height="120px";
      upDow=2;
     
    }else {
     term.style.height="0px";
     upDow=1;
    }
  }

  return(
    <ul className="list" >
        <li className="list-item list-item-click">
          <div className="list-button list-button-click" onClick={desplegate}>
            <AiOutlineMenu />
          </div> 
          <ul id="list-show">
            <li className="list-inside">
              <a href="#" className="nav-link nav-link-inside">Tortas</a>
            </li>
            <li className="list-inside">
              <a href="#" className="nav-link nav-link-inside">Cupcakes</a>
            </li>
            <li className="list-inside">
              <a href="#" className="nav-link nav-link-inside">Tartaletas</a>
            </li>
            <li className="list-inside">
              <a href="#" className="nav-link nav-link-inside">Brownies</a>
            </li>
          </ul>
        </li>
    </ul>
  );
}

export default BarraMenu;