import {combineReducers} from 'redux'
import authReducer from './authReducer'
// import errorReducer from './errorReducer'
import createAccountErrorReducer from './createAccountErrorReducer'
import loginErrorReducer from './loginErrorReducer'
import postReducer from './postReducer'
import addPostErrorReducer from './addPostErrorReducer'


export default combineReducers({
    auth: authReducer,
    // errors: errorReducer
    regError: createAccountErrorReducer,
    loginError: loginErrorReducer,
    post: postReducer,
    addPostError: addPostErrorReducer
})