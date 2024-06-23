import { Link } from "react-router-dom";
import Fondo from "./assets/images/fondo.png";
const Index = () => {
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

          <div className="row text-center">
            <div className="col">
              {" "}
              <a className="btn btn-primary" href="/login">
                {" "}
                Iniciar sesión
              </a>
            </div>
            <div className="col">
              {" "}
              <a className="btn btn-primary" href="/register">
                {" "}
                Regístrate{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
