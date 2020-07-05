import React, { createContext, useState } from 'react';
import fish from '../imgs/fish.jpg';
import chicken from '../imgs/chicken.jpg';
import kebab from '../imgs/kebab.jpg';
import tikka from '../imgs/tikka.jpg';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [products] = useState([
    { id: 1, name: 'Fish Pizza', price: 100, image: fish, description: 'good' },
    { id: 2, name: 'Chicken Pizza', price: 200, image: chicken, description: 'good' },
    { id: 3, name: 'Kebab Pizza', price: 150, image: kebab, description: 'good' },
    { id: 4, name: 'Tikka Pizza', price: 250, image: tikka, description: 'good' },
  ]);

  return (
    <ProductContext.Provider value={{ products: [...products] }}>
      {props.children}
    </ProductContext.Provider>
  );
};
export default ProductContextProvider;
