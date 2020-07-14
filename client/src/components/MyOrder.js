import React from 'react';
import axios from 'axios';
import './MyOrder.css';

class MyOrder extends React.Component {
  constructor() {
    super();
    this.state = {
      date:
        new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
      email_para: '',
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
      .get(`http://localhost:5000/pizza/${this.state.email_para}`)
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
      .get(`http://localhost:5000/order/${this.state.email_para}`)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
    this.setState({ customers: data.data });
  }
  render() {
    const { pizzas, customers } = this.state;
    return (
      <div className="mt-5 pt-5 ">
        <div className=" center offset-xl-2 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 padding">
          <form className=" center" onSubmit={this.submitHandler}>
            <div className="form-group">
              <label>
                Please enter the correct email address to see the receipt of your orders:
              </label>
              <input
                type="text"
                className="center form-control"
                id="inputAddress"
                placeholder=" abcde@fghi.com"
                value={this.state.email_para}
                onChange={this.changeHandler}
                name="other"
                required
              ></input>
            </div>
            <button type="submit" className="btn btn-default">
              Submit
            </button>
          </form>
        </div>
        <ul>
          {customers &&
            customers.map((customer, c_index) => {
              const totalPrice = customer.total_price;
              return (
                <li key={c_index}>
                  <div className="offset-xl-2 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 padding">
                    <div className="card">
                      <div className="card-header p-4">
                        <a className="pt-2 d-inline-block" href="index.html" data-abc="true">
                          <small> {new Date().getFullYear()}, All right reserved by ToPizza </small>
                        </a>
                        <div className="float-right">
                          <h3 className="mb-0">Invoice #ToP00{customer.order_id}</h3>
                          <p>{customer.order_date}</p>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="row mb-4">
                          <div className="col-sm-6">
                            <h5 className="mb-3">From:</h5>
                            <h4 className="text-dark mb-1">ToPizza AB</h4>
                            <div>Rörsjögatan 18,</div>
                            <div>21137, Malmö, Sweden</div>
                            <div>Email: contact@Topizza.com</div>
                            <div>Phone: +46 04600000 </div>
                          </div>
                          <div className="col-sm-6 ">
                            <h5 className="mb-3">To:</h5>
                            <h4 className="text-dark mb-1">
                              {customer.first_name + ' ' + customer.last_name}
                            </h4>
                            <div>{customer.address}</div>
                            <div>{customer.post_code + ', ' + customer.city + ', '}Sweden</div>
                            <div>Email: {customer.email}</div>
                            <div>Phone: {customer.phone}</div>
                          </div>
                        </div>
                        <div className="table-responsive-sm">
                          <table className="table table-striped">
                            <thead>
                              <tr>
                                <th className="center">#</th>
                                <th className="left">Item</th>
                                <th className="right">Price</th>
                                <th className="center">Qty</th>
                                <th className="right">Total</th>
                              </tr>
                            </thead>
                            {pizzas &&
                              pizzas.map((pizza, p_index) => {
                                if (customer.order_id === pizza.order_id)
                                  return (
                                    <tbody key={p_index}>
                                      <tr>
                                        <td className="center">{p_index + 1}</td>
                                        <td className="left strong">{pizza.pizza_name}</td>
                                        <td className="right">€{pizza.pizza_price}</td>
                                        <td className="center">{pizza.pizza_quantity}</td>
                                        <td className="right">
                                          €{pizza.pizza_price * pizza.pizza_quantity}
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
                                    <strong className="text-dark">Total</strong>
                                  </td>
                                  <td className="right">€{totalPrice}</td>
                                </tr>
                                <tr>
                                  <td className="left">
                                    <strong className="text-dark">Delivery (10%)</strong>
                                  </td>
                                  <td className="right">€{((10 / 100) * totalPrice).toFixed(2)}</td>
                                </tr>
                                <tr>
                                  <td className="left">
                                    <strong className="text-dark">VAT (25%)</strong>
                                  </td>
                                  <td className="right">
                                    €
                                    {(
                                      ((10 / 100) * totalPrice * 1 + totalPrice * 1) *
                                      1 *
                                      (25 / 100)
                                    ).toFixed(2)}
                                  </td>
                                </tr>
                                <tr>
                                  <td className="left">
                                    <strong className="text-dark">Total</strong>
                                  </td>
                                  <td className="right">
                                    <strong className="text-dark">
                                      €
                                      {1 *
                                        (
                                          ((10 / 100) * totalPrice * 1 + totalPrice * 1) *
                                            1 *
                                            (25 / 100) +
                                          totalPrice * 1
                                        ).toFixed(2)}
                                    </strong>
                                  </td>
                                  <td className="right">
                                    <strong className="text-dark">
                                      $
                                      {(
                                        1.13 *
                                        (((10 / 100) * totalPrice * 1 + totalPrice * 1) *
                                          1 *
                                          (25 / 100) +
                                          totalPrice * 1)
                                      ).toFixed(2)}
                                    </strong>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer center bg-white">
                        <small className="mb-0 center">
                          Rörsjögatan 18, 21137, Malmö, Sweden, Email: contact@Topizza.com,Email:
                          contact@Topizza.com
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

export default MyOrder;
