function Page1() {
  return (
    <>
      <section class="scroll-item  p-5 ">
        <div className="text-start">
          {" "}
          <h2 className="subtitle">Jerarquia visual</h2>
        </div>
        <div className="bg-opacity-10 bg-dark rounded-4 p-2 ">
          <div className="row ">
            <div className="col justify">
              <span className=" fs-3 ">
                Es importante establecer una jerarquia visual en la página que
                estemos desarrollando. debido a que el cerebro de forma
                automática encontrará primero lo que esté a simple vista y se
                concentrará en ello.
              </span>
              <p></p>
              <span className="fs-3 ">
                Cuando el usuario realiza una "hojeada" pasa rápidamente entre
                las páginas en busca de contenido, y los textos grándes llámaran
                su atención.
              </span>

              <p></p>
              <span className=" fs-3 ">
                En cambio, los textos pequeños, se utilizan para dar una
                información más detalla. Se utiliza cuando ya se tiene la
                atención del usuario o lector para que esta sea una lectura más
                cómoda.
              </span>
            </div>
            <div className="col bg-white  rounded-3 mx-3 align-content-center">
              <span className="text-center fw-bold display-3 ">
                Probablemente te centrarás en leer esto primero
              </span>
              <br />
              <br />
              <span className="text-center display-5">Luego leerás esto</span>
              <br />
              <br />
              <span className="text-center fs-6">Y quizas ignorarás esto</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page1;
