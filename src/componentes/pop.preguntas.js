import React, {useState} from "react";
import {BsPatchQuestionFill} from "react-icons/bs";
import "../hojas-de-estilo/pop.css";

 const useMostrar = ()=>{
  //funcion animacion
  function frames(){
    const animacion =document.getElementById("preguntasFrecuentes").animate([
      {opacity: 0},
      {opacity: 1}
    ],{
      easing: "linear",
      duration: 200
    })
    return animacion.finished;//promesa?
  }

  let [mostrar,setMostrar]= useState("none")

  const mostrarPop = ()=>{
    frames();//llamada a la funcion
    setMostrar(mostrar=document.getElementById("preguntasFrecuentes").style.display = "block");
   
  }

  return{mostrarPop}
 }

function Pop(){
  const {mostrarPop}= useMostrar()
  return(
    <div className="contenedor-pop" onClick={mostrarPop}>
      <h3 className="pop-h3">Preguntas Frecuentes</h3>
      <BsPatchQuestionFill className="logo-quest"/>
    </div>
  );





  // function mostrarPop(){
  //   document.getElementById("preguntas").style.display = "block";
  // }
  // return(
  //   <div className="contenedor-pop" onClick={mostrarPop}>
  //     <h3 className="pop-h3">Preguntas Frecuentes</h3>
  //     <BsPatchQuestionFill className="logo-quest"/>
  //   </div>
  // );
}
export default Pop;
