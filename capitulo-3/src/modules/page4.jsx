import imagenes from "../assets/images/imagenes.png";

function Page4() {
  return (
    <>
      <section className="scroll-item f2 p-5 ">
        <div className="text-start">
          <h2 className="subtitle text-white">Resaltar lo presionable</h2>
        </div>
        <div className="bg-body rounded-4 p-2 ">
          <div className="row ">
            <div className="col justify m-3">
              Es normal que las paginas web contengan vínculos o botones que al
              usarlos nos lleve a otra página o realizen alguna acción que el
              usuario podria utilizár, por ello es importante resaltar o hacer
              notar de alguna manera las cosas que se pueden presionar:
              <p></p>
              <br />
           <div className="text-center">
           Como los <button className="btn btn-primary fs-1 m-3">Botones</button>, los{" "}
           <i class="link-primary bi bi-caret-right-square-fill presionable"></i>  <a className="link-primary fs-1 icon-link-hover">  hipervículos</a> y también las⠀
           
       
                <img
                  className="imagenpresionable rounded-4 hover "
                  width={200}
                  src={imagenes}
                  alt=""
                />
            

           </div>
            
              <p></p>
              <br />
              Esto debido a que las páginas pueden estar llenas de mucho contenido y se hace muy dificil saber donde puedes presionar.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page4;
