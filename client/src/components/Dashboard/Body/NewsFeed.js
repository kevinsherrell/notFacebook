import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Posts from './Posts'
class NewsFeed extends Component {
    state = {}
    render() {
        console.log(this.props)
        return (
            <div className="mid">
                <form className={`createPost ${this.props.isFocused && 'isFocused'}`} name='createPost'>
                    <div className='postHeader'>
                        <p>Create Post</p>
                    </div>
                    <div className='postContainer'>
                        <div className="postBody">
                            <div className='postBodyAvatarContainer'>
                                <div className="postBodyAvatar">
                                    <span>avatar</span>
                                </div>
                            </div>
                            <div className='postBodyInput' onFocus={this.props.onFocus} >
                                
                                <textarea name="postBody" id="" cols="30" rows="20" placeholder="What's on your mind, person?" ref={c => this.postBody = c}></textarea>
                            </div>
                        </div>
                        <div className="postOptions">
                            <div className="optionContainer flex">

                            </div>
                        </div>
                    </div>
                </form>
                <Posts/>
                <Posts/>
                <Posts/>
            </div>

        );
    }
}

export default NewsFeed;