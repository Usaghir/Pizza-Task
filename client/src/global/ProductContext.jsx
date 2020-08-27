import React, { createContext, useState } from 'react';
import Italian from '../images/Italian.jpeg';
import Mexican from '../images/Mexican.jpeg';
import Kebab from '../images/Kebab.jpeg';
import Mini from '../images/Mini.jpeg';
import Shrimps from '../images/Shrimps.jpeg';
import Spanish from '../images/Spanish.jpeg';
import Vegetable from '../images/Vegetable.jpeg';
import Pepperoni from '../images/Pepperoni.jpeg';
export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [products] = useState([
    {
      id: 1,
      name: 'Italian Pizza',
      price: 25,
      image: Italian,
      description: 'BBQ sauce, mozzarella, red onion, pepper and beef.',
    },
    {
      id: 2,
      name: 'Mexican Pizza',
      price: 20,
      image: Mexican,
      description: 'Garlic, tomato sauce, mozzarella, chicken and jalapeños.',
    },
    {
      id: 3,
      name: 'Kebab Pizza',
      price: 15,
      image: Kebab,
      description: 'Mozzarella, kebab meat, jalapeños, bell pepper and red onion.',
    },
    {
      id: 4,
      name: 'Mini Pizza',
      price: 10,
      image: Mini,
      description: 'Mozzarella, pepperoni, beef, mushrooms, peppers.',
    },
    {
      id: 5,
      name: 'Shrimps Pizza',
      price: 30,
      image: Shrimps,
      description: 'Garlic seasoned tomato, mozzarella, basil and shrimp.',
    },
    {
      id: 6,
      name: 'Spanish Pizza',
      price: 20,
      image: Spanish,
      description: 'Tomato sauce, mozzarella, cocktail tomatoes, basil.',
    },
    {
      id: 7,
      name: 'Vegetable Pizza',
      price: 15,
      image: Vegetable,
      description: 'Tomato sauce, mozzarella, anion and bolognese sauce.',
    },
    {
      id: 8,
      name: 'Pepperoni Pizza',
      price: 20,
      image: Pepperoni,
      description: 'Mozzarella, pepperoni, olives, cocktail tomatoes and pepper.',
    },
  ]);

  return (
    <ProductContext.Provider value={{ products: [...products] }}>
      {props.children}
    </ProductContext.Provider>
  );
};
export default ProductContextProvider;
