const mongoose = require('mongoose');
const mysql = require('mysql');
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb+srv://Anchumol:anchu123@cluster0.fb3fw.mongodb.net/payroll?retryWrites=true&w=majority');  //connect db
const db = mongoose.connection;  //acquire the connection



db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Success db');
});





