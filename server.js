const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT || 7000


app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/notFacebook',{useNewUrlParser: true}, ()=>{
    console.log('connected to database')
})

app.use('/auth', require('./routes/authRoutes.js'))

app.listen(PORT,()=>{
    console.log(`Server Is Listening On Port: ${PORT}`)
})

