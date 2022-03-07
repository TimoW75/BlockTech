const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const Handlebars = require("handlebars");
const controller = require('./controller/indexcontroller')
const sass = require('node-sass');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
require('dotenv').config()
const url = 'mongodb+srv://TimoW75:$[process.env.DB_PASSWORD]@cluster0.uqhbl.mongodb.net/myFirstDatabase?retryWrites=true';


/*********************************************/
/*Server enzo*/
/*********************************************/
app.use('/static',express.static('static'))
app.set('view engine', 'hbs');
app.set('views', 'view');


app.get('/', (req, res) => { 
    res.render('profiel.hbs', controller.user )
    res.status(200)
    })

app.get('/style', (req, res) => { 
    res.render('filter.hbs')
    res.status(200)
})

app.get('*', (req, res) => {
    res.send('Not found..')
})


app.listen(PORT)  


// MongoClient.connect(url, function(err, client) {
//   assert.equal(null, err);
//   client.close();
// });

/*********************************************/
/*Alle dingen enzo*/
/*********************************************/
