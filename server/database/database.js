//6 requerimos mongoose para conectarnos a mongo DB
const mongoose = require('mongoose')
//8 requerimos dotenv
require('dotenv').config()

//7 conectamos mongoose
/* pero primero instalamos dotenv para crear variables de ambiente customisables
de esta forma podremos dejar la llave de conexion a la base de datos fuera del codigo principal */
const conectDatabase = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        //9 mongoose.connect puede ser tratado como una promesa, si todo esta ok inprime por consola:
        .then(()=>console.log('Conectado a la base de datos MONGODB_test'))
        //10 si da algun error podemos manejar el error por terminal
        .catch((error)=>{console.error(error)})
    }
    catch(error){
        console.log('error de conexion')
    }
}
// 11 exportamos conectDatabase
module.exports = conectDatabase