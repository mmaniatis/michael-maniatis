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
          Please submit this forum and I will reply as soon as possible.
        </div>
  
        <div className="left-middle">
            <form onSubmit={this.formHandler}>
              <strong>Email:</strong> <br /> <input type="email" name="email" placeholder="me@example.com" /> <br />
              <strong>Name:</strong> <br /> <input type="text" name="name" placeholder="John Doe" /> <br />
              <strong>Reason:</strong> <br /> <input type="text" name="reason" placeholder="Consult, Tutoring, Work" /> <br />
              <button className="btn btn-primary">Submit</button>
            </form>
        </div>
  
      </div>
    );
  }
}

export default Contact;