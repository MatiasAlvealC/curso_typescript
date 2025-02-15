"use strict";
// interfaces
// hoy en dia las interfaces y los type se parecen mucho
// pero no siempre ha sido asi
function login2() {
    return {
        username: 'admin',
        created_at: new Date(),
        personal: {
            name: "Juan",
            email: "juan@gmail.com"
        },
        logout() {
            console.log("Adios");
        },
        rename(username) {
            console.log("TODO: Rename account");
        }
    };
}
let data = login2();
console.log(data.logout());
