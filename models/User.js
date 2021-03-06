const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    birthdate: {
        type: Date,
        required: true

    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    dateUserCreated: {
        type: Date,
        default: Date.now
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        default: ''
    },
    imageUrl: {
        type: String,
        default: 'https://picsum.photos/200/300'
    }
})



module.exports = mongoose.model('users', UserSchema)