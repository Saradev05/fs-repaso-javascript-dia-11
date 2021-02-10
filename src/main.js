/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let nombres = ["Jose", "Maria", "Marta", "Sara"];
  let apellidos = ["Perez", "Gomez", "Marti", "Artigas"];
  let edades = [54, 25, 14, 2];

  let objetos = buildobjetos(nombres, apellidos, edades);
  this.console.log(objetos);
};

function buildobjetos(names, lastnames, ages) {
  let fullnames = [];
  for (let i = 0; i < names.length; i++) {
    fullnames.push(dosListados(buildObjeto(names[i], lastnames[i], ages[i])));
  }
  return fullnames;
}
let objeto = {};
function buildObjeto(name, lastname, age) {
  let objeto = {};
  objeto.nombre = textCapital(name);
  objeto.apellido = textCapital(lastname);
  objeto.edad = age;
  return objeto;
}

function textCapital(text) {
  let textCapitalize = text.charAt(0).toUpperCase() + text.slice(1);
  return textCapitalize;
}

function dosListados(name, lastname, age) {
  let listadomayores = [];
  let listadoMenores = objeto.edad;
  while (age < 18) {
    listadoMenores.push(name[""], lastname[""], age[age]);
  }
  while (age > 17) {
    return listadomayores.push(name[""], lastname[""], age[age]);
  }
}
