import axios from 'axios'

import {ADD_POST,GET_ADD_POST_ERRORS} from './types'

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