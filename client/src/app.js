import React, { Component } from 'react';

import LoginHeader from './components/LoginPage/LoginHeader'
import LoginBody from './components/LoginPage/LoginBody'

import './css/base.css'

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <LoginHeader/>
                <LoginBody />
            </React.Fragment>
         );
    }
}
 
export default App;