import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'
import jwt_decode from 'jwt-decode'
// import { GET_ERRORS, SET_CURRENT_USER } from './types'
import { GET_LOGIN_ERRORS, GET_REGISTER_ERRORS, SET_CURRENT_USER, ACCOUNT_CREATED,LOGGED_IN  } from './types'
// USER REGISTRATION
export const registerUser = (userData, history) => dispatch => {
    axios.post('/api/auth/register', userData)
        .then(res => dispatch({
            type: ACCOUNT_CREATED,
            payload: {
                id: res.data._id,
                firstName: res.data.firstName,
                lastName: res.data.lastName,
                email: res.data.email,
                gender: res.data.gender
            }
        }))
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
            localStorage.setItem('jwtToken', token)
            setAuthToken(token)
            const decoded = jwt_decode(token)
            dispatch(setCurrentUser(decoded))
            dispatch({
                type: LOGGED_IN
            })
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
// LOGOUT
export const userLogout = () => dispatch => {
    localStorage.removeItem('jwtToken')

    setAuthToken(false)

    dispatch(setCurrentUser({}))
}