const Validator = require('validator')
const isEmpty = require('./is-empty')
module.exports = function validateRegisterInput(data) {
    let errors = {}

    data.firstName = !isEmpty(data.firstName) ? data.firstName : ''
    data.lastName = !isEmpty(data.lastName) ? data.lastName : ''
    data.email = !isEmpty(data.email) ? data.email : ''
    data.password = !isEmpty(data.password) ? data.password : ''
    data.passwor2 = !isEmpty(data.password2) ? data.password2 : ''
    data.birhdate = !isEmpty(data.birthdate) ? data.birthdate : ''

    // FIRSTNAME VALIDATION
    if (!Validator.isLength(data.firstName, { min: 2, max: 30 })) {
        errors.firstName = 'First name must be between 2 and 25 characters'
    }
    if (Validator.isEmpty(data.firstName)) {
        errors.firstName = "First name is required"
    }
    // LASTNAME VALIDATION
    if (!Validator.isLength(data.lastName, { min: 2, max: 30 })) {
        errors.lastName = 'Last name must be between 2 and 25 characters'
    }
    if (Validator.isEmpty(data.lastName)) {
        errors.lastName = "Last name is required"
    }
    // EMAIL VALIDATION
    if (!Validator.isEmail(data.email)) {
        errors.email = 'Invalid email please try again'
    }
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email is required"
    }
    // PASSWORD VALIDATION
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password is required"
    } else if (!Validator.isLength(data.password, { min: 8 })) {
        errors.password = 'Password must have a minimum of 8 characters'
    }

    if (Validator.isEmpty(data.password2)) {
        errors.password2 = "Please confirm your password"
    } else if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = 'Password must match'
    }
    // GENDER VALIDATION
    if(Validator.isEmpty(data.gender)){
        errors.gender = 'Gender is required'
    }
    console.log(errors)
    return {
        errors,
        isValid: isEmpty(errors)
    }
}