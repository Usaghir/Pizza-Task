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
    const { description } = req.body;
    const newOrd = await pool.query(
      'INSERT INTO pizzaorder (description) VALUES ($1) RETURNING *',
      [description],
    );
    res.json(newOrd);
  } catch (err) {
    console.error(err.message);
  }
});

// get all orders.
app.get('/order', async (req, res) => {
  try {
    const allOrd = await pool.query('SELECT * FROM pizzaorder');
    res.json(allOrd.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get an order
app.get('/order/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const ord = await pool.query('SELECT * FROM pizzaorder WHERE pizzaorder_id = $1', [id]);
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
      'UPDATE pizzaorder SET description  = $1 WHERE pizzaorder_id = $2',
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
    const deleteOrd = await pool.query('DELETE FROM pizzaorder WHERE pizzaorder_id  = $1', [id]);
    res.json('order was deleted');
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log('server has started on port 5000');
});
