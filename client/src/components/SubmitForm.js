import React, { useContext, useState } from 'react';
import { CartContext } from '../global/CartContext';

import axios from 'axios';

const SubmitForm = (Component) => {
  const { shoppingCart, totalPrice, qty } = useContext(CartContext);

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
    totalQty: qty,
    date: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
  });

  const changeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

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
        total_price: totalPrice,
        total_qty: qty,
        order_date:
          new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
      })
      .then((res) => {})
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
              value={state.name}
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
              value={state.name}
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
            required
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
              required
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
              required
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
          Complete Detail and Pay to finish the order €
          {1 *
            (
              ((10 / 100) * totalPrice * 1 + totalPrice * 1) * 1 * (25 / 100) +
              totalPrice * 1
            ).toFixed(2)}
        </button>
      </form>
    </div>
  );
};

export default SubmitForm;
