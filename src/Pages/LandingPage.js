import React, { Component } from 'react';
import './LandingPage.css'
import buildingSoftware from '../photos/building-software.png'

class LandingPage extends Component {
    render() {
        
        return <div className="landing-container">
            <div className="landing-top">
                <span className="text">Helping Local Businesses Build <br /> Their Software</span>  
            </div>

            <div className="landing-top-photo">
                <img src={buildingSoftware} height="400px" width="600px"/>
            </div>

        </div>;
    }
}

export default LandingPage;