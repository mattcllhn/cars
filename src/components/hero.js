import React from 'react';
import './hero.scss';
function Hero(props) {
    return (
        <div className = "hero-container">
            <img className = "image" src = {props.img}/>
            <div className = "content-block">
            {props.content.map((cont, i)=>{
                if(cont.type == 'heading'){
                    return(
                        <h2 key = {i}>{cont.text}</h2>
                    );
                }else if (cont.type == 'paragraph'){
                    return(
                        <p key = {i}>{cont.text}</p>
                    );
                }else{
                    console.error('content.type must be either "heading" or "paragraph"');
                }
            })}
            </div>
                
        </div>



    );
}

export default Hero;