const mongoose = require('mongoose')
const mongo = require('mongodb')
const connectDB = require('./db')


const uploadSchema = new mongoose.Schema({ // nieuw schema voor het uploaden van plaatjes
    filename:{
        type: String, // naam van de image
        unique: true,
    },
    contenType:{
        type: String, // contentype: jpg, png, jpeg enz..
    },
    imageBase64:{
        type: String, // hier komt de base64 code
    }
})

// 8 modules voor de verschillende plaatjes zodat de plaatjes niet gemixt worden in de database
module.exports = UploadModelUrban = mongoose.model('imgUrban', uploadSchema)
module.exports = UploadModelAerial = mongoose.model('imgAerial', uploadSchema)
module.exports = UploadModelAstro = mongoose.model('imgAstro', uploadSchema)
module.exports = UploadModelPet = mongoose.model('imgPet', uploadSchema)
module.exports = UploadModelBW = mongoose.model('imgBW', uploadSchema)
module.exports = UploadModelArchitecture = mongoose.model('imgArchitecture', uploadSchema)
module.exports = UploadModelLandscape = mongoose.model('imgLandscape', uploadSchema)
module.exports = UploadModelPortrait = mongoose.model('imgPortrait', uploadSchema)
