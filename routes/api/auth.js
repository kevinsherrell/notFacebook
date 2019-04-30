const express = require('express')
const authRouter = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const keys = require('../../config/keys')
const passport = require('passport')

// VALIDATION 
const validateRegisterInput = require('../../validation/register')
const validateLoginInput = require('../../validation/login')
// USER MODEL
const User = require('../../models/User.js')

// import profile model 
const Profile = require('../../models/Profile.js')


// POST
//      REGISTRATION SIMULTANEOUSLY CREATES AN EMPTY USER PROFILE
authRouter.post('/register', (req, res, next) => {
    const { errors, isValid } = validateRegisterInput(req.body)

    if (!isValid) {
        return res.status(400).send(errors)
    }

    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) {
            res.status(500)
            return next(err)
        }

        if (user) {
            res.status(400)
            errors.email = 'Email already exists'
            return res.send(errors)
        }

        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            birthdate: req.body.birthdate,
            password: req.body.password,
            gender: req.body.gender
        })

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) {
                    res.status(500)
                    //    next(err)
                }
                newUser.password = hash
                newUser.save()
                    .then(user => {
                        const newProfile = new Profile({
                            user: user._id
                        })
                        newProfile.save((err, profile) => {
                            if (err) {
                                res.status(500)
                                return next(err)
                            }
                            return res.status(201).send(user)
                        })
                        // res.send(user)
                    })
                    .catch(err => console.log(err))
            })
        })

    })

})
//      LOGIN
authRouter.post('/login', (req, res, next) => {
    const { errors, isValid } = validateLoginInput(req.body)

    if (!isValid) {
        return res.status(400).send(errors)
    }
    const email = req.body.email
    const password = req.body.password
    User.findOne({ email }, (err, user) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        // check for user
        if (!user) {
            res.status(404)
            errors.email = 'user not found'
            return res.send(errors)
        }
        // check for password
        bcrypt.compare(password, user.password)
            .then(isMatch => {
                if (isMatch) {

                    // JWT PAYLOAD
                    const payload = {
                        id: user.id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        dateCreated: user.dateCreated,
                        birthDate: user.birthDate,
                        gender: user.gender
                    }
                    jwt.sign(
                        payload,
                        keys.secretOrKey,
                        { expiresIn: 3600 },
                        (err, token) => {
                            res.send({
                                success: true,
                                token: `Bearer ${token}`
                            })
                        })
                } else {
                    errors.password = 'Username or password incorrect'
                    return res.status(400).send(errors)
                }
            })
    })
})
// GET
// GET current logged in user
authRouter.get('/current', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.send({
        id: req.user.id,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        email: req.user.email
    })
})

// DELETE USER BY ID
authRouter.delete('/:id', passport.authenticate('jwt', {session: false}), (req,res)=>{
    User.findOneAndRemove({_id: req.params.id}, (err, user)=>{
        if(err){
            res.status(500)
            return res.send(err)
        }
        return res.status(200).send(user)
    })
})




module.exports = authRouter