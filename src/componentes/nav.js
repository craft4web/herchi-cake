import React from "react";
import "../hojas-de-estilo/navegacion.css";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import BarraMenu from "./barramenu.js";

import Logohc from "./logohc";


function Navegacion(){
  return(
    <nav className="contenedor-navegacion">
      <div className="barraMenu">
        <BarraMenu />       
      </div>
      <div className="logohcc">
        <Logohc />
      </div>
      <div className="redeSociales">
      <a href="https://www.instagram.com/herchicake/" target= "_blank" className="instagram">
        <BsInstagram />
      </a>
      <a href="https://www.facebook.com/Herchi-Cake-104064858090795" target= "_blank" className="facebook">
        <BsFacebook  />
      </a>
      </div>
    </nav>
  );
}

export default Navegacion;