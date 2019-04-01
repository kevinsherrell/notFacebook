import React, { Component } from 'react';
class LoginForm extends Component {
    state = {  }
    render() { 
        return (  
            <form name='LoginForm' action="">

                <input name='firstName'type="text" placeholder='First Name'/>
                <input name='lastName'type="text" placeholder='Last Name'/>
                <input name='email'type="text" placeholder='Mobile Number or email'/>
                <input name='newPassword'type="text" placeholder='New password'/>
                <label htmlFor="birthday">Birthday</label>

            </form>
        );
    }
}
 
export default LoginForm;