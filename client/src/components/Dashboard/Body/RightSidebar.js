import React from 'react';
const RightSidebar = () => {
    const backgroundStyles = {
        backgroundImage: 'url("https://oralroberts.com/wp-content/uploads/2018/07/ad-placeholder.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: '.5'
    }
    return (
        <div className="right">
            <div style={backgroundStyles} className="testblock">

            </div>
            <div style={backgroundStyles} className="testblock2">

            </div>

        </div>
    );
}

export default RightSidebar;