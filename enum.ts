// enum
// tipo enumeral

enum DiaSemana {
  Lunes = 401,
  Martes = 501,
  Miercoles,
  Jueves = 701,
  Viernes,
  Sabado,
  Domingo,
}

interface CitaMedica {
  dia: DiaSemana
}

let c: CitaMedica = {
  dia: DiaSemana.Domingo
}


console.log(c)

// con los tipos computados  podemos hacer que sea multiplicado

enum Permisos {
  EscribirMesnajes = 1,
  Reaccionar = EscribirMesnajes *2,
  EnviarEnlaces = Reaccionar *2,
}