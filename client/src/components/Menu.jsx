import React, { useContext } from 'react';
import { ProductContext } from '../global/ProductContext.jsx';
import { CartContext } from '../global/CartContext.jsx';
import './Component.css';

const Menu = () => {
  const { products } = useContext(ProductContext);

  const { dispatch } = useContext(CartContext);

  return (
    <div className="container d-flex mt-5 pt-5 mb-5 pb-5 justify-content-center">
      <div className="card mt-5 pt-5" style={{ background: '#D2D4D3' }}>
        <div className="row w-100 ">
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
                <h6 className="font-weight-bold font-bebas" style={{ color: '#af4448' }}>
                  {product.name}
                </h6>
                <div className=" mt-2">€{product.price}.00</div>
                <div className=" mt-2" style={{ width: 170 }}>
                  {product.description}
                </div>
              </div>
              <button
                className="btn mt-2 mb-4 w-100 font-bebas"
                style={{ background: '#318fb5' }}
                onClick={() => {
                  dispatch({ type: 'ADD_TO_CART', id: product.id, product });
                }}
              >
                ADD TO CART
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
