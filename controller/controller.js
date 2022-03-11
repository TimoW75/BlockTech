const UploadModelPetPet = require('./schema')
const fs = require('fs')
const async = require('hbs/lib/async')

exports.home = async (req, res) =>{
    const all_images = await UploadModelPetPet.find()
    res.render('../view/pet.hbs', {imgPet: all_images})
}

exports.uploads = (req, res, next) =>{
    const files = req.files;

    if(!files){
        const error = new Error('Please select file')
        error.httpStatusCode = 400
        return next(error)
    }

    // convert imgs to base64 encoding
    let imgArray = files.map((file) =>{
        let img = fs.readFileSync(file.path)

        return encode_img = img.toString('base64')
    })

    let result = imgArray.map((src, index) =>{
        //create object to stare data in mongodb collection
        let finalImg= {
            filename:files[index].originalname,
            contenType: files[index].mimetype,
            imageBase64:src
        }

        let newUpload = new UploadModelPetPet(finalImg)
        return newUpload
            .save()
            .catch(error =>{
                if(error){
                    if(error,name === 'MongoError' && error.code === 11000)
                    return Promise.reject({error: `Duplicated img`})
                }
                return Promise.reject({ error: error.message || `Cannot upload`})
            })

    });
    Promise.all(result)
        .then( msg => {
            res.redirect('/pet')
        })
        .catch(err =>{
            res.json(err)
        })
}


