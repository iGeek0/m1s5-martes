"use strict";

//console.log(`Hola mundo 1`);
//console.log('Hola mundo 2');
//console.log("Hola mundo 2");

var nombre = "Juan"; // se puede reasignar pero tiene otro alcanze mas global...no se recomienda en la actualidad su uso en proyectos nuevos, salvo que se requiera ESPECIFICAMENTE
var edad = 30;

const fechaNacimiento = "17/08/1993"; // no se puede reasignar(no deberia)


let apellido = "Perez"; // se puede reasignar
console.log(apellido);

let nombreCompleto = "Jesus Cardenas"; // string(texto)
let telefono = 1234567890; // number(numero)
let humano = true; // boolean(true/false)
let direccion; // undefined
let codigoPostal = null; // null
/*
console.log("nombreCompleto", typeof nombreCompleto);
console.log("telefono", typeof telefono);
console.log("humano", typeof humano);
console.log("direccion", typeof direccion);
console.log("codigoPostal", typeof codigoPostal);
*/

nombreCompleto = String(123);
telefono = Number("98765");
console.log("nombreCompleto", nombreCompleto);
console.log("telefono", telefono);
console.log("humano", humano);
console.log("direccion", direccion);
console.log("codigoPostal", codigoPostal);

/*
TODO ESTO ES UN COMENTARIO
string
number
boolean
null
undefined
*/



