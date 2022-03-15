const UploadModel = require('./schema')
const fs = require('fs')
const async = require('hbs/lib/async')

exports.homePet = async (req, res) =>{ // deze funcite wordt aangeroepen op de app.get('/pet)
    const all_imagesPet = await UploadModelPet.find() // kijk of er images staan in de database
    res.render('../view/pet.hbs', {imgPet: all_imagesPet}) // geef deze images door naar Handlebars
}


exports.uploadsPet = (req, res, next) =>{ // deze functie wordt uitgevoerd op de app.post('/pet') want de functie wordt al geexporteerd.
    const files = req.files; //request de file

    if(!files){ // als er geen files zijn
        const error = new Error('Please select file') 
        error.httpStatusCode = 400
        return next(error)
    }

    // zet  img om naar base64 encoding
    let imgArray = files.map((file) =>{ // loop over elke file
        let img = fs.readFileSync(file.path) // lees het bestand en stuur de content door in de variable img

        return encode_img = img.toString('base64') // encode image naar base64 code
    })

    let result = imgArray.map((src, index) =>{ // loop over de code voor elke file
        //create object to stare data in mongodb collection
        let finalImg= { 
            filename:files[index].originalname, // geef de filename mee
            contenType: files[index].mimetype, // contentype meegeven
            imageBase64:src // base64 code meegeven 
        }

        let newUploadPet = new UploadModelPet(finalImg) // maak een nieuw item aan voor in de database met de variable van de finalimg 
        return newUploadPet // return de variable
            .save() // save naar de database
            .catch(error =>{ // als er een error komt
                if(error){
                    if(error,name === 'MongoError' && error.code === 11000) // bekijk of er een mongoError is, en als de error code 11000 is
                    return Promise.reject({error: `Duplicated img`}) // dan bestaat het plaatje al in de database. Reject de promise
                }
                return Promise.reject({ error: error.message || `Cannot upload`}) // reject the promise en geef een error message
            })

    });
    Promise.all(result)
        .then( msg => {
            res.redirect('/pet') // redirecht naar de pet pagina
        })
        .catch(err =>{
            res.json(err)
        })
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////Bovenstaande functie herhaald zich ook nog 7 keer met verschillende variable///////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



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