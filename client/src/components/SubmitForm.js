import React, { Component } from 'react';

import axios from 'axios';

class SubmitForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      address: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post('http://localhost:5000', this.state)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        alert(err);
      });
  };

  render() {
    const { userId, title, body } = this.state;
    return (
      <div className="container mt-5 pt-5">
        <form className="card mt-5 pr-5 pl-5" onSubmit={this.submitHandler}>
          <div className="form-row mt-5">
            <div className="form-group col-md-6">
              <label>Email</label>
              <input
                type="email"
                className="form-control input-group-append"
                id="inputEmail4"
                placeholder="Email"
                value={this.email}
                onChange={this.changeHandler}
              ></input>
            </div>
            <div className="form-group col-md-6">
              <label>Password</label>
              <input
                type="password"
                className="form-control input-group-append"
                id="inputPassword4"
                placeholder="Password"
                value={this.password}
                onChange={this.changeHandler}
              ></input>
            </div>
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              value={this.address}
              onChange={this.changeHandler}
            ></input>
          </div>
          <div className="form-group">
            <label>Address 2</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
              value={this.address2}
              onChange={this.changeHandler}
            ></input>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>City</label>
              <input
                type="text"
                className="form-control"
                id="inputCity"
                value={this.city}
                onChange={this.changeHandler}
              ></input>
            </div>
            <div className="form-group col-md-4">
              <label>State</label>
              <select id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label>Zip</label>
              <input
                type="text"
                className="form-control"
                id="inputZip"
                value={this.zip}
                onChange={this.changeHandler}
              ></input>
            </div>
          </div>
          <button type="submit" className="btn btn-primary mb-3">
            Complete order and Pay $200 <div></div>
          </button>
        </form>
      </div>
    );
  }
}

export default SubmitForm;

{
  /* <div className="form-group mt-5">
        <form className="card mt-5" onSubmit={this.submitHandler}>
          <div></div>
          <div className="form-group">
            <input type="text" name="userId " value={userId} onChange={this.changeHandler}></input>
          </div>
          <div className="form-group">
            <input type="text" name="title" value={title} onChange={this.changeHandler}></input>
          </div>
          <div className="form-group">
            <input type="text" name="body" value={body} onChange={this.changeHandler}></input>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div> */
}
