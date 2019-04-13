const express = require('express')
const postsRouter = express.Router()

// GET
postsRouter.get('/test', (req,res)=>{
    return res.send('posts working')
})
// POST
// PUT
// DELETE

module.exports = postsRouter