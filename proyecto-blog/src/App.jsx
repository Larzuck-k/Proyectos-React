import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cabecera from "./Cabecera.jsx";
import Publicar from "./Publicar.jsx";
import { Validarsesion,Actualizar } from "./Funciones";
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

  const [Comentario, setComentario] = useState("");
  const [idUsuario, setIdusuario] = useState("");
  const [idPublicacion, setIdPublicacion] = useState("");

  useEffect(() => {
    cargarPosts();
  }, []);
  
  useEffect(() => {
    if (posts.length > 0) {
      CargarImagenes();
    }
  }, [posts]);


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

      
cargarPosts()

  };


function cargarPosts() {
 //Consltar las publicaciones de la API
  fetch("http://localhost:3000/publicacion/listing")
  .then((response) => response.json())
  .then((data) => {
    //Condicional para comprobar si se han encontrado publicaciones
    if (Array.isArray(data)) {
      //Guardar el objeto de publicaciones si se han encontrado
      setPosts(data);
    } else {
      //si no, mostrar un mensaje de que no hay publicaciones aún
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "No se han encontrado publicaciones.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  })
  .catch((error) => {

    //Si no ha recibido respuestas mostrar un error
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: error,
      showConfirmButton: false,
      timer: 1500,
    });
  });
}

function CargarImagenes() {
  posts.forEach((post) => {
    //Consultar las imágenes de cada publicación en base al objeto de publicaciones utilizando el ID de la publicación
    fetch(`http://localhost:3000/publicacion/image/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
            //Enviar la información que requiere la ruta en JSON
      body: JSON.stringify({
        idPublicacion: post.idPublicacion,
      }),
    })
      .then((response) => response.blob())
            //Recibir la respuesta como tipo blob
      .then((blob) => {
        //Crear una URL en base al objeto blob
        const url = URL.createObjectURL(blob);
        //Crear un objeto que almacena las imágenes dependiendo de su id de publicación
        setImages((images) => ({ ...images, [post.idPublicacion]: url }));
      })
      //Capturar y mostrar errores
      .catch((error) => Swal.fire({
        position: "top-end",
        icon: "error",
        title: error,
        showConfirmButton: false,
        timer: 1500,
      }));

 //Consultar los comentarios por el ID de la publicación
    fetch(
      `http://localhost:3000/comentario/listingPID?id=${post.idPublicacion}`
    )
      .then((response) => response.json())
      .then((data) => {
        //Almacenar los comentarios en un objeto si se han encontrado comentarios
        if (Array.isArray(data)) {
          setComments((comments) => ({
            ...comments,
            [post.idPublicacion]: data,
          }));
          //por cada comentario existe un perfil, por lo que se consulta el perfil de cada usuario utizando el ID de perfil que se encuentra en el objeto de comentarios
          data.forEach((comment) => {
            //obtener el ID del usuario
            const userId = comment.idUsuario;
            if (!userProfiles[userId]) {
           //si se encuentra el ID deberá cargar el archivo blob del perfil
              fetch(`http://localhost:3000/usuario/profile`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                //envia el id del usuario para obtener el perfil específico
                body: JSON.stringify({
                  idUsuario: userId,
                }),
              })
                .then((response) => response.blob())
                .then((blob) => {
                  //almacena en el objeto las imágenes de pefil con su respectivo id
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


  }); 
}
//   cargarPosts()  CargarImagenes()


  return (
    <>
      <Publicar cargarPosts={cargarPosts} ></Publicar>
      <Cabecera></Cabecera>

      <div>

    </div>

      <div className="container mb80">
         {/*
Establecer un mapa para crear una publicación visual por cada publicación que se encuentra en el arreglo de objetos
      */}
        {posts.map((post, index) => (
          <div key={index} className="page-timeline">
            <div className="vtimeline-point">
              <div className="vtimeline-icon">
                <i className="fa-solid fa-image"></i>
              </div>
              <div className="vtimeline-block">
                <span className="vtimeline-date">
                   {/*Obtiene la fecha del post y la acorta */}
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
                         {/* Obtiene la imagen del post utilizando el arreglo de imágenes y la relaciona con el id de la publicación */}
                    <img
                     
                      src={images[post.idPublicacion]}
                      alt=""
                      className="img-fluid mb20 rounded-3"
                    ></img>
                  </div>
                  <a href="#">
                    <h3 className="link-light text-decoration-none">
                           {/* Obtiene el título de la publicación */}
                      {post.titulo}
                    </h3>
                  </a>
                  <p></p>
                       {/* Obtiene el contenido de la publicación */}
                  <span className="text-white ">{post.contenido}</span>

                  <div className="mb-2 mt-3 border-bottom border-black border-opacity-25"></div>
                    {/*Establece un botón que contiene y actualiza el ID de la publicación para el modal a la que va dirigida el comentario 
                    y obtiene el ID de la sesión de quien está haciendo el comentario*/}
                    
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
                        data-bs-target={"#accordionExample"+post.idPublicacion}
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Comentarios:
                      </button>
                    </div>

                    <div className="accordion" id="accordionExample"></div>

                    <div className="text-white rounded-3 fondo2  ">
                      <div
                        id={"accordionExample"+post.idPublicacion}
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body p-2">
                               {/*Dentro de la publicación, mostrar los comentarios (si se han encontrado)  del arreglo de comentarios dependiento asosiado a su ID de la publicación*/}
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
