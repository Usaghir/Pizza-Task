import React, { useContext, useState } from 'react';
import { CartContext } from '../global/CartContext.jsx';

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
    submitMessage: false,
  });

  const changeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post('/order/', {
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
          total: 0,
        });
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div style={{ backgroundColor: '#F7FFF7' }}>
      <div className="container w-50 " id="contact">
        <h1 className="  font-weight-bold pt-5">Enter Detail</h1>
        <div className="mb-5"></div>
        <form className="" style={{ background: '#F7FFF7' }} onSubmit={submitHandler}>
          <div className="form-row " style={{ background: '#F7FFF7' }}>
            <div className="form-group  col-md-6">
              <input
                type="text"
                className="form-control  border-0 pl-3"
                style={{ backgroundColor: '#474853', color: '#f7ffff', boxSizing: 'border-box' }}
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
                style={{ background: '#474853', color: '#f7ffff', boxSizing: 'border-box' }}
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
                style={{ background: '#474853', color: '#f7ffff', boxSizing: 'border-box' }}
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
                style={{ background: '#474853', color: '#f7ffff', boxSizing: 'border-box' }}
                id="inputEmail4"
                placeholder="Phone"
                value={state.phoneNumber}
                onChange={changeHandler}
                name="phoneNumber"
              ></input>
            </div>
            <div className="form-group col-md-6">
              <input
                type="text"
                className="form-control  border-0 pl-3 "
                style={{ background: '#474853', color: '#f7ffff', boxSizing: 'border-box' }}
                id="inputEmail4"
                placeholder="City"
                value={state.city}
                onChange={changeHandler}
                name="city"
                required
              ></input>
            </div>

            <div className="form-group col-md-6">
              <input
                type="text"
                className="form-control  border-0 pl-3 "
                style={{ background: '#474853', color: '#f7ffff', boxSizing: 'border-box' }}
                id="inputEmail4"
                placeholder="Post Code"
                value={state.postcode}
                onChange={changeHandler}
                name="postcode"
                required
              ></input>
            </div>

            <div className="form-group col-md-6 ">
              <input
                type="text"
                className="form-control  border-0 pl-3 "
                style={{ background: '#474853', color: '#f7ffff', boxSizing: 'border-box' }}
                id="inputEmail4"
                placeholder="Address"
                value={state.address}
                onChange={changeHandler}
                name="address"
                required
              ></input>
            </div>
            <div className="form-group col-md-6 ">
              <input
                type="text"
                className="form-control  border-0 pl-3 text-light"
                style={{ background: '#474853', boxSizing: 'border-box' }}
                value={(1.375 * totalPrice).toFixed(2) + ' €'}
                name="price"
                readOnly
              ></input>
            </div>
            <div className="form-group col ">
              <input
                type="text"
                className="form-control  border-0 pl-3 "
                style={{ background: '#474853', color: '#f7ffff', boxSizing: 'border-box' }}
                id="inputEmail4"
                placeholder="Note for the delivery"
                value={state.other}
                onChange={changeHandler}
                name="other"
              ></input>
            </div>
          </div>
          {state.submitMessage ? (
            <div className="form-group ">
              <div
                className="form-control  border-0 pl-3 "
                style={{ background: '#86b3d1', boxSizing: 'border-box' }}
              >
                Thanks for placing the order and soon you will get your order.
              </div>
            </div>
          ) : (
            ''
          )}
          <div className="form-group">
            <button type="submit" className="btn  w-25 mb-2 " style={{ background: '#318fb5' }}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitForm;
