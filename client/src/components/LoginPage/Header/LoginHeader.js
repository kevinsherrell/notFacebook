import React, { Component } from 'react';

import LoginForm from './LoginForm'

import Logo from '../../../images/facebookLogo.png'

class LoginHeader extends Component {
    state = {}
    render() {
        return (

            <header>
                <div className='loginWrapper headerWrapper'>
                    <div className='notFacebook'>
                        <h1>not</h1>
                        <img src={Logo} alt="facebookLogo"/>
                    </div>
                    <LoginForm />
                </div>
            </header>
        );
    }
}

export default LoginHeader;