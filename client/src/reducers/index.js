import {combineReducers} from 'redux'
import authReducer from './authReducer'
// import errorReducer from './errorReducer'
import createAccountErrorReducer from './createAccountErrorReducer'
import loginErrorReducer from './loginErrorReducer'
import postReducer from './postReducer'
import addPostErrorReducer from './addPostErrorReducer'
import deletePostErrorReducer from './deletePostErrorReducer'
import getPostErrorReducer from './getPostErrorReducer'
import accountCreatedReducer from './accountCreatedReducer'



export default combineReducers({
    auth: authReducer,
    // errors: errorReducer
    regError: createAccountErrorReducer,
    loginError: loginErrorReducer,
    post: postReducer,
    addPostError: addPostErrorReducer,
    getPostError: getPostErrorReducer,
    deletePostError: deletePostErrorReducer,
    accountCreated: accountCreatedReducer
})