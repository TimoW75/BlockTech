const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

 app()
    .use('/static',express.static('static'))

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

    .get('*', (req, res) => {
        res.send('Not found..')
    })

.listen(PORT)
