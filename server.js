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


const saveStyles = () => {
    urban.save();
    astro.save();
    landscape.save();
    portrait.save();
    architecture.save();
    bw.save();
    aerial.save();
    pet.save();  
}

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
