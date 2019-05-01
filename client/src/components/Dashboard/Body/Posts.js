import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deletePost } from '../../../actions/postActions'
import axios from 'axios'



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
        const backgroundStyles = {
            backgroundImage: `url('${this.props.auth.user.imageUrl}')`,
            backgroundSize: "cover",
            backroundPostition: "center"
        }
        const backgroundStylesAlt = {
            backgroundImage: `url('https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png')`,
            backgroundSize: "cover",
            backroundPostition: "center"
        }
        return (
            <div className='posts'>
                <div className="postedHeader">
                    <div className='postContainer flex'>
                        <div style={this.props.user === this.props.auth.user.id ? backgroundStyles : backgroundStylesAlt } className='postBodyAvatarContainer'>
                            <div className="postBodyAvatar">
                                {/* <span>avatar</span> */}
                            </div>
                        </div>
                        <div className='postsHeaderGrid'>
                            <p>{this.props.name}</p>
                            <p>{this.props.dateCreated.slice(0, this.props.dateCreated.length -14)} <span><i className="fas fa-globe-americas"></i></span></p>
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

                    <div style={{color: 'rgba(0,0,0,.8)'}} className="postsBody">
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