// Genericos

interface Respuesta <Mensaje,Extra>{
  type: string,
  success: boolean,
  message: Mensaje,
  whatever?: Extra,
}

let payload: Respuesta<string, number> = {
  type: 'post',
  success: true,
  message:'asdfghhj'
}

let payload2: Respuesta<boolean,object> = {
  type:'error',
  success: false,
  message: true,
}


// genericos en funciones

type Nota = { mensaje: string }
type NotaColorida = Nota & { color: string }
type Foto = { url: string }
type Video = Foto &{ duracion: number }

type Publicacion =  Nota | NotaColorida | Foto | Video

function subir<Publicacion> (p: Publicacion): Publicacion {
  return p
}

let x = subir<Nota>( {mensaje: ' hola mundo'})
let post: Nota = {mensaje: 'hola mundo'}