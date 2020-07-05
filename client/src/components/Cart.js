import React, { useContext } from 'react';
import { CartContext } from '../global/CartContext';

const Cart = () => {
  const { shoppingCart, totalPrice, qty, dispatch } = useContext(CartContext);

  return (
    <div>
      <div>
        {shoppingCart.length > 0
          ? shoppingCart.map((cart) => (
              <div key={cart.id}>
                <span>
                  <img className="mr-3 mt-5 ml-5" width="100" src={cart.image} alt="not found" />
                </span>
                <span className="mr-3">{cart.name}</span>
                <span className="mr-3">{cart.price}.00</span>
                <button
                  className="mr-3 btn-sm"
                  onClick={() => dispatch({ type: 'INC', id: cart.id, cart })}
                >
                  <i className="fas fa-plus"></i>
                </button>
                <span className="mr-3">${cart.qty}</span>
                <button
                  className="mr-3 btn-sm"
                  onClick={() => dispatch({ type: 'DEC', id: cart.id, cart })}
                >
                  <i className="fas fa-minus"></i>
                </button>
                <span className="mr-3">${cart.price * cart.qty}</span>
                <span onClick={() => dispatch({ type: 'DEL', id: cart.id, cart })}>
                  <i className="fas fa-trash-alt"></i>
                </span>
              </div>
            ))
          : 'sorry empty'}
      </div>
    </div>
  );
};

export default Cart;
