import React, { useContext } from 'react';
import { CartContext } from '../global/CartContext';
import { Link } from 'react-router-dom';
import './Component.css';

const Cart = () => {
  const { dispatch, shoppingCart, totalPrice, qty } = useContext(CartContext);

  return (
    <div className="card mt-3 justify-content-between align-items-center ">
      <ul className="list-group-flush mt-5 ">
        {shoppingCart.length > 0 ? (
          shoppingCart.map((product) => (
            <li className="  list-group-item ml-5 mt-3 mb-3" key={product.id}>
              <span>
                <img
                  className="mr-3 mt-3 rounded"
                  width="150"
                  src={product.image}
                  alt="not found"
                />
              </span>
              <span className="mr-3 product-name">{product.name}</span>
              <span className="mr-3">${product.price}.00</span>

              <button
                className="mr-3 btn-sm"
                onClick={() => dispatch({ type: 'DEC', id: product.id })}
              >
                <i className="fas fa-minus"></i>
              </button>
              <span className="mr-3">{product.qty}</span>
              <button
                className="mr-3 btn-sm"
                onClick={() => dispatch({ type: 'INC', id: product.id })}
              >
                <i className="fas fa-plus"></i>
              </button>
              <span className="mr-3">${product.price * product.qty}</span>
              <span onClick={() => dispatch({ type: 'DEL', id: product.id })}>
                <i className="fas fa-trash-alt"></i>
              </span>
            </li>
          ))
        ) : (
          <div className=" mt-3 pt-3 pb-3 mb-3 justify-content-between align-items-center ">
            <ul className="list-group-flush mt-5 ">
              <li className="list-group-item">
                <h5 className="mt-5 pt-5">
                  Shopping cart is empty now kindly choose the pizzas again.
                </h5>
              </li>
            </ul>
          </div>
        )}
      </ul>
      {shoppingCart.length ? (
        <div className=" card ml-5 mt-3 justify-content-between align-items-center">
          <h5 className="">Cart Summary</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h6 className="card-title mr-5 product-name">VAT</h6>
              <h6 className="card-title product-name ">€{(totalPrice * 0.25).toFixed(2)}</h6>
            </li>
            <li className="list-group-item">
              <h6 className="card-title mr-5 product-name ">Delivery Charges</h6>
              <h6 className="card-title product-name">€{2.0}</h6>
            </li>

            <li className="list-group-item">
              <h6 className="card-title mr-3 product-name">Total Price</h6>
              <h6 className="card-title badge badge-pill product-name badge-success mr-3">
                €{totalPrice + 2}.00
              </h6>
              <h6 className="card-title badge badge-pill badge-success mr-3 product-name">
                ${(totalPrice * 1.13).toFixed(2) + 2.0}
              </h6>
            </li>

            <li className="list-group-item">
              <div className="">
                <Link to="/order">
                  <button className="btn  btn-primary mt-3 mb-3">Click to Order</button>
                </Link>
              </div>
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
