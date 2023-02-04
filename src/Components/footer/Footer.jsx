import React from 'react';
import { ExternalLink } from 'react-external-link';
import './../../App.css'
import './Footer.css'


function Footer() {
    return (
        <>
            <div className="outer-box-footer">
                <div className="inner-box-footer">
                    <div className="footer-box">
                     <p >Created by <ExternalLink className="external-link" href="https://github.com/usernameJeremy" >Jeremy Koster.</ExternalLink></p>
                    </div>
                    </div>
            </div>
        </>
    );
}

export default Footer;