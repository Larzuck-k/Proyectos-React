const Datos = ({saldo}) => {
  //apartado lógico (js)
  let edad = 25;
  let arreglo = [0.34, 23, "lorem", true];
  let objeto = { id: 2, nombre: "Hola", apellido: "Mundo", edad: 4 };
//no es buena práctica
  function sumar(a, b) {
    return a + b;
  }

  //Apartado visual (html)
  return (
    <>
      <div className="bg-body-tertiary m-5 rounded">
      <p></p>
      <br />
        <h1>Datos</h1>
        <p></p>
        <br />
        Han pasado {edad} años.
        <p></p>
        El número de Pi es: {Math.PI}
        <p></p>
        <br />
        Contenido de arreglo:
        <br />
        <p></p>Posición 1 de arreglo: <li>{arreglo[0]}</li>
        <p></p>Posición 2 de arreglo: <li>{arreglo[1]}</li>
        <p></p>Posición 3 de arreglo: <li>{arreglo[2]}</li>
        <p></p>Posición 4 de arreglo:
        <li>
          {arreglo[3]}{" "}
          <span className="text-white bg-dark-subtle rounded p-1">true</span>
          <p></p>
          <br />
          Aprendiz: {JSON.stringify(objeto)}
          <p></p>
          <br />
          Resultado de una función : {sumar(4, 3)}
        </li>
        <p></p>
      
        Su saldo es de: {saldo}
        <br />
        <br />
      </div>
    </>
  );
};

export default Datos;
