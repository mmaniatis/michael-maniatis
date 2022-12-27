import React, { Component } from 'react';
import './LandingPage.css';
import mainLogo from '../photos/software-2.png';
import codingLogo from '../photos/coding.png';
import softwareLogo from '../photos/web-development.png';
import Contact from './Contact';

class LandingPage extends Component {
    render() {
        
        return <div className="landing-container">
            <div className="landing-top">
                <span className="text">Helping Local Businesses Build <br /> Their Software</span>  
                <img className="landing-image" src={mainLogo} height="200px" width="400px"/>
            </div>


            
            <div className="landing-middle-expertise">
                <div className="landing-middle-expertise-item">
                    <img className="site-image" src={codingLogo} height="150px" width="200px"/>
                    <span className="expertise-header">Software Consultation</span>
                </div>

                <div className="landing-middle-expertise-item">
                    <img src={codingLogo} height="150px" width="200px"/>
                    <span className="expertise-header">Client First Support</span>
                </div>

                <div className="landing-middle-expertise-item">

                    <img src={codingLogo} height="150px" width="200px"/>
                    <span className="expertise-header">Communication</span>
                </div>

                <div className="landing-middle-expertise-item">

                    <img src={codingLogo} height="150px" width="200px"/>
                    <span className="expertise-header">Resolving bottlenecks</span>
                </div>

                <div className="landing-middle-expertise-item">

                    <img src={codingLogo} height="150px" width="200px"/>
                    <span className="expertise-header">Technology Support</span>
                </div>
            </div>

            <div className="landing-contact">
                <Contact />
            </div>

            <div className="landing-footer">
                <a href="https://www.flaticon.com/free-icons/development" title="development icons">Development icons created by Freepik - Flaticon</a>

            </div>
        </div>;
    }
}

export default LandingPage;