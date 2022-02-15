const express = require('express')

 express()
    // .use('/static',express.static(‘static’))
    .get('/', onhome)
    .get('/profiel', onprofiel)
    .get('/login', onlogin)
    .listen(3000)
    
function onhome(req, res) {
    res.send('<h1>Hello World!</h1>')
}

function onprofiel(req, res) {
    res.send('<h1>Profiel</h1>')
}

function onlogin(req, res) {
    res.send('<h1>Inloggen</h1>')
}