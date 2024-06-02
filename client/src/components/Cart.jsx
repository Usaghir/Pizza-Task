import React, { useContext } from 'react';
import { CartContext } from '../global/CartContext.jsx';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cart.css';

const Cart = () => {
  const { dispatch, shoppingCart, totalPrice } = useContext(CartContext);

  return (
    <div className="container pt-5 my-5 py-5">
      <ul className="list-group my-5">
        {shoppingCart.length > 0 ? (
          shoppingCart.map((product) => (
            <li className="list-group-item d-flex align-items-center justify-content-between p-5 flex-wrap" key={product.id}>
              <img className=" mb-3 rounded" width="150" src={product.image} alt="not found" />
              <span className=" product-name font-bebas text-danger">{product.name}</span>
              <span className="">${(1 * product.price).toFixed(2)}</span>
              <div className="d-flex align-items-center m-2">
                <button className="btn btn-sm plus-min-btns" onClick={() => dispatch({ type: 'DEC', id: product.id })}>
                  <i className="fas fa-minus"></i>
                </button>
                <span className="mx-2">{product.qty}</span>
                <button className="btn btn-sm plus-min-btns" onClick={() => dispatch({ type: 'INC', id: product.id })}>
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <span className="mr-3">${(product.price * product.qty).toFixed(2)}</span>
              <span onClick={() => dispatch({ type: 'DEL', id: product.id })} className="text-danger cursor-pointer">
                <i className="fas fa-trash-alt"></i>
              </span>
            </li>
          ))
        ) : (
          <div className="card mb-4 mt-5 text-center">
            <div className="card-body">
              <h5 className="card-header bg-danger text-white font-bebas">Thanks for visiting Topizza</h5>
              <p className="mt-5">Please note that your shopping cart is empty. Kindly choose any of the options from the top navigation bar.</p>
            </div>
          </div>
        )}
      </ul>
      {shoppingCart.length ? (
        <div className="card mt-3">
          <ul className="list-group list-group-flush ">
            <li className="list-group-item bg-danger text-light">
              <h4 className="font-weight-bold">Cart Summary</h4>
            </li>
            <li className="list-group-item bg-light">
              <div className="d-flex justify-content-between">
                <h6 className="font-bebas">Delivery (10%)</h6>
                <h6>€{(0.1 * totalPrice).toFixed(2)}</h6>
              </div>
            </li>
            <li className="list-group-item bg-light">
              <div className="d-flex justify-content-between">
                <h6 className="font-bebas">VAT (25%)</h6>
                <h6>€{(0.25 * totalPrice).toFixed(2)}</h6>
              </div>
            </li>
            <li className="list-group-item bg-light">
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="font-bebas">Total Price</h6>
                <div className="d-flex">
                  <h6 className="badge badge-pill bg-info text-dark mr-2">€{(1.375 * totalPrice).toFixed(2)}</h6>
                  <h6 className="badge badge-pill bg-info text-dark">${(1.16 * 1.375 * totalPrice).toFixed(2)}</h6>
                </div>
              </div>
            </li>
            <li className="list-group-item bg-light text-center">
              <Link to="/orderForm">
                <button className="btn app-btns font-bebas mt-4 mb-5">Click to Order</button>
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Cart;
