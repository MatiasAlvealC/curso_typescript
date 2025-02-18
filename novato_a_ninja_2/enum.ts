// enums
/*
Asi se haria en javaScript
const ERROR_TYPES = {
  NOT_FOUND: 'notFound',
  UNAUTHORIZED: 'unauthorized',
  FORBIDDEN: 'forbidden'
}

function mostrarMensaje (tipoDeError) {
  if (tipoDeError === ERROR_TYPES.NOT_FOUND) {
    console.log('No se encuentra el recurso')
  } else if (tipoDeError === ERROR_TYPES.UNAUTHORIZED) {
    console.log('No tienes permisos para acceder')
  } else if (tipoDeError === ERROR_TYPES.FORBIDDEN) {
    console.log('No tienes permisos para acceder')
  }
}

pero en TypeScript se haria asi:
*/


enum ERROR_TYPES  {
  NOT_FOUND,
  UNAUTHORIZED,
  FORBIDDEN
}

function mostrarMensaje (tipoDeError:ERROR_TYPES) {
  if (tipoDeError === ERROR_TYPES.NOT_FOUND) {
    console.log('No se encuentra el recurso')
  } else if (tipoDeError === ERROR_TYPES.UNAUTHORIZED) {
    console.log('No tienes permisos para acceder')
  } else if (tipoDeError === ERROR_TYPES.FORBIDDEN) {
    console.log('No tienes permisos para acceder')
  }
}


// Aserciones de tipo

// typescriot no sabe que estas recuperando un elemento canvas
const canvas = document.getElementById('canvas') // as HTMLCanvasElement

// esto devolvera:
// null o HTMLelement
// y nosotros necesitamos HTMLCanvasElemente
// para eso se lo señalamos con as
// pero tambien lo podemos hacer asi
if (canvas !== null && canvas instanceof HTMLCanvasElement) {
  const ctx = canvas.getContext('2d')
}

// y esto es inferencia, typescript se da cuenta que dentro del if
// ya solo el canv va a poder ser un HTMLCanvasElement

/*
typeof -> para tipos
instaceof -> para instancias
*/
