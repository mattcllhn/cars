import React, { Component } from 'react';
import './schedule.scss';
import Hero from '../../components/hero';
import roadPic from '../../images/18oct-mechanical-breakdown-insurance-hero_large.jpg';
class Schedule extends Component {
    spawnEmail(){
        document.location = `mailto:test@cars.com?subject=cars test subject`;

    }
    render() {
        return (
            <div>
                <Hero img={roadPic} content={[{ type: 'heading', text: 'I can\'t believe it\'s free!' },
                {
                    type: 'paragraph',
                    text: 'That\'s right, we at CARS have an amazing network of volunteer mechanics and operate completely through charitable donations.'
                }]}></Hero>
                <p> test tesdlak;lkasd ldsf lsdk ljaslkdj fi  lksfdlk jasdflk j jsfdiojewlkj sldkj lsjk df oiuwe</p>
                <button onClick = {()=>{this.spawnEmail()}}>Email Us!</button>
            </div>
        );
    }
}

export default Schedule;