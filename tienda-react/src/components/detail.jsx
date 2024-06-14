import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
const Detail = function () {
    

function mensaje(texto) {

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Se ha limpiado el pedido correctamente.",
        showConfirmButton: false,
        timer: 1500
      });
    
}


    return(

        <>
        
        <div class="col-3">
        <div class="m-3">
          <div class="p-3">
            Total
            <input readonly class="form-control" type="text" name="" id="total" />
            <p></p>
            Pizzas
            <input readonly class="form-control" type="text" name="" id="totalpizza" />
            <p></p>
            Refrescos
            <input readonly
              class="form-control"
              type="text"
              name=""
              id="totalrefresco"
            />
            <p></p>
            Postres 
            <input readonly class="form-control" type="text" name="" id="totalpostre" />
            <p></p>
            Envio
            <input
              readonly
              value="$1.500"
              class="form-control"
              type="text"
              name=""
              id="totalenvio"
            />

            <p></p>
            <button id="reset" onClick={mensaje} class="btn btn-warning p-2 m-2">Limpiar recibo</button>
            <button class="btn btn-primary p-2 m-2">Hacer pedido</button>
          </div>
        </div>

        <div class="row m-3">
          <span class="display-4">Recibo</span>

          <div class="mx-2">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Producto</th>
                  <th scope="col">Precio</th>
                </tr>
              </thead>
              <tbody id="tabla"></tbody>
            </table>
          </div>
        </div>
      </div>


        </>

    )
}

export default Detail