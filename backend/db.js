const mongoose = require('mongoose');

//Connect to database
mongoose.connect(process.env.URI,{ useNewUrlParser:true,useUnifiedTopology:true }).
then(()=> console.log('Connection to the database ...')).
catch ((e)=> console.error('Error occured during connection to database ',e));