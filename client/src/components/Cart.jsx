import React, { useContext } from 'react';
import { CartContext } from '../global/CartContext.jsx';
import { Link } from 'react-router-dom';
import './Component.css';

const Cart = () => {
  const { dispatch, shoppingCart, totalPrice } = useContext(CartContext);

  return (
    <div className="card mb-0 pt-5 mt-5 pb-5 justify-content-between align-items-center ">
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
              <span className="mr-3 product-name font-bebas" style={{ color: '#af4448' }}>
                {product.name}
              </span>
              <span className="mr-3">${(1 * product.price).toFixed(2)}</span>

              <button
                className="mr-3 btn-sm"
                style={{ background: '#318fb5' }}
                onClick={() => dispatch({ type: 'DEC', id: product.id })}
              >
                <i className="fas fa-minus"></i>
              </button>
              <span className="mr-3">{product.qty}</span>
              <button
                className="mr-3 btn-sm"
                style={{ background: '#318fb5' }}
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
          <div className="card mb-4 pt-3 mt-5 center" style={{ background: '#D2D4D3' }}>
            <div className="card-body m-5 ">
              <h5
                className=" mb-2 card-header font-bebas "
                style={{ background: '#474853', color: '#FFFFFF' }}
              >
                Thanks for visiting Topizza
              </h5>

              <p className=" mt-5 card-text">
                Please note that your shopping cart is empty and kindly choose any of the option
                from the top navigation bar.
              </p>
            </div>
          </div>
        )}
      </ul>
      {shoppingCart.length ? (
        <div className=" card ml-5 mt-3 justify-content-between align-items-center">
          <ul className="list-group list-group-flush">
            <li style={{ background: '#474853' }}>
              <h4 className="font-weight-bold text-light w-100 pl-3">Cart Summary</h4>
            </li>
            <li className="list-group-item" style={{ background: '#D2D4D3' }}>
              <h6 className="card-title mr-5 product-name font-bebas" style={{ color: '#474853' }}>
                Delivery (10%)
              </h6>
              <h6 className="card-title product-name ">€{(0.1 * totalPrice).toFixed(2)}</h6>
            </li>
            <li className="list-group-item" style={{ background: '#D2D4D3' }}>
              <h6 className="card-title mr-5 product-name font-bebas" style={{ color: '#474853' }}>
                VAT (25%)
              </h6>
              <h6 className="card-title product-name">€{(0.275 * totalPrice).toFixed(2)}</h6>
            </li>

            <li className="list-group-item" style={{ background: '#D2D4D3' }}>
              <h6 className="card-title mr-3 product-name font-bebas" style={{ color: '#474853' }}>
                Total Price
              </h6>
              <h6
                className="card-title badge badge-pill product-name badge-info mr-3"
                style={{ background: '#474853' }}
              >
                € {(1.375 * totalPrice).toFixed(2)}
              </h6>
              <h6
                className="card-title badge badge-pill badge-info mr-3 product-name"
                style={{ background: '#474853' }}
              >
                ${(1.16 * 1.375 * totalPrice).toFixed(2)}
              </h6>
            </li>

            <li className="list-group-item" style={{ background: '#D2D4D3' }}>
              <div className="center">
                <Link to="/orderForm">
                  <button
                    className="btn  btn-primary mt-3 font-bebas mb-3"
                    style={{ background: '#318fb5' }}
                  >
                    Click to Order
                  </button>
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
