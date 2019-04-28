import React, { Component } from 'react';
class Dashboard extends Component {
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
        console.log(this.right)
        return (
            <div>

                {/* begin authenticated header */}
                <header className='dashboardHeader'>
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
                        <div className="left leftSideContainer">
                            {/* avatar */}
                            <div className='leftAvatarContainer flex'>
                                <div className='leftAvatar'>
                                    <span>avatar</span>
                                </div>
                                <p>Person</p>
                            </div>

                            <div className="newsFeed flex">
                                <div><i class="fas fa-circle"></i></div>
                                <p>News Feed</p>
                            </div>
                            <div className="leftMessenger flex">
                                <div><i class="fas fa-circle"></i></div>
                                <p>Messenger</p>
                            </div>
                            <div className="watch flex">
                                <div><i class="fas fa-circle"></i></div>
                                <p>Watch</p>
                            </div>
                            <div className="marketplace flex">
                                <div><i class="fas fa-circle"></i></div>
                                <p>Marketplace</p>
                            </div>
                            {/* shortcuts */}
                            <h4 className='leftHeader'>Shortcuts</h4>
                            <div className="dragonCity flex">
                                <div><i class="fas fa-circle"></i></div>
                                <p>Dragon City</p>
                            </div>
                            {/* explore */}
                            <h4 className="leftHeader">Explore</h4>
                            <div className="pages flex">
                                <div><i class="fas fa-circle"></i></div>
                                <p>Pages</p>
                            </div>
                            <div className="groups flex">
                                <div><i class="fas fa-circle"></i></div>
                                <p>Groups</p>
                            </div>
                            <div className="oculus flex">
                                <div><i class="fas fa-circle"></i></div>
                                <p>Oculus</p>
                            </div>
                            <div className="events flex">
                                <div><i class="fas fa-circle"></i></div>
                                <p>Events</p>
                            </div>

                            <div className="fundraisers flex">
                                <div><i class="fas fa-circle"></i></div>
                                <p>Fundraisers</p>
                            </div>
                            <div className="seeMore flex">
                                <div><i class="fas fa-caret-down"></i></div>
                                <p>See More....</p>
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
                        <div className="right" ref={c => this.right = c}>
                        <div className="testblock">

                        </div>
                        <div className="testblock2">
                            
                        </div>
                       
                        </div>
                    </div>

                    {/* Content below is to remain hidden until certain conditions are met */}
                    {/* <div className={this.state.isFocused ? 'notFocusedAfter' : 'notFocusedBefore'}></div> */}

                    <div className={
                        this.state.isFocused ? 'notFocusedAfter' : 'notFocusedBefore'
                    } onClick={this.handleClick}>
                    
                    </div>

                </div>
            </div>
        );
    }
}

export default Dashboard;