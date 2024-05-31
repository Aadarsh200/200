const { modules } = require('modules');
const mongoose = require('mongoose');
const peopleschema =new mongoose.Schema({
name:{
    type: String,
    require:true

},



age:{
type:Number,
require:true
},
work:{
    type:String,
    enum :  ['waiter','manager','owner'],
    require:true
},
mobno:{
type:Number


},
email:{
type:String,
require:true,
unique:true

},
address:{
    type:String
},
salary:{
    type:Number,
    require:true
}


});
const person = mongoose.model('person',peopleschema);
module.exports = person;