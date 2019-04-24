import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'
import {setCurrentUser} from './actions/authActions'

import { Provider } from 'react-redux'

import store from './store'

import LoginPage from './components/LoginPage/LoginPage'
import Profile from './components/Profile/Profile'

import './css/base.css'

if(localStorage.jwtToken){
    setAuthToken(localStorage.jwtToken)
    
    const decoded = jwt_decode(localStorage.jwtToken)

    store.dispatch(setCurrentUser(decoded))
}
class App extends Component {
    state = {}
    render() {
        return (

            <Provider store={store}>
                <Router>
                    <Route exact path='/' component={LoginPage} />
                    <Route exact path='/profile' component={Profile}/>
                </Router>
            </Provider>

        );
    }
}

export default App;