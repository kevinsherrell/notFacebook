const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const postsRouter = express.Router()

const Post = require('../../models/Post')
const Profile = require('../../models/Profile')

const validatePostInput = require('../../validation/post')


// get all posts 
postsRouter.get('/', (req,res)=>{
    Post.find()
        .sort({date: -1})
        .then(posts =>res.send(posts))
        .catch(err=>res.status(404).send({noPost: 'no posts found'}))
})
// get one post
postsRouter.get('/:id',  (req,res)=>{
    // Post.findById(req.params.id)
    Post.findById(req.params.id)
    .then(post =>res.send(post))
    .catch(err =>res.status(404).send({noPost: 'Found no post by that Id'}))
})
// POST
postsRouter.post('/', passport.authenticate('jwt', {session: false}), (req,res)=>{
    const {errors, isValid} = validatePostInput(req.body)
    if(!isValid){
        return res.status(400).send(errors)
    }
    const newPost = new Post({
        name: `${req.user.firstName} ${req.user.lastName}`,
        user: req.user.id,
        body: req.body.body
    })

    newPost.save().then(post=>res.send(post))
})


// DELETE
postsRouter.delete('/:id', passport.authenticate('jwt', {session: false}), (req,res)=>{
    Profile.findOne({user: req.user.id})
    .then(profile=>{
        Post.findById(req.params.id)
        .then(post =>{
            if(post.user.toString() !== req.user.id){
                return res.status(401).send({noAuth: 'User is not authorized'})
            }
            post.remove().then(()=>res.send('post succcessfully deleted'))
        })
        .catch(err=>res.status(404).send({notFound: 'post not found'}))
    })
})
module.exports = postsRouter