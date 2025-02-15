"use strict";
// enum
// tipo enumeral
var DiaSemana;
(function (DiaSemana) {
    DiaSemana[DiaSemana["Lunes"] = 401] = "Lunes";
    DiaSemana[DiaSemana["Martes"] = 501] = "Martes";
    DiaSemana[DiaSemana["Miercoles"] = 502] = "Miercoles";
    DiaSemana[DiaSemana["Jueves"] = 701] = "Jueves";
    DiaSemana[DiaSemana["Viernes"] = 702] = "Viernes";
    DiaSemana[DiaSemana["Sabado"] = 703] = "Sabado";
    DiaSemana[DiaSemana["Domingo"] = 704] = "Domingo";
})(DiaSemana || (DiaSemana = {}));
let c = {
    dia: DiaSemana.Domingo
};
console.log(c);
// con los tipos computados  podemos hacer que sea multiplicado
var Permisos;
(function (Permisos) {
    Permisos[Permisos["EscribirMesnajes"] = 1] = "EscribirMesnajes";
    Permisos[Permisos["Reaccionar"] = 2] = "Reaccionar";
    Permisos[Permisos["EnviarEnlaces"] = 4] = "EnviarEnlaces";
})(Permisos || (Permisos = {}));
