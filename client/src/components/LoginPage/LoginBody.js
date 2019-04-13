import React, { Component } from 'react';

import CreateAccountForm from './CreateAccountForm';
import RecentLogins from './RecentLogins'
class LoginBody extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="loginWrapper loginBodyWrapper">
                <RecentLogins/>
                <CreateAccountForm />
            </div>
         );
    }
}
 
export default LoginBody;