import React, {useState, useRef} from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import "../hojas-de-estilo/btn-wsp.css";


function Btn_wsp(){
  function frames(){
  const animacion= document.getElementById("cuadroWsp").animate([
    {transform: `TranslateY(60px)`,opacity:0},
    {transform: `TranslateY(0px)`,opacity: 1}

  ],{
    easing: "linear",
    iterations: 1,
    duration: 200 
  })
    return animacion.finished //promesa?
  }
  function mostrarWsp(){
   
    document.getElementById("popwsp").style.display="block";
    document.getElementById("contenedor-btn-wsp").style.display="none";
    frames();
  };
  
  return(
    <div  id="contenedor-btn-wsp">
      <div id="btn-wsp" onClick={mostrarWsp} >
        <IoLogoWhatsapp className="logo-wsp"/>
      </div>
    </div>   
  );
}
export default Btn_wsp;

// href="https://api.whatsapp.com/send?phone=992590341" 