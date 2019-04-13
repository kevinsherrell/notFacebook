import React, { Component } from 'react';

class LoginForm extends Component {
    state = {  }
    render() { 
        return ( 
            <form className='loginForm' action="">
                <div className='loginEmailContainer'>
                    <label htmlFor="">Email or Phone</label>
                    <input name='emailInput' type="text"/>
                    {/* <div>kuh</div> */}
                </div>
                <div className='loginPasswordContainer'>
                    <label htmlFor="">Password</label>
                    <input name='passwordInput' type="text"/>
                    <p>Forgot Password?</p>
                </div>
                <button>Login</button>
            </form>
         );
    }
}
 
export default LoginForm;