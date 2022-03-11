const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const Handlebars = require("handlebars");
const sass = require('node-sass');
const bodyParser = require('body-parser')
const connectDB = require('./controller/db')
const mongo = require('mongodb')
const mongoose = require('mongoose');
const multer = require('multer')
const async = require('hbs/lib/async');
const req = require('express/lib/request');
const { on } = require('nodemon');
const { redirect } = require('express/lib/response');
const store = require('./controller/multer')
const controller = require('./controller/controller')
const imgSchema = require('./controller/schema');
const uploadSchema = require('./controller/schema');

require('dotenv').config()

/*********************************************/
/*Server Routes, Schemas en Models*/
/*********************************************/
connectDB();

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use('/static',express.static('static'))
app.set('view engine', 'hbs');
app.set('views', 'view');


const styleSchema = new mongoose.Schema({ 
    style: String,  
    name: String,
});


const styleModel = mongoose.model('styles', styleSchema)


const urban = new styleModel({ style: 'urban' , name: 'Urban Photography'});
const landscape = new styleModel({ style: 'landscape' , name: 'Landscape Photography'});
const portrait = new styleModel({ style: 'portrait' , name: 'Portrait Photography'});
const architecture = new styleModel({ style: 'architecture' , name: 'Architecture Photography'});
const bw = new styleModel({ style: 'bw' , name: 'Black and White'});
const aerial = new styleModel({ style: 'aerial' , name: 'Aerial Photography'});
const pet = new styleModel({ style: 'pet' , name: 'Pet Photography'});
const astro = new styleModel({ style: 'astro' , name: 'Astro Photography'});


styleModel.deleteMany({},  ( err ) => {});







app.get('/',  (req, res) => {
    styleModel.find({}, async (err, styles) => {
        await res.render('profiel.hbs', {
            styleList: styles
        })
    })
})

app.get('/style', (req, res) => { 
    res.render('filter.hbs')
    res.status(200)
})

app.post('/style', async (req, res) =>{

    styleModel.exists({style:'urban'}, async  (err, doc) => { //zoeken voor style urban in de database
        const urbanExist = doc; // variable aanmaken 
        if(urbanExist == null & req.body.urban =='on'){ // als de style nog niet in de database staat en als de checkbox aangeklikt is op submit
            console.log('urban added')
            urban.save(); // save de urban style naar de database
        }else{
            console.log('urban already in DB or not selected')
        }    
    });

    styleModel.exists({style:'landscape'}, async  (err, doc) => {
        const landscapeExist = doc;
        if(landscapeExist == null & req.body.landscape == 'on'){
            console.log('landscape added')
            landscape.save();
        }else{
            console.log('landscape already in DB or not selected')
        }    
    });

    styleModel.exists({style:'portrait'}, async  (err, doc) => {
        const portraitExist = doc;
        if(portraitExist == null & req.body.portrait == 'on'){
            console.log('portrait added')
            await portrait.save();
        }else{
            console.log('portrait already in DB or not selected')
        }    
    });

    styleModel.exists({style:'architecture'}, async  (err, doc) => {
        const architectureExist = doc;
        if(architectureExist == null & req.body.architecture =='on'){
            console.log('architecture added')
            await architecture.save();
        }else{
            console.log('architecture already in DB or not selected')
        }    
    });

    styleModel.exists({style:'astro'}, async  (err, doc) => {
        const astroExist = doc;
        if(astroExist == null & req.body.astro =='on'){
            console.log('astro added')
            astro.save ();
        }else{
            console.log('astro already in DB or not selected')
        }    
    });

    styleModel.exists({style:'bw'}, async  (err, doc) => {
        const bwExist = doc;
        if(bwExist == null & req.body.bw =='on'){
            console.log('bw added')
            await bw.save();
        }else{
            console.log('bw already in DB or not selected')
        }    
    });

    styleModel.exists({style:'aerial'}, async  (err, doc) => {
        const aerialExist = doc;
        if(aerialExist == null & req.body.aerial =='on'){
            console.log('aerial added')
            await aerial.save()
        }else{
            console.log('aerial already in DB or not selected')
        }    
    });

    styleModel.exists({style:'pet'}, async (err, doc) => {
        const petExist = doc;
        if(petExist == null & req.body.pet =='on'){
            console.log('pet added')
            await pet.save();
        }else{
            console.log('pet already in DB or not selected')
        }    
    });
    await new Promise(resolve => setTimeout(resolve, 550));
    await res.redirect('/') 

})

app.get('/urban', (req, res) => { 
    res.render('urban.hbs')
    res.status(200)
})

app.get('/landscape', (req, res) => { 
    res.render('landscape.hbs')
    res.status(200)
})

app.get('/portrait', (req, res) => { 
    res.render('portrait.hbs')
    res.status(200)
})

app.get('/architecture', (req, res) => { 
    res.render('architecture.hbs')
    res.status(200)
})

app.get('/astro', (req, res) => { 
    res.render('astro.hbs')
    res.status(200)
})

app.post('/astro', (req, res) => { 
    const removeAstro = req.body.remove
    if(removeAstro == 'remove'){
        astro.remove({style: 'astro'})
        console.log("removed")
        res.redirect('/');
    }
    const addPhoto = req.body.addPhoto
    if(addPhoto == 'submit'){
        console.log('addphoto')
    }
})

app.get('/bw', (req, res) => { 
    res.render('bw.hbs')
    res.status(200)
})

app.get('/aerial', (req, res) => { 
    res.render('aerial.hbs')
    res.status(200)
})

app.post('/aerial', store.array('images', 4), (req, res) => { 
    const removeAerial = req.body.remove
    if(removeAerial == 'remove'){
        aerial.remove({style: 'aerial'}) 
        console.log("removed")
        res.redirect('/');
    }
    const addPhoto = req.body.addPhoto
    if(addPhoto == 'submit'){
        const files = req.files;
        if(!files){
            const error = new Error('Please choose files')
        }
        res.json(files)

        // res.redirect('/aerial')

        // console.log('addphoto')
    }
})

app.get('/pet',  controller.home)

app.post('/pet', store.array('images', 4), controller.uploads);




app.get('*', (req, res) => {
    res.send('Not found..')
})

app.listen(PORT)  

