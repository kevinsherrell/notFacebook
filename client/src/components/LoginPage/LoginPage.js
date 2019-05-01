import React, { Component } from 'react';

import LoginHeader from './Header/LoginHeader'
import LoginBody from './Body/LoginBody'
import LoginFooter from './Footer/LoginFooter'
import { connect } from 'react-redux'
class LoginPage extends Component {
    state = {
        accountCreated: false,
        userCreated: {},
        messageClicked: false,

    }
    onClickDashboardRedirect = (e) => {
        e.preventDefault()
        this.props.history.push('/dashboard')
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.accountCreated){
            this.setState({
                accountCreated: nextProps.accountCreated,
                userCreated: nextProps.userCreated
            })
        }
    }
    render() {
        console.log(this.props)
        // const { accountCreated, userCreated } = this.props.accountCreated
        const { accountCreated } = this.props.accountCreated
        const {userCreated} = this.props.accountCreated
        // const {accountCreated}

        console.log(accountCreated)
        console.log(userCreated)
        return (
            <React.Fragment>
                <LoginHeader />
                <LoginBody />
                <LoginFooter />
                <div className="accountCreatedContainer">
                    <div className={accountCreated ? "accountCreated" : "accountCreatedFalse"}>
                        <p style={{ fontSize: '22px', textAlign: 'center', paddingTop: '10px', color: 'white' }}>Account Created!</p>
                        <div style={{ padding: '80px' }}>
    
                            <p style={{ fontSize: '30px', color: 'white', textAlign: 'center' }}>{`Hi, ${userCreated.firstName} welcome to`} <span style={{ textDecoration: 'underline' }}>notFacebook</span></p>
                            <p style={{ fontSize: '25px', color: 'white', textAlign: 'center' }}>Please <span style={{color: 'red'}}>login</span> above to get started</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => ({
    accountCreated: state.accountCreated,
    userCreated: state.userCreated
})
export default connect(mapStateToProps)(LoginPage);