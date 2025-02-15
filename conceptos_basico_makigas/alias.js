"use strict";
// en typescript es posible darle un alias a los tipos de varibales
// es decir, que a partir de ahora se puede declara una varianñe como numero
let n = 5;
function login(data) {
    data.username = "juan";
    data.password = "juan123";
}
// tipos literales
// hay tipo que solo se pueden declarar como 
let verdadera = true;
const permiso = true;
const hola = "hola";
let l = {
    username: 'admin',
    password: 'admin123',
    op: 'login',
};
