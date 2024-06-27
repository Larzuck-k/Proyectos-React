import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import Fondo from "./assets/images/fondo.png";
import { useState } from "react";

const Register = () => {
  document.body.style = `background: #0e1b25; 
  background-image: url(${Fondo}); 
   background-repeat: no-repeat;   
     -webkit-backdrop-filter: blur(2rem);
  backdrop-filter: blur(2rem);

   background-position: center;
background-size: cover;`;
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };




  //Register


  

const handleSubmit = async (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

    const user = document.getElementById('username').value;

  const photo = document.getElementById('image').files[0];

  const formData = new FormData();
  formData.append('user', user);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('photo', photo);

  fetch('http://localhost:3000/usuario/create', {
    method: 'POST',
    body: formData,
  })
  .then(response => response.json())
  .then(data =>{
    if(data.status == "success"){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: data.mensaje,
        showConfirmButton: false,
        timer: 1500
      });
      setTimeout(() => {
        window.location.href = '/index';
      }, "2000");
    }
    if(data.status != "success"){
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
            <h1 className="text-white">Un blog web genérico.</h1>
          </div>
          <p></p>
          <p></p>
          <p></p>

          <h1 className="text-white col-5 d-flex justify-content-center align-items-center">
            <div className="col-4"> Regístrate y comparte tu opinión.</div>
          </h1>

          <div className="card mt-3 col-5" style={{ width: "25rem" }}>
            <div className="card-body">
            <form  onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="form-group">
                  <label htmlFor="username">Usuario</label>
                  <input type="text" className="form-control" id="username" />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Correo electrónico</label>
                  <input type="email" className="form-control" id="email" />
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
                <div className="form-group ">
                  <label htmlFor="image">Imagen de perfil:⠀⠀⠀⠀⠀⠀⠀</label>
                  <div className="image-upload">
                    {preview ? (
                      <img
                        src={preview}
                        alt="Preview"
                        className="rounded-circle"
                        style={{ width: "100px", height: "100px" }}
                      />
                    ) : (
                      <div
                        className="rounded-circle"
                        style={{
                          width: "100px",
                          height: "100px",
                          backgroundColor: "#ccc",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <i
                          className="fas fa-camera"
                          style={{ fontSize: "24px" }}
                        />
                      </div>
                    )}
                    <input
                      type="file"
                      className="form-control"
                      id="image"
                      onChange={handleImageChange}
                    />
                  </div>
                </div>

                <br />
           

                  <div className="text-end">
                  <a href="/index" className="m-1 btn btn-dark">
                      regresar
                    </a>
                    <button type="submit" className="m-1 btn btn-primary">
                      Regístrate
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

export default Register;
