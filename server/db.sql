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
  other_info VARCHAR(50)
);

CREATE TABLE pizza
(
  pizza_id SERIAL PRIMARY KEY,
  pizza_name VARCHAR(20),
  pizza_image VARCHAR(255),
  pizza_description VARCHAR(255),
  pizza_quantity INTEGER,
  customer_ref
    INTEGER REFERENCES orders
  (order_id)
);

