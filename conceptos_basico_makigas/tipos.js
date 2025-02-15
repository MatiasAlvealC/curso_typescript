//
// operadores de typeScript
// boolean
// true or false
var logico = false;
var verdadero = true;
// number
// 1, 1.4, -6
var entero = 44;
var decimal = 26.55;
var hexadecimales = 0x156;
var extremadementeLargo = 9876543;
console.log(hexadecimales);
console.log(extremadementeLargo);
// string
var cadenas = "ksdjksjdakjdkaj \n odsjda";
console.log(cadenas);
// any
var cualquiera;
cualquiera = "una cadena";
cualquiera = false;
// null
var nada = null;
// undefined
var indefinido = undefined;
// void
function saluda() {
    console.log("HOLAAA");
}
// arrays
var dias = ["Sabado", "Domingo"];
var enteritos = [1, 2, 3, 4, 5];
// tuplas
var db = [
    ["Dani", 26, "Macarrones"],
    ["Elena", 25, "Pasta"],
    ["Ari", 27, "Pure"]
];
var db2 = ["Dani", 26, "España", true];
// objeto
var persona = {
    nombre: "Pepe Perez",
    edad: 30,
    pais: "Colombia",
    fecha_nac: new Date(1990, 5, 14)
};
console.log(persona.fecha_nac);
var objeto = {
    nombre: "Pepe Perez",
    edad: 30,
    pais: "Colombia"
};
