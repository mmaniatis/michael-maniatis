import { Component } from "react";

class SoftwareDevelopment extends Component {
    
    render() {
        return <div className="container">
            <div className="subcontainer-multiple-items">
                <div className="subcontainer-item">
                    <h1>Websites</h1>

                    <p>
                        We have vast experience with building mobile friendly & highly responsive websites, 
                        whether you need work done to your existing website or create a new website. We deliver the best product possible,
                        with the quickest time to market.
                    </p>

                </div>

                <div className="subcontainer-item">
                    <h1>Backend Processes</h1>

                    <p>
                        We are experts at working on high scale distributed systems. Regardless of what your project is, 
                        we can gaurentee to deliver correct and efficient software.
                    </p>
                </div>

                <div className="subcontainer-item">
                    <h1>Run The Engine</h1>

                    <p>
                        Sometimes all you need is for your system to get a tune up. As we know, software is complex. We
                        ensure that your maintence is done skillfully, and carefully. Whether it's scaling up your system,
                        fixing security issues, setting up disaster relief, or anything else - you can count on us.
                    </p>
                </div>
            </div>
        </div>
    }
}

export default SoftwareDevelopment;