import axios from 'axios'

import { ADD_POST, GET_POSTS, GET_POST_ERRORS, GET_ADD_POST_ERRORS, DELETE_POSTS, DELETE_POSTS_ERRORS } from './types'

// create a new post
export const addPost = postData => dispatch => {
    axios.post('/api/posts', postData)
        .then(res =>
            dispatch({
                type: ADD_POST,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ADD_POST_ERRORS,
                payload: err.response.data
            })
        )
}
// get posts
export const getPosts = () => dispatch => {
    axios.get('/api/posts')
        .then(res => dispatch({
            type: GET_POSTS,
            payload: res.data
        })

        )
        .catch(err => {
            dispatch({
                type: GET_POST_ERRORS,
                payload: err.response.data
            })
        })
}


// delete a post
export const deletePost = id => dispatch => {
    axios.delete(`/api/posts/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_POSTS,
                payload: id
            })
        )
        .catch(err =>
            dispatch({
                type: DELETE_POSTS_ERRORS,
                payload: err.response.data
            }))
}