import React from "react";
import "../hojas-de-estilo/contPreguntas.css";
import {BsPatchQuestionFill} from "react-icons/bs";
import Capa from  "./capa";

function ContPreguntas(){
  //funcion animacion
  function frames(){
    const animacion =document.getElementById("preguntasFrecuentes").animate([
      {opacity: 1},
      {opacity: 0}
    ],{
      easing: "linear",
      duration: 200
    })
    return animacion.finished;//promesa?
  }

  const ocultarPop = ()=>{
    frames().then(()=>{
      document.getElementById("preguntasFrecuentes").style.display = "none";
    })
  };
  
  return( 
    <div id="preguntasFrecuentes">
      <Capa/>
      <div id="contenedor-principal-preguntas">
        <h3 className="titulo">PREGUNTAS FRECUENTES</h3>
        <div className="contenedor-preguntas" >
          <div className="preguntas">
            <div className="preguntasTitulo">
              <BsPatchQuestionFill className="logo-pregunta" />
              ¿Con cuánta anticipación debo pedir una torta?</div>
            <div className="preguntasRespuesta">
              Puedes pedir las tortas o cualquier producto con un plaza mínimo de 2 días útiles.</div>
            </div>
          <div className="preguntas">
            <div className="preguntasTitulo">
              <BsPatchQuestionFill className="logo-pregunta" />
              ¿Toda la torta es comestible?</div>
            <div className="preguntasRespuesta">
              En algunos casos, de acuerdo al tipo de decoracion que pida el cliente.</div>
            </div>
          <div className="preguntas">
            <div className="preguntasTitulo">
              <BsPatchQuestionFill className="logo-pregunta" />
              ¿De que sabores tiene el queque?</div>
            <div className="preguntasRespuesta">
              Actualmente contamos con sabor chocolate, vainilla y naranja.</div>
            </div>
        </div>
        <div id="btn-close-preguntas" onClick={ocultarPop} >
          Entendido
        </div>
      </div>
    </div>
  );
}
export default ContPreguntas;