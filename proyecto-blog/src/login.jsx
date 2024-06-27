import { Link } from 'react-router-dom';
import Fondo from "./assets/images/fondo.png";

import Swal from 'sweetalert2'
const Login = () => {
  document.body.style = `background: #0e1b25; 
  background-image: url(${Fondo}); 
   background-repeat: no-repeat;   
     -webkit-backdrop-filter: blur(2rem);
  backdrop-filter: blur(2rem);

   background-position: center;
background-size: cover;`;




const handleSubmit = async (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  fetch('http://localhost:3000/usuario/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
  .then(response => response.json())
  .then(data =>{
    if(data.status == "success"){

      sessionStorage.setItem('user', data.user);
      sessionStorage.setItem('email', data.email);
      sessionStorage.setItem('password', password);
      sessionStorage.setItem('idUsuario',data.idUsuario);
      window.location.href = '/app';
    }else{

      Swal.fire({
        position: "top-end",
        icon: "error",
        title: data.mensaje,
        showConfirmButton: false,
        timer: 1500
      });
    }
   
  }).catch(data=>{

    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "No se ha podido establecer conexión con el servidor",
      showConfirmButton: false,
      timer: 1500
    });

  })

};

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "70vh" }}
      >
        <div className="row d-flex justify-content-center">
          <div className="col-12 text-center p-5">
            <h1 className=" text-white">Un blog web genérico.</h1>
          </div>
          <p></p>
          <p></p>
          <p></p>

          <h1 className=" text-white col-5 d-flex justify-content-center align-items-center">
        <div className="col-4">    Pequeñas historias, grandes conexiones.</div>
          </h1>

          <div className="card mt-3 col-5" style={{ width: "25rem" }}>
            <div className="card-body">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Correo</label>
                  <input required type="email" className="form-control" id="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Contraseña</label>
                  <input required
                    type="password"
                    className="form-control"
                    id="password"
                  />
                </div>
                <br />
                <div className="text-end">
                  <a href="/index" className="m-1 btn btn-dark">
                      regresar
                    </a>
                    <button type="submit" className="m-1 btn btn-primary">
                      Ingresar
                    </button>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
