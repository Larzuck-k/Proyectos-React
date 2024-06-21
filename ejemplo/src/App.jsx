
import './App.css'
import Calculadora from './components/Calculadora';
import Datos from './components/Datos';
import EnviarDatos from './components/EnviarDatos';
import Cambiarestado from './components/cambiarEstado';
function App() {
  document.body.style = 'background: #0e1b25;';
  return (
    <>

<div className='text-center '> 
<span className="fs-2 p-3 m-4 text-center rounded-4 btn btn-light">  
   Hola mundo 🐈
   
    </span>


    <Datos saldo={100000}></Datos>

    
    <EnviarDatos nombre={"Sistema"} edad={100}></EnviarDatos>
   
   
    <Cambiarestado numero={25}></Cambiarestado>

    <Calculadora></Calculadora>
</div>



    </>
  )
}

export default App
