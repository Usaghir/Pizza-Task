CREATE DATABASE pizzatask;

CREATE TABLE orders
(
  order_id SERIAL PRIMARY KEY,
  first_name VARCHAR(20),
  last_name VARCHAR(20),
  email VARCHAR(50),
  phone VARCHAR(20),
  address VARCHAR(50),
  city VARCHAR(20),
  post_code VARCHAR(20),
  other_info VARCHAR(50),
  total_price NUMERIC (10, 2),
  total_qty INTEGER(50),
  order_date VARCHAR(50),
);

CREATE TABLE pizza
(
  pizza_id SERIAL PRIMARY KEY,
  pizza_name VARCHAR(20),
  pizza_price NUMERIC (10, 2),
  pizza_image VARCHAR(255),
  pizza_description VARCHAR(255),
  pizza_quantity INTEGER,
  order_id
    INTEGER REFERENCES orders
  (order_id)
);


{
  const Pool = require('pg').Pool;
require('dotenv').config;

// const devConfig = {
//   user: process.env.PG_user,
//   password: process.env.PG_PASSWORD,
//   host: process.env.PG_HOST,
//   port: process.env.PG_PORT,
//   database: process.env.PG_DATABASE,
// };

const devConfig = `postgresql://${process.env.PG_user}:${process.env.PG_PASSWORD}:${process.env.PG_HOST}:${process.env.PG_HOST}:${process.env.PG_PORT}:${process.env.PG_DATABASE}`;

const proConfig = process.env.DATABASE_URL; // Heroku addon

// const proConfig = {
//   connectionString: process.env.DATABASE_URL, // Heroku addon
// };

const pool = new Pool({
  connectionString: process.env.NODE_ENV === 'production' ? proConfig : devConfig,
});

module.exports = pool;

}