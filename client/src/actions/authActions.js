import axios from 'axios'
import thunk from 'redux-thunk'
import setAuthToken from '../utils/setAuthToken'
import jwtDecode from 'jwt-decode'
// import { GET_ERRORS, SET_CURRENT_USER } from './types'
import {GET_LOGIN_ERRORS, GET_REGISTER_ERRORS, SET_CURRENT_USER} from './types'
// USER REGISTRATION
export const registerUser = (userData, history) => dispatch => {
    axios.post('/api/auth/register', userData)
        .then(res => history.push('/profile'))
        .catch(err =>
            dispatch({
                type: GET_REGISTER_ERRORS,
                payload: err.response.data
            })
        )

}
// LOGIN
export const userLogin = userData => dispatch => {
    axios.post('/api/auth/login', userData)
        .then(res => {
            const { token } = res.data
            localStorage.setItem('jwtToken, token')
            setAuthToken(token)
            const decoded = jwtDecode(token)
            dispatch(setCurrentUser(decoded))
        })
        .catch(err => {
            dispatch({
                type: GET_LOGIN_ERRORS,
                payload: err.response.data
            })
        })
}
// SET USER
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}