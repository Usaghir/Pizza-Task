import React from 'react';
import { Link } from 'react-router-dom';
import MainTopLeft from '../images/HomeMain.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

function Home() {
  return (
    <div className="home-container mt-5 pt-5  pb-5">
      <div className="container mt-5 ">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card pizza-slice text-white bg-danger mb-4">
              <div
                className="card-body p-4 text-center "
                style={{
                  backgroundImage: `url(${MainTopLeft})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <h5 className="font-handwriting  text-danger">FRESH INGREDIENTS</h5>
                <h3 className='text-transparent'>TASTY & CRUSTY</h3>
                <p className="font-weight-bold   text-transparent">Ready to serve hot at your doorstep.</p>
                <Link to="/Menu">
                  <button className="btn ord-btn-color">Order Now</button>
                </Link>
              </div>
            </div>
            <div className="card pizza-slice bg-warning mb-4">
              <div className="card-body p-4">
                <h5 className="font-handwriting text-danger">WHAT OUR CUSTOMERS SAY</h5>
                <p>
                  “Absolutely love the crispy crust and fresh toppings. A must-try for pizza lovers!” - Jane Doe
                </p>
              </div>
            </div>
            <div className="card pizza-slice text-white bg-danger">
              <div className="card-body p-4">
                <h5 className="font-handwriting">EXPLORE OUR MENU</h5>
                <p>Discover a variety of toppings and styles. Perfect for any taste or occasion!</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              {[
                {
                  title: 'Quick Delivery',
                  text: 'Pizza delivered fresh and hot within 30 minutes.',
                },
                {
                  title: 'Party Orders',
                  text: 'Special discounts on large orders for your celebrations!',
                },
                {
                  title: 'Loyalty Rewards',
                  text: 'Earn points with every order and get rewards!',
                },
                {
                  title: 'Nutrition Info',
                  text: 'Detailed calorie and nutritional information available.',
                },
              ].map((item, index) => (
                <div key={index} className="col-md-12 mb-4">
                  <div className={`card shadow-lg pizza-slice ${index % 2 === 0 ? 'bg-warning' : 'bg-info'}`}>
                    <div className="card-body text-center">
                      <h5 className="card-title font-handwriting text-danger">{item.title}</h5>
                      <p className="card-text">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
