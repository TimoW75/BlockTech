const express = require('express')


 express()
    .use('/static',express.static(‘static’))

    .get('/', (req, res) => { 
        res.send('<h1>Hello World!</h1>')
        res.status(200)
    })

    .get('/profiel', (req, res) => { 
        res.send('<h1>Profiel</h1>')
        res.status(200)
    })

    .get('/library', (req, res) => { 
        res.send('<h1>Library</h1>')
        res.status(200)
    })
    
    .listen(3000)
    

    // function notFound(req, res) {
    //     res.status(404)
    //     }