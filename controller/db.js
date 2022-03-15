const mongoose = require('mongoose');

const connectDB = () => {// functie voor connectie met de database
    try{
        mongoose.connect(process.env.CONNECTION_STRING,{
            useNewUrlParser: true,
            useUnifiedTopology:true
        });
        console.log('DB - connected')
    }catch(err){
        console.log('error', err)
        throw err;
    }
}

module.exports = connectDB; // export voor gebruik in server.js

