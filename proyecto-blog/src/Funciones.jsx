export function Cerrarsesion() {
  sessionStorage.clear();
  location.reload();
}
export function Validarsesion() {
  if (sessionStorage.getItem("email") == null) {
    window.location.href = "/index";
  }
}

export default { Cerrarsesion, Validarsesion };
