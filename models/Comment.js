const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
    body: {
        type: String,
        required: true
    },
    response: {
        type: [Schema.Types.ObjectId],
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
        ref: 'profiles',
        default: []
    },
    user: {
        type: Schema.Types: ObjectId,
        ref: 'users',
        required: true
    }
    dateCreated: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('comments', CommentSchema)