import React, { Component } from 'react';
import Header from './Header/Header'
import LeftSidebar from './Body/LeftSidebar'
import RightSidebar from './Body/RightSidebar'
import NewsFeed from './Body/NewsFeed'
import FocusOverlay from './FocusOverlay'
import BodyContainer from './Body/BodyContainer'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { userLogout } from '../../actions/authActions'

class Dashboard extends Component {
    state = {
        auth: {},
        isFocused: false,
        // post form state move to individual component

    }


    onFocus = () => {
        this.setState({
            isFocused: !this.state.isFocused
        })
        console.log(this.postBody)
    }

    handleClick = () => {
        if (this.state.isFocused === true) {
            this.setState({
                isFocused: !this.state.isFocused
            })
        }

    }
    onClickLogout = (e) => {
        e.preventDefault()
        this.props.userLogout()
    }
    componentDidMount() {

    }
    componentWillReceiveProps(nextProps) {
        if (!nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
    }
    render() {
        return (


            <React.Fragment>
                <Header onClickLogout={this.onClickLogout}{...this.state} />
                <BodyContainer>
                    <LeftSidebar />
                    <NewsFeed {...this.state} onFocus={this.onFocus} />
                    <RightSidebar />
                </BodyContainer>


                {/* Content below will remain hidden until certain conditions are met */}
                <FocusOverlay {...this.state} handleClick={this.handleClick} />
            </React.Fragment >

        );
    }
}
Dashboard.propTypes = {
    userLogout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    auth: state.auth
})
export default connect(mapStateToProps, { userLogout })(Dashboard);