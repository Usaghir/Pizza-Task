const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db/db');
const PORT = process.env.PORT || 5000;
const path = require('path');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
require('dotenv').config();

//Middleware
app.use(cors());
app.use(express.json()); //req.body

//view engine setup
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

//Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//app.use(express.static(path.join(__dirname, 'client/build')));
//for Server Static content
if (process.env.NODE_ENV === 'production') {
  //server static content.
  // npm run build.
  app.use(express.static(path.join(__dirname, 'client/build')));
}

//Routes

//create an order

app.post('/api/order', async (req, res) => {
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
      ]
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
        ]
      );
    });
    res
      .status(200)
      .json({ status: 'success', data: { cus: customers, ord: orders } });
  } catch (err) {
    console.error(err.message);
  }
});

//get email

app.get('/api/form', async (req, res) => {
  try {
    res.send('hello');
  } catch (err) {
    console.error(err.message);
  }
});

app.post('/api/send', async (req, res) => {
  try {
    // console.log(req.body);
    res.send('hello');

    const sentData = `
      <h3>Sender Details</h3>
      <ul>  
      <li>First Name: ${req.body.first_name}</li>
      <li>Last Name: ${req.body.last_name}</li>
      <li>Phone: ${req.body.phone}</li>
      <li>Email: ${req.body.email}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>`;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"Email from ${process.env.EMAIL_USER} account" <${process.env.EMAIL_USER}>`, // sender address
      to: 'topizza@toptechsol.com', // list of receivers
      subject: 'New message from Topizza', // Subject line
      text: 'Hello world?', // plain text body
      html: `<b>${sentData}</b>`, // html body
    });

    //console.log('Message sent: %s', info.messageId);
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  } catch (err) {
    console.error(err.message);
  }
});
// get all orders for admin in future use.
app.get('/api/order', async (req, res) => {
  try {
    const allOrd = await pool.query(
      'select * from orders join pizza on orders.order_id = pizza.order_id '
    );
    res.json(allOrd.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get customers
app.get('/api/order/:id', async (req, res) => {
  try {
    const { id } = req.params;
    //console.log(typeof id);
    const ord = await pool.query(
      'SELECT * FROM orders where orders.email = $1',
      [id]
    );
    res.json(ord.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get pizzas
app.get('/api/pizza/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const ord = await pool.query(
      'SELECT * FROM orders join pizza on orders.email = $1 and orders.order_id = pizza.order_id',
      [id]
    );
    res.json(ord.rows);
  } catch (err) {
    console.error(err.message);
  }
});
// update an order fof future use.
app.put('/api/order/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateOrd = await pool.query(
      'UPDATE customer SET description  = $1 WHERE customer_id = $2',
      [description, id]
    );
    res.json('order was updated');
  } catch (err) {
    console.error(err.message);
  }
});

// Delete an order for future use.
app.delete('/api/order/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteOrd = await pool.query(
      'DELETE FROM customer WHERE customer_id  = $1',
      [id]
    );
    res.json('order was deleted');
  } catch (err) {
    console.error(err.message);
  }
});

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client/build/index.html'));
// });

app.listen(PORT, () => {
  //console.log(`server has started on port ${PORT}`);
});
