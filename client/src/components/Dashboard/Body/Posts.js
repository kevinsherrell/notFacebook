import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class Posts extends Component {
    state = {}
    render() {
        return (
            <div className='posts'>
                <div className="postedHeader">
                    <div className='postContainer flex'>
                        <div className='postBodyAvatarContainer'>
                            <div className="postBodyAvatar">
                                <span>avatar</span>
                            </div>
                        </div>
                        <div className='postsHeaderGrid'>
                            <p>name</p>
                            <p>time posted <span><i className="fas fa-globe-americas"></i></span></p>
                        </div>
                        <div className="postsMenu flex">
                            <div>
                                <span><i className="fas fa-ellipsis-h"></i></span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="postContainer">

                    <div className="postsBody">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet accusamus quod sapiente distinctio, nesciunt veniam? Tempore est tempora amet in hic vitae doloremque ab officiis eaque quasi, reiciendis delectus assumenda temporibus vel necessitatibus excepturi placeat unde ipsam. Neque beatae doloribus aliquid, cum, voluptate possimus quam, asperiores et officiis inventore accusantium nam. Facere repellat tenetur nemo accusantium dignissimos eius odio id, corrupti est culpa dolore assumenda magnam, praesentium nisi. Amet sit quasi nam voluptate sunt quibusdam perspiciatis? Eius, veniam nam illo ipsam delectus eaque quos accusantium. Earum, in. Tempore perferendis cum exercitationem est minus accusantium provident autem enim officiis tenetur velit iure mollitia ab quam itaque, nesciunt eligendi eius molestias cupiditate sed, obcaecati veniam! Quidem dignissimos earum perferendis molestiae praesentium porro, neque aspernatur, quisquam minus ducimus mollitia eveniet dolorum. Quasi, expedita?
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
                        <div className='postBodyAvatarContainer postCommentAvatar'>
                            <div className="postBodyAvatar">
                                <span>avatar</span>
                            </div>
                        </div>
                        <input type="text" placeholder="Write a comment..."/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Posts;