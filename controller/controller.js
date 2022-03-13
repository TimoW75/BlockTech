const UploadModel = require('./schema')
const fs = require('fs')
const async = require('hbs/lib/async')

exports.homePet = async (req, res) =>{
    const all_imagesPet = await UploadModelPet.find()
    res.render('../view/pet.hbs', {imgPet: all_imagesPet})
}


exports.uploadsPet = (req, res, next) =>{
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

        let newUploadPet = new UploadModelPet(finalImg)
        return newUploadPet
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


//////////////////////////////////////////////////////////////////////////
///AERIAL PAGINA CONTROLLER
//////////////////////////////////////////////////////////////////////////

exports.homeAerial = async (req, res) => {
    const all_imagesAerial = await UploadModelAerial.find()
    res.render('../view/aerial.hbs', {imgAerial: all_imagesAerial})
}

exports.uploadsAerial = (req, res, next) =>{
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

        let newUploadAerial = new UploadModelAerial(finalImg)
        return newUploadAerial
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
            res.redirect('/aerial')
        })
        .catch(err =>{
            res.json(err)
        })
}

//////////////////////////////////////////////////////////////////////////
///ASTRO PAGINA CONTROLLER
//////////////////////////////////////////////////////////////////////////

exports.homeAstro = async (req, res) => {
    const all_imagesAstro = await UploadModelAstro.find()
    res.render('../view/astro.hbs', {imgAstro: all_imagesAstro})
}

exports.uploadsAstro = (req, res, next) => {
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

        let newUploadAstro = new UploadModelAstro(finalImg)
        return newUploadAstro
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
            res.redirect('/astro')     
        })
        .catch(err =>{
            res.json(err)
        })
}

//////////////////////////////////////////////////////////////////////////
///URBAN PAGINA CONTROLLER
//////////////////////////////////////////////////////////////////////////

exports.homeUrban = async (req, res) =>{
    const all_imagesUrban = await UploadModelUrban.find()
    res.render('../view/urban.hbs', {imgUrban: all_imagesUrban})
}


exports.uploadsUrban = (req, res, next) =>{
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

        let newUploadUrban = new UploadModelUrban(finalImg)
        return newUploadUrban
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
            res.redirect('/urban')
        })
        .catch(err =>{
            res.json(err)
        })
}

//////////////////////////////////////////////////////////////////////////
///BW PAGINA CONTROLLER
//////////////////////////////////////////////////////////////////////////

exports.homeBW = async (req, res) =>{
    const all_imagesBW = await UploadModelBW.find()
    res.render('../view/bw.hbs', {imgBW: all_imagesBW})
}


exports.uploadsBW = (req, res, next) =>{
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

        let newUploadBW = new UploadModelBW(finalImg)
        return newUploadBW
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
            res.redirect('/bw')
        })
        .catch(err =>{
            res.json(err)
        })
}


//////////////////////////////////////////////////////////////////////////
///Architecture PAGINA CONTROLLER
//////////////////////////////////////////////////////////////////////////

exports.homeArchitecture = async (req, res) =>{
    const all_imagesArchitecture = await UploadModelArchitecture.find();
    res.render('../view/architecture.hbs', {imgArchitecture: all_imagesArchitecture})
}


exports.uploadsArchitecture = (req, res, next) =>{
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

        let newUploadArchitecture = new UploadModelArchitecture(finalImg)
        return newUploadArchitecture
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
            res.redirect('/architecture')
        })
        .catch(err =>{
            res.json(err)
        })
}

//////////////////////////////////////////////////////////////////////////
///Landscape PAGINA CONTROLLER
//////////////////////////////////////////////////////////////////////////

exports.homeLandscape = async (req, res) =>{
    const all_imagesLandscape = await UploadModelLandscape.find()
    res.render('../view/landscape.hbs', {imgLandscape: all_imagesLandscape})
}


exports.uploadsLandscape = (req, res, next) =>{
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

        let newUploadLandscape= new UploadModelLandscape(finalImg)
        return newUploadLandscape
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
            res.redirect('/landscape')
        })
        .catch(err =>{
            res.json(err)
        })
}

//////////////////////////////////////////////////////////////////////////
///Portrait PAGINA CONTROLLER
//////////////////////////////////////////////////////////////////////////

exports.homePortrait = async (req, res) =>{
    const all_imagesPortrait = await UploadModelPortrait.find()
    res.render('../view/portrait.hbs', {imgPortrait: all_imagesPortrait})
}


exports.uploadsPortrait = (req, res, next) =>{
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

        let newUploadPortrait = new UploadModelPortrait(finalImg)
        return newUploadPortrait
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
            res.redirect('/portrait')
        })
        .catch(err =>{
            res.json(err)
        })
}