import React, { useState } from 'react';
import axios from 'axios';
import './OrderHistory.css';

const OrderHistory = () => {
  const [email, setEmail] = useState('');
  const [pizzas, setPizzas] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [submitMessage, setSubmitMessage] = useState(false);

  const changeHandler = (e) => {
    setEmail(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    getPizzas();
    getCustomers();
  };

  const getPizzas = async () => {
    try {
      const response = await axios.get(`/api/pizza/${email}`);
      setPizzas(response.data);
    } catch (error) {
      console.error('Error fetching pizzas:', error);
    }
  };

  const getCustomers = async () => {
    try {
      const response = await axios.get(`/api/order/${email}`);
      setCustomers(response.data);
      setSubmitMessage(true);
      setEmail('');
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };

  return (
    <div className='container mt-5 pt-5'>
      <div className='row justify-content-center my-5'>
        <div className='col-md-8'>
          <form className='card p-4' onSubmit={submitHandler}>
            <h2 className='text-center mb-4'>Order History</h2>
            <div className='form-group'>
              <input
                type='email'
                className='form-control'
                placeholder='Enter your email'
                value={email}
                onChange={changeHandler}
                required
              />
            </div>
            {submitMessage && (
              <div className='alert alert-info'>
                You can see all your order invoices below.
              </div>
            )}
            <button type='submit' className='btn btn-col w-100'>
              Submit
            </button>
          </form>
        </div>
      </div>

      {customers.length > 0 && (
        <div className='row mt-5'>
          {customers.map((customer, c_index) => (
            <div key={c_index} className='col-md-12 mb-4'>
              <div className='card'>
                <div className='card-header bg-danger text-white'>
                  <div className='d-flex justify-content-between'>
                    <span>Invoice #ToP00{customer.order_id}</span>
                    <span>{customer.order_date}</span>
                  </div>
                </div>
                <div className='card-body'>
                  <div className='row mb-4'>
                    <div className='col-md-6'>
                      <h5>From:</h5>
                      <p>ToPizza AB</p>
                      <p>Rörsjöparken 200, 22112, Stockholm, Sweden</p>
                      <p>Email: contact@Topizza.com</p>
                      <p>Phone: +46 04600000</p>
                    </div>
                    <div className='col-md-6'>
                      <h5>To:</h5>
                      <p>
                        {customer.first_name} {customer.last_name}
                      </p>
                      <p>{customer.address}</p>
                      <p>
                        {customer.post_code}, {customer.city}, Sweden
                      </p>
                      <p>Email: {customer.email}</p>
                      <p>Phone: {customer.phone}</p>
                    </div>
                  </div>
                  <div className='table-responsive'>
                    <table className='table'>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Item</th>
                          <th>Price</th>
                          <th>Qty</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {pizzas
                          .filter(
                            (pizza) => pizza.order_id === customer.order_id
                          )
                          .map((pizza, p_index) => (
                            <tr key={p_index}>
                              <td>{p_index + 1}</td>
                              <td>{pizza.pizza_name}</td>
                              <td>€{pizza.pizza_price}</td>
                              <td>{pizza.pizza_quantity}</td>
                              <td>
                                €
                                {(
                                  pizza.pizza_price * pizza.pizza_quantity
                                ).toFixed(2)}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                  <div className='row'>
                    <div className='col-md-6 offset-md-6'>
                      <table className='table'>
                        <tbody>
                          <tr>
                            <td>Delivery (10%)</td>
                            <td>€{(0.1 * customer.total_price).toFixed(2)}</td>
                          </tr>
                          <tr>
                            <td>VAT (25%)</td>
                            <td>€{(0.25 * customer.total_price).toFixed(2)}</td>
                          </tr>
                          <tr>
                            <td>Total</td>
                            <td>€{(1.35 * customer.total_price).toFixed(2)}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className='card-footer text-center'>
                  <small>
                    Rörsjöparken 200, 22112, Stockholm, Sweden, Email:
                    contact@Topizza.com
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
