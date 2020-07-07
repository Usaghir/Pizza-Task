import React from 'react';
import fish from '../imgs/fish.jpg';
import chicken from '../imgs/chicken.jpg';
import kebab from '../imgs/kebab.jpg';
import tikka from '../imgs/tikka.jpg';

export default function Home() {
  return (
    <div className="container d-flex flex-row mt-5">
      <div className="image ">
        <img src={fish} alt="" width="200" className="mr-5"></img>
        <h4>Fish Pizza</h4>
        <h5>$15</h5>
        <a href="#"> Add to cart</a>
      </div>
      <div className="image">
        <img src={chicken} alt="" width="200" className="mr-5"></img>
        <h4>Tikka Pizza</h4>
        <h5>$15</h5>
        <a href="#"> Add to cart</a>
      </div>
      <div className="image">
        <img src={kebab} alt="" width="200" className="mr-5"></img>
        <h4>Kebab Pizza</h4>
        <h5>$12</h5>
        <a href="#"> Add to cart</a>
      </div>
      <div className="image">
        <img src={tikka} alt="" width="200"></img>
        <h4>Chicken Pizza</h4>
        <h5>$15</h5>
        <a href="#"> Add to cart</a>
      </div>
    </div>
  );
}
