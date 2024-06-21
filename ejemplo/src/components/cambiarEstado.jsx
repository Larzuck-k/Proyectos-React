import { useState } from "react";
//Cambio de estados
//UseState vigila los cambios de etado del component
const Cambiarestado = ({numero}) => {

  let [contador, setContador] = useState(numero);

  function incrementar() {
    setContador(contador + 1);
  }
  function decrementar() {
    setContador(contador - 1);
  }

  return (
    <>
      <div className="bg-body-tertiary m-5 rounded">
        <p></p>
        <br />
        <h1>UseState</h1>
        <p></p>

        <button onClick={incrementar} className="btn btn-primary m-4">
          +1
        </button>

        <h1>{contador}</h1>
        <button onClick={decrementar} className="btn btn-danger m-4">
          -1
        </button>
        <br />
      </div>
    </>
  );
};

export default Cambiarestado;
