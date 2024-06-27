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

  const [comments, setComments] = useState({}); // Add a state for comments
  const [userProfiles, setUserProfiles] = useState({}); // Add a state for user profiles
  const [estado, setEstado] = useState({}); // Add a state for user profiles

  const [Comentario, setComentario] = useState("");
  const [idUsuario, setIdusuario] = useState("");
  const [idPublicacion, setIdPublicacion] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(Comentario);
    // Send the form data to your API
    fetch("http://localhost:3000/comentario/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ComentarioTexto: Comentario,
        idUsuario: idUsuario,
        idPublicacion: idPublicacion,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: data.mensaje,
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          location.reload();
        }, "1500");
      })
      .catch((error) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "No se ha podido establecer conexión con el servidor",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  useEffect(() => {
    // Call your API to fetch the posts
    fetch("http://localhost:3000/publicacion/listing")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setPosts(data);
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "No se han encontrado publicaciones.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
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

      // Fetch comments for each post
      fetch(
        `http://localhost:3000/comentario/listingPID?id=${post.idPublicacion}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (Array.isArray(data)) {
            setComments((comments) => ({
              ...comments,
              [post.idPublicacion]: data,
            }));
            data.forEach((comment) => {
              const userId = comment.idUsuario;
              if (!userProfiles[userId]) {
                fetch(`http://localhost:3000/usuario/profile`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    idUsuario: userId,
                  }),
                })
                  .then((response) => response.blob())
                  .then((blob) => {
                    const url = URL.createObjectURL(blob);
                    setUserProfiles((userProfiles) => ({
                      ...userProfiles,
                      [userId]: url,
                    }));
                  })
                  .catch((error) => console.error(error));
              }
            });
          }
        })
        .catch((error) => console.error(error));

      // Fetch user profiles for each comment
    });
  }, [posts]);

  return (
    <>
      <Publicar></Publicar>
      <Cabecera></Cabecera>

      <div className="container mb80">
        {posts.map((post, index) => (
          <div key={index} className="page-timeline">
            <div className="vtimeline-point">
              <div className="vtimeline-icon">
                <i className=""></i>
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
                  <span className="text-white ">{post.contenido}</span>

                  <div className="mb-2 mt-3 border-bottom border-black border-opacity-25"></div>
                  <button
                    className="btn text-white mb-2 "
                    data-bs-toggle="modal"
                    data-bs-target="#comment"
                    onClick={() => {
                      setIdPublicacion(post.idPublicacion);

                      setIdusuario(sessionStorage.getItem("idUsuario"));
                    }}
                  >
                    <i className="fa-solid fa-comment fs-3"></i>
                  </button>

                  <div className="fondo3 inner-shadow rounded p-3">
                    <div className="row d-block p-2">
                      <button
                        className="btn-app btn rounded-3 text-white fw-bold fs-5 "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Comentarios:
                      </button>
                    </div>

                    <div class="accordion" id="accordionExample"></div>

                    <div className="text-white rounded-3 fondo2  ">
                      <div
                        id="collapseOne"
                        class="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body p-2">
                          {(comments[post.idPublicacion] &&
                            comments[post.idPublicacion].map((comment) => (
                              <div
                                key={comment.idComentario}
                                className="text-white"
                              >
                                <div className="mb-1 link-light text-decoration-none d-flex align-items-center">
                                  <img
                                    src={userProfiles[comment.idUsuario]}
                                    alt=""
                                    className="rounded-circle"
                                    width="40"
                                    height="40"
                                  />
                                  <h3 className="mx-2">{comment.user}</h3>
                                </div>

                                <div className="mt-2">
                                  {comment.ComentarioTexto}
                                </div>
                                <br />
                              </div>
                            ))) ||
                            "Aún no hay comentarios"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="modal fade"
        id="comment"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content bg-transparent border-0 ">
            <div className="rounded-3 fondo2 p-2 my-3 p-3">
              <span href="#" className="d-flex align-items-center">
                <h1 className="mx-2 link-light text-decoration-none">
                  Nuevo comentario
                </h1>
              </span>

              <form onSubmit={handleSubmit}>
                <div className="row m-2">
                  <input
                    placeholder="Comentario"
                    className="text-white fondo3 inner-shadow rounded p-3 mb-3"
                    name="Comentario"
                    id=""
                    onChange={(event) => {
                      setComentario(event.target.value);
                    }}
                  ></input>

                  <button type="submit" className="btn btn-primary mb-3">
                    Publicar
                  </button>
                </div>
                <p></p>
              </form>
              <div className="m-1 modal-footer border-black border-opacity-25"></div>

              <div className="m-2 row  ">
                <button
                  type="button"
                  className="btn btn-secondary "
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
