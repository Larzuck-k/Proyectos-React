import { Link } from 'react-router-dom';
import Fondo from "./assets/images/fondo.png";
const Login = () => {
  document.body.style = `background: #0e1b25; 
  background-image: url(${Fondo}); 
   background-repeat: no-repeat;   
     -webkit-backdrop-filter: blur(2rem);
  backdrop-filter: blur(2rem);

   background-position: center;
background-size: cover;`;
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
              <form>
                <div className="form-group">
                  <label htmlFor="username">Usuario</label>
                  <input type="text" className="form-control" id="username" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Contraseña</label>
                  <input
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
