import React, { useContext } from 'react';
import { CartContext } from '../global/CartContext';
import { Link } from 'react-router-dom';

const Cart = (cartToggle) => {
  const { dispatch, shoppingCart, totalPrice, qty } = useContext(CartContext);

  return (
    <div className="container mt-5 justify-content-center">
      <div className="card mt-5 ">
        {shoppingCart.length > 0
          ? shoppingCart.map((cart) => (
              <div className="card-body ml-5 mt-3 mb-3" key={cart.id}>
                <span>
                  <img className="mr-3 mt-3 rounded" width="150" src={cart.image} alt="not found" />
                </span>
                <span className="mr-3 " width="100">
                  {cart.name}
                </span>
                <span className="mr-3">{cart.price}.00</span>

                <button
                  className="mr-3 btn-sm"
                  onClick={() => dispatch({ type: 'DEC', id: cart.id, cart })}
                >
                  <i className="fas fa-minus"></i>
                </button>
                <span className="mr-3">{cart.qty}</span>
                <button
                  className="mr-3 btn-sm"
                  onClick={() => dispatch({ type: 'INC', id: cart.id, cart })}
                >
                  <i className="fas fa-plus"></i>
                </button>
                <span className="mr-3">${cart.price * cart.qty}</span>
                <span onClick={() => dispatch({ type: 'DEL', id: cart.id, cart })}>
                  <i className="fas fa-trash-alt"></i>
                </span>
              </div>
            ))
          : 'sorry empty'}
      </div>
      {shoppingCart.length > 0 ? (
        <div className="card mt-3 justify-content-between align-items-center ">
          <h5 className="card-header">Cart Summary</h5>
          <div className="card-body">
            <div className="row">
              <h6 className="card-title mr-5">Total QTY</h6>
              <h6 className="card-title">{qty}</h6>
            </div>

            <div className="row">
              <h6 className="card-title mr-3">Total Price</h6>
              <h6 className="card-title badge badge-pill badge-success mr-3">€{totalPrice}.00</h6>
              <h6 className="card-title badge badge-pill badge-success mr-3">
                ${(totalPrice * 1.13).toFixed(2)}
              </h6>
            </div>

            <div>
              <div onClick={cartToggle}>
                <Link to="/order">
                  <button className="btn btn-primary mt-3">Click to Order</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Cart;
