import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import LoginPage from './components/LoginPage/LoginPage'

import './css/base.css'

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <Router>
                <Route exact path='/' component={LoginPage}/>
            </Router>
         );
    }
}
 
export default App;