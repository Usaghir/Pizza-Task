import React, { useContext } from 'react';
import { ProductContext } from '../global/ProductContext';
import { CartContext } from '../global/CartContext';

const Products = () => {
  const { products } = useContext(ProductContext);

  const { dispatch } = useContext(CartContext);

  return (
    <div className="container d-flex flex-row mt-5">
      {products.map((product) => (
        <div key={product.id}>
          <div>
            <img src={product.image} alt="not found" width="200" />
          </div>
          <div>
            <div>{product.name}</div>
            <div>${product.price}.00</div>
            <div>{product.description}</div>
          </div>
          <div
            className="btn"
            onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.id, product })}
          >
            add to cart
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
