const nombre= document.getElementById("nombre");
const apellido= document.getElementById("apellido");
const email= document.getElementById("email");
const telefono= document.getElementById("telefono");
const contrasena= document.getElementById("contrasena");
const repetircontrasena= document.getElementById("repetircontrasena");
const form= document.getElementById("form");
const Inputs = document.querySelectorAll(".forminput");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let comprobar = validacion();
  if(comprobar){
    enviar();
  }
});
function validacion(){
  form.lastElementChild.innerHTML="";
  let comprobar = true;
  Inputs.forEach((element) => {
    element.lastElementChild.innerHTML = "";
  });

  if (nombre.value.length < 1){
    mensaje_error("nombre", "Nombre incorrecto");
    comprobar = false;
  }
  if (apellido.value.length < 1 || apellido.value.trim() == ""){
    mensaje_error("apellido", "Apellido incorrecto");
    comprobar = false;
  }
  if (email.value.length < 1 || email.value.trim() == ""){
    mensaje_error("email", "Correo incorrecto");
    comprobar = false;
  }
  if (telefono.value.length != 10 || telefono.value.trim() == "" ||
  isNaN(telefono.value)){
    mensaje_error("telefono", "Telefono incorrecto");
    comprobar = false;
  }
  if (contrasena.value.length < 1 || contrasena.value.trim() == ""){
    mensaje_error("contrasena", "Contraseña incorrecta");
    comprobar = false;
  }
  if (repetircontrasena.value != contrasena.value || contrasena.value.trim() == ""){
    mensaje_error("repetircontrasena", "Las contraseñas no coinciden");
    comprobar = false;
  }
  return comprobar;
}
function mensaje_error(nombreclase,texto){
  let elemento= document.querySelector(`.${nombreclase}`);
  elemento.lastElementChild.innerHTML= texto;
}
function enviar(){
  form.reset();
  form.lastElementChild.innerHTML="Formulario enviado !!";
}