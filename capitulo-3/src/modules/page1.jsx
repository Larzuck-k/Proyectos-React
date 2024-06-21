function Page1() {
  return (
    <>
      <section className="scroll-item  p-5 ">
        <div className="text-start">
          <h2 className="subtitle text-white">Jerarquia visual</h2>
        </div>
        <div className="bg-body rounded-4 p-2 ">
          <div className="row">
            <div className="col-12  justify ">
              <span className=" fs-3">
                Es importante establecer una jerarquia visual en la página que
                estemos desarrollando. debido a que el cerebro de forma
                automática encontrará primero lo que esté a simple vista y se
                concentrará en ello.
                <p></p>
                Cuando el usuario realiza una "hojeada" pasa rápidamente entre
                las páginas en busca de contenido, y los textos grándes llámaran
                su atención.
                <p></p>
                En cambio, los textos pequeños, se usan para dar una información
                más detalla. Se utiliza cuando ya se tiene la atención del
                usuario o lector para que esta sea una lectura más cómoda.
              </span>

              <br />
              <br />
            </div>

            <div className="col bg-dark-subtle  rounded-3 mx-3 align-content-center">
              <span className="text-center fw-bold f1 zoom">
                Probablemente te centrarás en leer esto primero
              </span>
              <br />
              <br />
              <span className="text-center f2 zoom">Luego leerás esto</span>
              <br />
              <br />
              <span className="text-center f3 zoom">
                Y quizas ignorarás esto
              </span>
              <br />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page1;
