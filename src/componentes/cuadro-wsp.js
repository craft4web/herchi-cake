import React, { useState, useRef } from "react";
import "../hojas-de-estilo/cuadro-wsp.css";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiCake2Fill } from "react-icons/ri";


function CuadroWsp(){

  function frames(){
    const animacion= document.getElementById("cuadroWsp").animate([
    
    {transform: "TranslateY(0px)", opacity : 1},
    {transform: "TranslateY(60px)", opacity : 0},
   
  ],{
    easing:"linear",
    // iterations: 1,
    duration: 200
  })
    return animacion.finished //promesa?
  }
  function ocultarWsp(){
    frames()
    .then(()=>{document.getElementById("contenedor-btn-wsp").style.display="block";
    document.getElementById("popwsp").style.display="none";
    })
    
  }

return(
  <div id="popwsp">
    <div id="cuadroWsp">
      <div className="top-cuadrowsp">Conversemos</div>
      <div className="mid-cuadrowsp">
        <div className="mid-cuadrowsp-fit">
          <p>Te atenderemos en la brevedad posible.</p></div>
        <a className="mid-cuadrowsp-fat" 
          href="https://api.whatsapp.com/send?phone=992590341" target="_blank"> 
          <IoLogoWhatsapp className="mid-logowsp"/>
          <div className="mid-namewsp">HerchiCake</div>
          <RiCake2Fill className="mid-logowsp2"/>
        </a>    
      </div>
    </div>

    <div id="btn-wsp-x" onClick={ocultarWsp}>
      <IoMdCloseCircleOutline className="logo-wsp-x"/>
    </div>
  </div>
);
}

export default CuadroWsp;