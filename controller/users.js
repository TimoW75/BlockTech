
const  db  = require('mongodb');
const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({ 
  username: 'string',  
});

const User = mongoose.model('Users', userSchema);

const Nico = new User({ username: 'Nico di Angelo' });
const Bianca = new User({ username: 'Bianca di Angelo' });


User.deleteMany({}, function ( err ) {
  
});


Nico.save();
Bianca.save();

// Bianca.save(function (err) {
//     if (err) return handleError(err);
//   });

// User.deleteOne({ username: 'Nico di Angelo' }, function (err) {
//     if (err) return handleError(err);
//   });



  
module.exports = userSchema;