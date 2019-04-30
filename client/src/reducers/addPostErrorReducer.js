import { GET_ADD_POST_ERRORS } from '../actions/types'
const initialState = {

}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ADD_POST_ERRORS:
            return action.payload
        default:
            return state
    }
}