//1 primero requerimos express
const express = require('express')
//2 instanciamos express
const app = express()
//4 declaro un puerto
const port = 8083
// 12 requerimos la conexion a la base de datos
const conectDatabase = require('./server/database/database')
//18 requerimos las rutas para poder usarlas
const movieRoutes = require('./server/routes/routes')

//20 creamos el middleware para que el metodo POST entienda el request del body
app.use(express.json())
//17 creamos el middleware para anteponer el /API
app.use('/api',movieRoutes)

//13 ejecutamos la funcion para conectar la base de datos
conectDatabase()

//5 creo la ruta raiz con un mensaje para verificar la conexion
app.get('/',(req,res)=>{
    res.send("welcome to my API")
})

//3 le digo a mi servidor que escuche a express por medio de u puerto
app.listen(port,()=>{console.log(`Puerto escuchado en la direccion:${port}`)})