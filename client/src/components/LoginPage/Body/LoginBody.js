import React, { Component } from 'react';

import CreateAccountForm from '../Body/CreateAccountForm'
import Intro from './Intro'
class LoginBody extends Component {
    state = {}
    render() {
        return (
            <div className="loginWrapper loginBodyWrapper">
                <Intro />
                <CreateAccountForm />
            </div>
        );
    }
}

export default LoginBody;