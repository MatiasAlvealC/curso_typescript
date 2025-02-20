// narrowing

function mostrarLongitud(objeto: number | string) {
  if (typeof objeto === 'string') {
    return objeto.length
  }
  return objeto.toString().length
}

interface Mario {
  company: 'Nintendo',
  nombre: string,
  saltar: () => void
}

interface Sonic {
  company: 'sega'
  nombre: 'strinig',
  correr: () => void
}

type Personaje = Mario | Sonic


function jugar(personaje: Personaje) {
  console.log(personaje.nombre)
  if (personaje.company === 'Nintendo') {
    personaje.saltar() // podemos usar saltar ya que TS infiere que es de la interface Mario
  }
}

// type guard
// con esto se comprobara si el personaje es sonic

// pero esto hay que evitarlo, dado que es muy verboso.
function checkIsSonic (personaje: Personaje): personaje is Sonic {
  return (personaje as Sonic).correr !== undefined
}

function jugar2(personaje: Personaje) {
  if (checkIsSonic(personaje)) {
    personaje.correr();
    return
  } else if (!checkIsSonic(personaje)){
    personaje.saltar()
    return
  } else {
    personaje  // never 
  }
}





