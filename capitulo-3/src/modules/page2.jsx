import imagenTecnologia from "../assets/images/tecnologia.png";
import imagenProgramacion from "../assets/images/programacion.jpg";
function Page2() {
  return (
    <>
      <section className="scroll-item  p-5 ">
        <div className=" bg-white rounded-4 p-2 ">
          <div className="row ">
            <div className="col justify m-3">
              <span className=" h1">
                las relaciones lógicas también son visuales
              </span>
              <p></p>
              <span className=" fs-3 ">
                Se recomienda que las cosas que captemos como algo que está
                relacionado, también se pueda mostrár de manera gráfica.
              </span>
            </div>

            <div className="col bg-secondary-subtle  rounded-3 mx-3 ">
              <div className="row">
                <div className="col align-content-center mx-2">
                  <div className="text-start m-3 bg-dark-subtle rounded-3 p-2">
                    <span className="f2 zoom">Tecnología</span>
                    <li className="f3 zoom">Desarrollo</li>
                    <li className="f3 zoom">Dispositivos</li>
                    <li className="f3 zoom">Herramientas</li>
                    <li className="f3 zoom">Aplicaciones</li>
                    <li className="f3 zoom">Evolución</li>
                  </div>
                  <p></p>
                  <div className="justify">
                    <span className="justify">
                      {" "}
                      Esta jerarquía visual permite entender que esos elementos
                      tienen una relación con la tecnología y no necesariamente
                      podrian estar relacionados engañando al lector.
                    </span>
                  </div>
                  <p></p>
                </div>

                <div className="col p-3 align-content-center">
                  <img
                    className="rounded-4"
                    width={350}
                    src={imagenTecnologia}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className=" bg-white rounded-4 p-2 ">
          <div className="row ">
            <div className="col justify m-3">
              <span className=" h1">Agrupación</span>
              <p></p>
              <span className=" fs-3 ">
                También, se puede agrupar el contenido visualmente para hacer
                notar que todo pertenece a un tema específico.
              </span>

              <br />
              <br />
            </div>

            <div className="col bg-secondary-subtle  rounded-3 mx-3 align-content-center">
              <div className="row">
                <div className="col text-start ">
                  <span className="p-2 f2 zoom ">Sistemas</span>
                  <div className="text-start m-1 bg-dark-subtle rounded-3 p-1 mx-3">
                    <span className="f2 zoom">⠀Programación</span>
                    <p></p>
                    <span className="f3 zoom">⠀⠀⠀⠀⠀Contenido relacionado.</span>
                    <br />
                    <br />
                    <div className="text-center">
                      {" "}
                      <img
                        className="rounded-4"
                        width={300}
                        src={imagenProgramacion}
                        alt=""
                      />
                    </div>
                    <br />
                  </div>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page2;
