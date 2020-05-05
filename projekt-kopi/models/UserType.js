const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserTypeSchema = new Schema({
    usertype: String
})

const UserType = mongoose.model('UserType',UserTypeSchema);
module.exports = UserType