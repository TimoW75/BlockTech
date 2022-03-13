const mongoose = require('mongoose');


const styleSchema = new mongoose.Schema({ 
    style: String,  
    name: String,
});

const styleModel = mongoose.model('styles', styleSchema)



module.exports = styleModel