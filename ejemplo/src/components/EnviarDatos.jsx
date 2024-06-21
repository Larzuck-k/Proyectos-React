//usos de props para pasar datos entre componentes

const EnviarDatos = ({nombre,edad}) => {
    return (  <>
    <p></p>
    <div className="bg-body-tertiary m-5 rounded">
    <p></p>
    <br />
        <h1>Envio de datos</h1>
        <p></p>
Hola, me llamo {nombre} y tengo {edad} años
<br />
<br />
    </div>
  
    
    </>);
}
 
export default EnviarDatos;