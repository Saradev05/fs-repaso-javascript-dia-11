/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let nombres = ["Jose", "Maria", "Marta"];
  let apellidos = ["Perez", "Gomez", "Marti"];

  let objetos = buildobjetos(nombres, apellidos);
  this.console.log(objetos);
};

function buildobjetos(name, lastname) {
  let fullnames = [];
  for (let i = 0; i < name.length; i++) {
    fullnames.push(buildObjeto(name[i], lastname[i]));
  }
  return fullnames;
}

function buildObjeto(name, lastname) {
  let objeto = {};
  objeto.nombre = name.charAt(0).toUpperCase() + name.slice(1);
  objeto.apellido = lastname.charAt(0).toUpperCase() + name.slice(1);
  return objeto;
}
