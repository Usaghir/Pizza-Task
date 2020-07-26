import React, { useContext } from 'react';
import { ProductContext } from '../global/ProductContext';
import { CartContext } from '../global/CartContext';
import './Component.css';

const Menu = () => {
  const { products } = useContext(ProductContext);

  const { dispatch } = useContext(CartContext);

  return (
    <div className="container d-flex mt-5 pt-5 justify-content-center g-font">
      <div className="row mt-5 w-100 border">
        {products.map((product) => (
          <div key={product.id} className="m-auto ">
            <div>
              <img
                src={product.image}
                alt="not found"
                className=" mt-4 rounded border"
                width="190"
                height="190"
              />
            </div>
            <div>
              <h6 className="font-weight-bold ">{product.name}</h6>
              <div className=" mt-2">€{product.price}.00</div>
              <div className=" mt-2" style={{ width: 170 }}>
                {product.description}
              </div>
            </div>
            <button
              className="btn btn-success mt-2 mb-4 w-100"
              onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.id, product })}
            >
              ADD TO CART
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
