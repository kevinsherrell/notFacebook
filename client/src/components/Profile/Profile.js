import React, { Component } from 'react';
class Profile extends Component {
    state = {}
    render() {
        return (
            <div>
                {/* begin authenticated header */}
                <header>
                    <div className='profileWrapper '>
                        <div className='profileHeaderGridContainerLeft'>
                            <div className="notFacebookLogo">
                                <h2 className='notFacebookText'>
                                    nF
                                </h2>
                            </div>
                            <form className="searchForm">
                                <input className='searchInput' type="text" placeholder='Search' />
                                <button className="searchSubmit"><i class="fas fa-search"></i></button>
                            </form>
                        </div>

                        <div className="profileHeaderGridContainerRight">
                            <div className='headerAvatarContainer'>
                                <div className="headerAvatar">
                                    <span>avatar</span>
                                </div>
                                <p className="nameHeader">name</p>
                            </div>
                            <p className="home">Home</p>
                            <p className="create">Create</p>
                            <p className="communications"><span className='friends'><i class="fas fa-user-friends"></i></span><span className='messenger'><i class="fab fa-facebook-messenger"></i></span><span className='notifications'><i class="fas fa-bell"></i></span></p>
                            <p className="help"><span><i class="fas fa-question-circle"></i></span></p>
                            <p className='headerDropDown'><span><i class="fas fa-caret-down"></i></span></p>
                        </div>
                        {/* end HEADER */}
                        {/* begin BODY */}

                    </div>
                </header>
                <div className='profileBodyWrapper'>
                    <div className='profileBody'>
                        <div className="left">
                            <div className='leftAvatarContainer'>
                                <div className='leftAvatar'>
                                    <span>avatar</span>
                                </div>
                            <p>name</p>

                            </div>
                        </div>
                        <div className="mid">
                            <div className="createPost">

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
                                        <div className='postBodyInput'>
                                            <input type="text" placeholder="What's on your mind, person?" />
                                        </div>
                                    </div>
                                    <div className="postOptions">
                                        
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="right"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;