
import isEmpty from '../validation/isEmpty'

import {SET_CURRENT_USER, LOGGED_IN} from '../actions/types'
const initialState = {
    isAuthenticated: false,
    user: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
        return {
            ...state,
            isAuthenticated: !isEmpty(action.payload),
            user: action.payload
        }
        
        
        default:
            return state
    }
}