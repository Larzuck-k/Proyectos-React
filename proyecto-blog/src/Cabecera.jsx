import { useState, useEffect } from "react";
import { Cerrarsesion } from "./Funciones";

const Cabecera = () => {
  const [profileImage, setProfileImage] = useState(null);



  useEffect(() => {
    fetch("http://localhost:3000/usuario/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idUsuario: sessionStorage.getItem("idUsuario"),
    
      }),
    })
      .then((response) => response.blob()) // Get the response as a blob
      .then((blob) => {
        const url = URL.createObjectURL(blob); // Create a URL from the blob
        setProfileImage(url);
      })
      .catch((error) => {
        console.error("Error fetching profile image:", error);
      });
  }, []);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg ftco_navbar ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="container">
          <a className="navbar-brand fw-bold text-white" href="/app">
            Un blog genérico
          </a>
          <div className="social-media order-lg-last">
            <span className="mb-0 d-flex">
              <div className="dropdown">
                <button
                  className="btn "
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="text-white m-2">
                    {" "}
                    {sessionStorage.getItem("user")}
                  </span>
                  <img
                    src={profileImage || "https://via.placeholder.com/30"}
                    alt="Profile Picture"
                    className="rounded-circle"
                    width="40"
                    height="40"
                  />
                </button>
                <ul className="dropdown-menu fondo1">
                  <li className="text-center"> </li>
                  <li className="text-center m-2">
                    <span className="fw-light p-3">
                      {sessionStorage.getItem("email")}
                    </span>
                  </li>
                  <li className="text-center">
                    {" "}
                    <button
                      className="btn btn-danger"
                      onClick={() => Cerrarsesion()}
                    >
                      Cerrar sesión
                    </button>
                  </li>
                </ul>
              </div>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Cabecera;
