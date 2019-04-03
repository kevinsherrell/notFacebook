const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT || 7000



app.listen(PORT,()=>{
    console.log(`Server Is Listening On Port: ${PORT}`)
})
console.log(PORT)