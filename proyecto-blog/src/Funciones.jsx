export function Cerrarsesion() {
  sessionStorage.clear();
  location.reload();
}
export function Validarsesion() {
  if (sessionStorage.getItem("email") == null) {
    window.location.href = "/index";
  }
}

export function Actualizar(estado) {
  console.log(estado)
  let reload 
  if(estado == true || estado == false ){
    reload = estado;
  }
return reload
}

export default { Cerrarsesion, Validarsesion };
