import React, { useContext } from 'react';
import { ProductContext } from '../global/ProductContext';
import { CartContext } from '../global/CartContext';

const Products = () => {
  const { products } = useContext(ProductContext);

  const { dispatch } = useContext(CartContext);

  return (
    <div className="container d-flex mt-5 justify-content-center">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="mr-5 ">
            <div>
              <img
                src={product.image}
                alt="not found"
                className="mt-3 rounded"
                width="170"
                height="170"
              />
            </div>
            <div width="170">
              <h6 className="font-weight-bold">{product.name}</h6>
              <div className=" mt-2">€{product.price}.00</div>
              <div className=" mt-2" style={{ width: 170 }}>
                {product.description}
              </div>
            </div>
            <button
              className="btn mt-2"
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

export default Products;
