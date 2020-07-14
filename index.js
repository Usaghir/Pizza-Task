const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

//middleware
app.use(cors());
app.use(express.json()); //req.body

//Routes

//create an order

app.post('/order', async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      phone,
      address,
      city,
      post_code,
      other_info,
      orders_info,
      total_price,
      total_qty,
      order_date,
    } = req.body;

    const customers = await pool.query(
      'INSERT INTO orders (first_name, last_name, email, phone, address, city, post_code, other_info,total_price,total_qty,order_date) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *',
      [
        first_name,
        last_name,
        email,
        phone,
        address,
        city,
        post_code,
        other_info,
        total_price,
        total_qty,
        order_date,
      ],
    );

    const orders = await orders_info.map((order) => {
      return pool.query(
        'INSERT INTO pizza (pizza_name,pizza_price, pizza_image, pizza_description,pizza_quantity, order_id) VALUES ($1,$2,$3,$4,$5, $6) RETURNING *',
        [
          order.name,
          order.price,
          order.image,
          order.description,
          order.qty,
          customers.rows[0].order_id,
        ],
      );
    });
    res.status(200).json({ status: 'success', data: { cus: customers, ord: orders } });
  } catch (err) {
    console.error(err.message);
  }
});

// get all orders for admin in future use.
app.get('/order', async (req, res) => {
  try {
    const allOrd = await pool.query(
      'select * from orders join pizza on orders.order_id = pizza.order_id ',
    );
    res.json(allOrd.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get customers
app.get('/order/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const ord = await pool.query('SELECT * FROM orders where orders.email = $1', [id]);
    res.json(ord.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get pizzas
app.get('/pizza/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const ord = await pool.query(
      'SELECT * FROM orders join pizza on orders.email = $1 and orders.order_id = pizza.order_id',
      [id],
    );
    res.json(ord.rows);
  } catch (err) {
    console.error(err.message);
  }
});
// update an order fof future use.
app.put('/order/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateOrd = await pool.query(
      'UPDATE customer SET description  = $1 WHERE customer_id = $2',
      [description, id],
    );
    res.json('order was updated');
  } catch (err) {
    console.error(err.message);
  }
});

// Delete an order for future use.
app.delete('/order/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteOrd = await pool.query('DELETE FROM customer WHERE customer_id  = $1', [id]);
    res.json('order was deleted');
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log('server has started on port 5000');
});