import React, { Component } from 'react';
import './Contact.css'

class Contact extends Component {
  formHandler(e) {
    e.preventDefault();

    console.log(e.target.email.value);
  }

  render() {
    return (
      <div>
        <div className="top">
          Please submit this form and I will reply as soon as possible.
        </div>
  
        <div className="left-middle">
            <form onSubmit={this.formHandler}>
              <label className="form-label">Email Address</label> <br /> <input className="form-input-text" type="email" name="email" placeholder="me@example.com" /> <br />
              <label className="form-label">Name</label> <br /> <input className="form-input-text" type="text" name="name" placeholder="John Doe" /> <br />
              <label className="form-label">Reason</label> <br /> <input className="form-input-text" type="text" name="reason" placeholder="Consult, Tutoring, Work" /> <br />
              <button className="form-button">Submit</button>
            </form>
        </div>
  
      </div>
    );
  }
}

export default Contact;