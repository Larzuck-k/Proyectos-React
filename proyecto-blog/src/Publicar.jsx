import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";

const Publicar = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [titulo, setTitulo] = useState("");
    const [contenido, setContenido] = useState("");
  
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
    const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("contenido", contenido);
    formData.append("photo", selectedFile);

    // Send the form data to your API
    fetch("http://localhost:3000/publicacion/create", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: data.mensaje,
            showConfirmButton: false,
            timer: 1500
          });
          setTimeout(() => {
            location.reload()
          }, "1500");
      })
      .catch((error) => {
      
    Swal.fire({
        position: "top-end",
        icon: "error",
        title: "No se ha podido establecer conexión con el servidor",
        showConfirmButton: false,
        timer: 1500
      });
      });
  };

  return (
    <>
      <button
        className="flotante position-fixed m-4"
        data-bs-toggle="modal"
        data-bs-target="#post"
      >
        +
      </button>

      <div
        className="modal fade"
        id="post"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content bg-transparent border-0 ">
            <div className="rounded-3 fondo2 p-2 my-3 p-3">
              <span href="#" className="d-flex align-items-center">
                <h1 className="mx-2 link-light text-decoration-none">
                  Nuevo post
                </h1>
              </span>

              <form onSubmit={handleSubmit}>
                <div className="row m-2">
                  <input
                    placeholder="Título de la publicación"
                    className="text-white fondo3 inner-shadow rounded p-3"
                    name="titulo"
                    id="titulo"
                    value={titulo}
                    onChange={(event) => setTitulo(event.target.value)}
                 
                  ></input>
                  <p></p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className=" text-white fondo3 inner-shadow rounded p-3"
                        name="photo"
                      id="photo"
                  />
                  <p></p>
                  <div className="inner-shadow text-center rounded  fondo3 p-3">
                    {preview && (
                      <img
                        src={preview}
                        alt="Preview"
                        className="text-white img-fluid rounded "
                      />
                    )}
                  </div>
                  <p></p>
                  <input
                    placeholder="Contenido de la publicación"
                    className="text-white  fondo3 inner-shadow rounded p-3 "
                    name="publicacion"
                      id="contenido"
                      value={contenido}
                      onChange={(event) => setContenido(event.target.value)}
                 
                  ></input>
                        <p></p>
                          <button type="submit" className="btn btn-primary">
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
};

export default Publicar;
