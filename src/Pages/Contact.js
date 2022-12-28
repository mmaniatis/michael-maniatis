import React, { Component } from 'react';
import './Contact.css'

class Contact extends Component {
  formHandler(e) {
    e.preventDefault();

    console.log(e.target.email.value);
  }

  render() {
    return (
      <div className="container">
        <div className="subcontainer-1-items">
          <span className="text"> Please fill this form out and we will respond as soon as possible.</span>
        </div>
        <div className="subcontainer-1-items">
            <form className="michael-man-form" onSubmit={this.formHandler}>
              <label className="form-label">Email Address</label> <br /> <input className="form-input-text" type="email" name="email" placeholder="me@example.com" /> <br />
              <label className="form-label">Full Name</label> <br /> <input className="form-input-text" type="text" name="name" placeholder="John Doe" /> <br />
              <label className="form-label">Describe the Project</label> <br /> <input className="form-input-text" type="text" name="reason" placeholder="Consult, Tutoring, Work" /> <br />
              <button className="button">Submit</button>
            </form>
        </div>
  
      </div>
    );
  }
}

export default Contact;