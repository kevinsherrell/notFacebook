import React, { Component } from 'react';
import Header from './Header/Header'
import LeftSidebar from './Body/LeftSidebar'
import RightSidebar from './Body/RightSidebar'
import NewsFeed from './Body/NewsFeed'
import FocusOverlay from './FocusOverlay'
import BodyContainer from './Body/BodyContainer'

class Dashboard extends Component {
    state = {
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
    componentDidMount() {

    }

    render() {
        return (


            <React.Fragment>
                <Header />
                <BodyContainer>
                    <LeftSidebar />
                    <NewsFeed {...this.state} onFocus={this.onFocus}/>
                    <RightSidebar />
                </BodyContainer>

                
                {/* Content below will remain hidden until certain conditions are met */}
                <FocusOverlay {...this.state} handleClick={this.handleClick} />
            </React.Fragment >

        );
    }
}

export default Dashboard;