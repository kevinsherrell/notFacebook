import React from 'react';
const LeftSidebar = () => {
    return (
        <div className="left leftSideContainer">
                            {/* avatar */}
                            <div className='leftAvatarContainer flex'>
                                <div className='leftAvatar'>
                                    <span>avatar</span>
                                </div>
                                <p>Person</p>
                            </div>

                            <div className="newsFeed flex">
                                <div><i className="fas fa-circle"></i></div>
                                <p>News Feed</p>
                            </div>
                            <div className="leftMessenger flex">
                                <div><i className="fas fa-circle"></i></div>
                                <p>Messenger</p>
                            </div>
                            <div className="watch flex">
                                <div><i className="fas fa-circle"></i></div>
                                <p>Watch</p>
                            </div>
                            <div className="marketplace flex">
                                <div><i className="fas fa-circle"></i></div>
                                <p>Marketplace</p>
                            </div>
                            {/* shortcuts */}
                            <h4 className='leftHeader'>Shortcuts</h4>
                            <div className="dragonCity flex">
                                <div><i className="fas fa-circle"></i></div>
                                <p>Dragon City</p>
                            </div>
                            {/* explore */}
                            <h4 className="leftHeader">Explore</h4>
                            <div className="pages flex">
                                <div><i className="fas fa-circle"></i></div>
                                <p>Pages</p>
                            </div>
                            <div className="groups flex">
                                <div><i className="fas fa-circle"></i></div>
                                <p>Groups</p>
                            </div>
                            <div className="oculus flex">
                                <div><i className="fas fa-circle"></i></div>
                                <p>Oculus</p>
                            </div>
                            <div className="events flex">
                                <div><i className="fas fa-circle"></i></div>
                                <p>Events</p>
                            </div>

                            <div className="fundraisers flex">
                                <div><i className="fas fa-circle"></i></div>
                                <p>Fundraisers</p>
                            </div>
                            <div className="seeMore flex">
                                <div><i className="fas fa-caret-down"></i></div>
                                <p>See More....</p>
                            </div>
                        </div>
      );
}
 
export default LeftSidebar