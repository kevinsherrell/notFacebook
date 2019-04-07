const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postsSchema = Schema({
    content: {
    type: String,
    ref: "Posts"
    },
    user: {
    type:Schema.Types.ObjectId
    }
})