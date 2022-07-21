import './App.css';
import Navegacion from './componentes/nav';
import Lista from './componentes/lista';
import Footer from './componentes/footer';
import Btn_wsp from './componentes/btn-wsp';
import Pop from './componentes/pop.preguntas';
import ContPreguntas from './componentes/contPreguntas';
import CuadroWsp from './componentes/cuadro-wsp';
import ViewContenedor from './componentes/contenedorView';
import ViewContenedor1 from './componentes/ViewContenedor1';

function App() {

   return (
    <div className="App"> 
      <div className='contenedorNav'>  
        <Navegacion />
      </div> 
    <div className='contenedor'>    
      <div className='contenedor-principal'>   
        <div className='viewContenedor'>
          <ViewContenedor />
        </div>
        <div className='viewContenedor1'>
          <ViewContenedor1 />  
        </div>    
      </div>
    </div>   
    <div className='footer'>
      <Footer />
      <div className="blanco">
    </div> 
    </div>
    
    <Pop />
    <ContPreguntas />
    <Btn_wsp />
    <CuadroWsp />
  </div>
  );
}

export default App;
