import React  from "react";
import View from "./view";
import "../hojas-de-estilo/viewContenedor1.css";

function ViewContenedor1(){
 
  function carrousel(){
    const punto = document.querySelectorAll(".punto1")
    const ventana = document.querySelector(".contenedor-view-translateX1")

    punto.forEach((cadaPunto, i )=>{
    punto[i].addEventListener("click",()=>{
      
      let posicion = i;
      let operacion = posicion * -16.6;
     
      ventana.style.transform = `translateX(${operacion}%)`

      punto.forEach((cadaPunto, i)=>{
        punto[i].classList.remove("activo1")
      });
      punto[i].classList.add("activo1")
    });
   
  });
  // return point;
}


  return(
    <div className="aside1">  
    <div className="contenedor-principal-tortas1">
      <div className="contenedor-view-translateX1">
        <View 
          descripcion="Torta de chocolate" imagen="vip1.jpeg"
          precio="45"
        />
        <View 
          descripcion="TortaLetra 'M' con fresas" imagen="vip2.jpeg"
          precio="42"
        />
        <View 
          descripcion="Brownies 'Feliz Cumple'" imagen="vip3.jpeg"
          precio="36"
        />
        <View 
          descripcion="Brownies Box" imagen="vip4.jpeg"
          precio="32"
        />
        <View 
          descripcion="TortaLetra 'M' con fresas" imagen="vip5.jpeg"
          precio="35"
        />
        <View 
          descripcion="Brownies 'Feliz Cumple'" imagen="vip6.jpeg"
          precio="36"/>
      </div> 
      <ul className="puntos1"  onClick={carrousel}> 
        <li className="punto1 activo1"></li>
        <li className="punto1"></li>
        <li className="punto1"></li>
        <li className="punto1"></li>
      </ul>
    </div> 
    <div className="nombre-productos1">Tortas Vip</div>
    </div>
    
  );
  }

  
export default ViewContenedor1;