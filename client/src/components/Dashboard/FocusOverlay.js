import React from 'react';
const FocusOverlay = (props) => {
    return (
        <div className={
            props.isFocused ? 'notFocusedAfter' : 'notFocusedBefore'
        } onClick={props.handleClick}>

        </div>
    );
}

export default FocusOverlay;