const mongoose = require('mongoose');

const styleSchema = new mongoose.Schema({  // nieuw model voor alle stijlen
    style: String,  
    name: String,
});

const styleModel = mongoose.model('styles', styleSchema) // maak een model aan voor de stijlen



module.exports = styleModel // export de module voor het gebruik in de server.js