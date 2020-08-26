import React from 'react';

function AboutUs() {
  return (
    <div className="container pt-5 mt-5 mb-5 d-flex justify-content-center g-font">
      <div className="card w-100 pt-5 mt-5" style={{ background: '#D2D4D3' }}>
        <h1 className="  font-weight-bold">ABOUT</h1>
        <div className="card-body m-5 ">
          <h5
            className=" mb-2 card-header font-bebas "
            style={{ background: '#474853', color: '#FAFFFF' }}
          >
            Who we are
          </h5>

          <p className="card-text">
            Topizza is a pizza shop and online pizza delivery shop and with many chain with in many
            cities. We just use organic ingredients to with app for all our pizzas and we were
            awarded one of the best pizza chain in whole community our all organic ingredients come
            directly from our approved suppliers who just sell the organic products.
          </p>
          <h5
            className=" mt-5 mb-2 card-header font-bebas"
            style={{ background: '#474853', color: '#FAFFFF' }}
          >
            Where we are
          </h5>

          <p className="card-text">
            We have 10 pizza stores through out the town and all the are situated in the main
            squares and train stations. All our branches are situated such a way that we we can
            serve whole town and it talks just 30 minutes reaching at any house in the town.
          </p>
          <h5
            className=" mt-5 mb-2 card-header font-bebas"
            style={{ background: '#474853', color: '#FAFFFF' }}
          >
            History
          </h5>

          <p className="card-text">
            Topizza was started by RUS and SS in 2015 as a small pizza shop and delivery shop but
            with in five years we have 10 shops in the town and planning to start 3 new shops at the
            end of this year to serve healthy and organic food to the locals.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
