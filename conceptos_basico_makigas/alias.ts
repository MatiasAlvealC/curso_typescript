// en typescript es posible darle un alias a los tipos de varibales

type Numero = number 
// es decir, que a partir de ahora se puede declara una varianñe como numero
let n: Numero = 5

// otro ejemplo es con objetos
type LoginCredentials = {
  username: string,
  password: string,
}

function login(data: LoginCredentials) {
  data.username= "juan"
  data.password= "juan123"
}


// tipos literales
// hay tipo que solo se pueden declarar como 
let verdadera= true

const permiso = true
const hola = "hola"

type LoginOperation = {
  op: 'login',
  username: string,
  password: string,
}

let l: LoginOperation = {
  username: 'admin',
  password: 'admin123',
  op: 'login',
}


