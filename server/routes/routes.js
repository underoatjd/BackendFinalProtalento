//14 empezamos a crear las rutas
const express = require('express')
//19 requerimos el modelo de los datos
const movieSchema = require('../models/model')
//15 creamos el constructor llamado router
const router = express.Router()



//17 ruta para  crear pelicula
router.post("/movie",(req,res)=>{
    const postMovie = movieSchema(req.body)
    postMovie.save()
    .then((data)=>{res.json(data)})
    .catch((error)=>res.json({mensaje : error}))
})

//21 ruta para obtener todas las peliculas
router.get("/movie",(req,res)=>{
    const getAllMovies = movieSchema
    getAllMovies.find()
    .then((data)=>{res.json(data)})
    .catch((error)=>res.json({mensaje : error}))
})

//22 ruta para obtener una pelicula especifica por ID
router.get("/movie/:id",(req,res)=>{
    const { id } = req.params
    const getOneMovie = movieSchema
    getOneMovie
    .findById(id)
    .then((data)=>{res.json(data)})
    .catch((error)=>res.json({mensaje : error}))
})

//23 ruta para obtener una pelicula especifica por ID y actualizarla o modificarla
router.put("/movie/:id",(req,res)=>{
    const { id } = req.params
    const { adult, original_language, original_title, overview, poster_path, release_date } = req.body
    movieSchema
    .updateOne({_id : id}, {$set:{ adult, original_language, original_title, overview, poster_path, release_date }})
    .then((data)=>{res.json(data)})
    .catch((error)=>res.json({mensaje : error}))
})

//24 ruta para obtener una pelicula especifica por ID y eliminarla
router.delete("/movie/:id",(req,res)=>{
    const { id } = req.params
    const deleteMovie = movieSchema
    deleteMovie
    .findByIdAndRemove({_id : id})
    .then((data)=>{res.json(data)})
    .catch((error)=>res.json({mensaje : error}))
})


 
//16 exportamos el router
module.exports = router
