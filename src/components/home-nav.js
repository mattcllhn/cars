import React from 'react';
import {Link } from "react-router-dom";

import './home-nav.scss';
function HomeNav(props) {
    return (
        <nav role = "navigation" className="home-nav">
            <ul>
                <li>
                    <Link to="/schedule" >Schedule a Repair</Link>
                </li>
                <li>
                    <Link to = "/volunteer" >Volunteer</Link>
                </li>
                <li>
                    <a href = "javascript:void(0)" >Donate</a>
                </li>
                <li>
                    <Link to="/login" >Log In</Link>
                </li>
            </ul>
        </nav>



    );
}

export default HomeNav;