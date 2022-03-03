const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const Handlebars = require("handlebars");
const controller = require('./controller/indexcontroller')




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


/*********************************************/
/*Alle dingen enzo*/
/*********************************************/
