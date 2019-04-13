const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    handle: {
        type: String,
        max: 40,
    },
    profilePic: {
        type: Schema.Types.ObjectId,
        ref: 'photos'
    },
    coverPhoto: {
        type: Schema.Types.ObjectId,
        ref: 'photos'
    },
    intro: {
        type: String
    },
    photos: {
        type: Array,
        ref: 'photos'
    },
    friends: {
        type: [Schema.Types.ObjectId],
        ref: 'users',
        default: []
    },
    likedPosts: {
        type: [Schema.Types.ObjectId],
        ref: 'posts',
        default: []
    },
    dislikedPosts: {
        type: [Schema.Types.ObjectId],
        ref: 'posts',
        default: []
    },
    location: {
        type: String
    },
    workPlace: {
        type: Array
    },
    professionalSkills: {
        type: Array
    },
    colleges: {
        type: Array
    },
    highSchool: {
        type: String
    },
    currentCity: {
        type: String
    },
    hometown: {
        type: String
    },
    otherPlacesLived: {
        type: Array
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    websitesAndSocialLinks: {
        type: Array,
        default: []
    },
    relationshipStatus: {
        type: String
    },
    familyMembers: {
        type: [Schema.Types.ObjectId],
        ref: 'users',
        default: []
    },
    about: {
        type: String
    },
    namePronunciation: {
        type: String
    },
    otherNames: {
        type: String
    },
    favoriteQuotes: {
        type: Array,
        default: []
    },
    lifeEvents: {
        type: Array,
        default: []
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }


})

module.exports = mongoose.model('profiles', ProfileSchema)