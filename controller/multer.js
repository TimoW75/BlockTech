const multer = require('multer')
// set storage
let storage = multer.diskStorage({ // maak een diskstorage aan
    destination: function( req, file, cb){
        cb(null, './static/upload') // zet het pad voor de storage neer
    },
    filename: function(req, file, cb){
        //returns ext of file, jpg, png, jpep. etc.
        let ext = file.originalname.substr(file.originalname.lastIndexOf('.')) // geef de filename mee
        cb(null, file.fieldname + '-'+Date.now()+ext) // filenaam + de data
    }
})
module.exports = store =  multer({storage:storage}) // exporteer de module voor gebruik in andere bestanden