//  async - await

// debemos agregar una palabra clave a la funcion,
// la palabra async, ya que await solo funciona en funciones async
async function requestHandler(req, res) {
  // con la palabra await le decimos la codigo que la funcion va tomar tiempo
  // de ejecutarse, es decir, que es un metodo asincrono
  // y lo podemos guardar como constante
  
  // se usará try y catch para manejar los errores
  try {
    // se ejecutara una funcion y luego la otra
    const user = await User.findById(req.userId) 
    const tasks= await Tasks.findById(user.taskId)

    tasks.completed = true;
    await task.save(); // esta consulta no retorna nada entonces asi esta bien
    res.send('Task completed');
  } catch (e) {
    res.send(e);
  }
}
// de esta forma este es el mismo codigo que callback y promises
// de una forma mucho mas corta y menos verboso