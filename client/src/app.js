import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'
import {setCurrentUser} from './actions/authActions'

import { Provider } from 'react-redux'

import store from './store'

import LoginPage from './components/LoginPage/LoginPage'
import Dashboard from './components/Dashboard/Dashboard'

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
                    <Route exact path='/dashboard' component={Dashboard}/>
                </Router>
            </Provider>

        );
    }
}

export default App;