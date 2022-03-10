const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const Handlebars = require("handlebars");
const sass = require('node-sass');
const bodyParser = require('body-parser')
const connectDB = require('./controller/db')
const mongo = require('mongodb')
const mongoose = require('mongoose');
const async = require('hbs/lib/async');
const styleImport = require('./controller/style');
const req = require('express/lib/request');
const { on } = require('nodemon');
// const users = require('./controller/users')


require('dotenv').config()

/*********************************************/
/*Server enzo*/
/*********************************************/
connectDB();

// app.post('/', async(req, res) =>{
//     const gebruiker = new users(req.body)
//     await gebruiker.save()
// })
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
const astro = new styleModel({ style: 'astro' , name: 'Astro Photography'});
const landscape = new styleModel({ style: 'landscape' , name: 'Landscape Photography'});
const portrait = new styleModel({ style: 'portrait' , name: 'Portrait Photography'});
const architecture = new styleModel({ style: 'architecture' , name: 'Architecture Photography'});
const bw = new styleModel({ style: 'bw' , name: 'Black and White'});
const aerial = new styleModel({ style: 'aerial' , name: 'Aerial Photography'});
const pet = new styleModel({ style: 'pet' , name: 'Pet Photography'});


// styleModel.deleteMany({}, function ( err ) {
//   });


const imgSchema = new mongoose.Schema({ 
    link: String,  
}); 

const imgModel = mongoose.model('images', imgSchema)


app.get('/', (req, res) => {
    styleModel.find({}, function(err, styles) {
        res.render('profiel.hbs', {
            styleList: styles
        })
    })
})


// app.get('/', (req, res) => { 
//     res.render('profiel.hbs',{styleList: styles})
//     res.status(200)
//     console.log(styles)
// })


app.get('/style', (req, res) => {
    imgModel.find({}, function(err, image) {
        res.render('filter.hbs', {
            imgList: image
        })
        // styleModel.deleteMany({}, function ( err ) {
        //   });
    })
})




app.get('/style', (req, res) => { 
    res.render('filter.hbs')
    res.status(200)
})

app.post('/style', async (req, res) =>{
    styleModel.exists({style:'urban'}, await function (err, doc) {
        const urbanExist = doc;
        if(urbanExist == null & req.body.urban =='on'){
            console.log('urban added')
            urban.save();
        }else{
            console.log('urban in DB')
        }    
    });

    styleModel.exists({style:'landscape'}, await function (err, doc) {
        const landscapeExist = doc;
        if(landscapeExist == null & req.body.landscape == 'on'){
            console.log('landscape added')
            landscape.save();
        }else{
            console.log('landscape in DB')
        }    
    });

    styleModel.exists({style:'portrait'}, await function (err, doc) {
        const portraitExist = doc;
        if(portraitExist == null & req.body.portrait == 'on'){
            console.log('portrait added')
            portrait.save();
        }else{
            console.log('portrait in DB')
        }    
    });

    styleModel.exists({style:'architecture'}, await function (err, doc) {
        const architectureExist = doc;
        if(architectureExist == null & req.body.architecture =='on'){
            console.log('architecture added')
            architecture.save();
        }else{
            console.log('architecture in DB')
        }    
    });

    styleModel.exists({style:'astro'}, await function (err, doc) {
        const astroExist = doc;
        if(astroExist == null & req.body.astro =='on'){
            console.log('astro added')
            astro.save();
        }else{
            console.log('astro in DB')
        }    
    });

    styleModel.exists({style:'bw'}, await function (err, doc) {
        const bwExist = doc;
        if(bwExist == null & req.body.bw =='on'){
            console.log('bw added')
            bw.save();
        }else{
            console.log('bw in DB')
        }    
    });

    styleModel.exists({style:'aerial'}, await function (err, doc) {
        const aerialExist = doc;
        if(aerialExist == null & req.body.aerial =='on'){
            console.log('aerial added')
            aerial.save();
        }else{
            console.log('aerial in DB')
        }    
    });

    styleModel.exists({style:'pet'}, await function (err, doc) {
        const petExist = doc;
        if(petExist == null & req.body.pet =='on'){
            console.log('pet added')
            pet.save();
        }else{
            console.log('pet in DB')
        }    
    });
    await res.redirect('/') 

})

// app.post('/land', (req, res) =>{
//     landscape.save();
//     res.redirect('/style')
// })

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

app.get('/bw', (req, res) => { 
    res.render('bw.hbs')
    res.status(200)
})

app.get('/aerial', (req, res) => { 
    res.render('aerial.hbs')
    res.status(200)
})

app.get('/pet', (req, res) => { 
    res.render('pet.hbs')
    res.status(200)
})

app.get('*', (req, res) => {
    res.send('Not found..')
})

app.listen(PORT)  



/*********************************************/
/*Alle dingen enzo*/
/*********************************************/
