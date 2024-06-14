import Pizzapng from "../img/pizza.png"
import Refrescopng from "../img/refresco.png"
import Postrepng from "../img/postre.png"


const Liquidacion = function () {
  

  setTimeout(() => {
    



/*   */


let documentopizzas = [
  {
   id:0,
    nombre: "Pizza 1",
    precio: 12000,
    img: Pizzapng,
    tipo: "Pizza",
  },
  {
    id:1,
     nombre: "Pizza 2",
     precio: 7000,
     img: Pizzapng,
     tipo: "Pizza",
   },
   {
    id:2,
     nombre: "Pizza 3",
     precio: 18000,
     img: Pizzapng,
     tipo: "Pizza",
   },
   {
    id:3,
     nombre: "Pizza 4",
     precio: 8500,
     img: Pizzapng,
     tipo: "Pizza",
   },
   {
    id:4,
     nombre: "Pizza 5",
     precio: 5600,
     img: Pizzapng,
     tipo: "Pizza",
   }
]

let documentorefrescos = [
  {
   id:0,
    nombre: "Regresco 1",
    precio: 1200,
    img: Refrescopng,
    tipo: "Refresco",
  },
  {
    id:1,
     nombre: "Regresco 2",
     precio: 2500,
     img: Refrescopng,
     tipo: "Refresco",
   },
   {
    id:2,
     nombre: "Regresco 3",
     precio: 5000,
     img: Refrescopng,
     tipo: "Refresco",
   },
   {
    id:3,
     nombre: "Regresco 4",
     precio: 8000,
     img: Refrescopng,
     tipo: "Refresco",
   }
]

let documentopostres = [
  {
   id:0,
    nombre: "Postre 1",
    precio: 5600,
    img: Postrepng,
    tipo: "Postre",
  },
  {
    id:0,
     nombre: "Postre 2",
     precio: 11000,
     img: Postrepng,
     tipo: "Postre",
   },
   {
    id:0,
     nombre: "Postre 3",
     precio: 6200,
     img: Postrepng,
     tipo: "Postre",
   },
   {
    id:0,
     nombre: "Postre 4",
     precio: 2500,
     img: Postrepng,
     tipo: "Postre",
   },
   {
    id:0,
     nombre: "Postre 5",
     precio: 12000,
     img: Postrepng,
     tipo: "Postre",
   }
]
let tablapizzas = document.getElementById("tablapizzas");
let tablarefrescos = document.getElementById("tablarefrescos");
let tablapostres = document.getElementById("tablapostres");

function mostrarpizzas() {
  tablapizzas.innerHTML = "";

  documentopizzas.forEach((value,key) => {
 
    tablapizzas.innerHTML += `
    
    <div class="card m-3" style="width: 18rem">
    <img src="${value.img}" class="card-img-top" alt="..." />
    <div class="card-body">
    <input id="tipo" hidden type="text" value="${value.tipo}">
      <h5 class="card-title">${value.nombre}</h5>
      <p class="card-text">Precio: $${value.precio}</p>
      <a href="#" onclick="agregarpizza(${value.id})" class="btn btn-primary"
        >Agregar</a
      >
    </div>
  </div>
    
    `;
  });
}

mostrarpizzas();


function mostrarresfrescos() {
  tablarefrescos.innerHTML = "";

  documentorefrescos.forEach((value,key) => {
 
    tablarefrescos.innerHTML += `
    
    <div class="card m-3" style="width: 18rem">
    <img src="${value.img}" class="card-img-top" alt="..." />
    <div class="card-body">
    <input id="tipo" hidden type="text" value="${value.tipo}">
      <h5 class="card-title">${value.nombre}</h5>
      <p class="card-text">Precio: $${value.precio}</p>
      <a href="#" onclick="aregarrefresco(${value.id})" class="btn btn-primary"
        >Agregar</a
      >
    </div>
  </div>
    
    `;
  });
}

mostrarresfrescos();


function mostrarpostres() {
  tablapostres.innerHTML = "";

  documentopostres.forEach((value,key) => {
 
    tablapostres.innerHTML += `
    
    <div class="card m-3" style="width: 18rem">
    <img src="${value.img}" class="card-img-top" alt="..." />
    <div class="card-body">
    <input id="tipo" hidden type="text" value="${value.tipo}">
      <h5 class="card-title">${value.nombre}</h5>
      <p class="card-text">Precio: $${value.precio}</p>
      <a href="#" onclick="agregarpostre(${value.id})" class="btn btn-primary"
        >Agregar</a
      >
    </div>
  </div>
    
    `;
  });
}

mostrarpostres();



let tabla = document.getElementById("tabla");
let reiniciar = document.getElementById("reset");
reiniciar.addEventListener("click", reset);

let totalpizza = document.getElementById("totalpizza");
let totalrefresco = document.getElementById("totalrefresco");
let totalpostre = document.getElementById("totalpostre");
let total = document.getElementById("total");

let db = window.localStorage;

mostrar();

function reset() {
  db.clear();
  tabla.innerHTML = "";

  totalpizza.value = 0 + "$";
  totalrefresco.value = 0+ "$";
  totalpostre.value = 0+ "$";
  total.value = 0+ "$";
}

function agregarpizza(valor) {
  let dato = {
    producto:documentopizzas[valor].nombre,
    tipo: documentopizzas[valor].tipo,
    precio: documentopizzas[valor].precio,
  };

  db.setItem(db.length + 1, JSON.stringify(dato));
  mostrar();
}

function aregarrefresco(valor) {
  let dato = {
    producto:documentorefrescos[valor].nombre,
    tipo: documentorefrescos[valor].tipo,
    precio: documentorefrescos[valor].precio,
  };

  db.setItem(db.length + 1, JSON.stringify(dato));

  mostrar();
}

function agregarpostre(valor) {
  let dato = {
    producto:documentopostres[valor].nombre,
    tipo: documentopostres[valor].tipo,
    precio: documentopostres[valor].precio,
  };


  db.setItem(db.length + 1, JSON.stringify(dato));

  mostrar();
}

function mostrar() {
  let tipo = ["", "pizza", "Refresco", "Postre"];
  let precio = 0;
  let cantidadpizza = 0;
  let cantidadrefresco = 0;
  let cantidadpostre = 0;

  tabla.innerHTML = "";
  let llave = Object.keys(db);

  llave.map((llave) => {
    let dato = JSON.parse(db.getItem(llave));

    tabla.innerHTML += ` <tr>
<th scope="row">${llave}</th>
<td>${dato.producto}</td>
<td>${dato.tipo}</td>
<td>$${dato.precio}</td>
</tr>`;

    precio += parseInt(dato.precio);
    total.value = "$"+ (precio + 1500 );

    if (dato.tipo == "Pizza") {
      cantidadpizza += 1;
    }
    if (dato.tipo == "Refresco") {
      cantidadrefresco += 1;
    }
    if (dato.tipo == "Postre") {
      cantidadpostre += 1;
    }


    totalpizza.value = cantidadpizza;
    totalrefresco.value = cantidadrefresco;
    totalpostre.value = cantidadpostre;
  });
}


  }, "100");


}
export default Liquidacion