import React from 'react';

function About() {
  return (
    <div className="container py-5 my-5 d-flex justify-content-center">
      <div className="card w-100 p-5">
        <h1 className="text-center font-weight-bold font-bebas">ABOUT</h1>
        <div className="card-body">
          <h5 className="mb-2 card-header bg-danger text-white font-bebas">
            Who we are
          </h5>
          <p className="card-text mt-3">
            Topizza is a pizza shop and online pizza delivery service with many chains in various cities. We use only organic ingredients for all our pizzas and have been awarded one of the best pizza chains in the community. Our organic ingredients come directly from our approved suppliers who only sell organic products.
          </p>
          <h5 className="mt-5 mb-2 card-header bg-danger text-white font-bebas">
            Where we are
          </h5>
          <p className="card-text mt-3">
            We have 10 pizza stores throughout the town, all situated in main squares and train stations. All our branches are strategically located to serve the whole town, ensuring delivery within 30 minutes to any house in the area.
          </p>
          <h5 className="mt-5 mb-2 card-header bg-danger text-white font-bebas">
            History
          </h5>
          <p className="card-text mt-3">
            Topizza was started by RUS and SS in 2015 as a small pizza shop and delivery service. Within five years, we have expanded to 10 shops in the town and plan to open 3 new shops by the end of this year to continue serving healthy and organic food to the locals.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
