const multer = require('multer')


// set storage

let storage = multer.diskStorage({
    destination: function( req, file, cb){
        cb(null, './static/upload')
    },
    filename: function(req, file, cb){
        //returns ext of file, jpg, png, jpep. etc.
        let ext = file.originalname.substr(file.originalname.lastIndexOf('.'))
        cb(null, file.fieldname + '-'+Date.now()+ext)
    }
})

module.exports = store =  multer({storage:storage})