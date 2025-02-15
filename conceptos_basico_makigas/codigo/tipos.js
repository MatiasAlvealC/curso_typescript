"use strict";
//
// operadores de typeScript
// boolean
// true or false
let logico = false;
let verdadero = true;
// number
// 1, 1.4, -6
let entero = 44;
let decimal = 26.55;
let hexadecimales = 0x156;
let extremadementeLargo = 9876543;
console.log(hexadecimales);
console.log(extremadementeLargo);
// string
let cadenas = "ksdjksjdakjdkaj \n odsjda";
console.log(cadenas);
// any
let cualquiera;
cualquiera = "una cadena";
cualquiera = false;
// null
let nada = null;
// undefined
let indefinido = undefined;
// void
function saluda() {
    console.log("HOLAAA");
}
// arrays
let dias = ["Sabado", "Domingo"];
let enteritos = [1, 2, 3, 4, 5];
// tuplas
let db = [
    ["Dani", 26, "Macarrones"],
    ["Elena", 25, "Pasta"],
    ["Ari", 27, "Pure"]
];
let db2 = ["Dani", 26, "España", true];
// objeto
let persona = {
    nombre: "Pepe Perez",
    edad: 30,
    pais: "Colombia",
    fecha_nac: new Date(1990, 5, 14)
};
console.log(persona.fecha_nac);
let objeto = {
    nombre: "Pepe Perez",
    edad: 30,
    pais: "Colombia"
};
