import React, { Component } from 'react';
import updates from  '../../../images/updates.png'
import whatsNew from '../../../images/whatsNew.png'
import findMore from '../../../images/findMore.png'
class Intro extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="intro">
                <h2>Connect with friends and the world aroud you on....not Facebook.</h2>
                <div className='seePhotos'>
                    <div><img src={updates} alt=""/></div>
                    <p><strong>See photos and updates</strong> from friends in News Feed.</p>
                </div>
                <div className="share">
                    <div><img src={whatsNew} alt=""/></div>
                    <p><strong>Share what's new</strong> in your life on your Timeline.</p>
                </div>
                <div className="findMore">
                    <div><img src={findMore} alt=""/></div>
                    <p><strong>Find more</strong> of what you're looking for with Facebook Search.</p>
                </div>
            </div>
         );
    }
}
 
export default Intro;