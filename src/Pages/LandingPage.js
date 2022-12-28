import React, { Component } from 'react';
import './LandingPage.css';
import mainLogo from '../photos/networking.png';
import softwareConsultLogo from '../photos/saas.png';
import clientSupport from '../photos/meeting.png';
import communication from '../photos/analysis.png';
import Contact from './Contact';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
    render() {
        
        return <div className="container">
            <div className="subcontainer-multiple-items">
                <span className="text">Helping Local Businesses Build <br /> Their Software</span>  
                <img className="landing-image" src={mainLogo} height="300px" width="300px"/>
            </div>

            <div className="subcontainer-1-items">
                <div className="michael-man-blurb">
                    <span>From new websites and automating daily business tasks to new features to your existing software, Michael Man Consulting will always deliver.</span>
                </div>
            </div>



            <div className="subcontainer-multiple-items">
                <div className="landing-middle-expertise-item">
                    <Link to="/client-support">
                        <img src={clientSupport} height="150px" width="200px"/>
                        <span className="expertise-header">Client Support</span>
                        <span className="expertise-description">As our business partner & teammate we will work with you to address any questions and concerns. 24/7 support from the developer who built the software directly.</span>
                    </Link>

                </div>

                <div className="landing-middle-expertise-item">
                    <Link to="/software-development">
                        <img className="site-image" src={softwareConsultLogo} height="150px" width="200px"/>
                        <span className="expertise-header">Software Development</span>
                        <span className="expertise-description">We will leverage our years of professional experience to ensure your projects are completed quickly and correctly.</span>
                    </Link>
                </div>
            
                <div className="landing-middle-expertise-item">
                    <Link to="/software-consultation">
                        <img src={communication} height="150px" width="200px"/>
                        <span className="expertise-header">Software Consultation</span>
                        <span className="expertise-description">Our experts can work with your current Software Engineers, bringing our vast experience to the table to identify solutions.</span>
                    </Link>

                </div>

                {/* <div className="landing-middle-expertise-item">

                    <img src={bottlenecks} height="150px" width="200px"/>
                    <span className="expertise-header">Automate Repetitive Tasks</span>
                    <span className="expertise-description">Schedule a free call with our Engineers to discuss daily business routines. We will come up with an automation strategy for you so that you can focus on growing your business.</span>

                </div> */}

                {/* <div className="landing-middle-expertise-item">

                    <img src={training} height="150px" width="200px"/>
                    <span className="expertise-header">Train With Us</span>
                    <span className="expertise-description">Learn first hand about how to build software, Microsoft Azure, AWS, and more.</span>

                </div>

                <div className="landing-middle-expertise-item">

                    <img src={tuneups} height="150px" width="200px"/>
                    <span className="expertise-header">Software Tuning</span>
                    <span className="expertise-description"></span>

                </div> */}
            </div>

            <div className="landing-contact">
                <Contact />
            </div>

            <div className="landing-footer">
            <small>&copy; Copyright 2023, Michael Man Corporation</small>
            <small>
            <br/>
            <a href="https://www.flaticon.com/free-icons/teamwork" title="teamwork icons">Teamwork icons created by Becris - Flaticon</a>, 
            <a href="https://www.flaticon.com/free-icons/saas" title="saas icons">Saas icons created by Flat Icons - Flaticon</a>, 
            <a href="https://www.flaticon.com/free-icons/training" title="training icons">Training icons created by Freepik - Flaticon</a>,
            <a href="https://www.flaticon.com/free-icons/course" title="course icons">Course icons created by Freepik - Flaticon</a>,
            <a href="https://www.flaticon.com/free-icons/automation" title="automation icons">Automation icons created by Eucalyp - Flaticon</a>,
            <a href="https://www.flaticon.com/free-icons/prototype" title="prototype icons">Prototype icons created by wanicon - Flaticon</a>
            </small>
            </div>
        </div>;
    }
}

export default LandingPage;