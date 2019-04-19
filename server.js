const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const passport = require('passport')

// Validation

// MIDDLEWARE
app.use(express.json())
app.use(morgan('dev'))
// passport
app.use(passport.initialize())
//      passport config
require('./config/passport')(passport)
// CONNECT TO THE DATABASE
mongoose.connect('mongodb://localhost:27017/notFacebook', { useNewUrlParser: true }, () => {
    console.log('[o] Connected to the DB')
})

// ROUTES
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/posts', require('./routes/api/posts'))
app.use('/api/profile', require('./routes/api/profile'))

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
    console.log(err)
    if (err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    return res.send({ errMsg: err.message })
})

// SERVER LISTEN
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`)
})