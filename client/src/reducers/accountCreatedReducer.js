import { ACCOUNT_CREATED, LOGGED_IN } from '../actions/types'
import registerUser from '../actions/authActions'

const initialState = {
    accountCreated: false,
    userCreated: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ACCOUNT_CREATED:
            return {
                accountCreated: !state.accountCreated,
                userCreated: action.payload
            }
        case LOGGED_IN: 
        return {
            accountCreated: false,
            userCreated: {}
        }
        default:
            return state
    }
}