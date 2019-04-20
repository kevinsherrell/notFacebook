import React from 'react';
import Languages from './Languages'
import FooterLinks from './FooterLinks'
const LoginFooter = () => {
    return (
        <footer>
            <div className="loginWrapper ">
                <Languages/>
                <FooterLinks/>
                <p className='copyright'>Kevin Sherrell © 2019</p>
            </div>
        </footer>
    );
}

export default LoginFooter;