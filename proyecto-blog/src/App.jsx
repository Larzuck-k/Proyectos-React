import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cabecera from "./Cabecera.jsx";
import Publicar from "./Publicar.jsx";
import { Validarsesion } from "./Funciones";
import Icono from "./assets/images/icono.png";
import "./App.css";
import Swal from "sweetalert2";

function App() {
  Validarsesion();
  document.body.style = "background: #0e1b25;";

  
  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState({});
  const [comments, setComments] = useState({});
  const [userNames, setUserNames] = useState({});

  useEffect(() => {
    // Call your API to fetch the posts
    fetch("http://localhost:3000/publicacion/listing")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((data) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "No se ha podido establecer conexión con el servidor",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  }, []);

  useEffect(() => {
    posts.forEach((post) => {
      fetch(`http://localhost:3000/publicacion/image/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idPublicacion: post.idPublicacion,
        }),
      })
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          setImages((images) => ({ ...images, [post.idPublicacion]: url }));
        })
        .catch((error) => console.error(error));
    });
  }, [posts]);

  useEffect(() => {
    posts.forEach((post) => {
      fetch(
        `http://localhost:3000/comentario/listingPID?id=${post.idPublicacion}`
      )
        .then((response) => response.json())
        .then((data) => {
          setComments((comments) => ({
            ...comments,
            [post.idPublicacion]: data,
          }));
        })
        .catch((error) => console.error(error));
    });
  }, [posts]);

  
  useEffect(() => {
    fetch("http://localhost:3000/usuario/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idUsuario: sessionStorage.getItem("idUsuario"),
    
      }),
    })
     .then((response) => response.json())
     .then((data) => {
        const userNamesObj = {};
        data.forEach((user) => {
          userNamesObj[user.idUsuario] = user.user;
        });
        setUserNames(userNamesObj);
      })
     .catch((error) => console.error(error));
  }, []);

  

  return (
    <>
      <Publicar></Publicar>
      <Cabecera></Cabecera>

      <div className="container mb80">
        {posts.map((post, index) => (
          <div key={index} className="page-timeline">
            <div className="vtimeline-point">
              <div className="vtimeline-icon">
                <i className="fa fa-image"></i>
              </div>
              <div className="vtimeline-block">
                <span className="vtimeline-date">
                  {new Date(post.createdAt).toLocaleDateString()}
                </span>
                <div className="vtimeline-content">
                  <a
                    href="#"
                    className="link-light text-decoration-none d-flex align-items-center"
                  >
                    <img
                      src={Icono}
                      alt=""
                      width={50}
                      className="img-fluid rounded-5"
                    />
                    <h3 className="mx-2">Larz (Owner)</h3>
                  </a>

                  <br />
                  <div href="#" className="text-center">
                    <img
                      src={images[post.idPublicacion]}
                      alt=""
                      className="img-fluid mb20 rounded-3"
                    ></img>
                  </div>
                  <a href="#">
                    <h3 className="link-light text-decoration-none">
                      {post.titulo}
                    </h3>
                  </a>
                  <p></p>
                  <span className="text-white">{post.contenido}</span>
                  <p></p>
                  <br />
                  <div className="fondo3 inner-shadow rounded p-3">
                  <h3 className="text-white">Comentarios:</h3>
                    <div className="rounded-3 fondo2 p-2 my-3">
                 
                      {comments[post.idPublicacion] &&
                        Array.isArray(comments[post.idPublicacion]) &&
                        comments[post.idPublicacion].map((comment) => (
                          <div className="text-white" key={comment.idComentario}>
                          <a
                    href="#"
                    className="link-light text-decoration-none d-flex align-items-center"
                  >
                    <img
                      src=""
                      alt=""
                      width={50}
                      className="img-fluid rounded-5"
                    />
           <h3 className="mx-2">{userNames[comment.idUsuario]}</h3>
                  </a>




                            <div>{comment.ComentarioTexto}</div>
                            <br />
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
