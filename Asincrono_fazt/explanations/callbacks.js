// callbacks
// en node.js se trabajando las cosas de manera asincrona 

function requestandler (req, res) {
  User.findById(req.userId, function(err, user){  // la funcion function() sera la que esperara la respuesta
    if (err) {
      res.send(err);
    } else {
      Tasks.findById(user.taskId, function(err, tasks) {
        if (err) {
          return res.send(err);
        } else {
          tasks.completed = true;
          tasks.save ( function(err) {
            if (err) {
              return res.send(err);
            } else {
              res.send('Task completed');
            }
          })
        }
      })
    }
  }) // esto es un callback a mano, pero como vemos es mucho codiog
  // de hecho esto es conocido como la priamide de la muerte y es dificl de mantener por tener muchas consultas.
  // por esto se crearon las promesas --> promises.js
}