
const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
    id: {
        type: Number,
    },
    adult: {
        type: Boolean,
    }, 
    original_language: {
        type: String
    },
    original_title:{
        type: String
    }, 
    overview: {
        type: String
    }, 
    poster_path: {
        type: String
    }, 
    release_date: {
        type: Date
    }
})

module.exports = mongoose.model('movies',movieSchema)