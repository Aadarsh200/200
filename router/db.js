const mongoose = require('mongoose')
const mongourl = "mongodb://127.0.0.1:27017/hotels"
mongoose.connect(mongourl, {
useNewUrlParser:true,
useUnifiedTopology:true

})

const db = mongoose.connection;

db.on("connected", () => {
console.log("u are connected for real")

})
db.on("error", (err) => {

    console.error("erroe occured",err)
})

db.on("disconnected", () => {
    console.log("u are disconnected for real")

})
module.exports = db;