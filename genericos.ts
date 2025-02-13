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