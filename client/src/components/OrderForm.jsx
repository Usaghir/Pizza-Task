import React, { useContext, useState } from 'react';
import axios from 'axios';
import { CartContext } from '../global/CartContext.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './OrderForm.css';

const OrderForm = () => {
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
    submitMessage: false,
  });

  const changeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post('/api/order/', {
        first_name: state.firstName,
        last_name: state.lastName,
        email: state.email,
        phone: state.phoneNumber,
        address: state.address,
        city: state.city,
        post_code: state.postcode,
        other_info: state.other,
        orders_info: shoppingCart,
        total_price: totalPrice,
        total_qty: qty,
        order_date: new Date().toISOString().split('T')[0],
      })
      .then((res) => {
        setState({
          submitMessage: true,
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          address: '',
          city: '',
          postcode: '',
          other: '',
        });
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="container py-5 my-5 orderform-container">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div className="card shadow-lg p-4">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">Order Form</h1>
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
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      className="form-control "
                      id="city"
                      placeholder="City"
                      value={state.city}
                      onChange={changeHandler}
                      name="city"
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="postcode">Post Code</label>
                    <input
                      type="text"
                      className="form-control "
                      id="postcode"
                      placeholder="Post Code"
                      value={state.postcode}
                      onChange={changeHandler}
                      name="postcode"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      className="form-control "
                      id="address"
                      placeholder="Address"
                      value={state.address}
                      onChange={changeHandler}
                      name="address"
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="price">Price</label>
                    <input
                      type="text"
                      className="form-control "
                      id="price"
                      value={`${(1.375 * totalPrice).toFixed(2)} €`}
                      name="price"
                      readOnly
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="other">Note for the delivery</label>
                  <input
                    type="text"
                    className="form-control "
                    id="other"
                    placeholder="Note for the delivery"
                    value={state.other}
                    onChange={changeHandler}
                    name="other"
                  />
                </div>
                {state.submitMessage && (
                  <div className="alert alert-success mt-3">
                    Thanks for placing the order and soon you will get your order.
                  </div>
                )}
                <button type="submit" className="btn ord-btn btn-block mt-4">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
