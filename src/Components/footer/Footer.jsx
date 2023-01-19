import React from 'react';
import { ExternalLink } from 'react-external-link';
import './../../index.css'
import {Link} from "react-router-dom";
import './Footer.css'


function Footer() {
    return (
        <>
            <div className="outer-box">
                <div className="inner-box">
                    <Link className="needpaddingright"  to="/" >Homepage</Link> <p >Created by <ExternalLink className="needpaddingright" href="https://github.com/usernameJeremy" >Jeremy Koster.</ExternalLink></p>
                </div>
            </div>
        </>
    );
}

export default Footer;