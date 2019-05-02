import {
    ADD_POST,
    GET_POSTS,
    DELETE_POSTS
} from '../actions/types'

const initialState = {
    posts: [],
    post: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            }
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case DELETE_POSTS:
            return {
                ...state,
                // posts: state.posts.filter(post =>post._id !== action.payload)
                posts: state.posts.filter(post => post._id !== action.payload)
            }
        default:
            return state
    }
}