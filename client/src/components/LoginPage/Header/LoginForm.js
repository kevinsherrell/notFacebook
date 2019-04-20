import React, { Component } from 'react';

class LoginForm extends Component {
    state = { 
        email: '',
        password: ''
     }

     onChange= e =>{
         this.setState({
             [e.target.name]: e.target.value
         })
     }
     onSubmit = e =>{
         e.preventDefault()
         const user = {
             email: this.state.email,
             password: this.state.password
         }
         console.log(user)
     }
    render() { 
        return ( 
            <form className='loginForm' action="" onSubmit={this.onSubmit}>
                <div className='loginEmailContainer'>
                    <label htmlFor="">Email or Phone</label>
                    <input name='email' type="text" onChange = {this.onChange} value={this.state.email}/>

                </div>
                <div className='loginPasswordContainer'>
                    <label htmlFor="">Password</label>
                    <input name='password' type="password" onChange={this.onChange} value={this.state.password}/>
                    <p>Forgot Password?</p>
                </div>
                <button>Login</button>
            </form> 
         );
    }
}
 
export default LoginForm;