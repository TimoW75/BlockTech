const express = require('express')

 express()
    // .use('/static',express.static(‘static’))

    .get('/', (req, res) => { res.send('<h1>Hello World!</h1>')})

    .get('/profiel', (req, res) => { res.send('<h1>Profiel</h1>')})

    .get('/library', (req, res) => { res.send('<h1>Library</h1>')})
    
    .listen(3000)
    