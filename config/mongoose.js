const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codeial_development');
const db = mongoose.connection; 


db.on('error',console.error.bind(console , "Errror In db"));

db.once('open',function(){
    console.log('Connect to database'); 
});

module.exports = db;

