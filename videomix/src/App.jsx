
import Barra from "./components/barra"
import Formulario from "./components/formulario"
import Tabla from "./components/tabla"
import Carrusel from "./components/carrusel"


function App() {
 
  return (
    <>

    <div className="">    
<Barra></Barra>
  
<div className="container">

<div className="row">
        <div className="col-5 p-4 m-4 card">
<Formulario></Formulario>
        </div>

        <div className="col-5 p-4 m-4 card">
<Tabla></Tabla>
        </div>

        
        <div className="col-5 p-4 m-4 card">
<Carrusel></Carrusel>
        </div>

      </div>

</div>


    </div>

 
    </>

   


  )
}

export default App
