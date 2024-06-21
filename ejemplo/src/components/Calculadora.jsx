import { useState } from "react";
//Cambio de estados
//UseState vigila los cambios de etado del component
const Calculadora = () => {

  let [contador, setContador] = useState(0);
  let [operador, setOperador] = useState(4);
  let [anteior, Setanteior] = useState(0);
let valorAnterior= 0;

  function incrementar(num) {

    setContador(" ");
  setContador(Number(contador) + Number(num));

  }

  function operacion(operacion) {


    setOperador(operacion);
  
    
  }

 
  function calcular(){

   
    valorAnterior = contador;
      
    if(operador == 0){
  
      Setanteior(parseFloat(valorAnterior)+parseFloat(anteior))
    }
    if(operador == 1){
    
      Setanteior(Number(anteior) - Number(valorAnterior))
    }
    if(operador == 2){
    
      Setanteior(parseFloat(valorAnterior)*parseFloat(anteior))
    }
    if(operador == 3){
    
      Setanteior(Number(anteior)/Number(valorAnterior))
    }
    setOperador(4);
    setContador("");
    
  }

  function reiniciar() {
    setContador(0);
    setOperador(5);
    Setanteior(0);
  }
let operaciones = ["+","-","x","/",""]

  return (
    <>
      <div className="bg-body-tertiary m-5 rounded">
      <div class="calculator p-4">
        
        <div class="calculator__display fs-4"><span className="fs-6">{anteior}  <div class="text-end ">{operaciones[operador]}</div></span>{contador}   </div>
   
        <div class="calculator__keys">
          
            <button onClick={() => incrementar("7")}>7</button>
            <button onClick={() => incrementar("8")}>8</button>
            <button onClick={() => incrementar("9")}>9</button>
            <button  onClick={() => operacion(3)}>/</button>
            <button onClick={() => incrementar("4")}>4</button>
            <button onClick={() => incrementar("5")}>5</button>
            <button onClick={() => incrementar("6")}>6</button>
            <button  onClick={() => operacion(2)}>*</button>
            <button onClick={() => incrementar("1")}>1</button>
            <button onClick={() => incrementar("2")}>2</button>
            <button onClick={() => incrementar("3")}>3</button>
            <button  onClick={() => operacion(1)}>-</button>
            <button onClick={() => incrementar("0")}>0</button>
            <button onClick={() => incrementar(".")}>.</button>
            <button onClick={() => calcular()}>=</button>
            <button onClick={() => operacion(0)}>+</button>
            <button className="bg-danger" onClick={() => reiniciar()}>C</button>
        </div>
    </div>
      </div>
    </>
  );
};

export default Calculadora;
