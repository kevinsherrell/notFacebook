import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addPost } from '../../../actions/postActions'
import {getPosts} from '../../../actions/postActions'
import Posts from './Posts'

const avatarImage = "url('https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png')"

const backgroundStyles = {
    backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png')",
    backgroundSize: "cover",
    backroundPostition: "center"
}
class NewsFeed extends Component {
    state = {
        body: '',
        addPostError: {},
        getPostError: {}
    }

    onSubmit = e => {
        e.preventDefault()
        const { user } = this.props.auth
        const newPost = {
            body: this.state.body,
            name: `${user.firstName} ${user.lastName}`,
            user: user.id

        }
        this.props.addPost(newPost)
        this.setState({ body: '' })

    }
    onChange = e => {

        this.setState({
            [e.target.name]: e.target.value,
            addPostError: ""
        })
        console.log(this.state.body)

    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.addPostError) {
            this.setState({
                addPostError: nextProps.addPostError
            })
        }
    }
    componentDidMount(){
        this.props.getPosts()
    }
    
    render() {

        const { addPostError, getPostError } = this.state
        const {posts} = this.props.post
        // console.log(posts)
        // let postContent = <Posts posts={posts}/>
        const mappedPosts = posts.map((post)=>{
            return <Posts {...post}/>
        })
    
       
        return (
            <div className="mid">

                <form className={`createPost ${this.props.isFocused && 'isFocused'}`} onSubmit={this.onSubmit}>
                    <div className='postHeader'>
                        <p>Create Post</p>
                    </div>
                    <div className='postContainer'>
                        <div className="postBody">
                            <div  style={backgroundStyles} className='postBodyAvatarContainer'>
                                <div className="postBodyAvatar">
                                   
                                </div>
                            </div>
                            <div className='postBodyInput' onFocus={this.props.onFocus} >

                                <textarea name="body" id="" cols="30" rows="20" placeholder={`"What's on your mind, ${this.props.auth.user.firstName}?"`} ref={c => this.postBody = c} value={this.state.body} onChange={this.onChange} ></textarea>
                            </div>
                        </div>
                        <div className="postOptions">
                            <div className="optionContainer flex">
                                <button className='postButton'>Post</button>
                            </div>
                        </div>
                    </div>
                </form>
                {mappedPosts}
            </div >

        );
    }
}
NewsFeed.propTypes = {
    post: PropTypes.object.isRequired,
    addPost: PropTypes.func.isRequired,
    getPosts: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    addPostError: PropTypes.object.isRequired,
    getPostError: PropTypes.object.isRequired
}
const mapStateToProps = state => ({

    post: state.post,
    auth: state.auth,
    addPostError: state.addPostError,
    getPostError: state.getPostError
})
export default connect(mapStateToProps, { addPost, getPosts })(NewsFeed);