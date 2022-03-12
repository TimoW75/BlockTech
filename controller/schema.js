const mongoose = require('mongoose')
const mongo = require('mongodb')
const connectDB = require('./db')


const uploadSchema = new mongoose.Schema({
    filename:{
        type: String,
        unique: true,
    },
    contenType:{
        type: String,
    },
    imageBase64:{
        type: String,
    }
})



module.exports = UploadModelUrban = mongoose.model('imgUrban', uploadSchema)
module.exports = UploadModelAerial = mongoose.model('imgAerial', uploadSchema)
module.exports = UploadModelAstro = mongoose.model('imgAstro', uploadSchema)
module.exports = UploadModelPet = mongoose.model('imgPet', uploadSchema)
module.exports = UploadModelBW = mongoose.model('imgBW', uploadSchema)
module.exports = UploadModelArchitecture = mongoose.model('imgArchitecture', uploadSchema)
module.exports = UploadModelLandscape = mongoose.model('imgLandscape', uploadSchema)
module.exports = UploadModelPortrait = mongoose.model('imgPortrait', uploadSchema)
