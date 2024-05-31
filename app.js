const express = require('express');
const app = express();
const db = require('./db')
const body_parser = require('body-parser');
app.use(body_parser.json());
const connect = require('./db')

const people = require('./models/people');
const menuitem = require('./models/menu');
app.get('/', function(req,res) {
    res.send("welcome to jahan ")
    
})
app.use(express.json());




const personroutes = require('./router/personroutes');
const menui = require('./router/menui');
app.use('/menu',menui);
app.use('/people', personroutes);


app.listen('3000' , () => {
console.log("porting on 3000")

})
