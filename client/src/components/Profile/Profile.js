import React, { Component } from 'react';
class Profile extends Component {
    state = {
        isFocused: false,
        // post form state move to individual component

    }


    onFocus = () => {
        this.setState({
            isFocused: !this.state.isFocused
        })
        console.log(this.postBody)
    }

    handleClick = () => {
        if (this.state.isFocused === true) {
            this.setState({
                isFocused: !this.state.isFocused
            })
        }

    }
    componentDidMount() {

    }
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
                            <form className='searchForm'>
                                <input className='searchInput' type="text" placeholder='Search' ref={(input) => { this.searchInput = input }} />
                                <button className="searchSubmit"><i className="fas fa-search"></i></button>
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
                            <p className="communications"><span className='friends'><i className="fas fa-user-friends"></i></span><span className='messenger'><i className="fab fa-facebook-messenger"></i></span><span className='notifications'><i className="fas fa-bell"></i></span></p>
                            <p className="help"><span><i className="fas fa-question-circle"></i></span></p>
                            <p className='headerDropDown'><span><i className="fas fa-caret-down"></i></span></p>
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
                            <div className={`createPost ${this.state.isFocused && 'isFocused'}`}>

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
                                        <div className='postBodyInput' onFocus={this.onFocus} >
                                            {/* <input type="text" placeholder="What's on your mind, person?" ref={(input) => { this.postInput = input }} /> */}
                                            <textarea name="postBody" id="" cols="30" rows="20" placeholder="What's on your mind, person?" ref={c => this.postBody = c}></textarea>
                                        </div>
                                    </div>

                                    <div className="postOptions">

                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="right"></div>
                    </div>

                    {/* Content below is to remain hidden until certain conditions are met */}
                    {/* <div className={this.state.isFocused ? 'notFocusedAfter' : 'notFocusedBefore'}></div> */}

                    <div className={
                        this.state.isFocused ? 'notFocusedAfter' : 'notFocusedBefore'
                    } onClick={this.handleClick}></div>

                </div>
            </div>
        );
    }
}

export default Profile;