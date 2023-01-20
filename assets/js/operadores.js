console.log("Esto es el archivo operadores.js");


let numero1 = 10;
let numero2 = 15;


console.log(`La suma: ${numero1 + numero2}`);

console.log(`La resta: ${numero1 - numero2}`);

console.log(`La multiplicacion: ${numero1 * numero2}`);

// alert(`La multiplicacion: ${numero1 * numero2}`);



/*
Quiero mostrar un mensaje si la persona es mayor de edad y otro si la persona no es mayor de edad.
*/

// if(edad > 17) {
//     console.log("Es mayor de edad");
// } else {
//     console.log("Es menor de edad");
// }

let edad = 18;

if (edad == 18) {
    console.log("Es mayor de edad");
} else if (100) {
    console.log("Es muy viejo....");
} else {
    console.log("Es menor de edad");
}


const dia = "Lunmartes";

switch (dia) {
    case "Lunes":
        console.log("Hoy es lunes!!");
        break;
    case "Martes":
        console.log("Hoy es Martes!!");
        break;
    case "Miercoles":
        console.log("Hoy es Miercoles!!");
        break;
    case "Jueves":
        console.log("Hoy es Jueves!!");
        break;
    case "Viernes":
        console.log("Hoy es Viernes!!");
        break;
    case "Sabado":
        console.log("Hoy es Sabado!!");
        break;
    case "Domingo":
        console.log("Hoy es Domingo!!");
        break;
    default:
        console.log("Dia invalido");
        break;
}

//  for loop o siclo for
for (let i = 0; i < 10; i = i + 1) {
    console.log(`El valor actual de i es: ${i} x ${i} = ${i * i}`);
}

// while loop
let n = 0;
while (n < 10) {
    n++;
    // n = n + 1;
    console.log(`El valor de n es: ${n}`);
}


function fnSaludar(test) {
    // alguna logica particular.....
    return `Hola como estas: ${test}`;
}

function sumarNumeros(num1, num2) {
    return num1 + num2;
}


// let nombre = prompt("Ingresa tu nombre");

// console.log(fnSaludar(nombre))

console.log(sumarNumeros(4, 1));
