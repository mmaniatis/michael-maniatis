import { Component } from "react";

class ClientSupport extends Component {
    
    render() {
        return <div className="container">
            <div className="subcontainer-multiple-items">
                <div className="subcontainer-item">
                    <h1>Customer focused</h1>

                    <p>
                        We've worked on projects affecting anywhere from a dozen customers, to multiple million during our professional experience.
                        Your customers are our customers, and we take a huge pride in making sure our customers receive the best possible product.
                    </p>
                </div>

                <div className="subcontainer-item">
                    <h1>Communication</h1>

                    <p>
                        We believe the key to a successful project is communication. You will be involved every step of the way, and there will be no suprises.
                        Once the project is completed successfuly, the communication doesn't end there! We will continue to provide 24/7 support.
                    </p>
                </div>

                <div className="subcontainer-item">
                    <h1>Enhancements</h1>

                    <p>
                    No software is every in it's final state forever. We know software is expected to be improved upon, and as you 
                    come up with new features we will work together to add them.
                    </p>
                </div>
            </div>
        </div>
    }
}

export default ClientSupport;