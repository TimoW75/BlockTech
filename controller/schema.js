const mongoose = require('mongoose')
const mongo = require('mongodb')
const connectDB = require('./db')


const uploadSchema = new mongoose.Schema({
    filename:{
        type: String,
        unique: true,
        required:true
    },
    contenType:{
        type: String,
        required:true
    },
    imageBase64:{
        type: String,
        required: true
    }
})

// const imgastro = mongoose.model('imgAstro', uploadSchema)

module.exports = UploadModelPet = mongoose.model('imgPet', uploadSchema)
