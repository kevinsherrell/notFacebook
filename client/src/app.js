import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import LoginPage from './components/LoginPage/LoginPage'

import './css/base.css'


class App extends Component {
    state = {}
    render() {
        return (

            <Provider store={store}>
                <Router>
                    <Route exact path='/' component={LoginPage} />

                </Router>
            </Provider>

        );
    }
}

export default App;