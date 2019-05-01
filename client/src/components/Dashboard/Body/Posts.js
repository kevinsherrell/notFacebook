import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deletePost } from '../../../actions/postActions'
import axios from 'axios'
const avatarImage = "url('https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png')"

const backgroundStyles = {
    backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png')",
    backgroundSize: "cover",
    backroundPostition: "center"
}

class Posts extends Component {
    state = {
        posts: {},
        deletePostError: {}
    }


    onClickDelete = (id) => {
        id = this.props._id
        this.props.deletePost(id)
    }
    render() {
        console.log(this.props)
       
        return (
            <div className='posts'>
                <div className="postedHeader">
                    <div className='postContainer flex'>
                        <div style={backgroundStyles} className='postBodyAvatarContainer'>
                            <div className="postBodyAvatar">
                                {/* <span>avatar</span> */}
                            </div>
                        </div>
                        <div className='postsHeaderGrid'>
                            <p>{this.props.name}</p>
                            <p>{this.props.dateCreated} <span><i className="fas fa-globe-americas"></i></span></p>
                        </div>
                        <div className="postsMenu flex">
                            {this.props.user === this.props.auth.user.id && (
                                <div>
                                    <button className='deletePost' onClick={this.onClickDelete}>Delete Post</button>

                                </div>
                            )}

                        </div>
                    </div>
                </div>
                <div className="postContainer">

                    <div className="postsBody">
                        {this.props.body}
                    </div>

                    <div className="postsFeedback">

                    </div>


                </div>
                <div className="postsActions flex">
                    <div><span><i className="fas fa-thumbs-up"></i></span> Like</div>
                    <div><span><i className="far fa-comment"></i></span> Comment</div>
                    <div><span><i className="fas fa-share"></i></span> Share</div>

                </div>
                <form className="postsInput ">
                    <div className='postContainer flex'>
                        <div style={backgroundStyles} className='postBodyAvatarContainer postCommentAvatar'>
                            <div className="postBodyAvatar">
                            </div>
                        </div>
                        <input type="text" placeholder="Write a comment..." />
                    </div>
                    <button></button>
                </form>


            </div>
        );
    }
}
Posts.propTypes = {
    deletePost: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    post: state.post,
    auth: state.auth,
    deletPostError: state.deletePostError
})
export default connect(mapStateToProps, { deletePost })(Posts);