// enum
// tipo enumeral

enum DiaSemana {
  Lunes,
  Martes,
  Miercoles,
  Jueves,
  Viernes,
  Sabado,
  Doming,
}

interface CitaMedica {
  dia: DiaSemana
}

let c: CitaMedica = {
  dia: DiaSemana.Doming
}