const Validator = require('validator')
const isEmpty = require('./is-empty')
module.exports = function validateLoginInput(data){
    let errors = {}


    data.email = !isEmpty(data.email) ? data.email : ''
    data.password = !isEmpty(data.password) ? data.password : ''

    // EMAIL VALIDATION
    if(!Validator.isEmail(data.email)){
        errors.email = 'Invalid email please try again'
    }
    if(Validator.isEmpty(data.email)){
        errors.email = "Email is required"
    }
    // PASSWORD VALIDATION
    if(Validator.isEmpty(data.password)){
        errors.password = "Password is required"
    }
    
    
    console.log(errors)
    return{
        errors, 
        isValid: isEmpty(errors)
    }
}