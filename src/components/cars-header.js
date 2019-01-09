import React from 'react';
import { Link } from "react-router-dom";

import './cars-header.scss';
function CarsHeader(props) {
        return (
            <div className = "header-wrapper">
            <header className = "global-header">
                <div className = "image-wrapper">
                    <Link to = "/">
                        <img src = {props.image} />
                    </Link>
                </div>
                <h1 className = "title">Christian Auto Repair Shop</h1>
            </header>
            <div className = "header-offset"></div>
            </div>
            

            
        );
}

export default CarsHeader;