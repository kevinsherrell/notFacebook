const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
    // body can be either text or an image
    body: {
        type: String,
        required: true
    },
    comments: {
        type: [Schema.Types.ObjectId]
        ref: 'comments',
        default: []
    },
    likes: {
        type: [Schema.Types.ObjectId],
        ref: 'profile',
        default: []
    },
    dislikes: {
        type: [Schema.Types.ObjectId],
        ref: 'profile',
        default: []
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        default: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('posts', PostSchema)