const express = require('express')
const app = express();
const PORT = process.env.PORT || 3000
const Handlebars = require("handlebars");
const sass = require('node-sass');
const bodyParser = require('body-parser');
const connectDB = require('./controller/db')
const mongo = require('mongodb')
const mongoose = require('mongoose');
const multer = require('multer')
const async = require('hbs/lib/async');
const req = require('express/lib/request');
const { on } = require('nodemon');
const { redirect } = require('express/lib/response');
const store = require('./controller/multer') // multer funcite voor het opslaan van plaatjes
const controller = require('./controller/controller'); // controller bestand
const uploadSchema = require('./controller/schema');
const styleShemaFile = require('./controller/style');
const styleModel = require('./controller/style'); // stylmodel uit style.js

require('dotenv').config()


// model voor het toevoegen van nieuwe stijls
styleModel();
// alle ingevulde modellen voor een nieuwe sijlt
const urban = new styleModel({ style: 'urban' , name: 'Urban Photography'});
const landscape = new styleModel({ style: 'landscape' , name: 'Landscape Photography'});
const portrait = new styleModel({ style: 'portrait' , name: 'Portrait Photography'});
const architecture = new styleModel({ style: 'architecture' , name: 'Architecture Photography'});
const bw = new styleModel({ style: 'bw' , name: 'Black and White'});
const aerial = new styleModel({ style: 'aerial' , name: 'Aerial Photography'});
const pet = new styleModel({ style: 'pet' , name: 'Pet Photography'});
const astro = new styleModel({ style: 'astro' , name: 'Astro Photography'});

/*********************************************/
/*Server Routes*/
/*********************************************/
connectDB(); // connect database

app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use('/static',express.static('static'))
app.set('view engine', 'hbs'); // view engine HBS
app.set('views', 'view');



styleModel.deleteMany({},  ( err ) => {}); //delete al de styles uit de database wanneer de server opnieuw wordt opgestard 



app.get('/',  (req, res) => {
    styleModel.find({}, async (err, styles) => {
        await res.render('profiel.hbs', {
            styleList: styles // data doorgeven. Welke stijlen staan in de database
        })
    })
})

app.get('/style', (req, res) => { 
    res.render('filter.hbs') // render de filter pagina
    res.status(200)
})

app.post('/style', async (req, res) =>{

    let styleCheck = 0; // variable voor het bekijken of er een stijl is aangeklikt

    styleModel.exists({style:'urban'}, async  (err, doc) => { //zoeken voor style urban in de database
        const urbanExist = doc; // variable aanmaken 
        if(urbanExist == null & req.body.urban =='on'){ // als de style nog niet in de database staat en als de checkbox aangeklikt is op submit
            console.log('urban added')
            await urban.save(); // save de urban style naar de database
            styleCheck++;
        }else{
            console.log('urban already in DB or not selected') // console log voor als de stijl al in de database staat of niet aangeklikt was
        }    
    });

    // deze functie herhaal zich nog 7 keer met verschillende variable voor alle verschillende checkboxes

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
        console.log(styleCheck)
        if(styleCheck == 0){
            await res.redirect('/style')
        }else{
            await res.redirect('/') 
            console.log("styles were selected")
        }
    }

})

app.get('/urban', controller.homeUrban) // render de homeUrban functie

app.post('/urban', store.array('imagesUrban', 4), controller.uploadsUrban) //stuur het plaatje naar de database

app.get('/landscape', controller.homeLandscape) // render de homeLandscape funcite

app.post('/landscape', store.array('imagesLandscape', 4), controller.uploadsLandscape) // stuur plaatje naar de database

app.get('/portrait', controller.homePortrait) // render homePortrait functie

app.post('/portrait', store.array('imagesPortrait', 4), controller.uploadsPortrait) // stuur plaatje naar de database

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

app.post('/remove', (req, res) =>{ // knop voor het weghalven van een stijl
    const petBtn = req.body.pet // request de value van de button die is aangeklikt
    const astroBtn = req.body.astro
    const urbanBtn = req.body.urban
    const bwBtn = req.body.bw
    const aerialBtn = req.body.aerial
    const landscapeBtn = req.body.landscape
    const portraitBtn = req.body.portrait
    const architectureBtn = req.body.architecture
    if(petBtn == 'pet'){ // kijken of de petBtn is aangeklikt
        pet.remove({style: 'pet'}) // haal de pet stijl uit de database
    }
    if(astroBtn == 'astro'){ // kijken of de astro button is aangeklikt
        astro.remove({style: 'astro'}) // verwijder astro stijl uit database  
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

app.listen(PORT)  // gebruik deze poort

