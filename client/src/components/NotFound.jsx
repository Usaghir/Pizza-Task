import React from 'react';

function NotFound() {
  return (
    <div className="card mb-0 pt-5 mt-5 pb-5 justify-content-between align-items-center ">
      <div className="card mb-4 pt-3 mt-5 center" style={{ background: '#D2D4D3' }}>
        <div className="card-body m-5 ">
          <h5
            className=" mb-2 card-header font-bebas "
            style={{ background: '#474853', color: '#FFFFFF' }}
          >
            Thanks for visiting Topizza
          </h5>

          <p className=" mt-5 card-text">
            Please note this page is empty so kindly choose any of the option from the top
            navigation bar.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
