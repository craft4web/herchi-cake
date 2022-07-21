import React from "react";
import "../hojas-de-estilo/footer.css";

function Footer(){
  return(
    <footer className="contenedor-footer">
      <div className="copyright">
        <small> &#169; HerchiCake. Todo los Derechos Reservados.</small>
      </div> 
      <ul className="contendeedor-footer-lista">
        <div className="footer-lista">
          <li>Contacto</li>
          <li>Ubicanos</li> 
          <li>Trabaja con nosotros</li>  
        </div> 
      </ul>
      <ul className="contendeedor-footer-lista">
        <div className="footer-lista">
          <li>Acerca de nosotros</li>
          <li>libro de reclamaciones</li> 
          <li>preguntas frecuentes</li>  
        </div> 
      </ul>
      <div className="diseWeb">
        <small> Diseño Web: Christian Frias</small>
      </div>
       
    </footer>
    
  );
}

export default Footer;