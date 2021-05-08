var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const user = new Schema({
    username:  String, 
    password: mongoose.Mixed,
    email: String
  
  });

module.exports =  mongoose.model('Users',user);