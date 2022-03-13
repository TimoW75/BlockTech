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
let styleCheck = 0;
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
            await urban.save(); // save de urban style naar de database
            styleCheck++;
        }else{
            console.log('urban already in DB or not selected')
        }    
    });

    styleModel.exists({style:'landscape'}, async  (err, doc) => {
        const landscapeExist = doc;
        if(landscapeExist == null & req.body.landscape == 'on'){
            console.log('landscape added')
            await landscape.save();
            styleCheck++;

        }else{
            console.log('landscape already in DB or not selected')
        }    
    });

    styleModel.exists({style:'portrait'}, async  (err, doc) => {
        const portraitExist = doc;
        if(portraitExist == null & req.body.portrait == 'on'){
            console.log('portrait added')
            await portrait.save();
            styleCheck++;

        }else{
            console.log('portrait already in DB or not selected')
        }    
    });

    styleModel.exists({style:'architecture'}, async  (err, doc) => {
        const architectureExist = doc;
        if(architectureExist == null & req.body.architecture =='on'){
            console.log('architecture added')
            await architecture.save();
            styleCheck++;

        }else{
            console.log('architecture already in DB or not selected')
        }    
    });

    styleModel.exists({style:'astro'}, async  (err, doc) => {
        const astroExist = doc;
        if(astroExist == null & req.body.astro =='on'){
            console.log('astro added')
            await astro.save ();
            styleCheck++;

        }else{
            console.log('astro already in DB or not selected')
        }    
    });

    styleModel.exists({style:'bw'}, async  (err, doc) => {
        const bwExist = doc;
        if(bwExist == null & req.body.bw =='on'){
            console.log('bw added')
            await bw.save();
            styleCheck++;

        }else{
            console.log('bw already in DB or not selected')
        }    
    });

    styleModel.exists({style:'aerial'}, async  (err, doc) => {
        const aerialExist = doc;
        if(aerialExist == null & req.body.aerial =='on'){
            console.log('aerial added')
            await aerial.save()
            styleCheck++;

        }else{
            console.log('aerial already in DB or not selected')
        }    
    });

    styleModel.exists({style:'pet'}, async (err, doc) => {
        const petExist = doc;
        if(petExist == null & req.body.pet =='on'){
            console.log('pet added')
            await pet.save();
            styleCheck++;
        }else{
            console.log('pet already in DB or not selected')
        }    
    });
    await new Promise(resolve => setTimeout(resolve, 550));
    text();

    async function text (){
        if(styleCheck == 0){
            await res.redirect('/style')
        }else{
            await res.redirect('/') 
        }
    }


    
   




})

app.get('/urban', controller.homeUrban)

app.post('/urban', store.array('imagesUrban', 4), controller.uploadsUrban)

app.get('/landscape', controller.homeLandscape)

app.post('/landscape', store.array('imagesLandscape', 4), controller.uploadsLandscape)

app.get('/portrait', controller.homePortrait)

app.post('/portrait', store.array('imagesPortrait', 4), controller.uploadsPortrait) 

app.get('/architecture', controller.homeArchitecture)

app.post('/architecture', store.array('imagesArchitecture', 4), controller.uploadsArchitecture)

app.get('/astro',  controller.homeAstro)

app.post('/astro', store.array('imagesAstro', 4), controller.uploadsAstro)

app.get('/bw', controller.homeBW)

app.post('/bw', store.array('imagesBW', 4), controller.uploadsBW)

app.get('/aerial', controller.homeAerial)

app.post('/aerial', store.array('imagesAerial', 4), controller.uploadsAerial)

app.get('/pet', controller.homePet)

app.post('/pet', store.array('imagesPet', 4), controller.uploadsPet);


app.get('*', (req, res) => {
    res.send('Not found..')
})

app.post('/remove', (req, res) =>{
    const petBtn = req.body.pet
    const astroBtn = req.body.astro
    const urbanBtn = req.body.urban
    const bwBtn = req.body.bw
    const aerialBtn = req.body.aerial
    const landscapeBtn = req.body.landscape
    const portraitBtn = req.body.portrait
    const architectureBtn = req.body.architecture
    if(petBtn == 'pet'){
        pet.remove({style: 'pet'})
    }
    if(astroBtn == 'astro'){
        astro.remove({style: 'astro'})      
    }
    if(urbanBtn == 'urban'){
        urban.remove({style: 'urban'})       
    }
    if(bwBtn == 'bw'){
        bw.remove({style: 'bw'})
    }
    if(architectureBtn == 'architecture'){
        architecture.remove({style: 'architecture'})
    }
    if(portraitBtn == 'portrait'){
        portrait.remove({style: 'portrait'})
    }
    if(landscapeBtn == 'landscape'){
        landscape.remove({style: 'landscape'})    
    }
    if(aerialBtn == 'aerial'){
        aerial.remove({style: 'aerial'})        
    }
    res.redirect('/')
})

app.listen(PORT)  

