const express = require('express') //utilizando Express para crear un servidor web 
const app = express()
const port = 3000

app.use(express.json())
app.post('/', (req, res) => { //configurando una ruta para manejar peticiones POST en la raíz del servidor
  let data = req.body.inputs
  let nombre = data.nombre
  let envio = data.envio
  let ciudad = data.ciudad
  let valor = data.valor

  //extrayendo datos del cuerpo de la solicitud y enviando una respuesta en formato JSON con algunos datos y acciones.

  console.log("Los datos son: ", data)


  // Ejemplo de condicional
  if (envio === '12345') {
    // Realizar alguna acción si el nombre es "Luzia"
    console.log("Hola Cristian");
  } else {
    // Realizar otra acción si el nombre no es "Luzia"
    console.log("Hola " + nombre);
  }

  
  res.json({
    "status": 1,
    "status_message": "Ok",
    "data": {
      "actions": [
        {
          "type": "sendText",
          "text": "Hola esto es una prueba"
        },
        //se pueden agregar más actions desde aqui!!
      ]
    }
  })
})

console.log("fin");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})