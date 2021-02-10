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
    console.log(name[i], lastname[i]);
    fullnames.push({ name: name[i], lastname: lastname[i] });
  }
  return fullnames;
}


    // console.log(numberInArray(nombre, apellidos));

