import React from 'react';
import { Link } from 'react-router-dom';
import MainTopLeft from '../images/HomeMain.jpg';
import './Component.css';

function Home() {
  return (
    <div className="mt-5 pt-5 mb-5 pb-5" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container pt-5 mt-5 d-flex justify-content-center">
        <div className="card  wid">
          <div className="card-body main-left" style={{ backgroundImage: `url(${MainTopLeft})` }}>
            <h5 className="main-left font-bebas" style={{ color: '#af4448' }}>
              HIGH QUALITY INGREDIENTS
            </h5>
            <h3 className="">HEALTHY & DELICIOUS</h3>
            <p className="card-text font-weight-bold">Will be with you with just a few clicks.</p>
            <Link to="/Menu" className=" ">
              <button className="btn font-bebas" style={{ background: '#318fb5' }}>
                Choose
              </button>
            </Link>
          </div>
        </div>
        <div className="pl-3 w-25 disp-right-box">
          <div className="card w-100 " style={{ background: '#D2D4D3' }}>
            <div className="card-body">
              <h5 className="card-title font-bebas" style={{ color: '#af4448' }}>
                Fast Delivery
              </h5>
              <p className="card-text">Get the delivery in your door step with in an hour.</p>
            </div>
          </div>
          <div className="card w-100 " style={{ background: '#D2D4D3' }}>
            <div className="card-body">
              <h5 className="card-title font-bebas" style={{ color: '#af4448' }}>
                Fast Delivery
              </h5>
              <p className="card-text">Customers can book orders for events and ceremonies.</p>
            </div>
          </div>
          <div className="card w-100 " style={{ background: '#D2D4D3' }}>
            <div className="card-body">
              <h5 className="card-title font-bebas" style={{ color: '#af4448' }}>
                Fast Delivery
              </h5>
              <p className="card-text">
                Customer will get the number of calories present in each of our product.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-center ">
        <div className=" card w-100 disp-bot-box" style={{ background: '#D2D4D3' }}>
          <div className="card-body ">
            <h5 className="card-title font-bebas" style={{ color: '#af4448' }}>
              Fast Delivery
            </h5>
            <p className="card-text">Get the delivery in your door step with in an hour.</p>
          </div>
        </div>
        <div className="card w-100 ml-3 disp-bot-box">
          <div className="card-body " style={{ background: '#D2D4D3' }}>
            <h5 className="card-title font-bebas" style={{ color: '#af4448' }}>
              Bulk Orders Offer
            </h5>
            <p className="card-text">Customers can book orders for events and ceremonies.</p>
          </div>
        </div>
        <div className="card w-100 ml-3 disp-bot-box">
          <div className="card-body" style={{ background: '#D2D4D3' }}>
            <h5 className="card-title font-bebas" style={{ color: '#af4448' }}>
              Free Delivery
            </h5>
            <p className="card-text">Free delivery for customers on all orders above 100 SEK.</p>
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-center">
        <div className="card w-100" style={{ background: '#D2D4D3' }}>
          <div className="card-body ">
            <h5 className="card-title font-bebas" style={{ color: '#af4448' }}>
              Calories count for all products{' '}
            </h5>
            <p className="card-text">
              Customer will get the number of calories present in each of our product.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
