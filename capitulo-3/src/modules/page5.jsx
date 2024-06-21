function Page5() {
  return (
    <>
      <section className="scroll-item f2 p-5 ">
        <div className="bg-body rounded-4 p-2 ">
          <div className="row ">
            <div className="col justify m-3">
              <div className="text-start">
                <h2 className="rounded subtitle text-white">
                  Evitar el ruido visual
                </h2>
              </div>
              <div className="row p-3">
                <div className="col linea">
                  Con ruido visual nos referimos a la sobre carga de elementos
                  visuales que llaman la atención del lector y es algo que puede
                  ser negativo si no se emplea de manera optimizada.
                </div>
                <div className="col">
                  Por eso se recomienda utilizar tonos suaves para elementos
                  gráficos que no son importantes como los bordes, lineas de
                  separación, entren otras.
                </div>
              </div>
              <div className="text-center">
                <br />
                <h1>Sin reducción de ruido</h1>
                <br />
              </div>

              <div className="row p-3 ">
                <div className="col ">
                  <table class="table bordes">
                    <thead>
                      <tr className="bordes">
                        <th className="bordes" scope="col">
                          #
                        </th>
                        <th className="bordes" scope="col">
                          First
                        </th>
                        <th className="bordes" scope="col">
                          Last
                        </th>
                        <th className="bordes" scope="col">
                          Handle
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bordes">
                        <th scope="row" className="bordes">
                          1
                        </th>
                        <td className="bordes">Mark</td>
                        <td className="bordes">Otto</td>
                        <td className="bordes">@mdo</td>
                      </tr>
                      <tr className="bordes">
                        <th scope="row">2</th>
                        <td className="bordes">Jacob</td>
                        <td className="bordes">Thornton</td>
                        <td className="bordes">@fat</td>
                      </tr>
                      <tr className="bordes">
                        <th className="bordes" scope="row">
                          3
                        </th>
                        <td className="bordes" colspan="2">
                          Larry the Bird
                        </td>
                        <td className="bordes">@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col">
                  <div class="accordion " id="accordionExample">
                    <div class="accordion-item ">
                      <h2 class="accordion-header bg-white bordes">
                        <button
                          class="accordion-button "
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Accordion Item #1
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        class="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body bordes">
                          <strong>
                            This is the first item's accordion body.
                          </strong>{" "}
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the{" "}
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header bg-white bordes">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Accordion Item #2
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        class="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body bordes">
                          <strong>
                            This is the second item's accordion body.
                          </strong>{" "}
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the{" "}
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item ">
                      <h2 class="accordion-header bg-white bordes">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Accordion Item #3
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        class="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body bordes">
                          <strong>
                            This is the third item's accordion body.
                          </strong>{" "}
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the{" "}
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <br />
                <h1>Con reducción de ruido</h1>
                <br />
              </div>

              <div className="row p-3 ">
                <div className="col ">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col">
                  <div class="accordion " id="accordionExample2">
                    <div class="accordion-item ">
                      <h2 class="accordion-header bg-white">
                        <button
                          class="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne2"
                          aria-expanded="true"
                          aria-controls="collapseOne2"
                        >
                          Accordion Item #1
                        </button>
                      </h2>
                      <div
                        id="collapseOne2"
                        class="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample2"
                      >
                        <div class="accordion-body">
                          <strong>
                            This is the first item's accordion body.
                          </strong>{" "}
                          It is shown by default, until the collapse plugin adds
                          the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the{" "}
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header bg-white">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo2"
                          aria-expanded="false"
                          aria-controls="collapseTwo2"
                        >
                          Accordion Item #2
                        </button>
                      </h2>
                      <div
                        id="collapseTwo2"
                        class="accordion-collapse collapse"
                        data-bs-parent="#accordionExample2"
                      >
                        <div class="accordion-body">
                          <strong>
                            This is the second item's accordion body.
                          </strong>{" "}
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the{" "}
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header bg-white">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree2"
                          aria-expanded="false"
                          aria-controls="collapseThree2"
                        >
                          Accordion Item #3
                        </button>
                      </h2>
                      <div
                        id="collapseThree2"
                        class="accordion-collapse collapse"
                        data-bs-parent="#accordionExample2"
                      >
                        <div class="accordion-body">
                          <strong>
                            This is the third item's accordion body.
                          </strong>{" "}
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the{" "}
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page5;
