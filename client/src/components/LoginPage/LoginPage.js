import React, { Component } from 'react';

import LoginHeader from './Header/LoginHeader'
import LoginBody from './Body/LoginBody'
import LoginFooter from './Footer/LoginFooter'

class LoginPage extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <LoginHeader/>
                <LoginBody/>
                <LoginFooter/>
            </React.Fragment>
         );
    }
}
 
export default LoginPage;