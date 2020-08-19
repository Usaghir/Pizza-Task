import React from 'react';
import MainTopLeft from '../imgs/HomeMain.jpg';
import './Component.css';

function Home() {
  return (
    <div className="mt-5 pt-5">
      <div className="container pt-5 mt-5 d-flex justify-content-center g-font">
        <div class="card w-75 ">
          <div class="card-body main-left" style={{ backgroundImage: `url(${MainTopLeft})` }}>
            <h5 class="main-left">HIGH QUALITY INGREDIENTS</h5>
            <h3 class="">HEALTHY & DELICIOUS</h3>
            <p class="card-text">Will be with you with just a click of a button.</p>
            <a href="#" class="btn btn-primary">
              Choose
            </a>
          </div>
        </div>

        <div class="pl-3 w-25 ">
          <div class="card w-100 ">
            <div class="card-body">
              <h5 class="card-title">Fast Delivery</h5>
              <p class="card-text">Get the delivery in your door step with in an hour.</p>
            </div>
          </div>
          <div class="card w-100 ">
            <div class="card-body">
              <h5 class="card-title">Bulk Orders</h5>
              <p class="card-text">Customers can book orders for events and ceremonies.</p>
            </div>
          </div>
          <div class="card w-100 ">
            <div class="card-body">
              <h5 class="card-title">Free Delivery</h5>
              <p class="card-text">Free delivery for customers on all orders above 100.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
