import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addPost } from '../../../actions/postActions'
import Posts from './Posts'
class NewsFeed extends Component {
    state = {
        body: '',
        addPostError: {}
    }

    onSubmit = e => {
        e.preventDefault()
        const {user}= this.props.auth
        const newPost={
            body: this.state.body,
            name: `${user.firstName} ${user.lastName}`,
            user: user.id

        }
        this.props.addPost(newPost)
        this.setState({body: ''})
    }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state.body)
    }

    render() {
        
        const {addPostErrors} = this.state
        return (
            <div className="mid">
                <form className={`createPost ${this.props.isFocused && 'isFocused'}`}  onSubmit={this.onSubmit}>
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

                                <textarea name="body" id="" cols="30" rows="20" placeholder="What's on your mind, person?" ref={c => this.postBody = c} value={this.state.body} onChange={this.onChange} ></textarea>
                            </div>
                        </div>
                        <div className="postOptions">
                            <div className="optionContainer flex">
                                <button>Post</button>
                            </div>
                        </div>
                    </div>
                </form>
                <Posts />
                <Posts />
                <Posts />
            </div>

        );
    }
}
NewsFeed.propTypes={
    addPost: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}
const mapStateToProps=state=>({
    auth: state.auth,
    addPostError: state.addPostError
})
export default connect(mapStateToProps, {addPost})(NewsFeed);