const mongoose = require('mongoose');
const { Schema } = mongoose;



const userSchema = new Schema({

    name: String,
    password: String



})


const Users = mongoose.model('Users', userSchema)
module.exports = Users;