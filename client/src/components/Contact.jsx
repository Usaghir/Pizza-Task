import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';

function Contact() {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
    submitMessage: false,
  });

  const changeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post('/api/send', {
        first_name: state.firstName,
        last_name: state.lastName,
        email: state.email,
        phone: state.phoneNumber,
        message: state.message,
      })
      .then((res) => {
        setState({
          submitMessage: true,
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          message: '',
        });
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="container py-5 my-5 contact-container">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div className="card shadow-lg py-4 my-5">
            <div className="card-body">
              <h2 className=" text-center mb-4 pb-4">Contact Us</h2>
              <form onSubmit={submitHandler}>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="First Name"
                      value={state.firstName}
                      onChange={changeHandler}
                      name="firstName"
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="Last Name"
                      value={state.lastName}
                      onChange={changeHandler}
                      name="lastName"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      value={state.email}
                      onChange={changeHandler}
                      name="email"
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="phoneNumber">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phoneNumber"
                      placeholder="Phone"
                      value={state.phoneNumber}
                      onChange={changeHandler}
                      name="phoneNumber"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    value={state.message}
                    onChange={changeHandler}
                    placeholder="Enter your message for us here. We will get back to you within 2 business days."
                    rows="5"
                    required
                  ></textarea>
                </div>
                {state.submitMessage && (
                  <div className="alert alert-success mt-3">
                    Thanks for sending the message, we will get back to you as soon as possible.
                  </div>
                )}
                <button type="submit" className="btn sub-btn-col btn-block mt-4">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
