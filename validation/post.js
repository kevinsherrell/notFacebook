const Validator = require('validator')
const isEmpty = require('./is-empty')
module.exports = function validatePostInput(data){
    let errors = {}


    data.body = !isEmpty(data.body) ? data.body : ''


  
    
    if(Validator.isEmpty(data.body)){
        errors.body = "Body cannot be empty"
    }
    
    
    console.log(errors)
    return{
        errors, 
        isValid: isEmpty(errors)
    }
}