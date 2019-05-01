import { DELETE_POSTS_ERRORS } from '../actions/types'
const initialState = {
    post: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case DELETE_POSTS_ERRORS:
            return action.payload

        default:
            return state
    }
}