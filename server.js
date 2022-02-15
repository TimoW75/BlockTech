const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000


app.use('/static',express.static('static'))
app.set('view engine', 'hbs');
app.set('views', 'view');


app.get('/', (req, res) => { 
    res.send('<h1>Hello World!</h1>')
    res.status(200)
    })

app.get('/profiel', (req, res) => { 
    res.render('profiel.hbs')
    res.status(200)
})

app.get('/library', (req, res) => { 
    res.send('<h1>Library</h1>')
    res.status(200)
})

app.get('*', (req, res) => {
    res.send('Not found..')
})

app.listen(PORT)   
