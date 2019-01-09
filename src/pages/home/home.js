import React, { Component } from 'react';
import roadPic from '../../images/carblurryroad-comp.jpg';
import Hero from '../../components/hero';
import HomeNav from '../../components/home-nav';
class Home extends Component {
    render() {
        return (
            <div>
                <HomeNav></HomeNav>
                <Hero img = {roadPic} content = {[{type:'heading', text:'I can\'t believe it\'s free!'},
                {type:'paragraph', 
                text:'That\'s right, we at CARS have an amazing network of volunteer mechanics and operate completely through charitable donations.'}]}></Hero>
            </div>
        );
    }
}

export default Home;