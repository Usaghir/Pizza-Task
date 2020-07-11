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
    } = req.body;

    const customers = await pool.query(
      'INSERT INTO orders (first_name, last_name, email, phone, address, city, post_code, other_info) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *',
      [first_name, last_name, email, phone, address, city, post_code, other_info],
    );
    console.log(customers.json);

    const orders = await orders_info.map((order) => {
      return pool.query(
        'INSERT INTO pizza (pizza_name, pizza_image, pizza_description,pizza_quantity) VALUES ($1,$2,$3,$4) RETURNING *',
        [order.name, order.image, order.description, order.qty],
      );
    });
    res.status(200).json({ status: 'success', data: { cus: customers, ord: orders } });
  } catch (err) {
    console.error(err.message);
  }
});

// get all orders.
app.get('/order', async (req, res) => {
  try {
    const allOrd = await pool.query('SELECT * FROM customer');
    res.json(allOrd.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get an order
app.get('/order/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const ord = await pool.query('SELECT * FROM customer WHERE customer_id = $1', [id]);
    res.json(ord.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// update an order
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

// Delete an order
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
