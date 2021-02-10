/* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = function() {
  let nombres = ["Jose", "Maria", "Marta", "Sara"];
  let apellidos = ["Perez", "Gomez", "Marti", "Artigas"];

  let objetos = buildobjetos(nombres, apellidos);
  console.log(objetos);
// };

function buildobjetos(name, lastname) {
  let fullnames = [];
  for (let i = 0; i < name.length; i++) {
    fullnames.push(buildObjeto(name[i], lastname[i]));
  }
  return fullnames;
}

function buildObjeto(name, lastname) {
  let objeto = {};
  objeto.nombre = textCapital(name);
  objeto.apellido = textCapital(lastname);
  return objeto;
}

function textCapital(text) {
  let textCapitalize = text.charAt(0).toUpperCase() + text.slice(1);
  return textCapitalize;
}
