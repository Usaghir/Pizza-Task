import React, { useContext, useState } from 'react';
import { CartContext } from '../global/CartContext';

import axios from 'axios';
import { Link } from 'react-router-dom';

const SubmitForm = (Component) => {
  const { dispatch, shoppingCart, totalPrice, qty } = useContext(CartContext);
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
    postcode: '',
    other: '',
    shoppingCartInfo: shoppingCart,
    total: totalPrice,
    quantity: qty,
  });

  const changeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('form Submitted');
    axios
      .post('http://localhost:5000/order/', {
        first_name: state.firstName,
        last_name: state.lastName,
        email: state.email,
        phone: state.phoneNumber,
        address: state.address,
        city: state.city,
        post_code: state.postcode,
        other_info: state.other,
        orders_info: state.shoppingCartInfo,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="container mt-5 pt-5">
      <form className="card mt-5 pr-5 pl-5" onSubmit={submitHandler}>
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
              value={state.name}
              onChange={changeHandler}
              name="firstName"
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
              value={state.name}
              onChange={changeHandler}
              name="lastName"
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
        <div className="form-group">
          <label className="row">
            Address<div className="text-danger"> *</div>
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            value={state.address}
            onChange={changeHandler}
            name="address"
          ></input>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label className="row">
              City<div className="text-danger"> *</div>
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              value={state.city}
              onChange={changeHandler}
              name="city"
            ></input>
          </div>

          <div className="form-group col-md-6">
            <label className="row">
              Postcode<div className="text-danger"> *</div>
            </label>
            <input
              type="text"
              className="form-control"
              id="post-code"
              value={state.zip}
              onChange={changeHandler}
              name="postcode"
            ></input>
          </div>
          <div className="form-group">
            <label className="row">
              Any note for delivery<small className="text-muted"> (optional)</small>
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              value={state.other}
              onChange={changeHandler}
              name="other"
            ></input>
          </div>
        </div>

        <button type="submit" className="btn btn-primary mb-3 ">
          Complete order and Pay $ {state.total + 2}
        </button>
      </form>
    </div>
  );
};

export default SubmitForm;

{
  /* <div className="form-group mt-5">
        <form className="card mt-5" onSubmit={submitHandler}>
          <div></div>
          <div className="form-group">
            <input type="text" name="userId " value={userId} onChange={changeHandler}></input>
          </div>
          <div className="form-group">
            <input type="text" name="title" value={title} onChange={changeHandler}></input>
          </div>
          <div className="form-group">
            <input type="text" name="body" value={body} onChange={changeHandler}></input>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div> */
}
