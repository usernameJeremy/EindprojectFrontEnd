import React from 'react';
import { ExternalLink } from 'react-external-link';
import './../../index.css'

function Footer() {
    return (
        <>
            <div className="outer-box">
                <div className="inner-box">
            <p>Created by <ExternalLink href="https://github.com/usernameJeremy" >Jeremy Koster</ExternalLink>.</p>
                </div>
            </div>
        </>
    );
}

export default Footer;