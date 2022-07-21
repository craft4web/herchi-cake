import React  from "react";
import View from "./view";
import "../hojas-de-estilo/contenedorView.css";

function ViewContenedor(){
 
  function carrousel(){
    const punto = document.querySelectorAll(".punto")
    const ventana = document.querySelector(".contenedor-view-translateX")

    punto.forEach((cadaPunto, i )=>{
    punto[i].addEventListener("click",()=>{
      
      let posicion = i;
      let operacion = posicion * -16.6;
     
      ventana.style.transform = `translateX(${operacion}%)`

      punto.forEach((cadaPunto, i)=>{
        punto[i].classList.remove("activo")
      });
      punto[i].classList.add("activo")
    });
   
  });
  // return point;
}
 
  return(
    <div className="aside0">
    <div className="nombre-productos">Tortas Variadas</div>
    <div className="contenedor-principal-tortas">
      <div className="contenedor-view-translateX">
        <View 
          descripcion="Torta de chocolate" imagen="chocolate.jpg"
          precio="45"
        />
        <View 
          descripcion="TortaLetra 'M' con fresas" imagen="tortaletraM.jpg"
          precio="42"
        />
        <View 
          descripcion="Brownies 'Feliz Cumple'" imagen="brownieshb.jpg"
          precio="36"
        />
        <View 
          descripcion="Brownies Box" imagen="browniesbox.jpg"
          precio="32"
        />
        <View 
          descripcion="TortaLetra 'M' con fresas" imagen="tortaletraM.jpg"
          precio="35"
        />
        <View 
          descripcion="Brownies 'Feliz Cumple'" imagen="brownieshb.jpg"
          precio="36"/>
      </div> 
      <ul className="puntos"  onClick={carrousel}> 
        <li className="punto activo"></li>
        <li className="punto"></li>
        <li className="punto"></li>
        <li className="punto"></li>
      </ul>
    </div> 
    </div>
  );
  }

  
export default ViewContenedor;