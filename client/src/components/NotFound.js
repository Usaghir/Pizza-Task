import React from 'react';

function NotFound() {
  return (
    <div className="card mb-0 pt-5 mt-5 pb-5 justify-content-between align-items-center ">
      <div className="card  mb-0 pt-3 mt-5 center" style={{ background: '#D2D4D3' }}>
        <div className="card-body">
          <h5 className="card-title bold-text mb-5 font-bebas">Thanks for visiting TopPizza </h5>
          <p className="card-text">
            Thid page is empty so please go to main page by clicking the logo on the top left to
            select the pizzas.
          </p>
          <p className="card-text"></p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
