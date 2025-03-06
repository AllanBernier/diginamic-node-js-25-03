const { default: mongoose } = require("mongoose")
const Mongoose = require("mongoose")

const userShema = new Mongoose.Schema({
  name: String,
  age: Number,
  email: String
})

module.exports = mongoose.model('User', userShema)