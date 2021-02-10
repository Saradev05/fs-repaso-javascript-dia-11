let nombres = ["Jose", "Maria", "Marta", "Sara"];
let apellidos = ["Perez", "Gomez", "Marti", "Artigas"];
let edades = [54, 25, 14, 2];

let objetos = buildobjetos(nombres, apellidos, edades);
console.log(objetos(dosListados(mayoresEdad, menoresEdad)));

function buildobjetos(names, lastnames, ages) {
    let fullnames = [];
    for (let i = 0; i < names.length; i++) {
        fullnames.push(buildObjeto(names[i], lastnames[i], ages[i]));
    }
    return fullnames;
}

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

function dosListados(mayoresEdad, menoresEdad) {
    let listadomayores = objeto.edad[i];
    let listadoMenores = objeto.edad[i];
    if (i < 18) {
        return listadoMenores[i];
    } else { return listadomayores[i]; }
}