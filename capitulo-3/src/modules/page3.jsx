
import imagenEstandar from
"../assets/images/standards.png";
import imagenCategorias from
"../assets/images/maquetacion.png";
function Page3() {
  return (
    <>
      <section className="scroll-item  p-5 ">
        <div className="text-start">
          <h2 className="subtitle text-white">Convenciones</h2>
        </div>
        <div className="bg-body rounded-4 p-2 ">
          <div className="row ">
            <div className="col justify m-3">
              <span className=" fs-3 ">
                Las convenciones en diseño web son principios y estándares que
                se utilizan para crear sitios web funcionales y agradables para
                los visitantes. con lo ya mencionado anteriormente, es recomendable tener encuenta estos aspectos:
                <p></p>
             
                <span className="fw-bold"> Simplicidad: </span>
                La simplicidad es fundamental. Utiliza colores y tipografía de
                manera efectiva para que la información sea fácil de encontrar y
                comprender.
                <p></p>
                <span className="fw-bold">Jerarquía visual: </span>
                Destaca lo más importante visualmente. Por ejemplo, elementos
                cruciales deben ser más grandes que otros.
                <p></p>
                <span className="fw-bold"> Navegabilidad: </span> Facilita la
                búsqueda de información. Asegúrate de tener un botón de búsqueda
                visible y enlaces claros.
                <p></p>
                Además, al ser un estantar, los usuarios ya estás acostumabrados a un mismo estilo de navegación, lo cual hace la pagina web muy cómoda para el mismo.
              </span>

              <br />
              <br />
            </div>

            <div className="col bg-dark-subtle  rounded-3 mx-3 align-content-center">
           
            <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active ">
      <img src={imagenCategorias} class="" width="700" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={imagenEstandar} class="" width="700" alt="..."></img>
    </div>
   
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page3;
