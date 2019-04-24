import React, { Component } from 'react';
class Profile extends Component {
    state = {}
    render() {
        return (
            <div>
                {/* begin authenticated header */}
                <header>
                    <div className='profileHeaderWrapper '>
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
                            <p className="communications"><span><i class="fas fa-user-friends"></i></span><span><i class="fab fa-facebook-messenger"></i></span><span><i class="fas fa-bell"></i></span></p>
                        </div>

                    </div>
                </header>
            </div>
        );
    }
}

export default Profile;