import React, { createContext, useState } from 'react';
import Italian from '../images/Italian.jpeg';
import Mexican from '../images/Mexican.jpeg';
import Kebab from '../images/Kebab.jpeg';
import Mini from '../images/Mini.jpg';
import Shrimps from '../images/Shrimps.jpeg';
import Spanish from '../images/Spanish.jpeg';
import Vegetable from '../images/Vegetable.jpeg';
import Mixed from '../images/Mixed.jpeg';
import Green from '../images/Green.jpeg';
import Mince from '../images/Mince.jpeg';
import Egg from '../images/Egg.jpeg';
import Chilli from '../images/Chilli.jpeg';
import MiniCheese from '../images/Mini Cheese.jpeg';
import Tomato from '../images/Tomato.jpeg';
import Spinach from '../images/Spinach.jpeg';
import MixEgg from '../images/Mix Egg.jpeg';
import MixedVegi from '../images/Mixed Vegi.jpeg';
import PepperoniCheese from '../images/Pepperoni Cheese.jpeg';
import MixedMeat from '../images/Mixed Meat.jpeg';
import Smoked from '../images/Smoked.jpeg';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [products] = useState([
    {
      id: 1,
      name: 'Italian Pizza',
      price: 25,
      image: Italian,
      description: 'BBQ sauce, mozzarella, red onion, pepper and beef',
    },
    {
      id: 2,
      name: 'Mexican Pizza',
      price: 20,
      image: Mexican,
      description: 'Garlic, tomato sauce, mozzarella, chicken and jalapeños',
    },
    {
      id: 3,
      name: 'Kebab Pizza',
      price: 15,
      image: Kebab,
      description: 'Mozzarella, kebab meat, jalapeños, bell pepper and red onion',
    },
    {
      id: 4,
      name: 'Mini Pizza',
      price: 10,
      image: Mini,
      description: 'Mozzarella, pepperoni, beef, mushrooms, peppers',
    },
    {
      id: 5,
      name: 'Shrimps Pizza',
      price: 30,
      image: Shrimps,
      description: 'Garlic seasoned tomato, mozzarella, basil and shrimp',
    },
    {
      id: 6,
      name: 'Spanish Pizza',
      price: 20,
      image: Spanish,
      description: 'Tomato sauce, mozzarella, cocktail tomatoes, basil',
    },
    {
      id: 7,
      name: 'Vegetable Pizza',
      price: 15,
      image: Vegetable,
      description: 'Tomato sauce, mozzarella, anion and bolognese sauce',
    },
    {
      id: 8,
      name: 'Mixed Pizza',
      price: 30,
      image: Mixed,
      description: 'BBQ chicken, mozzarella, red onion, pepper and beef',
    },
    {
      id: 9,
      name: 'Mince Pizza',
      price: 20,
      image: Mince,
      description: 'Garlic, tomato sauce, mozzarella, beef mince and jalapeños',
    },
    {
      id: 10,
      name: 'Green Pizza',
      price: 15,
      image: Green,
      description: 'Mozzarella, salad, jalapeños, bell pepper and red onion',
    },
    {
      id: 11,
      name: 'Egg Pizza',
      price: 10,
      image: Egg,
      description: 'Mozzarella, pepperoni, egg, mushrooms, peppers',
    },
    {
      id: 12,
      name: 'Chilli Pizza',
      price: 30,
      image: Chilli,
      description: 'Garlic seasoned tomato, mozzarella, basil and chillies',
    },
    {
      id: 13,
      name: 'Mini Cheese Pizza',
      price: 15,
      image: MiniCheese,
      description: 'Tomato sauce, mozzarella, cocktail tomatoes, basil',
    },
    {
      id: 14,
      name: 'Tomato Pizza',
      price: 15,
      image: Tomato,
      description: 'Tomato sauce, tomato, mozzarella, anion and bolognese sauce',
    },
    {
      id: 15,
      name: 'Spinach Pizza',
      price: 20,
      image: Spinach,
      description: 'Mozzarella, spinach, olives, cocktail tomatoes and pepper.',
    },
    {
      id: 16,
      name: 'Mix Egg Pizza',
      price: 10,
      image: MixEgg,
      description: 'Mozzarella, Chicken, egg, mushrooms, peppers',
    },
    {
      id: 17,
      name: 'Mixed Vegi Pizza',
      price: 30,
      image: MixedVegi,
      description: 'Garlic seasoned tomato, mozzarella, basil and chillies',
    },
    {
      id: 18,
      name: 'Mixed Meat Pizza',
      price: 30,
      image: MixedMeat,
      description: 'Tomato sauce, chicken, beef, cocktail tomatoes, basil',
    },
    {
      id: 19,
      name: 'Pepperoni Cheese Pizza',
      price: 15,
      image: PepperoniCheese,
      description: 'Tomato sauce, tomato, mozzarella, anion and pepperoni',
    },
    {
      id: 20,
      name: 'Smoked Pizza',
      price: 20,
      image: Smoked,
      description: 'Mozzarella, spinach, smoked pepperoni and pepper',
    },
  ]);

  return (
    <ProductContext.Provider value={{ products: [...products] }}>
      {props.children}
    </ProductContext.Provider>
  );
};
export default ProductContextProvider;
