const mongoose = require('mongoose')
const Schema = mongoose.Schema


const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    birthday: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})


module.exports = mongoose.model('User', userSchema)