import React, { Component } from 'react';
class CreateAccountForm extends Component {
    state = {}
    render() {
        return (

            <form className='createAccountForm' name='createAccountForm' action="">
                <h1>Create a New Account</h1>
                <p className='createAccountFormSubHeader'>It's free and always will be.</p>
                <div className='nameContainer'>
                    <input name='firstNameInput' type="text" placeholder='First Name' />
                    <input name='lastNameInput' type="text" placeholder='Last Name' />
                </div>
                <input className='emailInput' name='emailInput' type="text" placeholder='Mobile Number or email' />
                <input className='newPasswordInput' name='newPasswordInput' type="text" placeholder='New password' />
                <label className='birthdayLabel' htmlFor="birthdayInput">Birthday</label>
                <div className='birthdayWrapper'>
                    <select className='birthdayInput' name="birthdayInput" id="birthdayInput"></select>
                    <select className='birthdayInput' name="birthdayInput" id="birthdayInput"></select>
                    <select className='birthdayInput' name="birthdayInput" id="birthdayInput"></select><sub>Why do I need to provide my birthday</sub>
                </div>
                <div className='genderWrapper'>
                    <input name='genderInput' type="radio" /><label className='femaleLabel' htmlFor="">Female</label>
                    <input name='genderInput' type="radio" /><label htmlFor="">Male</label>
                </div>
                <p className='terms'>By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.</p>
                <button>Sign Up</button>
            </form>
        );
    }
}

export default CreateAccountForm;