const mongoose = require('mongoose')

const Schema = mongoose.Scheema
const characterSchema = new Schema({
    email: String,
    password: String
})
module.exports = mongoose.model('user',characterSchema,'Characters')