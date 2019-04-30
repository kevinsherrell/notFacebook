import React from 'react';
import SearchForm from './SearchForm'
const Header = () => {
    return (
        <header className='dashboardHeader'>
            <div className='dashboardWrapper '>
                <div className='dashboardHeaderGridContainerLeft'>
                    <div className="notFacebookLogo">
                        <h2 className='notFacebookText'>
                            nF
                                </h2>
                    </div>
                    <SearchForm />
                </div>

                <div className="dashboardHeaderGridContainerRight">
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
                

            </div>
        </header>
    );
}

export default Header;