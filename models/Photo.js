const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PhotoSchema = new Schema({
    imgUrl: {
        type: String,
        required: true
    },
    caption: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }

})
module.exports = mongoose.model('photos', PhotoSchema)