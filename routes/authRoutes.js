const express = require('express')
const mongoose = require('mongoose')
User = require('../models/user')
const authRouter = express.Router()
const jwt = require('jsonwebtoken')

authRouter.post('/signup',(req,res,next)=>{
    User.findOne({userName: req.body.userName.toLowerCase()}, (err, user)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        if (user){
            res.status(400)
            return next(new Error('That username already exists!'))
        }

        const newUser = new User(req.body)
        newUser.save((err,user)=>{
            if(err){
                res.status(500)
                return next(err)
            }
            const token = jwt.sign(user.toObject(), process.env.SECRET)
            return res.status(201).send({user: user.toObject(), token, success: true})
        })
    })
})

authRouter.post('/login',(req,res,next)=>{
    User.findOne({userName: req.body.userName.toLowerCase()},(err,user)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        if(!user || user.password !== req.body.password){
            res.status(403)
            return next(new Error('User name or password incorrect!'))
        }
        const token = jwt.sign(user.toObject(), process.env.SECRET)
        return res.status(200).send({user: user.toObject, tokjen})
    })
})

module.exports = authRouter