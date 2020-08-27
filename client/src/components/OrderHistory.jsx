import React from 'react';
import axios from 'axios';
import './OrderHistory.css';

class OrderHistory extends React.Component {
  constructor() {
    super();
    this.state = {
      date:
        new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
      email_para: '',
      submitMessage: false,
    };
    this.getPizzas = this.getPizzas.bind(this);
    this.getCustomers = this.getCustomers.bind(this);
  }
  changeHandler = (e) => {
    this.setState({ email_para: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    this.getPizzas();
    this.getCustomers();
  };
  async getPizzas() {
    let data = await axios
      .get(`/pizza/${this.state.email_para}`)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });

    this.setState({ pizzas: data.data });
  }
  async getCustomers() {
    let data = await axios
      .get(`/order/${this.state.email_para}`)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
    this.setState({ customers: data.data });
    this.setState({ email_para: '' });
    this.setState({ submitMessage: true });
  }
  render() {
    const { pizzas, customers } = this.state;
    return (
      <div className="mt-5 pt-5 mb-5 pb-5">
        <div className="mt-5 pt-5 center offset-xl-2 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 padding">
          <form className=" center" onSubmit={this.submitHandler}>
            <div className="form-group">
              <input
                type="text"
                className="center form-control "
                style={{ backgroundColor: '#474853', color: '#FFFFFF', boxSizing: 'border-box' }}
                id="inputAddress"
                placeholder=" Please enter the correct email address to see the receipt of your orders:"
                value={this.state.email_para}
                onChange={this.changeHandler}
                name="other"
                required
              ></input>
            </div>
            {this.state.submitMessage ? (
              <div className="form-group ">
                <div
                  className="form-control  border-0 pl-3 "
                  style={{ background: '#86b3d1', boxSizing: 'border-box' }}
                >
                  You can see all your order invoices below.
                </div>
              </div>
            ) : (
              ''
            )}
            <div>
              <button
                type="submit"
                className="btn font-bebas mb-5"
                style={{ background: '#318fb5' }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <ul>
          {customers &&
            customers.map((customer, c_index) => {
              const totalPrice = customer.total_price;
              return (
                <li key={c_index}>
                  <div className="offset-xl-2 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 padding mt-5">
                    <div className="card" style={{ background: '#D2D4D3' }}>
                      <div
                        className="card-header p-4"
                        style={{ background: '#474853', color: '#FFFFFF' }}
                      >
                        <a className="pt-2 d-inline-block" href="index.html" data-abc="true">
                          <small> {new Date().getFullYear()}, All right reserved by ToPizza </small>
                        </a>
                        <div className="float-right">
                          <h3 className="mb-0 ">Invoice #ToP00{customer.order_id}</h3>
                          <p>{customer.order_date}</p>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="row mb-4">
                          <div className="col-sm-6">
                            <h5 className="mb-3">From:</h5>
                            <h4 className="text-dark mb-1 font-bebas">ToPizza AB</h4>
                            <div>Rörsjöparken 200,</div>
                            <div>22112, Stockholm, Sweden</div>
                            <div>Email: contact@Topizza.com</div>
                            <div>Phone: +46 04600000 </div>
                          </div>
                          <div className="col-sm-6 ">
                            <h5 className="mb-3">To:</h5>
                            <h4 className="text-dark mb-1 font-bebas">
                              {customer.first_name + ' ' + customer.last_name}
                            </h4>
                            <div>{customer.address}</div>
                            <div>{customer.post_code + ', ' + customer.city + ', '}Sweden</div>
                            <div>Email: {customer.email}</div>
                            <div>Phone: {customer.phone}</div>
                          </div>
                        </div>
                        <div className="table-responsive-sm">
                          <table className="table font-weight-bold">
                            <thead>
                              <tr>
                                <th className="center font-weight-bold border-0">#</th>
                                <th className="left  font-weight-bold border-0">Item</th>
                                <th className="right  font-weight-bold border-0">Price</th>
                                <th className="center  font-weight-bold border-0">Qty</th>
                                <th className="right  font-weight-bold border-0">Total</th>
                              </tr>
                            </thead>
                            {pizzas &&
                              pizzas.map((pizza, p_index) => {
                                if (customer.order_id === pizza.order_id)
                                  return (
                                    <tbody
                                      key={p_index}
                                      style={{ background: '#474853', color: '#FFFFFF' }}
                                    >
                                      <tr>
                                        <td className="center border-0">{p_index + 1}</td>
                                        <td className="left strong border-0 font-bebas">
                                          {pizza.pizza_name}
                                        </td>
                                        <td className="right border-0">€{pizza.pizza_price}</td>
                                        <td className="center border-0">{pizza.pizza_quantity}</td>
                                        <td className="right border-0">
                                          €{(pizza.pizza_price * pizza.pizza_quantity).toFixed(2)}
                                        </td>
                                      </tr>
                                    </tbody>
                                  );
                                return '';
                              })}
                          </table>
                        </div>
                        <div className="row">
                          <div className="col-lg-4 col-sm-5"></div>
                          <div className="col-lg-4 col-sm-5 ml-auto">
                            <table className="table table-clear">
                              <tbody>
                                <tr>
                                  <td className="left">
                                    <strong className="text-dark font-weight-bold font-bebas">
                                      Delivery (10%)
                                    </strong>
                                  </td>
                                  <td className="right">€{(0.1 * totalPrice).toFixed(2)}</td>
                                </tr>
                                <tr>
                                  <td className="left">
                                    <strong className="text-dark font-weight-bold font-bebas">
                                      VAT (25%)
                                    </strong>
                                  </td>
                                  <td className="right">€{(0.275 * totalPrice).toFixed(2)}</td>
                                </tr>
                                <tr>
                                  <td className="left">
                                    <strong className="text-dark font-weight-bold font-bebas">
                                      Total
                                    </strong>
                                  </td>
                                  <td className="right">
                                    <strong className="text-dark">
                                      €{(1.375 * totalPrice).toFixed(2)}
                                    </strong>
                                  </td>
                                  <td className="right">
                                    <strong className="text-dark">
                                      ${(1.16 * 1.375 * totalPrice).toFixed(2)}
                                    </strong>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer center" style={{ background: '#318fb5' }}>
                        <small className="mb-0 center">
                          Rörsjöparken 200, 22112, Stockholm, Sweden, Email: contact@Topizza.com
                        </small>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default OrderHistory;
