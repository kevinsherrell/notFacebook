const express = require('express')
const profileRouter = express.Router()
const mongoose = require('mongoose')
const passport = require('passport')
const jwt = require('jsonwebtoken')


// MODELS
const Profile = require('../../models/Profile.js')
const User = require('../../models/User.js')
// GET CURRENT PROFILE
profileRouter.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const errors = {}
    console.log(req.user.id)
    Profile.findOne({ user: req.user.id }, (err, profile) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        if (!profile) {
            errors.noprofile = 'There is no profile for this user'
            return res.send(errors)
        }
        return res.status(200).send(profile)
    })
})
// GET ALL NON HIDDEN PROFILES
profileRouter.get('/all', (req, res) => {
    Profile.find((err, profiles) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(profiles)
    })
})

// PUT -- Update profile values
profileRouter.put('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const errors = {}
    console.log(req.user.id)
    Profile.findOneAndUpdate({ user: req.user.id }, req.body, { new: true }, (err, updatedProfile) => {
        if (err) {
            res.status(500)
            return res.send(err)
        }
        return res.status(201).send(updatedProfile)
    })

})


// USER AND PROFILE ARE ATTACHED AND THEREFORE NEED TO BE DELETED AT THE SAME TIME
profileRouter.delete('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        const deletedProfile = await Profile.findOneAndDelete({ user: req.user.id })
        // user delete
        const deleteUser = await User.findOneAndDelete({_id: req.user.id})
        //return res.status and .send
        return res.status(202).send(`User profile has been deleted`)
    }
    catch(err){
        res.status(500)
        return res.send(err)
    }
})


    module.exports = profileRouter