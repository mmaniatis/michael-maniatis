import { Component } from "react";

class SoftwareConsultation extends Component {
    
    render() {
        return <div className="container">
            <div className="subcontainer-multiple-items">
                <div className="subcontainer-item">
                    <h1>Creative Solutions</h1>

                    <p>
                        We've seen a lot in our careers, and have continously come up with solutions to complex problems.
                        We will provide an indepth analysis, and quickly come up with strategic and tactical solutions. 
                    </p>
                </div>

                <div className="subcontainer-item">
                    <h1>Partnership</h1>

                    <p>
                        When your current engineers need some outside help to meet deadlines, understand complex issues, or for any other reason you can count on us.
                        We have a lot of experience working with legacy systems, and excel at teamwork.
                    </p>
                </div>
            </div>
        </div>
    }
}

export default SoftwareConsultation;