import React from 'react';


const BodyContainer = (props) => {
    return (
        <div className="dashboardBodyWrapper">
            <div className="dashboardBody">
                {props.children}
            </div>
        </div>
      );
}
 
export default BodyContainer;