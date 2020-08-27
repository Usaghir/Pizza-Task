import React, { useState } from 'react';
import axios from 'axios';
import './Component.css';

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
      .post('/send', {
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
    <div className="mt-5 pt-5 mb-5 pb-5" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container mt-5 pt-5 w-50 " id="contact">
        <h1 className="  font-weight-bold mb-5 pb-5">CONTACT</h1>

        <form className="" style={{ background: '#FFFFFF' }} onSubmit={submitHandler}>
          <div className="form-row " style={{ background: '#FFFFFF' }}>
            <div className="form-group  col-md-6">
              <input
                type="text"
                className="form-control  border-0 pl-3"
                style={{ backgroundColor: '#474853', color: '#FFFFFF', boxSizing: 'border-box' }}
                id="inputEmail4"
                placeholder="First Name"
                value={state.firstName}
                onChange={changeHandler}
                name="firstName"
                required
              ></input>
            </div>
            <div className="form-group col-md-6">
              <input
                type="text"
                className="form-control  border-0 pl-3"
                style={{ background: '#474853', color: '#FFFFFF', boxSizing: 'border-box' }}
                id="inputEmail4"
                placeholder="Last Name"
                value={state.lastName}
                onChange={changeHandler}
                name="lastName"
                required
              ></input>
            </div>
            <div className="form-group col-md-6">
              <input
                type="text"
                className="form-control  border-0 pl-3 "
                style={{ background: '#474853', color: '#FFFFFF', boxSizing: 'border-box' }}
                id="inputEmail4"
                placeholder="Email"
                value={state.email}
                onChange={changeHandler}
                name="email"
                required
              ></input>
            </div>
            <div className="form-group col-md-6">
              <input
                type="text"
                className="form-control  border-0 pl-3 "
                style={{ background: '#474853', color: '#FFFFFF', boxSizing: 'border-box' }}
                id="inputEmail4"
                placeholder="Phone"
                value={state.phoneNumber}
                onChange={changeHandler}
                name="phoneNumber"
              ></input>
            </div>

            <div className="form-group w-100 col ">
              <textarea
                className="form-control border-0 rounded-0 "
                style={{ background: '#474853', color: '#FFFFFF', boxSizing: 'border-box' }}
                id="inputEmail4 message"
                name="message"
                value={state.message}
                onChange={changeHandler}
                placeholder="Enter your massage for us here. We will get back to you within 2 business days."
                rows="7"
              ></textarea>
            </div>
          </div>
          {state.submitMessage ? (
            <div className="form-group ">
              <div
                className="form-control  border-0 pl-3 "
                style={{ background: '#86b3d1', boxSizing: 'border-box' }}
              >
                Thanks for sending the message we will get back to you as soon as possible.
              </div>
            </div>
          ) : (
            ''
          )}
          <div className="form-group">
            <button
              type="submit"
              className="btn font-bebas  w-25"
              style={{ background: '#318fb5' }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
