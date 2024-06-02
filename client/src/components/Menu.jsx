import React, { useContext } from 'react';
import { ProductContext } from '../global/ProductContext.jsx';
import { CartContext } from '../global/CartContext.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css';

const Menu = () => {
  const { products } = useContext(ProductContext);
  const { dispatch } = useContext(CartContext);

  return (
    <div className='container menu-container py-5 my-5'>
      <div className=' p-5'>
        <div className='row justify-content-center'>
          {products.map((product) => (
            <div
              key={product.id}
              className='col-md-4 col-sm-6 mb-4 d-flex align-items-stretch'
            >
              <div className='card'>
                <img
                  src={product.image}
                  alt={product.name}
                  className='card-img-top'
                  style={{ height: '190px', objectFit: 'cover' }}
                />
                <div className='card-body text-center d-flex flex-column'>
                  <h5
                    className='card-title font-bebas'
                    style={{ color: '#318fb5' }}
                  >
                    {product.name}
                  </h5>
                  <p className='card-text'>€{product.price}.00</p>
                  <p className='card-text'>{product.description}</p>
                  <button
                    className='btn btn-primary atc-btn-col mt-auto font-bebas'
                    onClick={() => {
                      dispatch({
                        type: 'ADD_TO_CART',
                        id: product.id,
                        product,
                      });
                    }}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
