import React from 'react';
import SearchForm from './SearchForm'

import { connect } from 'react-redux'



const Header = (props) => {
    console.log(props)
    const backgroundStyles = {
        backgroundImage: `url('${props.auth.user.imageUrl}')`,
        backgroundSize: "cover",
        backroundPostition: "center"
    }
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
                    <div  className='headerAvatarContainer'>
                        <div style={backgroundStyles} className="headerAvatar">
                            
                        </div>
                        <p className="nameHeader">{`${props.auth.user.firstName} ${props.auth.user.lastName} `}</p>
                    </div>
                    <p className="home">Home</p>
                    <p className="create">Create</p>
                    <p className="communications"><span className='friends'><i className="fas fa-user-friends"></i></span><span className='messenger'><i className="fab fa-facebook-messenger"></i></span><span className='notifications'><i className="fas fa-bell"></i></span></p>
                    <p className="help"><span><i className="fas fa-question-circle"></i></span></p>
                    <p className='headerDropDown'><button className='logoutButton' onClick={props.onClickLogout}><strong>Logout</strong></button></p>
                </div>
                

            </div>
        </header>
    );
}
const mapStateToProps = state => ({
    auth: state.auth,
    
})
export default connect(mapStateToProps)(Header);