import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { userLogin } from '../../../actions/authActions'
class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        loginError: {}
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = e => {
        e.preventDefault()
        const userData = {
            email: this.state.email,
            password: this.state.password
        }
        // console.log(user)
        this.props.userLogin(userData, this.props.history)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/dashboard')
        }
        if (nextProps.loginError) {
            this.setState({ loginError: nextProps.loginError })
        }
    }

    render() {
        const { loginError } = this.state

        return (
            <form className='loginForm' action="" onSubmit={this.onSubmit}>
                <div className='loginEmailContainer'>
                    <label htmlFor="">Email or Phone</label>
                    <input className={loginError.email && "isInvalid"} name='email' type="text" onChange={this.onChange} value={this.state.email} placeholder={loginError.email ? loginError.email : 'Email'} />

                </div>
                <div className='loginPasswordContainer'>
                    <label htmlFor="">Password</label>
                    <input className={loginError.password && 'isInvalid'} name='password' type="password" onChange={this.onChange} value={this.state.password} placeholder={loginError.password ? loginError.password : 'Password'} />
                    <p>Forgot Password?</p>
                </div>
                <button type="submit">Login</button>
            </form>
        );
    }
}
LoginForm.propTypes = {
    userLogin: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    loginError: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    // errors: state.errors
    loginError: state.loginError
})
export default connect(mapStateToProps, { userLogin })(withRouter(LoginForm));