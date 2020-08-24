import React, { useState } from 'react';
import axios from 'axios';
function Contact() {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
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
        window.location = '/';
        res.render();
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="container mt-5 pt-5">
      <form className=" needs-validation card mt-5 pr-5 pl-5" onSubmit={submitHandler}>
        <div className="form-row mt-5">
          <div className="form-group col-md-6">
            <label className="row">
              First Name<div className="text-danger"> *</div>
            </label>
            <input
              type="text"
              className="form-control input-group-append"
              id="inputEmail4"
              placeholder="First Name"
              value={state.firstName}
              onChange={changeHandler}
              name="firstName"
              required
            ></input>
          </div>
          <div className="form-group col-md-6">
            <label className="row">
              Last Name<div className="text-danger"> *</div>
            </label>
            <input
              type="text"
              className="form-control input-group-append"
              id="inputEmail4"
              placeholder="Last Name"
              value={state.lastName}
              onChange={changeHandler}
              name="lastName"
              required
            ></input>
          </div>
          <div className="form-group col-md-6">
            <label className="row">
              Email<div className="text-danger"> *</div>
            </label>
            <input
              type="text"
              className="form-control input-group-append"
              id="inputEmail4"
              placeholder="Email"
              value={state.email}
              onChange={changeHandler}
              name="email"
              required
            ></input>
          </div>
          <div className="form-group col-md-6">
            <label className="row">
              Phone Number<small className="text-muted">(optional)</small>
            </label>
            <input
              type="text"
              className="form-control input-group-append"
              id="inputPassword4"
              placeholder="Phone Number"
              value={state.phoneNumber}
              onChange={changeHandler}
              name="phoneNumber"
            ></input>
          </div>
        </div>

        <div class="form-group">
          <div class="">
            <textarea
              class="form-control"
              id="message"
              name="message"
              placeholder="Enter your massage for us here. We will get back to you within 2 business days."
              value={state.message}
              onChange={changeHandler}
              rows="7"
            ></textarea>
          </div>
        </div>
        <button type="submit" className="btn btn-primary mb-3 ">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
