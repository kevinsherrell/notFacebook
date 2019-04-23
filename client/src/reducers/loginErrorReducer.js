import { GET_LOGIN_ERRORS } from '../actions/types'

const initialState = {}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_LOGIN_ERRORS:
            return action.payload
        default:
            return state
    }
}