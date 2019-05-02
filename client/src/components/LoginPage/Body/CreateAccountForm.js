import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { registerUser } from '../../../actions/authActions'
class CreateAccountForm extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        birthdate: '',
        password: '',
        password2: '',
        gender: '',
        regError: {},
        accountCreated: false,
        userCreated: {},
        messageClicked: false
    }

    onChange = e => {
        this.setState({

            [e.target.name]: e.target.value
        })
        
    }
    // This is an onChange specifically for the birthdate fields (month, day, year) -- Will change once a better solution is found
    onChangeBirthdate = e => {
        this.setState({
            birthdate: `${this.month.value}/${this.day.value}/${this.year.value}`
        })
        console.log(this.state.birthdate)
        console.log(this.month.className)
    }

    onSubmit = e => {
        e.preventDefault()
        const newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            birthdate: this.state.birthdate,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
            gender: this.state.gender
        }

        this.props.registerUser(newUser, this.props.history)

    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.regError) {
            this.setState({ regError: nextProps.regError })
        }
    }
    render() {


        const { regError } = this.state
        
       
        return (

                
                <form className='createAccountForm' name='createAccountForm' onSubmit={this.onSubmit} >
    
                    <h1>Create a New Account</h1>
                    <p className='createAccountFormSubHeader'>It's free and always will be.</p>
                    <div className='nameContainer'>
                        <input className={regError.firstName && 'isInvalid'} name='firstName' type="text" placeholder={regError.firstName ? regError.firstName : 'First Name'} value={this.state.firstName} onChange={this.onChange} />
                        <input className={regError.lastName && 'isInvalid'} name='lastName' type="text" placeholder={regError.lastName ? regError.lastName : 'Last Name'} value={this.state.lastName} onChange={this.onChange} />
                    </div>
                    <input className={`emailInput ${regError.email && 'isInvalid'}`} name='email' type="text" placeholder={regError.email ? regError.email : 'E-mail'} value={this.state.email} onChange={this.onChange} />
                    <input className={`newPasswordInput ${regError.password && 'isInvalid'}`} name='password' type="password" placeholder={regError.password ? regError.password : 'New password'} value={this.state.password} onChange={this.onChange} />
                    <input className={`newPasswordInput password2Input ${regError.password2 && 'isInvalid'}`} name='password2' type="password" placeholder={regError.password2 ? regError.password2 : 'Confirm Password'} value={this.state.password2} onChange={this.onChange} />
                    <label className='birthdayLabel' htmlFor="birthdayInput">Birthday</label>
                    <div className='birthdayWrapper'>
                        <select className='birthdayInput' name="month" id="birthdayInput" value={this.state.month} onChange={this.onChangeBirthdate} ref={c => this.month = c} required>
                            <option value="month">Month</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                        <select className='birthdayInput' name="day" id="birthdayInput" value={this.state.day} onChange={this.onChangeBirthdate} ref={c => this.day = c} required>
                            <option value="Day">Day</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                        </select>
                        <select className='birthdayInput' name="year" id="birthdayInput" value={this.state.year} onChange={this.onChangeBirthdate} ref={c => this.year = c} required>
    
                            <option value="Year">Year</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                            <option value="2011">2011</option>
                            <option value="2010">2010</option>
                            <option value="2009">2009</option>
                            <option value="2008">2008</option>
                            <option value="2007">2007</option>
                            <option value="2006">2006</option>
                            <option value="2005">2005</option>
                            <option value="2004">2004</option>
                            <option value="2003">2003</option>
                            <option value="2002">2002</option>
                            <option value="2001">2001</option>
                            <option value="2000">2000</option>
                        </select><sub>Why do I need to provide my birthday</sub>
                    </div>
                    <div className={`genderWrapper ${regError.gender && 'isInvalid'}`}>
                        <input name='gender' type="radio" onChange={this.onChange} value='female' /><label className='femaleLabel' htmlFor=""  >Female</label>
                        <input name='gender' type="radio" onChange={this.onChange} value='male' /><label htmlFor="" >Male</label>
                    </div>
                    <p className='terms'>By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.</p>
                    <button>Sign Up</button>
                    <hr />
                    <p><a href='*'>Create a page</a> for a celebrity, band or business</p>
    
                </form>
             
        );
    }
}

CreateAccountForm.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    // errors: PropTypes.object.isRequired
    regError: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    // errors: PropTypes.object.isRequired,
    regError: state.regError,
    accountCreated: state.accountCreated

})
export default connect(mapStateToProps, { registerUser })(withRouter(CreateAccountForm));