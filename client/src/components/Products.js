import React, { useContext } from 'react';
import { ProductContext } from '../global/ProductContext';

const Products = () => {
  const { products } = useContext(ProductContext);
  console.log(products);

  return (
    <div className="container d-flex flex-row mt-5">
      {products.map((product) => (
        <div key={product.id}>
          <div>
            <img src={product.image} alt="not found" width="200" />
          </div>
          <div>
            <div>{product.name}</div>
            <div>{product.price}</div>
            <div>{product.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
