// promises


function requesHandler (req, res) {
  User.findById(req.userId)
  .then(function (user){  // este .then es como un entonces, cuando termine de ejecutar user.findById haz function(user)
    return Tasks.findById(user.taskId)
  })
  .then(function (tasks){
    tasks.completed = true;
    return tasks.save();
  }) 
  .then(function () {
    res.send('Task completed');
  })
  .catch(function (err) {    // usamos catch para atrapar el error 
    res.send(err);
  })
}
// es asi com se manejan las promesas, este codigo hace lo  mismo que callbacks.js, pero en muchas menos lineas
//  ya qeu si se le quiere agregar mas funciones solo se agrega otro .then()
// y solo hay que hacer un catch, que atrapara todos lo errores que se generen

// pero nuevamente hay una forma mas sencilla de hacerlo y es con async- await -> async-awit.js